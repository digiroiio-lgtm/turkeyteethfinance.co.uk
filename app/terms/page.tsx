import { pageMetadata } from "@/lib/metadata";
import { termsContent } from "@/lib/legal-content";
import { LegalPage } from "@/components/legal-page";

const content = termsContent();
export const metadata = pageMetadata(
  content.title,
  content.description,
  content.path,
);

export default function Terms() {
  return <LegalPage content={termsContent()} />;
}
