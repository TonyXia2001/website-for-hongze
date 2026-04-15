import type { ReactNode } from "react";
import Image from "next/image";
import { GalleryGrid } from "./gallery-grid";
import { SiteHeader } from "./site-header";

const artist = {
  name: "Alex Rivera",
  tagline: "Indie folk · Los Angeles",
};

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Video", href: "#video" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
] as const;

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Spotify", href: "https://open.spotify.com" },
  { label: "Email", href: "mailto:hello@example.com" },
];

const heroImage = {
  src: "https://picsum.photos/seed/musician-hero/720/900",
  alt: "Alex Rivera — promotional portrait (placeholder)",
};

const galleryImages = [
  { src: "https://picsum.photos/seed/musician-g1/600/600", alt: "Live performance still (placeholder)" },
  { src: "https://picsum.photos/seed/musician-g2/600/600", alt: "Studio session (placeholder)" },
  { src: "https://picsum.photos/seed/musician-g3/600/600", alt: "On stage (placeholder)" },
  { src: "https://picsum.photos/seed/musician-g4/600/600", alt: "Backstage (placeholder)" },
  { src: "https://picsum.photos/seed/musician-g5/600/600", alt: "Acoustic set (placeholder)" },
  { src: "https://picsum.photos/seed/musician-g6/600/600", alt: "Crowd moment (placeholder)" },
] as const;

const placeholderVideo = {
  src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm",
  poster: "https://picsum.photos/seed/musician-video-poster/1280/720",
};

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-fuchsia-200/90 bg-gradient-to-r from-fuchsia-50/95 via-amber-50/90 to-cyan-50/95 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-fuchsia-700 shadow-sm backdrop-blur-sm dark:border-fuchsia-200/70 dark:from-fuchsia-50/90 dark:via-amber-50/85 dark:to-cyan-50/90 dark:text-fuchsia-800">
      <span
        className="size-1.5 rounded-full bg-gradient-to-br from-fuchsia-400 to-amber-300 motion-safe:animate-pulse"
        aria-hidden
      />
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <div className="relative flex min-h-full flex-col bg-[#fdfcfa] text-zinc-700 dark:bg-[#f4f2f8] dark:text-zinc-800">
      <div
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
        aria-hidden
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgba(232,121,249,0.11),transparent_55%),radial-gradient(ellipse_90%_60%_at_100%_50%,rgba(251,191,36,0.08),transparent_50%),radial-gradient(ellipse_80%_50%_at_0%_80%,rgba(103,232,249,0.07),transparent_45%)] dark:bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgba(232,121,249,0.12),transparent_55%),radial-gradient(ellipse_90%_60%_at_100%_50%,rgba(251,191,36,0.09),transparent_50%),radial-gradient(ellipse_80%_50%_at_0%_80%,rgba(103,232,249,0.08),transparent_45%)]" />
        <div className="portfolio-blob-a absolute -left-[20%] top-[10%] h-[min(55vw,420px)] w-[min(55vw,420px)] rounded-full bg-gradient-to-br from-fuchsia-300/30 to-amber-200/25 blur-[100px] dark:from-fuchsia-300/28 dark:to-amber-200/22" />
        <div className="portfolio-blob-b absolute -right-[15%] top-[35%] h-[min(60vw,480px)] w-[min(60vw,480px)] rounded-full bg-gradient-to-bl from-cyan-200/28 to-violet-200/22 blur-[110px] dark:from-cyan-200/26 dark:to-violet-200/20" />
        <div className="portfolio-blob-c absolute bottom-[5%] left-[20%] h-[min(50vw,360px)] w-[min(50vw,360px)] rounded-full bg-gradient-to-tr from-amber-200/28 to-rose-200/20 blur-[90px] dark:from-amber-200/26 dark:to-rose-200/18" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20256%20256%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cfilter%20id%3D%22n%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.8%22%20numOctaves%3D%224%22%20stitchTiles%3D%22stitch%22%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20filter%3D%22url(%23n)%22%20opacity%3D%220.03%22%2F%3E%3C%2Fsvg%3E')] opacity-50 dark:opacity-45" />
      </div>

      <SiteHeader artistName={artist.name} links={navLinks} />

      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-28 px-6 py-16 sm:gap-32 sm:py-24">
        <section
          className="relative grid gap-14 md:grid-cols-[minmax(0,1fr)_minmax(0,300px)] md:items-center md:gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,380px)]"
          aria-labelledby="hero-heading"
        >
          <div className="relative z-10 space-y-7 md:space-y-8">
            <SectionLabel>Musician</SectionLabel>
            <div className="space-y-3">
              <h1
                id="hero-heading"
                className="portfolio-text-shine text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
              >
                {artist.name}
              </h1>
              <p className="text-xl font-medium text-zinc-600 dark:text-zinc-600 sm:text-2xl">
                {artist.tagline}
              </p>
            </div>
            <p className="max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-600">
              Original songs shaped by late-night demos and loud rooms. This site is a
              single scroll — swap every placeholder for your own photos, bio, and
              release video when you are ready.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#video"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full px-7 py-3 text-sm font-bold text-white shadow-lg shadow-fuchsia-400/25 transition motion-safe:hover:scale-[1.03] motion-safe:active:scale-[0.98]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-fuchsia-500 via-rose-400 to-amber-400 transition group-hover:brightness-105 group-hover:saturate-110" />
                <span className="relative">Watch live energy</span>
              </a>
              <a
                href="#gallery"
                className="inline-flex items-center justify-center rounded-full border-2 border-stone-200/90 bg-white/90 px-6 py-3 text-sm font-bold text-zinc-800 backdrop-blur transition hover:border-fuchsia-300/80 hover:bg-white dark:border-stone-200/80 dark:bg-white/90 dark:text-zinc-800 dark:hover:border-fuchsia-300/70 dark:hover:bg-white"
              >
                Gallery
              </a>
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-sm justify-center md:mx-0 md:max-w-none">
            <div
              className="absolute -right-4 -top-6 hidden h-24 w-24 rounded-2xl border-2 border-amber-200/80 bg-gradient-to-br from-amber-100/90 to-fuchsia-100/70 motion-safe:animate-pulse md:block"
              aria-hidden
            />
            <div
              className="absolute -bottom-8 -left-6 h-20 w-20 rounded-full bg-gradient-to-tr from-cyan-200/50 to-transparent blur-sm motion-safe:md:animate-pulse"
              aria-hidden
            />
            <div className="group relative aspect-[4/5] w-full max-w-[340px] -rotate-2 transition duration-500 motion-safe:hover:rotate-0 motion-safe:hover:scale-[1.02] md:max-w-none">
              <div
                className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-fuchsia-300 via-amber-200 to-cyan-200 opacity-90 blur-md transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden
              />
              <div className="relative h-full overflow-hidden rounded-[1.75rem] border-2 border-white shadow-2xl shadow-stone-300/40 ring-1 ring-stone-200/60 dark:border-white dark:shadow-stone-300/35">
                <Image
                  src={heroImage.src}
                  alt={heroImage.alt}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 380px"
                  className="object-cover transition duration-700 motion-safe:group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="scroll-mt-28 space-y-8 border-t border-stone-200/90 pt-20 dark:border-stone-200/80"
        >
          <SectionLabel>Bio</SectionLabel>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-16">
            <div className="space-y-5 text-lg leading-relaxed text-zinc-600 dark:text-zinc-600">
              <p className="first-letter:float-left first-letter:-mt-0.5 first-letter:pr-3 first-letter:text-5xl first-letter:font-black first-letter:leading-none first-letter:text-fuchsia-500 first-letter:dark:text-fuchsia-600">
                I write music that sits between confessional lyrics and guitar-driven
                arrangements — think warm rooms, worn-in denim, and hooks you can hum
                after one listen.
              </p>
              <p>
                This paragraph is placeholder copy. Use it to mention your background,
                notable venues, collaborations, press quotes, or what you are working
                on next.
              </p>
            </div>
            <div className="relative rounded-3xl p-[1.5px] shadow-lg shadow-fuchsia-200/30 dark:shadow-violet-200/25">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-fuchsia-300 via-amber-200 to-cyan-200 opacity-95 dark:opacity-90" />
              <ul className="relative space-y-0 divide-y divide-stone-200/90 overflow-hidden rounded-[calc(1.5rem-1px)] border border-transparent bg-white/98 p-6 text-sm backdrop-blur-md dark:divide-stone-200/80 dark:bg-white/95">
                <li className="flex justify-between gap-4 py-4 first:pt-0">
                  <span className="font-medium text-zinc-500 dark:text-zinc-500">
                    Instruments
                  </span>
                  <span className="bg-gradient-to-r from-zinc-800 to-zinc-600 bg-clip-text text-right font-bold text-transparent dark:from-zinc-800 dark:to-zinc-600">
                    Vocals, guitar, keys
                  </span>
                </li>
                <li className="flex justify-between gap-4 py-4">
                  <span className="font-medium text-zinc-500 dark:text-zinc-500">
                    Based in
                  </span>
                  <span className="bg-gradient-to-r from-fuchsia-600 to-amber-500 bg-clip-text text-right font-bold text-transparent dark:from-fuchsia-600 dark:to-amber-600">
                    Los Angeles, CA
                  </span>
                </li>
                <li className="flex justify-between gap-4 pb-0 pt-4 last:pb-0">
                  <span className="font-medium text-zinc-500 dark:text-zinc-500">
                    Latest
                  </span>
                  <span className="text-right font-bold text-cyan-600 dark:text-cyan-700">
                    EP — placeholder title
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="video" className="scroll-mt-28 space-y-8">
          <SectionLabel>Video</SectionLabel>
          <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-600">
            Placeholder reel for layout. Replace the{" "}
            <code className="rounded-md bg-stone-100 px-2 py-0.5 font-mono text-sm text-zinc-700 ring-1 ring-stone-200/80 dark:bg-stone-100 dark:text-zinc-700">
              src
            </code>{" "}
            with your YouTube embed, Vimeo, or a file in{" "}
            <code className="rounded-md bg-stone-100 px-2 py-0.5 font-mono text-sm text-zinc-700 ring-1 ring-stone-200/80 dark:bg-stone-100 dark:text-zinc-700">
              public/
            </code>
            .
          </p>
          <div className="group relative">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-fuchsia-300/35 via-amber-200/30 to-cyan-200/35 opacity-70 blur-2xl transition duration-700 group-hover:opacity-90 motion-safe:group-hover:blur-3xl dark:opacity-65" />
            <div className="relative overflow-hidden rounded-3xl border border-stone-200/90 bg-gradient-to-br from-stone-100 to-stone-200 p-[2px] shadow-xl shadow-stone-300/30 dark:from-stone-100 dark:to-stone-200">
              <div className="overflow-hidden rounded-[1.35rem] bg-black">
                <video
                  className="aspect-video w-full transition duration-500 motion-safe:group-hover:brightness-110"
                  controls
                  playsInline
                  preload="metadata"
                  poster={placeholderVideo.poster}
                  aria-label="Placeholder performance video"
                >
                  <source src={placeholderVideo.src} type="video/webm" />
                  Your browser does not support embedded video.
                </video>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="scroll-mt-28 space-y-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionLabel>Gallery</SectionLabel>
            <p className="max-w-xl text-zinc-600 dark:text-zinc-600 sm:text-right">
              Click a photo to enlarge. Swap in your own shots from{" "}
              <code className="rounded-md bg-stone-100 px-2 py-0.5 font-mono text-xs text-zinc-700 ring-1 ring-stone-200/80 dark:bg-stone-100 dark:text-zinc-700">
                public/
              </code>
              .
            </p>
          </div>
          <GalleryGrid images={galleryImages} />
        </section>

        <section
          id="contact"
          className="scroll-mt-28 space-y-8 border-t border-stone-200/90 pt-20 dark:border-stone-200/80"
        >
          <SectionLabel>Contact</SectionLabel>
          <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-600">
            Booking, press, and collaborations — tap a link or update them with your
            real profiles.
          </p>
          <ul className="flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="inline-flex rounded-full border-2 border-fuchsia-200/90 bg-white px-5 py-2.5 text-sm font-bold text-fuchsia-800 shadow-sm backdrop-blur transition motion-safe:hover:-translate-y-0.5 motion-safe:hover:scale-[1.02] motion-safe:hover:border-amber-200/90 motion-safe:hover:bg-gradient-to-r motion-safe:hover:from-fuchsia-500 motion-safe:hover:via-rose-400 motion-safe:hover:to-amber-400 motion-safe:hover:text-white motion-safe:hover:shadow-md motion-safe:hover:shadow-fuchsia-300/40 dark:border-fuchsia-200/80 dark:bg-white dark:text-fuchsia-800 dark:hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="relative mt-8 border-t border-transparent bg-gradient-to-r from-transparent via-fuchsia-200/40 to-transparent px-6 py-10 text-center text-sm font-medium text-zinc-500 dark:text-zinc-500">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-fuchsia-300/50 to-transparent dark:via-fuchsia-300/45" />
        © {new Date().getFullYear()} {artist.name}
      </footer>
    </div>
  );
}
