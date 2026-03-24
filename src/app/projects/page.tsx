import type { Metadata } from "next";
import DeviceGroup from "@/components/DeviceMockup";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A timeline of projects I've built — from custom markdown editors to streamer platforms and everything in between.",
  openGraph: {
    title: "Projects | Evan",
    description:
      "A timeline of projects I've built — from custom markdown editors to streamer platforms and everything in between.",
  },
};

interface TimelineProject {
  title: string;
  description: string;
  date: string;
  ipadSrc: string;
  iphoneSrc?: string;
  link?: string;
  tags?: string[];
  variant?: "tablet" | "browser";
}

const PROJECTS: TimelineProject[] = [
  {
    title: "Obsidian 3D Graph",
    date: "2026",
    description:
      "A 3D graph visualization plugin for Obsidian that uses the Desmos 3D graphing library to render interactive 3D graphs of your notes. Supports custom styling, filtering, and more.",
    ipadSrc: "/projects/obsidian-3d-ipad.png",
    link: "https://github.com/Eroxl/obsidian-desmos-3d",
    tags: ["TypeScript", "Obsidian Plugin", "Desmos API"],
    variant: "browser",
  },
  {
    title: "Gathr",
    date: "2026",
    description:
      "A streamer consolidation platform that lets content creators bring their communities together in one place. Streamers can gather audiences across platforms into a single shared experience.",
    ipadSrc: "/projects/gathr-ipad.png",
    link: "https://gathr.tv",
    tags: ["TypeScript", "Next.js", "WebSockets"],
  },
  {
    title: "Find My Force Hackathon",
    date: "2026",
    description:
      "A defense technology hackathon hosted at UBC where we built ai signal processing tools to detect and classify RF signals.",
    ipadSrc: "/projects/fmf-ipad.png",
    tags: ["Python", "Machine Learning", "Signal Processing"],
    variant: "browser",
  },
  {
    title: "Coyote Cruises",
    date: "2024",
    description:
      "The website for Coyote Cruises, a river tubing company I worked at for 5 years and became operations manager of. I built and managed the site end to end.",
    ipadSrc: "/projects/coyote-cruises-ipad.png",
    link: "https://coyotecruises.com",
    tags: ["Web Management", "Operations"],
  },
  {
    title: "CLI Markdown Editor",
    date: "2024",
    description:
      "A terminal based markdown editor built with a curses interface. Supporting live preview, I built this in Java for my introduction to software construction class.",
    ipadSrc: "/projects/cli-editor-ipad.gif",
    tags: ["Java", "Terminal UI", "Markdown"],
    variant: "browser",
  },
  {
    title: "Math Moss",
    date: "2024",
    description:
      "A math equation editor built to replace tools like MathQuill that are clunky and hard to use. Uses a custom rendering engine to allow for intuitive WYSIWYG editing of complex equations.",
    ipadSrc: "/projects/math-moss-ipad.jpg",
    link: "https://github.com/eroxl/math-moss",
    tags: ["TypeScript", "React", "Custom Rendering"],
    variant: "browser",
  },
  {
    title: "Note Rack",
    date: "2023",
    description:
      "A WYSIWYG markdown editor built almost entirely from scratch with no editor libraries. Handles rich text, block-level editing, and keyboard shortcuts all through a custom rendering engine.",
    ipadSrc: "/projects/note-rack-ipad.png",
    link: "https://github.com/eroxl/note-rack",
    tags: ["TypeScript", "React", "MongoDB"],
  },
  {
    title: "Notes Renderer",
    date: "2023",
    description:
      "A markdown renderer built to handle the unique syntax and features of my Obsidian notes. Supports desmos graphing integration, custom note embedding, and more.",
    ipadSrc: "/projects/notes-renderer-ipad.png",
    link: "https://github.com/eroxl/notes-renderer",
    tags: ["TypeScript", "React", "Custom Rendering"],
     variant: "browser",
  },
  {
    title: "Better Live Stream Fails",
    date: "2022",
    description:
      "A tiktok like website for browsing live stream clips. I built a web scraper to pull clips from reddit and a custom frontend to nicely preload and display the videos in a smooth infinite scroll.",
    ipadSrc: "/projects/blsf-ipad.png",
    tags: ["TypeScript", "Next.js", "Web Scraping"],
    variant: "browser"
  },
  {
    title: "Party Poppers",
    date: "2022",
    description:
    "A NFT collection of algorithmically generated characters built using Candy Machine. I designed the traits, wrote the metadata generator.",
    ipadSrc: "/projects/party-poppers-ipad.png",
    tags: ["Solidity", "NFTs", "Generative Art"],
    variant: "browser"
  },
  {
    title: "Reddit Comment Video Generator",
    date: "2021",
    description:
      "A tool that takes Reddit comment threads and turns them into shareable videos. Supported auto uploading to Youtube and gathered over 500k views in total.",
    ipadSrc: "/projects/reddit-video-ipad.png",
    link: "https://www.youtube.com/@bestredditcomments676",
    tags: ["C#", "FFmpeg", "YouTube API"],
    variant: "browser"
  },
  {
    title: "BC Open Legislature",
    date: "2021",
    description:
      "A tool that parses and displays British Columbia legislature data in a way that people can actually read. Built to make government more transparent and accessible.",
    ipadSrc: "/projects/bc-legislature-ipad.png",
    link: "https://github.com/BC-Open-Legislature/",
    tags: ["TypeScript", "React", "Data Parsing"],
    variant: "browser",
  },
  {
    title: "Luck be a Landlord Clone",
    date: "2020",
    description:
      "I rewrote the popular game Luck be a Landlord from scratch so that I could play it and modify it with my own features.",
    ipadSrc: "/projects/luck-clone-ipad.png",
    tags: ["C#", "Unity", "Game Development"],
    variant: "browser",
  },
  {
    title: "Upperworld.io",
    date: "2019",
    description:
      "A browser-based multiplayer io game with custom networking, game loop, and real-time state sync. The project that taught me how to write maintainable code at scale.",
    ipadSrc: "/projects/upperworld-ipad.png",
    tags: ["JavaScript", "Node.js", "WebSockets"],
    variant: "browser",
  },
];

export default function ProjectsPage() {
  return (
    <div className="px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-4 font-mono text-sm tracking-wide text-nord13">
          Projects
        </h1>

        <p className="mb-20 max-w-lg text-lg text-white">
          Everything I&apos;ve built, from the early experiments to the stuff
          I&apos;m shipping now.
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-white/50 sm:left-1/2" />

          <div className="flex flex-col gap-32">
            {PROJECTS.map((project, index) => {
              const isRight = index % 2 !== 0;

              return (
                <div key={project.title} className="relative">
                  {/* Date dot */}
                  <div className="absolute left-4 z-10 flex -translate-x-1/2 items-center flex-col sm:left-1/2">
                    <div className="h-3 w-3 rounded-full border-2 border-white bg-nord13" />

                    <span className={`font-mono text-xs text-nord13 ${isRight ? "sm:right-5" : "sm:left-5"} top-4 sm:-top-0.5 absolute`}>
                      {project.date}
                    </span>
                  </div>

                  {/* Content */}
                  <div
                    className={`flex flex-col gap-8 pl-12 sm:flex-row sm:items-center sm:gap-12 sm:pl-0 ${
                      isRight
                        ? "sm:flex-row-reverse sm:text-right"
                        : ""
                    }`}
                  >
                    {/* Description side */}
                    <div className={`flex-1 ${isRight ? "sm:pl-16 text-left" : "sm:pr-16 sm:text-right"}`}>
                      <div className={`max-w-sm ${isRight ? "" : "sm:ml-auto"}`}>
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
                          <h2 className="text-2xl font-semibold text-white">
                            {project.title}
                          </h2>
                        )}

                        {project.tags && project.tags.length > 0 && (
                          <div className={`mt-3 flex flex-wrap gap-2 ${isRight ? "" : "sm:justify-end"}`}>
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="rounded-full bg-black/20 px-3 py-1 font-mono text-xs text-nord13"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}

                        <p className="mt-4 text-base leading-relaxed text-nord4">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    {/* Device side */}
                    <div className={`flex flex-1 ${isRight ? "sm:justify-end sm:pr-16" : "sm:pl-16"}`}>
                      <DeviceGroup
                        ipadSrc={project.ipadSrc}
                        ipadAlt={`${project.title} screenshot`}
                        iphoneSrc={project.iphoneSrc}
                        iphoneAlt={`${project.title} mobile screenshot`}
                        iphoneSide={isRight ? "left" : "right"}
                        variant={project.variant}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
