import { exampleProgrammes } from "./site-content";

export function ProgrammesSection() {
  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
      {exampleProgrammes.map((programme) => (
        <div
          key={programme.title}
          className="border border-[var(--classical-line)] bg-[var(--surface)]/95 p-6 shadow-sm"
        >
          <h3 className="font-serif text-xl font-semibold tracking-tight text-[var(--foreground)] md:text-2xl">
            {programme.title}
          </h3>
          <ul className="mt-4 space-y-2.5 text-[var(--muted)]">
            {programme.items.map((item) => (
              <li
                key={item}
                className="relative pl-4 text-base leading-snug before:absolute before:left-0 before:top-[0.55em] before:h-px before:w-2.5 before:bg-[var(--classical-accent-soft)]/65"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

