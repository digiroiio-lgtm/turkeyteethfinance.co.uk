/** Prices and inclusions confirmed by the site owner on 21 October 2026. */
export const treatmentPackages = [
  { id: "zirconium-20", name: "20 Zirconium Crowns", detail: "10 upper + 10 lower", price: 2800, treatment: "Zirconia crowns", stay: "5 nights", visits: 1, treatmentPath: "/zirconia-crowns-finance", popular: false },
  { id: "zirconium-24", name: "24 Zirconium Crowns", detail: "12 upper + 12 lower", price: 3000, treatment: "Zirconia crowns", stay: "5 nights", visits: 1, treatmentPath: "/zirconia-crowns-finance", popular: true },
  { id: "veneers-16", name: "16 Veneers", detail: "A 16-veneer treatment package", price: 3500, treatment: "Veneers", stay: "5 nights", visits: 1, treatmentPath: "/veneers-finance", popular: false },
  { id: "veneers-20", name: "20 Veneers", detail: "A 20-veneer treatment package", price: 4200, treatment: "Veneers", stay: "5 nights", visits: 1, treatmentPath: "/veneers-finance", popular: false },
  { id: "osstem-4-crowns-24", name: "4 Osstem Implants + 24 Zirconium Crowns", detail: "An implant and crown treatment package", price: 5840, treatment: "Dental implants", stay: "3 + 5 nights across two visits", visits: 2, treatmentPath: "/dental-implants-finance", popular: false },
] as const;
export type TreatmentPackage = typeof treatmentPackages[number];
export const packageInclusions = ["Dental treatment as specified", "Hotel accommodation", "Airport and clinic transfers"] as const;
export const packageCondition = "All package prices are subject to clinical assessment and personalised treatment planning. Your written quote confirms the treatment scope and arrangements for your case.";
export const packageIntro = "Compare dental treatment packages in Antalya with clear GBP prices, hotel accommodation, and airport and clinic transfers. Crowns and veneer packages include five nights; the implant package includes three plus five nights across two visits. Choose a package to discuss, then request a personalised quote subject to clinical assessment and treatment planning.";
export function packageForId(id: unknown): TreatmentPackage | undefined { return treatmentPackages.find(item => item.id === id); }
export function packagePrice(item: TreatmentPackage) { return new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", maximumFractionDigits: 0 }).format(item.price); }
export function packageQuoteHref(item: TreatmentPackage) { return `/get-a-quote?package=${item.id}#treatment-enquiry`; }
export function packageWhatsAppHref(item: TreatmentPackage) { return "https://wa.me/905353998999?text=" + encodeURIComponent(`Hello, I would like a personalised quote for the ${item.name} package (${packagePrice(item)}, ${item.stay}), subject to clinical assessment.`); }
