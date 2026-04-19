"use client";

import { useId, useState } from "react";
import { bioParagraphs } from "./site-content";

const firstParaClass =
  "first-letter:float-left first-letter:-mt-0.5 first-letter:pr-3 first-letter:font-serif first-letter:text-5xl first-letter:font-semibold first-letter:leading-none first-letter:text-[var(--classical-accent)]";

export function AboutBio() {
  const [expanded, setExpanded] = useState(false);
  const regionId = useId();
  const hasMore = bioParagraphs.length > 1;

  return (
    <div className="space-y-5 text-lg leading-relaxed text-[var(--muted)]">
      <div
        id={regionId}
        role="region"
        aria-label="Biography"
        className={
          !expanded && hasMore
            ? "relative space-y-5 pb-1"
            : "space-y-5"
        }
      >
        {bioParagraphs.map((paragraph, index) => {
          if (!expanded && index > 0) return null;
          return (
            <p key={index} className={index === 0 ? firstParaClass : undefined}>
              {paragraph}
            </p>
          );
        })}
        {!expanded && hasMore ? (
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[var(--background)] to-transparent"
            aria-hidden
          />
        ) : null}
      </div>

      {hasMore ? (
        <button
          type="button"
          onClick={() => setExpanded((e) => !e)}
          aria-expanded={expanded}
          aria-controls={regionId}
          className="inline-flex cursor-pointer items-center gap-2 border border-[var(--classical-accent-soft)] bg-[var(--surface)]/70 px-4 py-2 text-sm font-semibold tracking-wide text-[var(--classical-accent)] shadow-sm transition-colors transition-shadow duration-200 hover:border-[var(--classical-accent)] hover:bg-[var(--surface-elevated)] hover:text-[var(--foreground)] hover:shadow-md motion-safe:hover:-translate-y-px motion-safe:active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--classical-accent-soft)]"
        >
          {expanded ? "Show less" : "Read full biography"}
          <span className="text-xs opacity-80" aria-hidden>
            {expanded ? "↑" : "↓"}
          </span>
        </button>
      ) : null}
    </div>
  );
}
