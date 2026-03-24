"use client";

import { useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Portfolio" },
  { href: "https://eroxl.github.io/Notes/", label: "Notes", external: true },
  { href: "/blog", label: "Blog" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full" data-is-bounding="true">
      <div className="flex items-center justify-between bg-[#3a7d44] px-6 py-5 sm:px-8 sm:border-b sm:border-white/15">
        <Link
          href="/"
          className="font-mono text-sm font-semibold text-nord13 transition-colors hover:text-nord6"
        >
          Evan
        </Link>

        {/* Desktop nav */}
        <nav className="hidden gap-6 sm:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-sm text-nord6/80 transition-colors hover:text-nord6"
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1.5 sm:hidden"
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-5 bg-nord6 transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-5 bg-nord6 transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-5 bg-nord6 transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="grid border-b border-white/15 transition-[grid-template-rows] duration-300 ease-in-out sm:hidden"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <nav className="flex flex-col gap-4 overflow-hidden bg-[#3a7d44] px-6">
          <div className={`flex flex-col gap-4 pb-6 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-mono text-sm text-nord6/80 transition-colors hover:text-nord6"
                {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
