import { repertoireSections } from "./site-content";

const romanNumerals = ["I", "II", "III", "IV", "V"] as const;

export function RepertoireTimeline() {
  return (
    <ol className="relative m-0 mx-auto mt-2 max-w-3xl list-none p-0">
      {repertoireSections.map((section, index) => {
        const num =
          romanNumerals[index] ?? String(index + 1);
        const isLast = index === repertoireSections.length - 1;
        return (
          <li
            key={section.title}
            className="grid grid-cols-[auto_1fr] gap-x-5 pb-14 last:pb-5 md:gap-x-8 md:pb-16 md:last:pb-6"
          >
            <div className="relative flex w-11 shrink-0 justify-center md:w-14">
              {!isLast ? (
                <span
                  className="absolute left-1/2 top-12 bottom-0 z-0 w-px -translate-x-1/2 bg-gradient-to-b from-[var(--classical-accent-soft)]/85 via-[var(--classical-accent)]/25 to-[var(--classical-accent-soft)]/30 md:top-14"
                  aria-hidden
                />
              ) : null}
              <div
                className="relative z-10 mt-0.5 flex size-11 shrink-0 items-center justify-center rounded-full border-2 border-[var(--classical-accent-soft)] bg-[var(--background)] ring-[6px] ring-[var(--background)] md:size-[3.25rem]"
                aria-hidden
              >
                <span className="font-serif text-sm font-semibold tabular-nums text-[var(--classical-accent)] md:text-base">
                  {num}
                </span>
              </div>
            </div>

            <div className="min-w-0 border border-[var(--classical-line)] bg-[var(--surface)]/95 p-5 shadow-sm md:p-6">
              <div className="border-b border-[var(--classical-line)] pb-4">
                <h2 className="font-serif text-xl font-semibold leading-tight text-[var(--foreground)] md:text-2xl">
                  {section.title}
                </h2>
              </div>
              <ul className="mt-4 space-y-2.5 text-[var(--muted)]">
                {section.items.map((work) => (
                  <li
                    key={work}
                    className="relative pl-4 text-base leading-snug before:absolute before:left-0 before:top-[0.55em] before:h-px before:w-2.5 before:bg-[var(--classical-accent-soft)]/65"
                  >
                    {work}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
