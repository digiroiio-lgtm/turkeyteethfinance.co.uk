/** Public sources checked on 21 October 2026. No independent credential verification or clinical endorsement is implied. */
export const evidence = {
  gdc: { title: "GDC: going abroad for dental treatment", url: "https://www.gdc-uk.org/standards-guidance/information-for-patients-public/going-abroad-for-dental-treatment" },
  broker: { title: "Ideal4Finance: broker information and lender assessment", url: "https://ideal4finance.com/" },
  nhs: { title: "NHS: dental treatments", url: "https://www.nhs.uk/live-well/healthy-teeth-and-gums/dental-treatments/" },
  veneers: { title: "American Dental Association: veneers", url: "https://www.mouthhealthy.org/all-topics-a-z/veneers" },
  crowns: { title: "American Dental Association: crowns", url: "https://www.mouthhealthy.org/all-topics-a-z/crowns" },
  implants: { title: "Cambridge University Hospitals: dental implants in restorative dentistry", url: "https://www.cuh.nhs.uk/patient-information/dental-implants-in-restorative-dentistry/" },
  stages: { title: "Guy’s and St Thomas’: dental implant stages", url: "https://www.guysandstthomas.nhs.uk/health-information/dental-implants" },
  team: { title: "Akdeniz Dental: official clinical team", url: "https://akdenizdental.com/our-team" },
  lab: { title: "Akdeniz Dental: laboratory gallery", url: "https://akdenizdental.com/akdeniz-dental-lab" },
  contact: { title: "Akdeniz Dental: clinic contact details", url: "https://akdenizdental.com/contact-us" },
  gallery: { title: "Akdeniz Dental: clinic gallery", url: "https://akdenizdental.com/clinic-gallery" },
  results: { title: "Akdeniz Dental: patient cases on the clinic website", url: "https://akdenizdental.com/before-after" },
  reviews: { title: "Akdeniz Dental Clinic on Trustpilot", url: "https://www.trustpilot.com/review/akdenizdental.com" },
} as const;
export type EvidenceId = keyof typeof evidence;
export const clinicProfile = {
  name: "Akdeniz Dental",
  url: "https://akdenizdental.com/",
  streetAddress: "Çaybaşı Mahallesi 1358 Sokak, Premier Plaza B Blok, Kat 1",
  locality: "Muratpaşa, Antalya",
  telephone: "+90 541 248 35 62",
  checked: "2026-10-21",
  clinicians: [
    { name: "Dr. Mustafa Akça", role: "Aesthetic dentist and clinic owner", education: "Medipol University, 2012–2018", url: "https://akdenizdental.com/mustafa-akca" },
    { name: "Dr. Mehmet Onur Merey", role: "Oral and maxillofacial surgeon and clinic owner", education: "Marmara University, 2010–2016; oral and maxillofacial surgery specialisation, Akdeniz University, 2018–2023", url: "https://akdenizdental.com/mehmet-onur-merey" },
    { name: "Dr. Duygu Kolay Toklu", role: "Endodontist", education: "Marmara University, 2011–2017; master’s degree in endodontics, Akdeniz University, 2019–2024", url: "https://akdenizdental.com/duygu-kolay-toklu" },
  ],
};
