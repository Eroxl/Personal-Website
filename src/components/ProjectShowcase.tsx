import DeviceGroup from "./DeviceMockup";

export interface Project {
  title: string;
  description: string;
  ipadSrc: string;
  iphoneSrc?: string;
  link?: string;
  tags?: string[];
  variant?: "tablet" | "browser";
}

interface ProjectShowcaseProps {
  projects: Project[];
}

export default function ProjectShowcase({ projects }: ProjectShowcaseProps) {
  return (
    <div className="flex flex-col gap-20 sm:gap-40">
      {projects.map((project, index) => {
        const isReversed = index % 2 !== 0;

        return (
          <div
            key={project.title}
            className={`flex flex-col items-center gap-12 lg:flex-row lg:gap-16 ${
              isReversed ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div className="shrink-0">
              <DeviceGroup
                ipadSrc={project.ipadSrc}
                ipadAlt={`${project.title} iPad screenshot`}
                iphoneSrc={project.iphoneSrc}
                iphoneAlt={`${project.title} iPhone screenshot`}
                iphoneSide={isReversed ? "right" : "left"}
                variant={project.variant}
              />
            </div>

            <div className="max-w-md">
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl font-semibold text-white transition-colors hover:text-nord13"
                >
                  {project.title}
                </a>
              ) : (
                <h3 className="text-2xl font-semibold text-white">
                  {project.title}
                </h3>
              )}

              {project.tags && project.tags.length > 0 && (
                <div className={`mt-3 flex flex-wrap gap-2`}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/10 px-3 py-1 font-mono text-xs text-nord13"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <p className="mt-4 text-base leading-relaxed text-white/80">
                {project.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
