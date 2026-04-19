"use client";

import type { MouseEvent } from "react";
import Link from "next/link";
import { useCallback, useEffect, useId, useRef, useState } from "react";

export type SiteNavLink = {
  label: string;
  href: string;
};

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/** Uses scroll-margin on sections (e.g. scroll-mt-*) for the fixed header — avoids bad clamps when <html> is height-limited. */
function scrollToSection(target: HTMLElement) {
  target.scrollIntoView({
    block: "start",
    behavior: prefersReducedMotion() ? "auto" : "smooth",
  });
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
  const [menuOpen, setMenuOpen] = useState(false);
  const menuPanelId = useId();

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const update = () => setSpacerHeight(el.getBoundingClientRect().height);

    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => {
      if (mq.matches) setMenuOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const onNavClick = useCallback(
    (e: MouseEvent<HTMLAnchorElement>, href: string) => {
      const wasMenuOpen = menuOpen;
      closeMenu();
      if (!href.startsWith("#")) return;
      const id = href.slice(1);
      const target = document.getElementById(id);
      if (!target) return;

      e.preventDefault();

      const runScroll = () => {
        scrollToSection(target);
        window.history.replaceState(null, "", href);
      };

      // After closing the drawer, the header is shorter; measure on the next frame(s)
      // so the scroll offset matches the collapsed bar (fixes mobile in-page jumps).
      if (wasMenuOpen) {
        requestAnimationFrame(() => {
          requestAnimationFrame(runScroll);
        });
      } else {
        runScroll();
      }
    },
    [closeMenu, menuOpen],
  );

  const navLinkClass =
    "px-3 py-1.5 text-sm font-medium tracking-wide text-[var(--muted)] transition hover:text-[var(--foreground)]";
  const navUnderlineClass =
    "border-b border-transparent pb-0.5 transition hover:border-[var(--classical-accent-soft)]";

  return (
    <>
      <div style={{ height: spacerHeight }} aria-hidden className="shrink-0" />
      <header
        ref={headerRef}
        id="site-header"
        className="fixed top-0 right-0 left-0 z-40 border-b border-[var(--classical-line)] bg-[var(--background)]/92 backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4">
          <Link
            href="/"
            onClick={closeMenu}
            className="font-serif text-lg font-semibold tracking-tight text-[var(--heading-ink)] transition hover:text-[var(--classical-accent)]"
          >
            {artistName}
          </Link>

          <nav
            className="hidden flex-wrap justify-end gap-x-0.5 gap-y-1 sm:gap-x-1 md:flex"
            aria-label="Page sections"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => onNavClick(e, link.href)}
                className={navLinkClass}
              >
                <span className={navUnderlineClass}>{link.label}</span>
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-[5px] text-[var(--heading-ink)] transition-opacity hover:opacity-70 active:opacity-55 md:hidden"
            aria-expanded={menuOpen}
            aria-controls={menuPanelId}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span
              aria-hidden
              className={`block h-0.5 w-5 rounded-full bg-current transition-transform duration-200 ${
                menuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              aria-hidden
              className={`block h-0.5 w-5 rounded-full bg-current transition duration-200 ${
                menuOpen ? "scale-0 opacity-0" : ""
              }`}
            />
            <span
              aria-hidden
              className={`block h-0.5 w-5 rounded-full bg-current transition-transform duration-200 ${
                menuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {menuOpen ? (
          <div
            id={menuPanelId}
            className="border-t border-[var(--classical-line)] bg-[var(--background)]/95 backdrop-blur-md md:hidden"
          >
            <nav
              className="mx-auto flex max-w-5xl flex-col px-6 py-2 pb-4"
              aria-label="Page sections"
            >
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => onNavClick(e, link.href)}
                  className={`${navLinkClass} border-b border-[var(--classical-line)]/80 py-3.5 last:border-b-0`}
                >
                  <span className={navUnderlineClass}>{link.label}</span>
                </a>
              ))}
            </nav>
          </div>
        ) : null}
      </header>
    </>
  );
}
