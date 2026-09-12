import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type ProsePageProps = {
  heading: string;
  /** Trusted HTML authored for the site, or sanitized before being passed in. */
  html: string;
};

export function ProsePage({ heading, html }: ProsePageProps) {
  return (
    <main lang="de" className="w-full flex-1">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 sm:px-8 xl:px-0">
        <header className="flex items-center justify-between gap-6">
          <Link
            href="/"
            draggable={false}
            aria-label="lou4you – Startseite"
            className="rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950"
          >
            <Image
              draggable={false}
              src="/logo.svg"
              alt="lou4you"
              width={160}
              height={90}
              className="h-[calc(2.5rem*2/3)] w-[calc(10rem*2/3)] object-cover"
              preload
            />
          </Link>
          <Link
            href="/"
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950"
          >
            <ArrowLeft aria-hidden="true" className="size-4" />
            Zurück
          </Link>
        </header>
        <h1 className="mt-16 text-2xl leading-tight font-medium tracking-tight sm:mt-24 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          {heading}
        </h1>
        <article
          className="prose prose-neutral max-w-3xl break-words sm:prose-lg prose-headings:font-medium prose-headings:tracking-tight prose-a:underline-offset-4"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </main>
  );
}
