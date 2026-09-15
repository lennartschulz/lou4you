import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/footer";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Startseite | LOU4YOU GmbH",
  description: "Wir entwickeln intelligente Softwarelösungen, die Prozesse vereinfachen, Entscheidungen beschleunigen und Unternehmen nachhaltig unterstützen.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={cn("h-full antialiased", "font-sans", inter.variable)}>
      <body className="min-h-full flex flex-col">
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
