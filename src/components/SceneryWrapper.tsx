const DEFAULT_SEED = 12345;

const DEFAULT_QUANTITY = {
    left: 5,
    top: 3,
    right: 5,
    bottom: 3,
}

type SceneryWrapperProps = {
    children: React.ReactNode;
    variant: "full" | "bottom";
    quantity?: {
        left: number;
        top: number;
        right: number;
        bottom: number;
    },
    className?: string;
    noMinScreen?: boolean;

    /**
     * Random offset must be fixed.
     */
    offset: number;
}

const seededRandom = (seedOffset: number) => {
    const x = Math.sin(DEFAULT_SEED + seedOffset) * 10000;
    return x - Math.floor(x);
}

const getRandomWeightedImage = (seedOffset: number) => {
    const rand = seededRandom(seedOffset);
    if (rand < 0.6) return "/scenery/tree0.png";
    if (rand < 0.8) return "/scenery/tree1.png";
    if (rand < 0.85) return "/scenery/tree2.png";
    return "/scenery/rock.png";
}

const Scenery = ({ quantity, offset }: { quantity: number; offset: number }) => {
    return (
        <>
            {Array.from({ length: quantity }).map((_, i) => (
                <img
                    key={i}
                    src={getRandomWeightedImage(i + offset)}
                    className="w-6 h-6 absolute scenery"
                    style={{
                        "--offset-left": `${seededRandom(i + offset) * 100}%`,
                        "--offset-top": `${seededRandom(i + offset + 1000) * 100}%`,
                        transform: `translate(-50%, -50%) scale(${2 + seededRandom(i + offset + 2000)})`,
                    } as any}
                />
            ))}
        </>
    );
}

export default function SceneryWrapper({ children, variant, quantity, offset, className, noMinScreen }: SceneryWrapperProps) {
    return (
        <div className={`relative flex ${noMinScreen || "min-h-screen"} w-full gap-4 ${className || ""}`}>
            {/* Left */}
            <div className="sm:flex flex-col gap-4 flex-1 min-w-0 relative hidden">
                {quantity?.left !== 0 && <Scenery quantity={quantity?.left ?? DEFAULT_QUANTITY.left} offset={offset} />}
            </div>

            {/* Center */}
            <div className="flex flex-col gap-4 flex-2 min-w-0 relative">
                {variant === "full" && <div className="flex-1 relative scenery-wrapper overflow-visible">
                    {quantity?.top !== 0 && <Scenery quantity={quantity?.top ?? DEFAULT_QUANTITY.top} offset={offset + 12} />}  
                </div>}
                <div className="flex-2 justify-center items-center flex flex-col">{children}</div>
                <div className="flex-1 relative scenery-wrapper sm:visible overflow-visible">
                    {quantity?.bottom !== 0 && <Scenery quantity={quantity?.bottom ?? DEFAULT_QUANTITY.bottom} offset={offset + 613} />}
                </div>
            </div>

            {/* Right */}
            <div className="sm:flex flex-col gap-4 flex-1 min-w-0 relative hidden">
                {quantity?.right !== 0 && <Scenery quantity={quantity?.right ?? DEFAULT_QUANTITY.right} offset={offset + 1235} />}
            </div>
        </div>
    );
}