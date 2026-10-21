import Image from "next/image";
import { Check, Wallet, Heart, Sparkles } from "lucide-react";
import { Benefits, Eyebrow, QuoteCTA } from "./ui";
import { homeContent } from "@/lib/content";
export function Hero({
  label = homeContent.label,
  heading = homeContent.heading,
  accent = homeContent.accent,
  intro = homeContent.intro,
  type = "home",
  treatment,
}: {
  label?: string;
  heading?: string;
  accent?: string;
  intro?: string;
  type?: "home" | "monthly" | "journey" | "inner";
  treatment?: string;
}) {
  return (
    <section className={`hero hero-${type === "inner" ? "compact" : type}`}>
      <div className="hero-inner container">
        <div className="hero-copy">
          <Eyebrow>{label}</Eyebrow>
          <h1>
            {heading}{" "}
            <span className="gradient-text">{accent}</span>
          </h1>
          <p className="hero-description">{intro}</p>
          <QuoteCTA treatment={treatment} />
          <Benefits />
        </div>
        <div className="hero-visual">
          <div className="portrait-halo" />
          <Image
            className="hero-portrait"
            src="/images/smile-portrait.webp"
            width={1024}
            height={1536}
            alt="Smiling model illustrating the website’s design; not a patient treatment result"
            loading="eager"
            fetchPriority="high"
            // Match the container, visual and portrait widths in globals.css.
            sizes="(max-width: 360px) 78vw, (max-width: 700px) 72vw, (max-width: 1000px) 58.4vw, (max-width: 1200px) 56.5vw, (max-width: 1455px) 54.4vw, 792px"
          />
          <div className="handwritten" aria-hidden="true">
            <Heart />
            {type === "monthly" ? (
              <>
                Same smile.
                <br />
                More
                <br />
                possibilities.
              </>
            ) : type === "journey" ? (
              <>
                Your journey
                <br />
                to a new
                <br />
                smile.
              </>
            ) : (
              <>
                Real smiles.
                <br />
                New
                <br />
                beginnings.
              </>
            )}
          </div>
          <div className="finance-float">
            <div className="finance-float-title">
              <span className="wallet-icon">
                <Wallet size={33} />
              </span>
              <p className="finance-float-heading">
                {type === "journey"
                  ? "Your treatment journey"
                  : type === "monthly"
                    ? "Flexible payment options"
                    : "Explore finance options"}
              </p>
            </div>
            <ul>
              <li>
                <Check />
                Personalised treatment planning
              </li>
              <li>
                <Check />
                Subject to status and approval
              </li>
              <li>
                <Check />
                Email or WhatsApp enquiries
              </li>
            </ul>
          </div>
          <div className="hero-mini-cards">
            <span>
              <Sparkles />
              Your smile.<small>Your personal plan.</small>
            </span>
            <span>
              <Check />
              Your choice.<small>Your way to pay.</small>
            </span>
          </div>
          <p className="model-caption">Illustrative model image</p>
        </div>
      </div>
    </section>
  );
}
