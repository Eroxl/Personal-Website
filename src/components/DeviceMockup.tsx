import Image from "next/image";

interface DeviceGroupProps {
  ipadSrc: string;
  ipadAlt: string;
  iphoneSrc?: string;
  iphoneAlt?: string;
  iphoneSide?: "left" | "right";
  variant?: "tablet" | "browser";
}

export default function DeviceGroup({
  ipadSrc,
  ipadAlt,
  iphoneSrc,
  iphoneAlt,
  iphoneSide = "right",
  variant = "tablet",
}: DeviceGroupProps) {
  if (variant === "browser") {
    return (
      <div className="w-85 sm:w-105">
        <div className="rounded-lg border border-white/20 bg-black/20 shadow-xl overflow-hidden">
          {/* Title bar */}
          <div className="flex items-center gap-1.5 border-b border-white/20 px-3 py-2">
            <div className="h-2 w-2 rounded-full bg-nord11" />
            <div className="h-2 w-2 rounded-full bg-nord13" />
            <div className="h-2 w-2 rounded-full bg-nord14" />
          </div>

          <div className="h-48 overflow-hidden bg-black/30 sm:h-56">
            <Image
              src={ipadSrc}
              alt={ipadAlt}
              width={340}
              height={210}
              className="w-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* iPad */}
      <div className="w-85 sm:w-105">
        <div className="rounded-[20px] border-[6px] border-white/20 bg-black/20 p-2 shadow-xl">
          <div className="absolute left-1/2 top-4 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-white/20" />

          <div className="h-60 overflow-hidden rounded-xl bg-black/30 sm:h-72">
            <Image
              src={ipadSrc}
              alt={ipadAlt}
              width={408}
              height={290}
              className="w-full object-cover object-top"
            />
          </div>
        </div>
      </div>

      {/* iPhone overlay */}
      {iphoneSrc && (
        <div className={`absolute -bottom-8 w-30 sm:w-37.5 ${
          iphoneSide === "left"
            ? "-left-10 sm:-left-14"
            : "-right-10 sm:-right-14"
        }`}>
          <div className="rounded-3xl border-4 border-white/20 bg-black/20 p-1.5 shadow-xl">
            <div className="absolute left-1/2 top-2 h-3 w-14 -translate-x-1/2 rounded-full bg-white/15" />

            <div className="overflow-hidden rounded-[18px] bg-black/30">
              <Image
                src={iphoneSrc}
                alt={iphoneAlt ?? "iPhone screenshot"}
                width={142}
                height={308}
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
