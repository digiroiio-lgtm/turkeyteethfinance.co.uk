import { Hero } from "@/components/hero";
import {
  TrustStrip,
  Journey,
  TreatmentGrid,
  CarePanel,
  EligibilityPanel,
  Sources,
} from "@/components/sections";
import { BudgetExplorer } from "@/components/budget-explorer";
import { ConversionBanner, FAQSection, FinanceNotice } from "@/components/ui";
import { PageSchema } from "@/components/structured-data";
import { commonFAQs } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";
const title = "Dental Finance Turkey | Flexible Payment Options";
const description =
  "Explore dental treatment in Antalya with flexible payment options for eligible UK patients. Start with a free written treatment estimate, with no required phone call.";
export const metadata = pageMetadata(title, description, "/");
export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Journey />
      <CarePanel />
      <ConversionBanner />
      <TreatmentGrid />
      <BudgetExplorer />
      <EligibilityPanel />
      <FAQSection faqs={commonFAQs} />
      <ConversionBanner />
      <div className="container">
        <FinanceNotice full />
      </div>
      <Sources />
      <PageSchema
        path="/"
        title={title}
        description={description}
        faqs={commonFAQs}
      />
    </>
  );
}
