import { packageCondition, packageInclusions, treatmentPackages } from "./packages";
import { canonicalUrl } from "./site";
import { clinicProfile } from "./evidence";
export function packageStructuredData() {
  return { "@context": "https://schema.org", "@type": "OfferCatalog", "@id": canonicalUrl("/prices") + "#package-catalog", name: "Dental treatment packages in Antalya", url: canonicalUrl("/prices") + "#dental-treatment-packages",
    itemListElement: treatmentPackages.map(item => ({ "@type": "Offer", name: item.name, price: item.price, priceCurrency: "GBP", url: canonicalUrl("/prices") + "#package-" + item.id,
      description: `${item.detail}. Includes ${packageInclusions.join(", ")}. ${item.stay}. ${packageCondition}`,
      itemOffered: { "@type": "Service", name: item.name, serviceType: "Dental treatment", provider: { "@type": "Dentist", "@id": clinicProfile.url + "#clinic", name: clinicProfile.name, url: clinicProfile.url } },
    })),
  };
}
