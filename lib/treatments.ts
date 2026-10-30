export type Treatment = { slug: string; name: string; displayName?: string; icon: string; text: string; detail: string };
export const treatments: Treatment[] = [
  {
    slug: "veneers-finance",
    name: "Veneers",
    displayName: "E.max / Porcelain Veneers",
    icon: "sparkles",
    text: "Compare ceramic veneer materials, preparation and written package specifications.",
    detail: "Suitability and preparation depend on your teeth.",
  },
  {
    slug: "dental-implants-finance",
    name: "Dental implants",
    icon: "implant",
    text: "Discuss options for replacing missing teeth and restoring function.",
    detail: "Clinical assessment and healing time are essential.",
  },
  {
    slug: "zirconia-crowns-finance",
    name: "Zirconia crowns",
    icon: "tooth",
    text: "Understand restorative options for teeth that need full coverage.",
    detail: "The dentist will explain alternatives and preparation.",
  },
  {
    slug: "all-on-4-finance",
    name: "All-on-4",
    icon: "smile",
    text: "Find out about implant-supported treatment for a full arch.",
    detail: "Implant number and loading depend on your assessment.",
  },
  {
    slug: "smile-makeover-finance",
    name: "Smile makeover",
    icon: "heart",
    text: "A personalised plan built around your dental needs and goals.",
    detail: "Your plan may combine several different treatments.",
  },
];

// Prioritise distinct UK search intentions; bonding begins the second desktop row.
treatments.unshift(
  { slug: "full-mouth-dental-implants-turkey", name: "Full mouth dental implants", displayName: "Full Mouth Dental Implants", icon: "implant", text: "Compare fixed full-arch options, one or both jaws, visits and complete treatment costs.", detail: "An individual clinical plan defines the scope." },
  { slug: "all-on-6-finance", name: "All-on-6", displayName: "All-on-6 Dental Implants", icon: "smile", text: "Understand six-implant arch support, temporary and final teeth, and payment planning.", detail: "Suitability and costs require assessment." }
);
treatments.splice(4, 0, { slug: "composite-bonding-turkey", name: "Composite bonding", displayName: "Composite Bonding", icon: "sparkles", text: "Explore resin bonding for selected changes and compare it with porcelain veneers.", detail: "Confirm service availability and suitability before travel." });
export const treatmentInterests: [string, ...string[]] = ["Veneers", ...treatments.filter(t => t.name !== "Veneers").map(t => t.name), "Not sure yet"];
