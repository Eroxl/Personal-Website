import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 flex w-full items-center justify-between px-8 py-5" data-is-bounding="true">
      <Link
        href="/"
        className="font-mono text-sm font-semibold text-nord13 transition-colors hover:text-nord6"
      >
        Evan
      </Link>

      <nav className="flex gap-6">
        <Link
          href="/"
          className="font-mono text-sm text-nord6/80 transition-colors hover:text-nord6"
        >
          Home
        </Link>

        <Link
          href="/projects"
          className="font-mono text-sm text-nord6/80 transition-colors hover:text-nord6"
        >
          Portfolio
        </Link>

        <Link
          href="https://eroxl.github.io/Notes/"
          className="font-mono text-sm text-nord6/80 transition-colors hover:text-nord6"
          target="_blank"
          rel="noopener noreferrer"
        >
          Notes
        </Link>

        <Link
          href="/blog"
          className="font-mono text-sm text-nord6/80 transition-colors hover:text-nord6"
        >
          Blog
        </Link>
      </nav>
    </header>
  );
}
