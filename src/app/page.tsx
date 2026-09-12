import Image from "next/image";
import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { BookingCalendar } from "@/components/booking-calendar";
import { WordsStagger } from "@/components/words-stagger";

const people = [
    {
        name: "Lou Pannenbecker",
        role: "Mitgründer / CEO",
        email: "lou@lou4you.com",
        phone: "+49 172 3454517",
        imageUrl: "/team/person-08.jpg",
    },
  {
    name: "Lennart Schulz",
    role: "Mitgründer / CTO",
    email: "lennart@lou4you.com",
    phone: "",
    imageUrl: "/team/person-01.jpg",
  },
    {
        name: "Andre Schweers",
        role: "Vertriebsleitung",
        email: "andre@lou4you.com",
        phone: "0178 5772084",
        imageUrl: "/team/person-06.png",
    },
    {
        name: "Yassmin Hajjaoui",
        role: "Projektleitung",
        email: "yassmin@lou4you.com",
        phone: "0163 7895383",
        imageUrl: "/team/person-05.png",
    },
    {
        name: "Julia Albrecht",
        role: "Finanzen",
        email: "julia@lou4you.com",
        phone: "",
        imageUrl: "/team/person-03.jpeg",
    },

    {
        name: "Hanna Weertz",
        role: "Werkstudentin",
        email: "hanna@lou4you.com",
        phone: "",
        imageUrl: "/team/person-07.png",
    },

  {
    name: "David Valk",
    role: "Produktentwicklung",
    email: "david@lou4you.com",
    phone: "",
    imageUrl: "/team/david.png",
  },

    {
        name: "Zoë Cox",
        role: "Gestaltung",
        email: "zoe@lou4you.com",
        phone: "",
        imageUrl: "/team/person-04.png",
    },





];

const logos = [
    {
        alt: 'Innotec Logo',
        src: '/logos/innotec.svg',
        invert: false,
    },
    {
        alt: 'CCV Logo',
        src: '/logos/ccv.svg',
        invert: false,
    },
    {
        alt: 'GRS Logo',
        src: '/logos/grs.svg',
        invert: false,
    },
    {
        alt: 'Zems Logo',
        src: '/logos/zems.svg',
        invert: true,
    },
    {
        alt: 'Stindt Logo',
        src: '/logos/stindt.png',
        invert: true,
    },
    {
        alt: 'Stindt Logo',
        src: '/logos/ap.svg',
        invert: true,
    },
]

export default function Home() {
  return (
    <main className="w-full">
      <section
        id="introduction"
        aria-label="Introduction"
        className="h-[calc(100dvh*2/3)]"
      >
        <div className="mx-auto flex h-full max-w-7xl flex-col gap-8 px-6 py-12 sm:px-8 xl:px-0">
          <header className="flex items-center justify-between gap-6">
            <Image
              draggable={false}
              src="/logo.svg"
              alt="lou4you"
              width={160}
              height={90}
              className="h-[calc(2.5rem*2/3)] w-[calc(10rem*2/3)] object-cover"
              preload
            />
            <a
              href="#team"
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950"
            >
              <Mail aria-hidden="true" className="size-4" />
              Kontakt
            </a>
          </header>
            <h1
                lang="de"
                className="mt-auto text-2xl leading-tight font-medium tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
            >
                <WordsStagger className="text-neutral-500" stagger={0.08} speed={0.45}>
                    Digitale Produkte,
                </WordsStagger>{" "}
                <WordsStagger delay={0.16} stagger={0.08} speed={0.45}>
                    die Mehrwert bringen.
                </WordsStagger>
            </h1>

        </div>
      </section>
      <section
        id="companies"
        aria-label="Companies"
        className="sm:h-dvh p-4"
      >
        <div className="h-full rounded-2xl bg-black">
          <div className="mx-auto grid h-full max-w-7xl grid-cols-1 gap-8 px-6 py-6 sm:py-12 sm:px-8 md:grid-cols-2 xl:px-0">
            <div className="flex flex-col items-start justify-center gap-8">
              <Image
                draggable={false}
                src="/lexikara.svg"
                alt="Lexikara"
                width={392}
                height={85}
                className="h-auto w-24 sm:w-40 max-w-full"
                preload
              />
              <h2
                lang="de"
                className="text-2xl leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl xl:text-5xl "
              >
                Die KI-App Deines Unternehmens <br /> für Kunden &amp; Mitarbeiter
              </h2>
              <a
                href="https://lexikara.com"
                className="inline-flex items-center gap-2 text-mauve-500 underline-offset-4 hover:underline"
              >
                Mehr erfahren
                <ExternalLink aria-hidden="true" className="size-4" />
                <span className="sr-only"> (externer Link)</span>
              </a>
            </div>
            <div className="relative aspect-square w-full self-center overflow-hidden rounded-xl sm:rounded-2xl">
              <Image
                draggable={false}
                src="/lexikara/background.jpg"
                alt=""
                fill
                preload
                sizes="(min-width: 1280px) 624px, (min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute bottom-0 left-1/2 w-2/4 sm:w-2/5 -translate-x-1/2">
                <Image
                  draggable={false}
                  src="/lexikara/phone.png"
                  preload
                  alt="Lexikara auf dem Smartphone"
                  width={1800}
                  height={3680}
                  sizes="(min-width: 1280px) 250px, (min-width: 768px) 20vw, 40vw"
                  className="h-auto w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sm:h-dvh p-4">
        <div className="h-full overflow-hidden rounded-2xl border border-neutral-300 bg-neutral-200">
          <div className="grid h-full grid-cols-1 md:grid-cols-5">
            <div className="flex min-w-0 flex-col items-start justify-center gap-8 px-6 py-6 sm:py-12 md:order-2 md:col-span-2 lg:px-12 xl:px-16">
              <Image
                draggable={false}
                src="/pfadly.svg"
                alt="Pfadly"
                width={957}
                height={259}
                className="h-auto w-16 sm:w-32 max-w-full"
                preload
              />
              <h2
                lang="de"
                className="text-2xl leading-tight font-medium tracking-tight text-neutral-950 sm:text-3xl lg:text-4xl xl:text-5xl"
              >
                Der Weg zu den  Kontakten, <br/> die Du suchst
              </h2>
              <a
                href="https://pfadly.com"
                className="inline-flex items-center gap-2 text-cyan-600 underline-offset-4 hover:underline"
              >
                Mehr erfahren
                <ExternalLink aria-hidden="true" className="size-4" />
                <span className="sr-only"> (externer Link)</span>
              </a>
            </div>
            <div className="flex min-w-0 items-center px-4 sm:px-0 md:order-1 md:col-span-3">
              <Image
                draggable={false}
                src="/mockup.png"
                alt="Pfadly: Übersicht der Kontakte und Einträge"
                width={3420}
                height={1902}
                preload
                sizes="(min-width: 768px) 60vw, 100vw"
                className="h-auto w-full rounded-t-lg sm:rounded-t-none sm:rounded-r-lg"
              />
            </div>
          </div>
        </div>
      </section>
        <section>
            <div className="mx-auto opacity-50 grid grid-cols-6  max-w-7xl flex-col gap-8 px-6 py-12 sm:px-8 xl:px-0">
                {logos.map((logo) => (
                    <img
                        draggable={false}
                        key={logo.src}
                        alt={logo.alt}
                        src={logo.src}
                        className={`max-h-8 w-full object-contain object-center grayscale ${
                            logo.invert ? "invert" : ""
                        }`}
                    />
                ))}


            </div>
        </section>
      <section id="team" aria-label="Unser Team" className="bg-white py-24 sm:py-40">
        <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3 xl:grid-rows-[auto_1fr] xl:gap-y-8">
          <div className="min-w-0 max-w-xl">
            <h2 className="text-3xl font-semibold tracking-tight text-pretty text-black sm:text-4xl">
              Lerne uns kennen
            </h2>
            <p className="mt-6  text-neutral-500">
                Junges Team vom Niederrhein. Wir lösen die Probleme, an denen Standardsoftware scheitert – persönlich, individuell, mit hohem Anspruch. Nur Software, die wirklich passt.


            </p>
          </div>
          <div className="flex min-w-0 flex-col gap-8 self-start xl:col-span-2 xl:col-start-2 xl:row-span-2 xl:row-start-1">
            <ul
              role="list"
              className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16"
            >
              {people.map((person) => (
                <li key={person.imageUrl}>
                  <div className="flex items-center gap-x-6">
                    <Image
                      draggable={false}
                      alt=""
                      src={person.imageUrl}
                      width={80}
                      height={80}
                      className="size-14 sm:size-20 shrink-0 rounded-full object-cover object-top outline-1 -outline-offset-1 outline-black/5"
                    />
                    <div className="min-w-0">
                      <div className="flex items-center gap-x-2">
                        <h3 className="text-base/7 font-semibold tracking-tight text-black ">
                          {person.name}
                        </h3>
                        <div className="flex shrink-0 items-center gap-x-1">
                          <a
                            href={`mailto:${person.email}`}
                            aria-label={`E-Mail an ${person.name}`}
                            title={person.email}
                            className="inline-flex size-6 items-center justify-center rounded text-neutral-400 hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2"
                          >
                            <Mail aria-hidden="true" className="size-4" />
                          </a>
                          {person.phone && (
                            <a
                              href={`tel:${person.phone.replace(/[\s().-]/g, "")}`}
                              aria-label={`${person.name} anrufen`}
                              title={person.phone}
                              className="inline-flex size-6 items-center justify-center rounded text-neutral-400 hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2"
                            >
                              <Phone aria-hidden="true" className="size-4" />
                            </a>
                          )}
                        </div>
                      </div>
                      <p className="text-sm/6 font-semibold text-neutral-500">{person.role}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex w-full shrink-0 items-center gap-4 rounded-2xl bg-sky-700 p-2 sm:gap-6">
              <div className="relative aspect-square size-32 shrink-0 overflow-hidden rounded-lg sm:size-40">
                <Image
                  draggable={false}
                  src="/map.png"
                  alt="Standort von lou4you an der Kamper Straße 54"
                  fill
                  sizes="(min-width: 640px) 160px, 80px"
                  className="object-cover"
                />
              </div>
              <address className="flex min-w-0 flex-col gap-2 sm:gap-3 text-base sm:text-xl text-white font-medium sm:font-semibold not-italic sm:text-base">
                <div className="flex items-center gap-2">
                  <MapPin aria-hidden="true" className="size-4 sm:size-5 shrink-0" />
                  <span>Kamper Straße 54 in Moers</span>
                </div>
                <a href="tel:+49 172 3454517" className="flex items-center gap-2">
                  <Phone aria-hidden="true" className="size-4 sm:size-5 shrink-0" />
                  <span>+49 172 3454517</span>
                </a>
                <a
                  href="mailto:info@lou4you.com"
                  className="flex items-center gap-2 rounded-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4"
                >
                  <Mail aria-hidden="true" className="size-4 sm:size-5 shrink-0" />
                  <span className="break-all">info@lou4you.com</span>
                </a>
              </address>
            </div>
          </div>
          <div className="min-w-0 max-w-xl xl:col-start-1 xl:row-start-2">
            <div className="-mx-6">
              <BookingCalendar />
            </div>
          </div>
        </div>
      </section>
            <section id="services" className="p-6 md:p-10 md:pb-32 max-w-7xl mx-auto">
                <h2
                    className="mt-auto text-2xl leading-tight font-medium tracking-tight sm:text-4xl"

                >Alles aus einer Hand.</h2>
                <div className="mx-auto flex flex-col gap-10 md:gap-24">
                    <div className="flex flex-col gap-10 md:flex-row md:gap-32">
                        <div className="w-full text-neutral-600  md:min-w-sm mt-2">
                            <div>Angefangen haben wir 2023 mit Auftragsprogrammierung: zwei Leute, ein Schreibtisch, das, was Kunden gerade brauchten. Dabei ist uns aufgefallen, dass sich bestimmte Probleme wiederholen. Aus dem ersten davon wurde pfadly, aus dem nächsten Lexikara.
                                <br/>
                                <br/>
                                Aufgehört haben wir damit trotzdem nicht. Nicht für jedes Problem gibt es ein fertiges Produkt, und die besten Ideen entstehen weiterhin da, wo Standardsoftware an ihre Grenzen kommt. Heute bauen wir beides: eigene Produkte und Lösungen für Betriebe, für die es noch nichts Passendes gibt.
                                <br/>
                                <br/>
                                Und weil gute Software allein selten reicht, kommen Marke, Website und Sichtbarkeit aus demselben Team.
                            </div>
                        </div>
                        <div className="flex w-full flex-col gap-10 md:flex-row md:gap-16">
                            <div className="flex w-full flex-col items-start gap-4 md:min-w-[184px] md:gap-6">
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none"
                                     xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-12 md:w-12">
                                    <path
                                        d="M32.9893 0V32V64C33.139 46.3951 47.3832 32.1485 64.9881 31.9988C47.3832 31.8491 33.139 17.6049 32.9893 0Z"
                                        fill="#348FEF"></path>
                                    <path
                                        d="M0.989258 0V64C1.13898 46.3951 15.3832 32.1485 32.9881 31.9988C15.3832 31.8491 1.13898 17.6049 0.989258 0Z"
                                        fill="#348FEF"></path>
                                </svg>
                                <p className="w-full text-2xl leading-tight font-semibold tracking-[-0.01em] text-neutral-800">Software</p>
                                <ul className="flex w-full flex-col gap-2 md:gap-3">
                                    <li className="text-neutral-600">Individualsoftware</li>
                                    <li className="text-neutral-600">Web-Apps</li>
                                    <li className="text-neutral-600">Schnittstellen</li>
                                    <li className="text-neutral-600">KI-Assistenten</li>
                                    <li className="text-neutral-600">Dashboards</li>
                                    <li className="text-neutral-600">Automatisierung</li>
                                </ul>
                            </div>
                            <div className="flex w-full flex-col items-start gap-4 md:min-w-[184px] md:gap-6">
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none"
                                     xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-12 md:w-12">
                                    <path
                                        d="M31.9995 4.00293C47.4015 4.13546 59.8601 16.5941 59.9927 31.9961L59.9956 32V4H31.9956L31.9995 4.00293Z"
                                        fill="#348FEF"></path>
                                    <path
                                        d="M3.99854 31.9961C4.13106 16.5941 16.5897 4.13546 31.9917 4.00293L31.9956 4H3.99561V32L3.99854 31.9961Z"
                                        fill="#348FEF"></path>
                                    <path
                                        d="M31.9917 59.9971C16.5897 59.8645 4.13106 47.4059 3.99854 32.0039L3.99561 32V60H31.9956L31.9917 59.9971Z"
                                        fill="#348FEF"></path>
                                    <path
                                        d="M59.9927 32.0039C59.8601 47.4059 47.4015 59.8645 31.9995 59.9971L31.9956 60H59.9956V32L59.9927 32.0039Z"
                                        fill="#348FEF"></path>
                                </svg>
                                <p className="w-full text-2xl leading-tight font-semibold tracking-[-0.01em] text-neutral-800">Marke</p>
                                <ul className="flex w-full flex-col gap-2 md:gap-3">
                                    <li className="text-neutral-600">Corporate Design</li>
                                    <li className="text-neutral-600">Logoentwicklung</li>
                                    <li className="text-neutral-600">Werbeartikel</li>
                                    <li className="text-neutral-600">Geschäftsausstattung</li>
                                    <li className="text-neutral-600">Präsentationen</li>
                                    <li className="text-neutral-600">Print &amp; Broschüren</li>
                                    <li className="text-neutral-600">Designvorlagen</li>
                                </ul>
                            </div>
                            <div className="flex w-full flex-col items-start gap-4 md:min-w-[184px] md:gap-6">

                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none"
                                     xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-12 md:w-12">
                                    <path
                                        d="M31.9925 64C31.8427 46.3951 17.5985 32.1509 -0.00634766 32.0012C17.5985 31.8515 31.8427 17.6049 31.9925 0C32.1422 17.6049 46.3864 31.8515 63.9913 32.0012C46.3864 32.1509 32.1422 46.3951 31.9925 64Z"
                                        fill="#348FEF"></path>
                                </svg>
                                <p className="w-full text-2xl leading-tight font-semibold tracking-[-0.01em] text-neutral-800">Sichtbarkeit</p>
                                <ul className="flex w-full flex-col gap-2 md:gap-3">
                                    <li className="text-neutral-600">Websites</li>
                                    <li className="text-neutral-600">Landing Pages</li>
                                    <li className="text-neutral-600">SEO</li>
                                    <li className="text-neutral-600">KI-Suche (GEO)</li>
                                    <li className="text-neutral-600">Social Media</li>
                                    <li className="text-neutral-600">Google Business</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </main>
  );
}
