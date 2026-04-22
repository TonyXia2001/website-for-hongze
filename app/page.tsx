import type { ReactNode } from "react";
import Image from "next/image";
import { AboutBio } from "./about-bio";
import { CvSection } from "./cv-section";
import { GalleryGrid } from "./gallery-grid";
import { RepertoireTimeline } from "./repertoire-timeline";
import {
  artist,
  bioHighlights,
  contactEmail,
  navLinks,
} from "./site-content";
import { SiteHeader } from "./site-header";

const heroImage = {
  src: "/photos/bio%20pic.jpg",
  alt: `${artist.name} — promotional portrait`,
};

const galleryImages = [
  { src: "/photos/mmexport1776579111394.jpg", alt: `${artist.name} — gallery 1` },
  { src: "/photos/mmexport1776621625786.jpg", alt: `${artist.name} — gallery 2` },
  { src: "/photos/mmexport1776579119011.jpg", alt: `${artist.name} — gallery 3` },
  { src: "/photos/mmexport1776579129365.jpg", alt: `${artist.name} — gallery 4` },
  { src: "/photos/mmexport1776579132250.jpg", alt: `${artist.name} — gallery 5` },
  { src: "/photos/mmexport1776579142321.jpg", alt: `${artist.name} — gallery 6` },
  { src: "/photos/mmexport1776621289787.jpg", alt: `${artist.name} — gallery 7` },
  { src: "/photos/mmexport1776621499953.jpg", alt: `${artist.name} — gallery 8` },
  { src: "/photos/mmexport1776579154979.jpg", alt: `${artist.name} — gallery 9` },
  { src: "/photos/mmexport1776579159213.jpg", alt: `${artist.name} — gallery 10` },
  { src: "/photos/mmexport1776579161740.jpg", alt: `${artist.name} — gallery 11` },
  { src: "/photos/mmexport1776579163642.jpg", alt: `${artist.name} — gallery 12` },
  { src: "/photos/mmexport1776579168286.jpg", alt: `${artist.name} — gallery 13` },
  { src: "/photos/mmexport1776579172273.jpg", alt: `${artist.name} — gallery 14` },
  { src: "/photos/mmexport1776579175190.jpg", alt: `${artist.name} — gallery 15` },
  { src: "/photos/mmexport1776579177936.jpg", alt: `${artist.name} — gallery 16` },
  { src: "/photos/mmexport1776579181216.jpg", alt: `${artist.name} — gallery 17` },
  { src: "/photos/mmexport1776579185068.jpg", alt: `${artist.name} — gallery 18` },
] as const;

const performanceVideo = {
  drivePreviewSrc: "https://drive.google.com/file/d/1Qhoee8_oOY2oHb3gEMYmgyK6ZF_qatml/preview",
} as const;

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="flex w-fit items-center gap-3 border-b border-[var(--classical-accent-soft)]/80 pb-2 font-sans text-xs font-semibold uppercase tracking-[0.28em] text-[var(--classical-accent)]">
      <span className="h-px w-8 bg-[var(--classical-accent-soft)]/70" aria-hidden />
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <div className="relative flex min-h-full flex-col bg-[var(--background)] text-[var(--foreground)]">
      <div
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
        aria-hidden
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_72%_at_50%_-12%,rgba(232,160,144,0.14),transparent_52%),radial-gradient(ellipse_85%_55%_at_100%_35%,rgba(200,146,106,0.1),transparent_48%),radial-gradient(ellipse_70%_45%_at_0%_85%,rgba(255,200,190,0.12),transparent_50%)]" />
        <div className="classical-wash-a absolute -left-[18%] top-[8%] h-[min(52vw,400px)] w-[min(52vw,400px)] rounded-full bg-gradient-to-br from-[#f4c4b8]/35 to-[#e09080]/12 blur-[95px]" />
        <div className="classical-wash-b absolute -right-[12%] top-[32%] h-[min(58vw,440px)] w-[min(58vw,440px)] rounded-full bg-gradient-to-bl from-[#f0d4c4]/30 to-[#d4a088]/15 blur-[100px]" />
        <div className="classical-wash-c absolute bottom-[4%] left-[18%] h-[min(48vw,320px)] w-[min(48vw,320px)] rounded-full bg-gradient-to-tr from-[#eec8bc]/28 to-transparent blur-[88px]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20256%20256%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cfilter%20id%3D%22n%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.75%22%20numOctaves%3D%223%22%20stitchTiles%3D%22stitch%22%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20filter%3D%22url(%23n)%22%20opacity%3D%220.025%22%2F%3E%3C%2Fsvg%3E')] opacity-55" />
      </div>

      <SiteHeader artistName={artist.name} links={navLinks} />

      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-28 px-6 py-16 sm:gap-32 sm:py-24">
        <section
          className="relative grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,320px)] md:items-center md:gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,400px)] lg:gap-16"
          aria-labelledby="hero-heading"
        >
          <div className="relative z-10 order-2 flex flex-col gap-6 md:order-1 md:gap-8 lg:gap-10">
            <SectionLabel>Cellist</SectionLabel>
            <div className="space-y-3 md:space-y-4 lg:space-y-5">
              <h1
                id="hero-heading"
                className="classical-hero-title font-serif text-[clamp(2.375rem,7.5vw,3rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-[var(--heading-ink)] md:text-6xl md:leading-[1.02] lg:text-[4rem] lg:tracking-[-0.03em] xl:text-[4.25rem]"
              >
                {artist.name}
              </h1>
              <p className="max-w-xl font-sans text-base font-semibold tracking-[0.12em] text-[color:var(--muted)] sm:text-lg md:text-xl md:font-medium md:tracking-[0.08em]">
                {artist.tagline}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 pt-1 md:gap-4 md:pt-0">
              <a
                href="#video"
                className="inline-flex items-center justify-center border border-[var(--btn-primary-bg)] bg-[var(--btn-primary-bg)] px-8 py-3 text-sm font-semibold tracking-wide text-[var(--btn-primary-fg)] transition hover:border-[var(--btn-primary-bg-hover)] hover:bg-[var(--btn-primary-bg-hover)]"
              >
                Watch performance
              </a>
              <a
                href="#repertoire"
                className="inline-flex items-center justify-center border border-[var(--classical-accent-soft)] bg-[var(--surface)]/90 px-6 py-3 text-sm font-semibold tracking-wide text-[var(--classical-accent)] shadow-sm transition hover:border-[var(--classical-accent)] hover:bg-[var(--surface-elevated)]"
              >
                Repertoire
              </a>
            </div>
          </div>

          <div className="relative order-1 mx-auto flex w-full max-w-lg justify-center sm:max-w-xl md:order-2 md:mx-0 md:max-w-none md:justify-end">
            <div
              className="absolute -right-2 -top-4 hidden h-px w-28 bg-[var(--classical-accent-soft)]/55 md:block lg:-right-3 lg:-top-5"
              aria-hidden
            />
            <div
              className="absolute -bottom-7 -left-3 hidden h-[4.5rem] w-px bg-[var(--classical-accent-soft)]/45 md:block lg:-bottom-8 lg:-left-4"
              aria-hidden
            />
            <div className="group relative aspect-[4/5] w-full transition duration-500 motion-safe:hover:scale-[1.01] md:w-full md:max-w-[400px]">
              <div
                className="absolute -inset-3 border border-[var(--classical-accent-soft)]/60 md:-inset-[10px] md:border-[var(--classical-accent-soft)]/50 lg:-inset-3"
                aria-hidden
              />
              <div className="relative h-full min-h-[15rem] overflow-hidden border border-[var(--classical-line)] bg-[var(--surface)] shadow-[0_32px_72px_-22px_rgba(140,60,55,0.32)] md:shadow-[0_36px_80px_-24px_rgba(140,60,55,0.26)]">
                <Image
                  src={heroImage.src}
                  alt={heroImage.alt}
                  fill
                  priority
                  sizes="(max-width: 768px) min(100vw, 36rem), (max-width: 1024px) 320px, 400px"
                  className="object-cover object-top transition duration-700 motion-safe:group-hover:brightness-[1.02]"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="scroll-mt-28 space-y-8 border-t border-[var(--classical-line)] pt-20"
        >
          <SectionLabel>About</SectionLabel>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-16">
            <AboutBio />
            <div className="h-fit border border-[var(--classical-line)] bg-[var(--surface)]/95 shadow-sm">
              <ul className="divide-y divide-[var(--classical-line)] p-6 text-sm">
                {bioHighlights.map((row) => (
                  <li
                    key={row.label}
                    className="flex flex-col gap-1 py-4 first:pt-0 last:pb-0 sm:flex-row sm:justify-between sm:gap-4"
                  >
                    <span className="shrink-0 font-medium text-[var(--classical-accent-soft)]">
                      {row.label}
                    </span>
                    <span className="whitespace-pre-line font-semibold text-[var(--foreground)] sm:min-w-0 sm:flex-1 sm:text-right">
                      {row.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="repertoire" className="scroll-mt-28 space-y-8 border-t border-[var(--classical-line)] pt-20">
          <SectionLabel>Repertoire</SectionLabel>
          <RepertoireTimeline />
        </section>

        <section
          id="cv"
          className="scroll-mt-28 space-y-8 border-t border-[var(--classical-line)] pt-20"
        >
          <SectionLabel>CV</SectionLabel>
          <CvSection />
        </section>

        <section id="video" className="scroll-mt-28 space-y-8">
          <SectionLabel>Video</SectionLabel>
          <div className="group relative border border-[var(--classical-line)] bg-[var(--video-chrome)] p-1 shadow-lg">
            <div className="overflow-hidden bg-black">
              <iframe
                className="aspect-video w-full transition duration-500 motion-safe:group-hover:brightness-105"
                src={performanceVideo.drivePreviewSrc}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Performance video"
              />
            </div>
          </div>
        </section>

        <section id="gallery" className="scroll-mt-28 space-y-8">
          <SectionLabel>Gallery</SectionLabel>
          <GalleryGrid images={galleryImages} />
        </section>

        <section
          id="contact"
          className="scroll-mt-28 space-y-8 border-t border-[var(--classical-line)] pt-20"
        >
          <SectionLabel>Contact</SectionLabel>
          <div className="flex max-w-xl flex-col gap-5">
            <p className="text-lg leading-relaxed text-[var(--muted)]">
              Concerts, teaching, collaborations, or a friendly hello — I would be glad to hear from you.
            </p>
            <a
              href={`mailto:${contactEmail}`}
              className="inline-flex w-fit cursor-pointer border border-[var(--classical-accent-soft)] bg-[var(--surface)]/80 px-5 py-2.5 text-sm font-semibold tracking-wide text-[var(--classical-accent)] shadow-sm transition hover:border-[var(--classical-accent)] hover:bg-[var(--surface-elevated)]"
            >
              Email
            </a>
          </div>
        </section>
      </main>

      <footer className="mt-8 border-t border-[var(--classical-line)] px-6 py-10 text-center text-sm font-medium text-[var(--muted)]">
        © {new Date().getFullYear()} {artist.name}
      </footer>
    </div>
  );
}
