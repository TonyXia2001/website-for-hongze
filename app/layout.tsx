import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const classicalSerif = Cormorant_Garamond({
  variable: "--font-classical-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const classicalSans = Source_Sans_3({
  variable: "--font-classical-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ian Zhao — Cellist",
  description:
    "Cellist based in the UK — solo, chamber, and orchestral work; repertoire, media, and contact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${classicalSerif.variable} ${classicalSans.variable} h-full antialiased bg-[var(--background)]`}
    >
      <body className="flex min-h-full flex-col bg-[var(--background)] font-sans">
        {children}
      </body>
    </html>
  );
}
