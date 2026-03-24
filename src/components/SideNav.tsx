"use client";

import { useEffect, useState } from "react";

export interface Section {
  id: string;
  label: string;
}

interface SideNavProps {
  sections: Section[];
}

export default function SideNav({ sections }: SideNavProps) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);

        if (visible.length > 0) {
          const mostVisible = visible.reduce((prev, curr) =>
            curr.intersectionRatio > prev.intersectionRatio ? curr : prev
          );
          setActiveSection(mostVisible.target.id);
        }
      },
      { threshold: 0.3 }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav className="fixed left-8 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-6 lg:flex">
      {sections.map(({ id, label }) => {
        const isActive = activeSection === id;

        return (
          <a
            key={id}
            href={`#${id}`}
            className="group flex items-center gap-3"
          >
            <span
              className={`block h-2.5 w-2.5 rounded-full border transition-all ${
                isActive
                  ? "border-nord13 bg-nord13 scale-125"
                  : "border-white/30 bg-transparent group-hover:border-white/50"
              }`}
            />

            <span
              className={`font-mono text-xs transition-colors ${
                isActive
                  ? "text-nord13"
                  : "text-white/40 group-hover:text-white/70"
              }`}
            >
              {label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}
