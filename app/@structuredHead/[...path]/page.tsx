import { packageStructuredData } from "@/lib/package-schema";
import { publicPages } from "@/lib/public-pages";
import { pages } from "@/lib/content";
import { guideForPath } from "@/lib/guides";
import { PageSchema, JsonLd } from "@/components/structured-data";
import { clinicProfile } from "@/lib/evidence";
import { guideStructuredData } from "@/lib/guide-schema";
import { SITE_URL } from "@/lib/site";
import { monthlyStructuredData } from "@/lib/monthly-schema";
export const dynamicParams = false;
export function generateStaticParams() {
  return publicPages().filter((page) => page.path !== "/").map((page) => ({
    path: page.path.slice(1).split("/"),
  }));
}
export default async function OtherPageHead({ params }: { params: Promise<{ path: string[] }> }) {
  const path = "/" + (await params).path.join("/");
  const page = publicPages().find(page => page.path === path);
  if (!page) return null;
  const guide = guideForPath(path);
  const faqs = guide?.faqs || pages[path.slice(1)]?.faqs || [];
  return <>
    <PageSchema path={path} title={page.title} description={page.description} faqs={faqs}
      lastModified={page.lastModified} parent={guide ? { name: "Patient guides", path: "/guides" } : undefined} />
    {guide && <JsonLd data={guideStructuredData(guide)} />}
    {path === "/prices" && <JsonLd data={packageStructuredData()} />}
    {path === "/pay-monthly" && <JsonLd data={monthlyStructuredData()} />}
    {path === "/our-clinic" && <JsonLd data={{
      "@context": "https://schema.org", "@type": "Dentist", "@id": clinicProfile.url + "#clinic",
      name: clinicProfile.name, url: clinicProfile.url, telephone: clinicProfile.telephone,
      address: { "@type": "PostalAddress", streetAddress: clinicProfile.streetAddress, addressLocality: clinicProfile.locality, addressCountry: "TR" },
      mainEntityOfPage: SITE_URL + "/our-clinic",
      description: "Treating dental clinic in Antalya, Turkey. Separate from the UK patient coordination company.",
    }} />}
  </>;
}
