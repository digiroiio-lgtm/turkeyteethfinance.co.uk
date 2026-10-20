import { Tooth } from "./icons";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Heart,
  MessageCircle,
  Plane,
  ShieldCheck,
  Smile,
  Sparkles,
  Wallet,
  Users,
  FileText,
  Banknote,
  CircleHelp,
  MapPin,
  Mail,
  ImageIcon,
  BookOpen,
  BadgeCheck,
  type LucideIcon,
} from "lucide-react";
import { PRIMARY_CTA, financeNotice } from "@/lib/site";
import type { FAQ } from "@/lib/content";
const icons: Record<string, LucideIcon> = {
  tooth: Tooth,
  implant: Tooth,
  sparkles: Sparkles,
  heart: Heart,
  wallet: Wallet,
  users: Users,
  plane: Plane,
  shield: ShieldCheck,
  smile: Smile,
  file: FileText,
  money: Banknote,
  help: CircleHelp,
  pin: MapPin,
  mail: Mail,
  image: ImageIcon,
  book: BookOpen,
  badge: BadgeCheck,
  message: MessageCircle,
};
export function Icon({
  name,
  size = 28,
  ...props
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const I = icons[name] || Tooth;
  return <I size={size} strokeWidth={1.8} aria-hidden="true" {...props} />;
}
export function QuoteCTA({ small = false }: { small?: boolean }) {
  return (
    <Link
      className={`button${small ? " button-small" : ""}`}
      href="/get-a-quote"
    >
      <MessageCircle size={small ? 17 : 22} />
      <span>{PRIMARY_CTA}</span>
      <ArrowRight size={18} />
    </Link>
  );
}
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="eyebrow">
      <span />
      {children}
    </p>
  );
}
export function SectionTitle({
  label,
  title,
  accent,
  intro,
}: {
  label: string;
  title: string;
  accent?: string;
  intro?: string;
}) {
  return (
    <div className="section-heading">
      <Eyebrow>{label}</Eyebrow>
      <h2>
        {title}
        {accent && (
          <>
            {" "}
            <span className="gradient-text">{accent}</span>
          </>
        )}
      </h2>
      {intro && <p>{intro}</p>}
    </div>
  );
}
export function FinanceNotice({ full = false }: { full?: boolean }) {
  return (
    <p className={full ? "finance-notice full" : "finance-notice"}>
      <ShieldCheck size={16} aria-hidden="true" />
      <span>{financeNotice}</span>
    </p>
  );
}
export function Benefits() {
  return (
    <ul className="hero-benefits">
      <li>
        <CalendarDays />
        Written treatment plan
      </li>
      <li>
        <Plane />
        Travel support
      </li>
      <li>
        <ShieldCheck />
        Clinical assessment
      </li>
    </ul>
  );
}
export function FAQSection({
  faqs,
  title = "Your questions, answered.",
}: {
  faqs: FAQ[];
  title?: string;
}) {
  return (
    <section className="section faq-section">
      <div className="container narrow">
        <SectionTitle label="A LITTLE MORE CLARITY" title={title} />
        <div className="faq-list">
          {faqs.map((f) => (
            <details key={f.question}>
              <summary>
                {f.question}
                <span aria-hidden="true">+</span>
              </summary>
              <p>{f.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
export function ConversionBanner() {
  return (
    <section className="container conversion-wrap">
      <div className="conversion-banner">
        <div className="smile-seal">
          <Tooth size={38} />
          <span>YOUR SMILE</span>
        </div>
        <div className="conversion-copy">
          <p className="conversion-title">Your smile. Your pace.</p>
          <p>
            A personal plan and clear payment options.
            <br />
            Start with a free written treatment estimate.
          </p>
        </div>
        <div className="conversion-action">
          <QuoteCTA />
          <p>No obligation. No phone call required.</p>
        </div>
      </div>
    </section>
  );
}
export function EmptyProof({ kind }: { kind: "results" | "reviews" }) {
  return (
    <div className="proof-placeholder">
      <span className="icon-tile">
        <Icon name={kind === "results" ? "image" : "message"} size={32} />
      </span>
      <h3>
        {kind === "results"
          ? "Every smile has its own story."
          : "Patient voices matter."}
      </h3>
      <p>
        {kind === "results"
          ? "Patient photographs will appear here only with publication consent and verified treatment details."
          : "Independent patient reviews will appear here once the source and permissions are verified."}
      </p>
      <p className="small">
        {kind === "results"
          ? "The model imagery on this site is illustrative and does not show a patient’s treatment outcome."
          : "We do not publish invented testimonials, review scores or patient identities."}
      </p>
      <Link className="text-link" href="/get-a-quote">
        Talk about your own treatment goals <ArrowRight size={16} />
      </Link>
    </div>
  );
}
