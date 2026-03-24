import SideNav, { type Section } from "@/components/SideNav";
import ProjectShowcase, { type Project } from "@/components/ProjectShowcase";
import SceneryWrapper from "@/components/SceneryWrapper";

const PROJECTS: Project[] = [
  {
    title: "Note Rack",
    description:
      "A WYSIWYG markdown editor built almost entirely from scratch with no editor libraries. Handles rich text, block-level editing, and keyboard shortcuts all through a custom rendering engine.",
    ipadSrc: "/projects/note-rack-ipad.png",
    link: "https://github.com/eroxl/note-rack",
    tags: ["TypeScript", "React", "MongoDB"],
  },
  {
    title: "Gathr",
    description:
      "A streamer consolidation platform that lets content creators bring their communities together in one place. Streamers can gather audiences across platforms into a single shared experience.",
    ipadSrc: "/projects/gathr-ipad.png",
    link: "https://gathr.tv",
    tags: ["TypeScript", "Next.js", "WebSockets"],
  },
  {
    title: "Coyote Cruises",
    description:
      "The website for Coyote Cruises, a river tubing company I worked at for 5 years and became operations manager of. I built and managed the site end to end.",
    ipadSrc: "/projects/coyote-cruises-ipad.png",
    link: "https://coyotecruises.com",
    tags: ["Web Management", "Operations"],
  }
];

const SECTIONS: Section[] = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Home() {
  return (
    <>
      <SideNav sections={SECTIONS} />

      <section
        id="hero"
        className="flex min-h-screen items-center justify-center px-6"
      >
        <SceneryWrapper variant="full" offset={1001}>
          <div className="max-w-2xl" data-is-bounding="true">
            <p className="mb-4 font-mono text-sm tracking-wide text-nord13">
              Hey, I&apos;m
            </p>

            <h1 className="text-5xl font-bold leading-tight text-white sm:text-6xl">
              Evan.
            </h1>

            <h2 className="mt-2 text-3xl font-semibold leading-snug text-white/60 sm:text-4xl">
              Fullstack Developer.
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/80">
              I care about software that actually helps people, not just
              another dashboard. Currently studying, shipping projects,
              and always looking for the next thing to build.
            </p>

            <div className="mt-10 flex gap-4">
              <a
                href="#projects"
                className="rounded border border-nord13 px-6 py-3 font-mono text-sm text-nord13 transition-colors hover:bg-nord13/10"
              >
                See my work
              </a>

              <a
                href="#contact"
                className="rounded bg-white/15 px-6 py-3 font-mono text-sm text-white transition-colors hover:bg-white/25"
              >
                Get in touch
              </a>
            </div>
          </div>
        </SceneryWrapper>
      </section>

      <section
        id="about"
        className="flex min-h-screen items-center justify-center px-6"
      >
        <SceneryWrapper variant="full" offset={12252}>
        <div className="max-w-2xl" data-is-bounding="true">
          <h2 className="mb-6 font-mono text-sm tracking-wide text-nord13">
            About
          </h2>

          <p className="text-lg leading-relaxed text-white/80">
            I&apos;m a fullstack developer and CS student at UBC. I fell in
            love with programming in grade 5 when I found{" "}
            <a
              href="https://scratch.mit.edu/users/874702/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-nord13 transition-colors hover:text-white"
            >
              Scratch
            </a>
            , and pretty quickly I wanted to build something real.
          </p>

          <p className="mt-4 text-lg leading-relaxed text-white/80">
            Early on I made{" "}
            <span className="text-white">upperworld.io</span>, a browser-based
            multiplayer survival game where I wrote the networking, the game
            loop, all of it. Around the same time I created{" "}
            <a
              href="https://github.com/BC-Open-Legislature/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-nord13 transition-colors hover:text-white"
            >
              BC Open Legislature
            </a>{" "}
            to make government data actually readable. Those projects were
            messy, ambitious, and taught me more than anything else.
          </p>

          <p className="mt-4 text-lg leading-relaxed text-white/80">
            That foundation led to bigger things. I
            built{" "}
            <a
              href="https://github.com/eroxl/note-rack"
              target="_blank"
              rel="noopener noreferrer"
              className="text-nord13 transition-colors hover:text-white"
            >
              Note Rack
            </a>
            , a WYSIWYG
            markdown editor written almost entirely by hand with no editor
            libraries, and shipped{" "}
            <a
              href="https://gathr.tv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-nord13 transition-colors hover:text-white"
            >
              gathr.tv
            </a>
            , a platform where streamers can bring their communities together
            in one place. Now I&apos;m on UBC&apos;s{" "}
            <a
              href="https://www.ubcformulaelectric.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-nord13 transition-colors hover:text-white"
            >
              Formula Electric
            </a>{" "}
            team building high performance systems.
          </p>

          <p className="mt-4 text-lg leading-relaxed text-white/80">
            I love TypeScript, especially building robust type-level generics
            where the compiler does the heavy lifting for you. I work through
            challenges on{" "}
            <a
              href="https://typehero.dev/@Eroxl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-nord13 transition-colors hover:text-white"
            >
              TypeHero
            </a>
            {" "}(here&apos;s{" "}
            <a
              href="https://typehero.dev/challenge/multiply/solutions/2862"
              target="_blank"
              rel="noopener noreferrer"
              className="text-nord13 transition-colors hover:text-white"
            >
              one of my favourites
            </a>
            )
            . Outside of code I skateboard and weightlift. At the end of the
            day, programming for good is what drives me. I want to build things
            that make a difference.
          </p>
        </div>
        </SceneryWrapper>
      </section>

      <section
        id="projects"
        className="px-6"
      >
        <SceneryWrapper variant="full" offset={1084}>
          <div className="mx-auto max-w-5xl" data-is-bounding="true">
            <h2 className="mb-20 font-mono text-sm tracking-wide text-nord13">
              Projects
            </h2>

            <ProjectShowcase projects={PROJECTS} />

            <p className="mt-20 text-center text-sm text-white/50">
              These are just the highlights. I&apos;ve got a lot more where that
              came from.{" "}
              <a
                href="/projects"
                className="text-nord13 transition-colors hover:text-white"
              >
                See the full list
              </a>
            </p>
          </div>
        </SceneryWrapper>
      </section>

      <section
        id="contact"
        className="flex min-h-screen items-center justify-center px-6"
      >
        <SceneryWrapper variant="full" offset={1301}>
        <div className="max-w-md text-center m-auto" data-is-bounding="true">
          <h2 className="mb-4 font-mono text-sm tracking-wide text-nord13">
            Contact
          </h2>

          <h3 className="text-4xl font-bold text-white">
            Get In Touch
          </h3>

          <p className="mt-6 text-lg leading-relaxed text-white/80">
            I&apos;m always open to new opportunities, collaborations, or just
            a good conversation. Feel free to reach out.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="mailto:evan@erox.one"
              className="rounded border border-nord13 px-8 py-3 font-mono text-sm text-nord13 transition-colors hover:bg-nord13/10"
            >
              Say hello
            </a>

            <a
              href="https://www.linkedin.com/in/evan-stirling-3503ba329/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded border border-white/30 px-8 py-3 font-mono text-sm text-white/80 transition-colors hover:border-white/50 hover:text-white"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/eroxl"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded border border-white/30 px-8 py-3 font-mono text-sm text-white/80 transition-colors hover:border-white/50 hover:text-white"
            >
              GitHub
            </a>
          </div>
        </div>
        </SceneryWrapper>
      </section>
    </>
  );
}
