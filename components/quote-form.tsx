"use client";
import { Suspense, useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Script from "next/script";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  ImagePlus,
  LoaderCircle,
  LockKeyhole,
  X,
} from "lucide-react";
import { Icon } from "./ui";
import { MAX_TOTAL_UPLOAD_SIZE } from "../lib/enquiry-limits";

import { packageForId, packagePrice, treatmentPackages } from "../lib/packages";
import { trackEvent } from "../lib/analytics";

const interests = [
  "Veneers",
  "Dental implants",
  "Zirconia crowns",
  "All-on-4",
  "Smile makeover",
  "Not sure yet",
];
const validBudget = (value: string | null) =>
  !!value && /^\d{4,5}$/.test(value) && Number(value) >= 1000 && Number(value) <= 10000;
const initial = {
  treatment: "",
  packageId: "",
  teeth: "",
  concern: "",
  notes: "",
  fullName: "",
  email: "",
  whatsapp: "",
  preferredContact: "email",
  timeframe: "Not sure yet",
  budget: "",
  dataConsent: false,
  healthConsent: false,
  marketingConsent: false,
  website: "",
};
type FormValues = typeof initial;
declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: Record<string, unknown>,
      ) => string;
      remove: (id: string) => void;
    };
  }
}
function Captcha({
  siteKey,
  onToken,
}: {
  siteKey: string;
  onToken: (token: string) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(() => typeof window !== "undefined" && !!window.turnstile);
  useEffect(() => {
    if (!loaded || !ref.current || !window.turnstile) return;
    const id = window.turnstile.render(ref.current, {
      sitekey: siteKey,
      action: "treatment-enquiry",
      callback: onToken,
      "expired-callback": () => onToken(""),
      "error-callback": () => onToken(""),
    });
    return () => window.turnstile?.remove(id);
  }, [loaded, siteKey, onToken]);
  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onReady={() => setLoaded(true)}
      />
      <div ref={ref} className="captcha" />
    </>
  );
}
function QuoteFormInner({
  available,
  turnstileSiteKey,
}: {
  available: boolean;
  turnstileSiteKey?: string;
}) {
  const search = useSearchParams();
  const [values, setValues] = useState<FormValues>(() => ({
    ...initial,
    packageId: packageForId(search.get("package"))?.id || "",
    treatment: packageForId(search.get("package"))?.treatment || (interests.includes(search.get("treatment") || "")
      ? search.get("treatment")!
      : ""),
    budget: validBudget(search.get("budget")) ? search.get("budget")! : "",
  }));
  const [step, setStep] = useState(0);
  const [photos, setPhotos] = useState<File[]>([]);
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [reference, setReference] = useState("");
  const [token, setToken] = useState("");
  const [captchaVersion, setCaptchaVersion] = useState(0);
  const submitting = useRef(false);
  const heading = useRef<HTMLHeadingElement>(null);
  const errorRef = useRef<HTMLParagraphElement>(null);
  const firstRender = useRef(true);
  const started = useRef(false);
  const completedSteps = useRef(new Set<number>());
  const selectedPackage = packageForId(values.packageId);
  function startForm() { if (!started.current) started.current = trackEvent("form_start", { form_step: step + 1 }); }
  function fail(message: string, delivery = false) { setError(message); trackEvent(delivery ? "form_submit_error" : "form_validation_error", { form_step: step + 1 }); }

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    heading.current?.focus();
  }, [step]);
  useEffect(() => {
    if (error) errorRef.current?.focus();
  }, [error]);
  function change<K extends keyof FormValues>(key: K, value: FormValues[K]) {
    startForm();
    setValues((v) => ({ ...v, [key]: value, ...(key === "treatment" && packageForId(v.packageId)?.treatment !== value ? { packageId: "" } : {}) }));
  }
  function advance() {
    startForm();
    setError("");
    if (step === 0 && !values.treatment) {
      fail("Please choose a treatment, or select “Not sure yet”.");
      return;
    }
    if (
      step === 1 &&
      values.teeth &&
      (!Number.isInteger(Number(values.teeth)) ||
        Number(values.teeth) < 1 ||
        Number(values.teeth) > 32)
    ) {
      fail("Enter a whole number between 1 and 32, or leave it blank.");
      return;
    }
    if (step === 2) {
      if (
        values.fullName.trim().length < 2 ||
        !/^\S+@\S+\.\S+$/.test(values.email)
      ) {
        fail("Please enter your full name and a valid email address.");
        return;
      }
      if (
        values.preferredContact === "whatsapp" &&
        !/^\+?[\d\s()-]{7,24}$/.test(values.whatsapp)
      ) {
        fail("Please add a WhatsApp number, including the country code.");
        return;
      }
    }
    if (!completedSteps.current.has(step) && trackEvent("form_step_complete", { form_step: step + 1 })) completedSteps.current.add(step);
    setStep((s) => Math.min(s + 1, 3));
  }
  function addPhotos(files: FileList | null) {
    if (!files) return;
    const list = Array.from(files);
    if (list.length + photos.length > 3) {
      fail("Please select up to 3 photographs.");
      return;
    }
    if (
      list.some(
        (f) =>
          !["image/jpeg", "image/png", "image/webp"].includes(f.type) ||
          f.size > 3 * 1024 * 1024,
      )
    ) {
      fail("Use JPEG, PNG or WebP photographs, no larger than 3 MB each.");
      return;
    }
    if ([...photos, ...list].reduce((total, file) => total + file.size, 0) > MAX_TOTAL_UPLOAD_SIZE) {
      fail("Please keep photographs under 4 MB in total.");
      return;
    }
    setError("");
    setPhotos((p) => [...p, ...list]);
  }
  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (submitting.current) return;
    if (step < 3) {
      advance();
      return;
    }
    if (!available) {
      fail(
        "The enquiry service is not available yet. No information has been sent.",
      );
      return;
    }
    if (!values.dataConsent || !values.healthConsent) {
      fail(
        "Please confirm the required privacy and health-information consents.",
      );
      return;
    }
    if (turnstileSiteKey && !token) {
      fail("Please complete the security check.");
      return;
    }
    startForm();
    trackEvent("form_submit_attempt", { form_step: 4 });
    submitting.current = true;
    setSending(true);
    setError("");
    try {
      const data = new FormData();
      data.append("fields", JSON.stringify(values));
      data.append("captchaToken", token);
      photos.forEach((p) => data.append("photos", p));
      const res = await fetch("/api/quote", { method: "POST", body: data });
      const result = await res.json().catch(() => null);
      if (!res.ok) {
        const failed: string[] = Array.isArray(result?.fields) ? result.fields : [];
        if (failed.includes("website"))
          throw new Error("We could not send your enquiry. Please reload the page and try again, or use a private window.");
        if (failed.includes("dataConsent") || failed.includes("healthConsent"))
          throw new Error("Please tick both required consents, then send your enquiry again.");
        if (failed.includes("budget"))
          throw new Error("Please choose a budget between £1,000 and £10,000, or leave it blank.");
        throw new Error(
          result?.error || "We could not send your enquiry. Please try again.",
        );
      }
      if (result?.ok !== true || typeof result.reference !== "string") {
        throw new Error("We could not confirm delivery. Please try again later.");
      }
      setReference(result.reference);
      trackEvent("generate_lead", { form_step: 4 });
      setDone(true);
      setValues({ ...initial });
      setPhotos([]);
      setToken("");
    } catch (err) {
      fail(
        err instanceof Error
          ? err.message
          : "We could not send your enquiry. Please try again.",
        true,
      );
    } finally {
      submitting.current = false;
      setSending(false);
      setToken("");
      setCaptchaVersion((version) => version + 1);
    }
  }
  if (done)
    return (
      <div className="quote-form success-state" role="status">
        <CheckCircle2 size={60} />
        <h2>Thank you. Your enquiry is on its way.</h2>
        <p>
          The coordination team will review your enquiry and use your chosen
          contact method to respond.
        </p>
        <p className="small">Reference: {reference}</p>
        <p>
          This is a treatment enquiry, not a finance application or a confirmed
          clinical plan.
        </p>
        <Link className="button button-small" href="/how-it-works">
          What happens next <ArrowRight size={16} />
        </Link>
      </div>
    );
  const titles = [
    "What would you like to explore?",
    "A little about your smile.",
    "How should we get in touch?",
    "Check your enquiry.",
  ];
  return (
    <form
      className="quote-form"
      aria-busy={sending}
      onSubmit={submit}
      noValidate
      encType="multipart/form-data"
    >
      <div className="form-progress" aria-label={`Step ${step + 1} of 4`}>
        {["Treatment", "Your needs", "Contact", "Review"].map((t, i) => (
          <div
            key={t}
            className={i <= step ? "active" : ""}
            aria-current={i === step ? "step" : undefined}
          >
            <span>{i < step ? <Check size={14} /> : i + 1}</span>
            <small>{t}</small>
          </div>
        ))}
      </div>
      {!available && (
        <p className="form-preview-notice">
          Enquiries are temporarily unavailable. Please contact the team on{" "}
          <a href="https://wa.me/905353998999">WhatsApp</a>.
        </p>
      )}
      <p className="card-eyebrow">STEP {step + 1} OF 4</p>
      <h2 ref={heading} tabIndex={-1}>
        {titles[step]}
      </h2>
      {step === 0 && (
        <>
          <p className="form-hint">
            It is fine if you are not sure. We can help you understand the
            options.
          </p>
          <fieldset className="interest-grid">
            <legend className="sr-only">Treatment interest</legend>
            {interests.map((t, i) => (
              <label
                className={
                  values.treatment === t
                    ? "interest-option selected"
                    : "interest-option"
                }
                key={t}
              >
                <input
                  type="radio"
                  name="treatment"
                  value={t}
                  checked={values.treatment === t}
                  onChange={() => change("treatment", t)}
                />
                <Icon
                  name={
                    ["sparkles", "implant", "tooth", "smile", "heart", "help"][
                      i
                    ]
                  }
                />
                <span>{t}</span>
              </label>
            ))}
          </fieldset>
          <div className="form-fields package-choice"><label>Package to discuss (optional)
            <select value={values.packageId} onChange={event => change("packageId", event.target.value)}><option value="">A personalised treatment estimate</option>{treatmentPackages.filter(item => item.treatment === values.treatment).map(item => <option value={item.id} key={item.id}>{item.name} · {packagePrice(item)}</option>)}</select>
          </label>{selectedPackage && <p className="small">{selectedPackage.stay} · Hotel accommodation, airport and clinic transfers. Subject to clinical assessment and personalised treatment planning.</p>}</div>
        </>
      )}
      {step === 1 && (
        <div className="form-fields">
          <p className="form-hint">
            These details are optional. Please share only what is needed for
            your enquiry. Do not include medical records, identity documents or
            payment information.
          </p>
          <label>
            Number of teeth, if known
            <input
              type="number"
              min="1"
              max="32"
              step="1"
              value={values.teeth}
              onChange={(e) => change("teeth", e.target.value)}
              placeholder="Leave blank if you are not sure"
            />
          </label>
          <label>
            Main dental concern
            <textarea
              maxLength={1200}
              value={values.concern}
              onChange={(e) => change("concern", e.target.value)}
              placeholder="What would you like to discuss?"
              rows={3}
            />
          </label>
          <label>
            Anything else? <span className="optional">(optional)</span>
            <textarea
              maxLength={1200}
              value={values.notes}
              onChange={(e) => change("notes", e.target.value)}
              rows={2}
            />
          </label>
          <div>
            <label className="upload-area" htmlFor="dental-photos">
              <ImagePlus size={26} />
              <strong>
                Add photographs <span className="optional">(optional)</span>
              </strong>
              <span>Up to 3 images · JPEG, PNG or WebP · 3 MB each · 4 MB total</span>
              <input
                id="dental-photos"
                type="file"
                accept="image/jpeg,image/png,image/webp"
                multiple
                onChange={(e) => {
                  addPhotos(e.target.files);
                  e.target.value = "";
                }}
              />
            </label>
            {photos.map((f, i) => (
              <p key={`${f.name}-${i}`} className="selected-file">
                <span>{f.name}</span>
                <button
                  type="button"
                  aria-label={`Remove photograph ${i + 1}`}
                  onClick={() => setPhotos((p) => p.filter((_, j) => j !== i))}
                >
                  <X size={17} />
                </button>
              </p>
            ))}
          </div>
          <p className="small">
            Health details and photos are sent only when you submit with
            explicit consent.{" "}
            <Link href="/privacy">Read how your information is handled.</Link>
          </p>
        </div>
      )}
      {step === 2 && (
        <div className="form-fields">
          <label>
            Full name <span className="required">*</span>
            <input
              autoComplete="name"
              value={values.fullName}
              maxLength={100}
              onChange={(e) => change("fullName", e.target.value)}
              required
            />
          </label>
          <label>
            Email address <span className="required">*</span>
            <input
              type="email"
              autoComplete="email"
              maxLength={200}
              value={values.email}
              onChange={(e) => change("email", e.target.value)}
              required
            />
          </label>
          <label>
            WhatsApp number{" "}
            <span className="optional">(optional unless selected below)</span>
            <input
              type="tel"
              autoComplete="tel"
              maxLength={25}
              placeholder="Including country code, e.g. +44"
              value={values.whatsapp}
              onChange={(e) => change("whatsapp", e.target.value)}
            />
          </label>
          <label>
            Preferred communication method
            <select
              value={values.preferredContact}
              onChange={(e) => change("preferredContact", e.target.value)}
            >
              <option value="email">Email</option>
              <option value="whatsapp">WhatsApp</option>
            </select>
          </label>
          <label>
            When would you like to travel?{" "}
            <span className="optional">(optional)</span>
            <select
              value={values.timeframe}
              onChange={(e) => change("timeframe", e.target.value)}
            >
              {[
                "Not sure yet",
                "Within 1 month",
                "1–3 months",
                "3–6 months",
                "More than 6 months",
              ].map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </label>
        </div>
      )}
      {step === 3 && (
        <div className="form-fields">
          <dl className="enquiry-summary">
            <div>
              <dt>Treatment interest</dt>
              <dd>{values.treatment}</dd>
            </div>
            {selectedPackage && <div><dt>Package to discuss</dt><dd>{selectedPackage.name} · {packagePrice(selectedPackage)} · {selectedPackage.stay} (subject to clinical assessment)</dd></div>}
            <div>
              <dt>Your name</dt>
              <dd>{values.fullName}</dd>
            </div>
            <div>
              <dt>Contact preference</dt>
              <dd>
                {values.preferredContact === "email"
                  ? values.email
                  : values.whatsapp}
              </dd>
            </div>
            <div>
              <dt>Photographs</dt>
              <dd>{photos.length} attached</dd>
            </div>
            {values.budget && (
              <div>
                <dt>Budget to discuss</dt>
                <dd>
                  £{Number(values.budget).toLocaleString("en-GB")} (not a quote)
                </dd>
              </div>
            )}
          </dl>
          <p className="small">
            Your estimate is provisional. Final treatment planning, suitability
            and price require a clinical assessment. This form does not apply
            for credit.
          </p>
          <label className="consent">
            <input
              type="checkbox"
              checked={values.dataConsent}
              onChange={(e) => change("dataConsent", e.target.checked)}
            />
            <span>
              I have read the <Link href="/privacy">privacy notice</Link> and
              agree to my information being used to respond to this enquiry.{" "}
              <span className="required">*</span>
            </span>
          </label>
          <label className="consent">
            <input
              type="checkbox"
              checked={values.healthConsent}
              onChange={(e) => change("healthConsent", e.target.checked)}
            />
            <span>
              I explicitly consent to the processing of any dental information
              and photographs I choose to provide, including sharing with the
              treating clinical team in Turkey for this enquiry.{" "}
              <span className="required">*</span>
            </span>
          </label>
          <label className="consent">
            <input
              type="checkbox"
              checked={values.marketingConsent}
              onChange={(e) => change("marketingConsent", e.target.checked)}
            />
            <span>
              I would also like occasional treatment news and offers by email.
              This is optional and I can unsubscribe.
            </span>
          </label>
          {available && turnstileSiteKey && (
            <Captcha key={captchaVersion} siteKey={turnstileSiteKey} onToken={setToken} />
          )}
        </div>
      )}
      <div className="honeypot" aria-hidden="true">
        <label>
          Leave this field empty
          <input
            type="text"
            name="hp_leave_empty_7x"
            tabIndex={-1}
            autoComplete="off"
            data-lpignore="true"
            data-1p-ignore="true"
            data-form-type="other"
            value={values.website}
            onChange={(e) => change("website", e.target.value)}
          />
        </label>
      </div>
      {error && (
        <p className="form-error" role="alert" ref={errorRef} tabIndex={-1}>
          {error}
        </p>
      )}
      <div className="form-actions">
        {step > 0 && (
          <button
            type="button"
            className="back-button"
            disabled={sending}
            onClick={() => {
              setError("");
              setStep((s) => s - 1);
            }}
          >
            <ArrowLeft size={17} />
            Back
          </button>
        )}
        <button
          className="button button-small"
          type="submit"
          disabled={sending || (step === 3 && !available)}
        >
          {sending ? (
            <>
              <LoaderCircle className="spin" size={17} />
              Sending…
            </>
          ) : step === 3 ? (
            <>
              Send my enquiry <ArrowRight size={17} />
            </>
          ) : (
            <>
              Continue <ArrowRight size={17} />
            </>
          )}
        </button>
      </div>
      <p className="form-security">
        <LockKeyhole size={13} />
        Your details are not used in advertising events.
      </p>
    </form>
  );
}
export function QuoteForm(props: {
  available: boolean;
  turnstileSiteKey?: string;
}) {
  return (
    <Suspense
      fallback={<div className="quote-form">Loading your enquiry form…</div>}
    >
      <QuoteFormForSearch {...props} />
    </Suspense>
  );
}

function QuoteFormForSearch(props: { available: boolean; turnstileSiteKey?: string }) {
  const search = useSearchParams();
  const id = packageForId(search.get("package"))?.id || "";
  const treatment = interests.includes(search.get("treatment") || "") ? search.get("treatment") : "";
  const budget = validBudget(search.get("budget")) ? search.get("budget") : "";
  return <QuoteFormInner key={`${id}:${treatment}:${budget}`} {...props} />;
}
