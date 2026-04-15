"use client";

import type { MouseEvent } from "react";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

export type SiteNavLink = {
  label: string;
  href: string;
};

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function scrollWindowToY(targetY: number, durationMs: number) {
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const maxScroll = Math.max(
    0,
    document.documentElement.scrollHeight - window.innerHeight,
  );
  const clampedTarget = Math.max(0, Math.min(targetY, maxScroll));

  if (prefersReduced) {
    window.scrollTo({ top: clampedTarget, left: 0, behavior: "auto" });
    return;
  }

  const startY = window.scrollY;
  const distance = clampedTarget - startY;
  if (Math.abs(distance) < 1) return;

  let startTime: number | null = null;

  function step(now: number) {
    if (startTime === null) startTime = now;
    const elapsed = now - startTime;
    const t = Math.min(elapsed / durationMs, 1);
    const eased = easeInOutCubic(t);
    window.scrollTo(0, startY + distance * eased);
    if (t < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

export function SiteHeader({
  artistName,
  links,
}: {
  artistName: string;
  links: readonly SiteNavLink[];
}) {
  const headerRef = useRef<HTMLElement>(null);
  const [spacerHeight, setSpacerHeight] = useState(64);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const update = () => setSpacerHeight(el.getBoundingClientRect().height);

    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const onNavClick = useCallback(
    (e: MouseEvent<HTMLAnchorElement>, href: string) => {
      if (!href.startsWith("#")) return;
      const id = href.slice(1);
      const target = document.getElementById(id);
      if (!target) return;

      e.preventDefault();
      const offset = headerRef.current?.offsetHeight ?? spacerHeight;
      const y =
        target.getBoundingClientRect().top + window.scrollY - offset - 4;
      scrollWindowToY(y, 900);
      window.history.replaceState(null, "", href);
    },
    [spacerHeight],
  );

  return (
    <>
      <div style={{ height: spacerHeight }} aria-hidden className="shrink-0" />
      <header
        ref={headerRef}
        id="site-header"
        className="fixed top-0 left-0 right-0 z-40 border-b border-stone-200/80 bg-white/90 px-6 py-4 shadow-[0_8px_40px_-16px_rgba(232,121,249,0.12)] backdrop-blur-xl dark:border-stone-200/70 dark:bg-white/90 dark:shadow-[0_8px_40px_-16px_rgba(167,139,250,0.1)]"
      >
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4">
          <Link
            href="/"
            className="bg-gradient-to-r from-zinc-800 to-zinc-600 bg-clip-text text-sm font-bold tracking-tight text-transparent transition hover:opacity-80 dark:from-zinc-800 dark:to-zinc-600"
          >
            {artistName}
          </Link>
          <nav
            className="flex flex-wrap justify-end gap-x-1 gap-y-1 sm:gap-x-2"
            aria-label="Page sections"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => onNavClick(e, link.href)}
                className="relative rounded-full px-3 py-1.5 text-sm font-medium text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-600 dark:hover:text-zinc-900"
              >
                <span className="relative z-10">{link.label}</span>
                <span className="absolute inset-0 -z-0 rounded-full bg-gradient-to-r from-fuchsia-400/0 via-fuchsia-200/60 to-amber-200/0 opacity-0 transition hover:opacity-100 dark:via-fuchsia-200/50" />
              </a>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}
