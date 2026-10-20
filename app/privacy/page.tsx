import { pageMetadata } from "@/lib/metadata";
import { privacyContent } from "@/lib/legal-content";
import { LegalPage } from "@/components/legal-page";

const content = privacyContent();
export const metadata = pageMetadata(
  content.title,
  content.description,
  content.path,
);

export default function Privacy() {
  return <LegalPage content={privacyContent()} />;
}
