import Link from "next/link";

const navigation = {
  main: [
    { name: "Impressum", href: "/impressum" },
    { name: "Datenschutz", href: "/datenschutz" },

  ],
};

export function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav aria-label="Footer" className="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6">
          {navigation.main.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-neutral-500 hover:text-black"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <p className="mt-10 text-center text-sm/6 text-neutral-500">
          &copy; 2026 LOU4YOU GmbH
        </p>
      </div>
    </footer>
  );
}
