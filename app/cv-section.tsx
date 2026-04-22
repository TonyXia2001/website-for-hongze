import {
  artist,
  cvAwards,
  cvConcertHighlights,
  cvEducation,
  cvMasterclasses,
  cvOrchestra,
  cvSummary,
  cvTeaching,
} from "./site-content";

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border border-[var(--classical-line)] bg-[var(--surface)]/95 p-6 shadow-sm">
      <h3 className="font-serif text-lg font-semibold tracking-tight text-[var(--foreground)] md:text-xl">
        {title}
      </h3>
      <div className="mt-4 text-[var(--muted)]">{children}</div>
    </div>
  );
}

export function CvSection() {
  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-12">
      <div className="space-y-8">
        <Card title="Contact">
          <dl className="grid gap-3 text-sm">
            <div className="grid grid-cols-[7rem_1fr] gap-3">
              <dt className="font-medium text-[var(--classical-accent-soft)]">
                Name
              </dt>
              <dd className="font-semibold text-[var(--foreground)]">
                {artist.name}
              </dd>
            </div>
            <div className="grid grid-cols-[7rem_1fr] gap-3">
              <dt className="font-medium text-[var(--classical-accent-soft)]">
                Affiliation
              </dt>
              <dd className="font-semibold text-[var(--foreground)]">
                {cvSummary.affiliation}
              </dd>
            </div>
            <div className="grid grid-cols-[7rem_1fr] gap-3">
              <dt className="font-medium text-[var(--classical-accent-soft)]">
                Phone
              </dt>
              <dd className="font-semibold text-[var(--foreground)]">
                {cvSummary.phones.join(" · ")}
              </dd>
            </div>
            <div className="grid grid-cols-[7rem_1fr] gap-3">
              <dt className="font-medium text-[var(--classical-accent-soft)]">
                Email
              </dt>
              <dd>
                <a
                  href={`mailto:${cvSummary.email}`}
                  className="font-semibold text-[var(--classical-accent)] underline decoration-[var(--classical-accent-soft)] underline-offset-4 transition hover:text-[var(--foreground)]"
                >
                  {cvSummary.email}
                </a>
              </dd>
            </div>
          </dl>
        </Card>

        <Card title="Education">
          <ol className="space-y-4">
            {cvEducation.map((row) => (
              <li
                key={`${row.years}-${row.institution}`}
                className="border-l border-[var(--classical-line)] pl-4"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <span className="font-semibold text-[var(--foreground)]">
                    {row.degree}
                  </span>
                  <span className="text-sm font-medium text-[var(--classical-accent-soft)]">
                    {row.years}
                  </span>
                </div>
                <div className="mt-1 text-sm">
                  <span className="font-semibold text-[var(--foreground)]">
                    {row.institution}
                  </span>
                  <span className="text-[var(--muted)]">
                    {" "}
                    · Teacher: {row.teacher}
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </Card>

        <Card title="Teaching">
          <ul className="space-y-3">
            {cvTeaching.map((row) => (
              <li key={row.years} className="grid gap-1">
                <span className="text-sm font-semibold text-[var(--classical-accent-soft)]">
                  {row.years}
                </span>
                <span className="text-base leading-relaxed">{row.details}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card title="Selected performances">
          <div className="space-y-3">
            {cvConcertHighlights.map((event) => (
              <details
                key={`${event.title}-${event.when}`}
                className="group border border-[var(--classical-line)] bg-[var(--background)]/35 px-4 py-3"
              >
                <summary className="cursor-pointer list-none select-none">
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <span className="font-semibold text-[var(--foreground)]">
                      {event.title}
                    </span>
                    <span className="text-sm font-medium text-[var(--classical-accent-soft)]">
                      {event.when}
                    </span>
                  </div>
                </summary>
                {event.details.length ? (
                  <ul className="mt-3 space-y-2 pl-4 text-sm leading-relaxed">
                    {event.details.map((item) => (
                      <li
                        key={item}
                        className="relative before:absolute before:-left-4 before:top-[0.65em] before:h-px before:w-2.5 before:bg-[var(--classical-accent-soft)]/65"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-3 text-sm">
                    Further programme details available on request.
                  </p>
                )}
              </details>
            ))}
          </div>
        </Card>
      </div>

      <div className="space-y-8">
        <Card title="Orchestral experience">
          <ul className="space-y-2">
            {cvOrchestra.map((row) => (
              <li
                key={`${row.role}-${row.when}`}
                className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-[var(--classical-line)]/70 pb-2 last:border-b-0 last:pb-0"
              >
                <span className="font-semibold text-[var(--foreground)]">
                  {row.role}
                </span>
                <span className="text-sm font-medium text-[var(--classical-accent-soft)]">
                  {row.when}
                </span>
              </li>
            ))}
          </ul>
        </Card>

        <Card title="Masterclasses">
          <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {cvMasterclasses.map((row) => (
              <li
                key={`${row.name}-${row.year}`}
                className="border border-[var(--classical-line)] bg-[var(--background)]/35 px-3 py-2"
              >
                <div className="font-semibold text-[var(--foreground)]">
                  {row.name}
                </div>
                <div className="text-sm font-medium text-[var(--classical-accent-soft)]">
                  {row.year}
                </div>
              </li>
            ))}
          </ul>
        </Card>

        <Card title="Awards">
          <ul className="space-y-3">
            {cvAwards.map((row) => (
              <li key={`${row.title}-${row.when}`} className="grid gap-1">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <span className="font-semibold text-[var(--foreground)]">
                    {row.title}
                  </span>
                  <span className="text-sm font-medium text-[var(--classical-accent-soft)]">
                    {row.when}
                  </span>
                </div>
                <div className="text-sm leading-relaxed">{row.result}</div>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
}

