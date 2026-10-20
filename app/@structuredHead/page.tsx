import { JsonLd } from "@/components/structured-data";
import { homeStructuredData } from "@/lib/home-guide";
export default function HomeHead() {
  return <JsonLd data={homeStructuredData()} />;
}
