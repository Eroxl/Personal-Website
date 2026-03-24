import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-nord0 px-6">
      <div className="text-center">
        <p className="font-mono text-sm tracking-widest text-nord3 uppercase">
          Error 404
        </p>
        <h1 className="mt-4 text-7xl font-bold text-nord4 sm:text-9xl">
          4<span className="text-nord9">0</span>4
        </h1>
        <p className="mt-6 text-lg text-nord4/70">
          This page wandered off somewhere.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <Link
            href="/"
            className="rounded border border-nord8 px-6 py-3 font-mono text-sm text-nord8 transition-colors hover:bg-nord8/10"
          >
            Go Home
          </Link>
          <Link
            href="/projects"
            className="rounded bg-nord10 px-6 py-3 font-mono text-sm text-nord6 transition-colors hover:bg-nord9"
          >
            View Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
