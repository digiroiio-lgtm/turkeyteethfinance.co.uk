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
import { HomeGuide, HomeUpdated } from "@/components/home-guide";
import { commonFAQs, homeContent } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";
const { title, description } = homeContent;
export const metadata = pageMetadata(title, description, "/");
export default function Home() {
  return (
    <>
      <Hero />
      <HomeUpdated />
      <TrustStrip />
      <Journey intro="Start with a written enquiry, review the clinical team’s proposed plan, confirm arrangements when you are ready and attend your assessment in Antalya. These four stages organise your questions and bookings. Treatment timing and suitability depend on the dentist’s assessment; finance is a separate decision with a lender." />
      <CarePanel answerIntro />
      <ConversionBanner />
      <TreatmentGrid answerIntro />
      <BudgetExplorer answerIntro />
      <HomeGuide />
      <EligibilityPanel />
      <FAQSection faqs={commonFAQs} />
      <ConversionBanner />
      <div className="container">
        <FinanceNotice full />
      </div>
      <Sources />

    </>
  );
}
