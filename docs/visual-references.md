# Visual references and content choices

Visual source of truth: the three user-supplied PNG mockups (homepage, Pay Monthly, How It Works). The implementation retains the two-line gradient wordmark, white navigation, lavender-to-teal hero, large navy/gradient typography, smiling portrait, floating finance panel, yellow pill CTA, four gradient journey nodes, white cards and rounded final conversion band.

The master prompt takes precedence for conversion and content: all primary CTAs read **Get My Free Treatment Quote**, written enquiries do not require a telephone call, the process begins with Quote, and the unsupported 60-day business guarantee, clinic growth metrics, example monthly repayment and invented patient endorsements are omitted. These deliberate content changes mean this is a faithful responsive implementation rather than an unqualified pixel-identical copy of every supplied word and photograph.

The homepage extends the supplied first-screen design with the treatment, budget, eligibility and FAQ sections requested in the brief. The 17 additional pages use the same shared components and design tokens. The finance explorer displays a user-selected budget, not a clinic price, credit decision or loan quotation.

## Image provenance

- `public/images/smile-portrait.webp`: generated with the built-in imagegen tool from the user’s homepage reference, then encoded as WebP for the application. Illustrative model, not a real patient result.
- `public/images/journey-reference.webp`: compressed supplied process mockup, used only inside clipped illustrative process-photo windows. Not a patient or staff endorsement. No screenshot text is used as website copy.
- No genuine clinic/team photographs, before-and-after cases or verified review source were supplied. Those must be verified and replaced/populated before claiming real patient evidence.

The final prompt used for the built-in image generation was:

> Use case: background-extraction, identity-preserve. Asset type: transparent website hero portrait extracted from the supplied website mockup. The supplied image is the reference/edit target. Extract ONLY the exact same blonde smiling woman from the upper right hero photograph. Keep her face, smile, teeth, blonde bob hairstyle, head angle, gaze towards the right, light natural skin texture, and cream knitted jumper identical. Reconstruct her shoulders and torso where UI overlays cover them. Frame from the top of her hair to mid torso, with complete hair and shoulders inside canvas, portrait or square composition, woman centred. Remove ALL website design, backgrounds, text, handwriting, panels, buttons, tooth close-up images, shapes and icons. Background must be genuinely transparent. No logos, no words, no decorative marks, no new people. This is an illustrative model portrait for a faithful HTML recreation of the reference, not a patient result.

The licensed Inter font is self-hosted through `@fontsource-variable/inter` and `next/font/local`; UI icons use Lucide with a code-native tooth icon following its stroke style.

## Verification scope

The production build statically generates all 18 requested pages and both legal pages. Security/validation tests are in `tests/security.test.ts`. Browser QA uses the internal managed preview; a temporary iframe page was used to inspect the 390-pixel layout and removed before commit. The desktop and 390-pixel layout were viewed; the latter had no horizontal overflow (375 px content/client width after the scrollbar). Further browser interaction checks were interrupted by an environment browser-security restriction. Menu state, budget selection and all four form steps are independently checked with in-memory React component tests; 320 and 768-pixel browser checks are not claimed as completed. Live credit applications, production lead delivery, provider compliance approval, ownership verification and DNS/hosting publication require the operator’s configuration and are not claimed as completed.
