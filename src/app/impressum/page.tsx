import type { Metadata } from "next";
import { ProsePage } from "@/components/prose-page";

export const metadata: Metadata = {
  title: "Impressum | LOU4YOU GmbH",
};

const html = `
  <div>LOU4YOU GmbH<br />
  Kamper Str. 54<br />
  47445 Moers<br />
  Deutschland<br />
  <br />
  Tel.: 0172 3454517<br />
  E-Mail: info@lou4you.com<br />
  <br />
  Registergericht: 47533 Kleve<br />
  Registernummer: HRB 19236<br />
  <br />
  Gesch&auml;ftsf&uuml;hrer: Lou Pannenbecker</div>
`;

export default function ImpressumPage() {
  return <ProsePage heading="Impressum" html={html} />;
}
