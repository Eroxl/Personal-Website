---
title: "Arbitrary-Precision Arithmetic in TypeScript's Type System"
description: "How I implemented big integer addition and multiplication entirely at compile time no runtime code, just types."
date: "2024-03-15"
tags: ["TypeScript", "Types", "Type System"]
---

There's a category of TypeScript that stops being about writing safer software and starts being about asking a stranger question: *how far can you push a type checker before it becomes a programming language?*

This post is about that question. Specifically, I want to walk through a type-level implementation of arbitrary-precision integer arithmetic addition and multiplication on numbers of any size, computed entirely at compile time, with no runtime code whatsoever.

```ts
type Result = Multiply<"99999999999999", "88888888888888">;
// "8888888888888712345679012346"
```

That's not a string you wrote. That's a string the TypeScript compiler *computed for you* during type-checking.

Let's build up to how that works.

---

## The Core Trick

TypeScript can't do arithmetic natively in the type system you can't write `type X = 1 + 2` and get `3`. But there's an old trick: you can represent numbers as the lengths of tuples, and use tuple spreading as addition.

```ts
type OnePlusTwo = [...[1], ...[1, 1]]["length"]; // 3
```

This is the bedrock. The type system *can* compute `["length"]` on a concrete tuple, and it *can* spread tuples together. So by encoding `n` as a tuple of length `n`, we get addition for free.

To go from a number to a tuple of that length, we recurse:

```ts
type CreateArrayOfLength<
  Length extends number,
  Value,
  Acc extends any[] = [],
> = Length extends Acc["length"]
  ? Acc
  : CreateArrayOfLength<Length, Value, [Value, ...Acc]>;
```

This builds up `Acc` by prepending `Value` until `Acc["length"]` equals `Length`. The result is a tuple of `Length` elements, each being `Value`. We'll use `1` as the element value when we only care about length.

---

## String-Level Infrastructure

The numbers we're computing with are big too big to be represented as TypeScript `number` literals (which cap out around 999 for use in recursive types). So our "numbers" are actually string literals like `"12345"`. That means we need to operate on them character by character.

### Measuring a String

```ts
type LengthOfString<
  S extends string,
  Acc extends string[] = [],
> = S extends `${infer char}${infer rest}`
  ? LengthOfString<rest, [char, ...Acc]>
  : Acc["length"];
```

We peel one character off the front on each step and push it into an accumulator tuple. When the string is exhausted, `Acc["length"]` is the character count. We use a `string[]` accumulator (not `unknown[]`) so TS knows it's a string tuple though here only the length matters.

### Reversing a String

Addition is easiest to implement from the least-significant digit. Since we write numbers left-to-right (most significant first), we often want to reverse them before processing.

```ts
type ReverseString<Str extends string> =
  Str extends `${infer char}${infer rest}`
    ? `${ReverseString<rest>}${char}`
    : "";
```

Standard recursive pattern: peel the head, recurse on the tail, and append the head at the *end* of the result.

### Padding with Leading Zeros

When adding two numbers of different lengths, we need to pad the shorter one so they align digit-by-digit:

```ts
type PadLeft<Str extends string, Length extends number> =
  Length extends LengthOfString<Str>
    ? Str
    : PadLeft<`0${Str}`, Length>;
```

We prepend `"0"` until the string is long enough. This only pads it never truncates, so it's safe to call with a `Length` that's already smaller.

---

## Single-Digit Arithmetic

### Adding Two Digits (with Carry)

```ts
type AddDigit<
  Num1 extends number,
  Num2 extends number,
  Carry extends number = 0
> = [
  CreateArrayOfLength<Num1, 1>,
  CreateArrayOfLength<Num2, 1>,
  CreateArrayOfLength<Carry, 1>,
] extends [
  infer Arr1 extends unknown[],
  infer Arr2 extends unknown[],
  infer Arr3 extends unknown[]
]
  ? [...Arr1, ...Arr2, ...Arr3]["length"]
  : never;
```

This converts each digit to its array representation, then spreads them all together. The result's `["length"]` is `Num1 + Num2 + Carry`. Since `Num1` and `Num2` are single digits (0–9) and `Carry` is 0 or 1, the result is at most 19 well within TypeScript's recursive limits.

The pattern of destructuring into `infer` variables before using them is a common trick to force TypeScript to narrow the types correctly before spreading.

### Multiplying Two Digits

```ts
type _MultiplyDigit<
  Num1 extends number,
  Num2 extends number,
  Acc extends unknown[] = [],
> = Acc["length"] extends Num2
  ? []
  : CreateArrayOfLength<Num1, 1> extends infer Arr extends unknown[]
    ? [...Arr, ..._MultiplyDigit<Num1, Num2, [1, ...Acc]>]
    : never;

type MultiplyDigit<Num1 extends number, Num2 extends number> =
  _MultiplyDigit<Num1, Num2> extends infer Arr extends unknown[]
    ? Arr["length"]
    : never;
```

This is repeated addition: add `Num1` to itself `Num2` times by concatenating arrays. `_MultiplyDigit` counts up via `Acc`, and each recursive step prepends a fresh `CreateArrayOfLength<Num1, 1>` to the result. When `Acc["length"]` reaches `Num2`, it returns `[]` (the identity for spreading).

The result is a tuple of length `Num1 * Num2`. Single-digit × single-digit is at most 81 still fine.

---

## Multi-Digit Multiplication

```ts
type MultipleSingleDigit<
  Num1 extends string,
  Num2 extends string,
  Acc extends string = "",
  Carry extends number = 0,
> = ReverseString<Num1> extends `${infer First extends number}${infer Rest}`
  ? AddDigit<MultiplyDigit<First, StringToNumber<Num2>>, Carry> extends infer Product extends number
    ? StringToArray<ReverseString<`${Product}`>> extends [
        infer Digit extends string,
        infer NewCarry extends string,
      ]
      ? MultipleSingleDigit<ReverseString<Rest>, Num2, `${Digit}${Acc}`, StringToNumber<NewCarry>>
      : MultipleSingleDigit<ReverseString<Rest>, Num2, `${Product}${Acc}`>
    : never
  : Carry extends 0
    ? Acc
    : `${Carry}${Acc}`;
```

This is grade-school long multiplication for a single digit. A few things to unpack:

**We work right-to-left through `Num1`** by reversing it and peeling off the first character at each step. This is the standard trick for digit-by-digit work in the type system.

```StringToArray<ReverseString<`${Product}`>>``` is how we extract the ones digit and carry from a two-digit product. If `Product` is `15`, then ``` `${Product}` ``` is `"15"`, reversing gives `"51"`, and `StringToArray` turns it into `["5", "1"]`. Destructuring gives `Digit = "5"` and `NewCarry = "1"`. If the product is a single digit (< 10), the destructure into `[Digit, NewCarry]` fails, and we take the else branch (no new carry).

**Two helper types** appear here: `StringToArray` and `StringToNumber`:

```ts
type StringToArray<Num extends string> =
  Num extends `${infer First}${infer Rest}`
    ? [First, ...StringToArray<Rest>]
    : [];

type StringToNumber<Str extends string> =
  Str extends `${infer Num extends number}` ? Num : never;
```

`StringToArray` splits a string into an array of single-character strings. `StringToNumber` converts a string literal to a numeric literal type using TS's infer-with-constraint syntax (`infer N extends number`).

---

## Multi-Digit Addition

```ts
type SumFromLeft<
  Num1 extends string,
  Num2 extends string,
  Acc extends string = "",
  Carry extends number = 0,
> = Num1 extends `${infer First1 extends number}${infer Rest1 extends string}`
  ? Num2 extends `${infer First2 extends number}${infer Rest2 extends string}`
    ? AddDigit<First1, First2, Carry> extends infer Sum extends number
      ? StringToArray<`${Sum}`> extends [infer First extends string, ...infer Rest extends string[]]
        ? Rest extends [infer Value extends string]
          ? First extends `${infer FirstNum extends number}`
            ? SumFromLeft<Rest1, Rest2, `${Value}${Acc}`, FirstNum>
            : never
          : SumFromLeft<Rest1, Rest2, `${First}${Acc}`>
        : never
      : never
    : never
  : Carry extends 0
    ? Acc
    : `${Carry}${Acc}`;
```

**Precondition**: both strings must be the same length and already reversed. The name `SumFromLeft` refers to the fact that we consume characters left-to-right but because the inputs are reversed, that means we're processing from the least significant digit first.

Each step peels a digit from both `Num1` and `Num2`, computes `AddDigit<First1, First2, Carry>`, then splits the sum into a carry and a result digit using `StringToArray`.

The carry extraction logic:
- `StringToArray<"${Sum}">` gives either `["d"]` (single digit, no carry) or `["c", "d"]` (two digits, carry `c`, result digit `d`).
- If the array has a second element (`Rest extends [infer Value]`), we have a carry prepend `Value` to `Acc` and continue with carry = `First`.
- Otherwise no carry; prepend the single digit and carry = 0 (default).

When `Num1` is exhausted, if there's a lingering carry, prepend it to `Acc`.

The public-facing `Sum` type wraps this with padding and reversal:

```ts
type Sum<
  A extends string | number | bigint,
  B extends string | number | bigint,
> = `${A}` extends "0"
  ? `${B}`
  : `${B}` extends "0"
    ? `${A}`
    : SumFromLeft<
        ReverseString<`${A}`>,
        ReverseString<PadLeft<`${B}`, LengthOfString<`${A}`>>>
      >;
```

We short-circuit on zero, then reverse both numbers and pad `B` to the length of `A` before delegating to `SumFromLeft`. Note: if `B` is longer than `A`, this won't pad correctly the caller is responsible for passing `A` as the longer number, or you can swap them.

---

## Full Multiplication

```ts
type _Multiply<
  A extends string | number | bigint,
  B extends string | number | bigint,
  Zeroes extends string = "",
> = `${A}` extends "0"
  ? ["0"]
  : `${B}` extends "0"
    ? ["0"]
    : ReverseString<`${B}`> extends `${infer First extends number}${infer Rest extends string}`
      ? [
          MultipleSingleDigit<`${A}${Zeroes}`, `${First}`>,
          ..._Multiply<`${A}`, ReverseString<Rest>, `${Zeroes}0`>,
        ]
      : [];

type Multiply<
  A extends string | number | bigint,
  B extends string | number | bigint
> = SumArray<_Multiply<A, B>>;
```

This is long multiplication in its purest form. For each digit of `B` (from right to left, using `ReverseString`), we:

1. Append `Zeroes` to `A` to shift it left by the appropriate power of 10 `A * 10^i`.
2. Multiply the shifted `A` by the single digit using `MultipleSingleDigit`.
3. Recursively process the remaining digits, extending `Zeroes` by one `"0"`.

The result is a `string[]` a list of partial products. `SumArray` folds that list into a single number string:

```ts
type SumArray<Arr extends string[], Acc extends string = ""> =
  Arr extends [infer First extends string, ...infer Rest extends string[]]
    ? SumFromLeft<
        ReverseString<`${First}`>,
        ReverseString<PadLeft<`${Acc}`, LengthOfString<`${First}`>>>
      > extends infer Product extends string
      ? SumArray<Rest, Product>
      : never
    : Acc;
```

It accumulates the running total in `Acc`, and for each new partial product, calls `SumFromLeft` after reversing and padding to match lengths. Elegantly, the partial products in `_Multiply` are in ascending order of magnitude, so we're summing them from the smallest (ones column) upward.
