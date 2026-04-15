"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

export type GalleryItem = {
  src: string;
  alt: string;
};

/** Request a larger asset from Picsum-style URLs when opening the lightbox. */
function largeImageSrc(url: string) {
  return url.replace(/\/\d+\/\d+(\?.*)?$/, "/1600/1600$1");
}

export function GalleryGrid({ images }: { images: readonly GalleryItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => setOpenIndex(null), []);

  useEffect(() => {
    if (openIndex === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };

    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const id = requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    return () => {
      cancelAnimationFrame(id);
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [openIndex, close]);

  const open = openIndex !== null ? images[openIndex] : null;
  const expandedSrc = open ? largeImageSrc(open.src) : "";

  return (
    <>
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:gap-5">
        {images.map((img, i) => (
          <li key={img.src}>
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              className="group relative aspect-square w-full cursor-zoom-in overflow-hidden rounded-2xl border-2 border-white bg-stone-50 text-left shadow-md shadow-stone-200/50 outline-none transition duration-300 ring-offset-2 ring-offset-[#fdfcfa] focus-visible:ring-2 focus-visible:ring-fuchsia-400 motion-safe:hover:z-10 motion-safe:hover:scale-[1.02] motion-safe:hover:border-fuchsia-200/90 motion-safe:hover:shadow-xl motion-safe:hover:shadow-fuchsia-200/40 dark:border-white dark:bg-stone-50 dark:ring-offset-[#f4f2f8] dark:motion-safe:hover:border-fuchsia-200/80"
              aria-haspopup="dialog"
              aria-expanded={openIndex === i}
              aria-label={`View larger: ${img.alt}`}
            >
              <Image
                src={img.src}
                alt=""
                aria-hidden
                fill
                sizes="(max-width: 640px) 50vw, 33vw"
                className="object-cover transition duration-500 motion-safe:group-hover:scale-110"
              />
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-stone-900/15 via-transparent to-white/30 opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100" />
            </button>
          </li>
        ))}
      </ul>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/55 p-4 backdrop-blur-sm dark:bg-stone-900/45"
          role="dialog"
          aria-modal="true"
          aria-labelledby="gallery-lightbox-title"
          onClick={close}
        >
          <h2 id="gallery-lightbox-title" className="sr-only">
            {open.alt}
          </h2>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={close}
            className="absolute right-4 top-4 z-[60] rounded-full border border-white/30 bg-white/95 px-4 py-2 text-sm font-semibold text-zinc-800 shadow-md backdrop-blur transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-400 dark:bg-white/90"
          >
            Close
          </button>
          <div
            className="relative mt-10 flex max-h-[min(85vh,920px)] w-full max-w-5xl items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[min(85vh,920px)] w-full">
              <Image
                src={expandedSrc}
                alt={open.alt}
                fill
                sizes="(max-width: 1024px) 92vw, 1024px"
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
