# YEARNING — CODEX IMPLEMENTATION SPECIFICATION

**Status:** Build-ready engineering specification, v1.0  
**Product:** Yearning  
**Owner:** Solo founder  
**Purpose:** Instructions for Codex to build the product iteratively, with verifiable quality gates.  
**Priority:** Artistic quality > feature breadth. Never silently replace a hard requirement with a generic AI-builder UI.

---

## 0. CODEX OPERATING INSTRUCTIONS

You are the lead engineer implementing **Yearning**, a voice-first, deeply artistic personal website creation experience. This document is the source of truth for product behavior. Build working software, not screenshots. Preserve user work. Treat visual fidelity as a functional requirement.

**Before changing code:** inspect repository, package manager, existing assets, README, environment variables, and tests. Do not overwrite existing approved assets. If repo is empty, scaffold it. Maintain `IMPLEMENTATION_STATUS.md` with completed tasks, verification results, blockers, and the next task. Commit in small, coherent milestones if git is configured; never commit secrets.

**Execution rule:** Complete the earliest unfinished milestone in section 19, test it, and then continue when feasible. If a third-party service is unavailable, implement the defined mock adapter, not a fake production integration. Never claim live voice, payment, generation, or publishing works unless exercised end-to-end. Do not invent API endpoints or SDK signatures; inspect installed versions and current official documentation. Use strict TypeScript, runtime validation, and accessible UI.

**Visual rule:** A technically working but visually generic implementation is a failure. Do not add navigation chrome, chat bubbles, hero illustrations, onboarding cards, progress bars, stock imagery, neon gradients, glowing assistant spheres, or unnecessary UI. The landing page is mostly empty, physical-feeling paper. All user-visible additions must be justified.

**Reference assets:** The founder has approved an earlier generated landing-page mockup, calligraphic wordmark, paper texture, and watercolor orb. Those exact assets may not be in the repo. Search for them under `/public/references` or `/assets/references`; if missing, create an `ASSET_REQUESTS.md` with the exact missing references and use carefully labeled temporary approximations. Never claim to have recreated the approved font exactly without reference comparison. Do not infer visual details from nonexistent files.

## 1. PRODUCT DEFINITION

Yearning begins as an almost empty, warm-white, subtly textured physical paper canvas with the handwritten ink wordmark `yearning.`, one poetic line, and one minimal invitation button. Clicking the button initiates a voice conversation. The button transforms with painterly ink/watercolor behavior into a small, living orb. Yearning first asks, **“What should I call you?”** When the person responds, the `yearning.` wordmark is absorbed into the paper and their name appears in the same fixed position, as if ink were revealed on the page. The tagline disappears or becomes a subtle, grounded personalized line (default: disappears).

The voice conversation is organic, unstructured, open-ended, curious, and never presented as a questionnaire. Ephemeral text (1–2 lines) appears under the orb as each participant speaks and fades. There is no chat log in the canvas UI. The user can choose when to conclude, subject to a transparent paid usage allowance.

As the person speaks, a persistent mixed-media artwork grows slowly **on the same canvas**. It is continuously in motion, as though an invisible artist is drawing and painting. Earlier imagery remains, accumulates detail, and can be gently reinterpreted; new disclosures never trigger whole-canvas replacement. The artwork starts as predominantly monochromatic fine graphite and sepia architectural/explorer-notebook drawings on paper. Aesthetic preferences disclosed in conversation can introduce color, photography, watercolor, other mediums, and different compositional vocabulary without sliders or settings panels. The name and orb **never change position** in the viewport.

The artwork and the final personal website are **separate creative outputs**. The artwork is a visual acknowledgment of listening, not a site preview. In parallel, the system learns the user's actual site purpose, aesthetic direction, content, and desired interactions. On user-chosen completion, the artwork gently gathers and mixes like wet pigments; eloquent, personalized, fact-grounded text appears; then the pigments part to reveal a genuinely functioning, independently designed, publishable personal website. The user reviews before publishing and can continue editing conversationally.

**North star:** The user should feel awe and yearning on arrival, witness an artwork being made during the conversation, and leave with a website that is unmistakably their own.

## 2. NON-NEGOTIABLE ART DIRECTION

1. Warm, nearly white, tactile cotton-paper surface; subtle grain and fibers, never grungy or heavily stained.
2. Calligraphic italic ink wordmark, subtle organic density and feathering; slightly less smudged than early explorations. Do not render it as plain digital text with a generic CSS shadow.
3. Tiny organic watercolor voice orb; no waveform ring, neon glow, or AI-gradient cliché. Orb is centered beneath the name and remains spatially anchored.
4. The name stays in precisely the same place after the initial wordmark-to-name transformation. Both name and orb are fixed to viewport coordinates; art occupies the rest.
5. Initial illustration style: sparse, elegant, very low-saturation graphite/sepia linework, fine architectural sketching, cartographic and naturalist details, like an exceptional explorer's sketchbook. **Do not increase saturation merely as more subjects accumulate.**
6. White space is a scarce compositional resource and an implicit sense of how deeply the conversation has unfolded. At ~5–10% conversational depth, canvas should remain overwhelmingly empty. No literal completion percentage is shown. Conversation duration is unknown; use adaptive occupancy rather than a rigid linear percentage.
7. Cumulative visual memory: earlier book, travel, heritage, ambition, music, hiking, work, and dream-city motifs stay present as later ones appear. Preserve semantic anchors. The renderer may revise contours, adjust opacity, or connect objects, but may not delete prior meanings merely because the topic changed.
8. Continuous painterly work: ordered strokes, hatching, pigment diffusion, drying, ghost erasure, detail refinement, and connections can run simultaneously. Individual drawings may take 20–60 seconds or longer. At any moment only small areas should visibly change. Never flash finished images onto the page.
9. Existing drawings can gain detail minutes later. Unfinished illustrations may mature after new information, without faking new personal facts.
10. Artwork should feel physically created, not software-rendered. Do not animate an image's global opacity and call it drawing.
11. Art direction must decide when *not* to add an object. Silence and subtle material change count as activity.
12. Do not add explicit user-facing color controls. Aesthetic preferences are discovered in dialogue; user can always verbally correct Yearning.
13. Use the brand's physical ink/material language for invitations, payment, and transitions, not generic SaaS modals where avoidable.
14. Respect reduced-motion and low-performance devices while retaining beauty and accessibility.

## 3. DESIGN TOKENS AND INITIAL VISUAL RULES

These are starting values, not substitutes for matching the approved reference images:

- Paper base: `#FBF8F3` or measured from approved texture. Prefer subtle natural color variance over flat fill.
- Default ink: dark warm umber `#65483F` for the wordmark; drawings use lighter, low-opacity sepia/graphite.
- Default drawing opacity: approximately 0.15–0.50 depending on stroke weight, with local variation.
- Accent pigment: muted dusty rose / indigo only in the small orb at first. Collage color is earned via conversation.
- Main wordmark desktop visual width: responsive and reference-driven; center in a protected zone around the upper-middle of the viewport.
- Orb diameter: provisional 60–90 CSS px desktop; responsive and intentionally understated.
- Caption: 1–2 lines, delicately typeset under orb, with stable baseline and no layout shift.
- Main canvas: fill viewport; do not require scrolling during the core conversation. On small devices, adapt artwork layout and safe areas rather than moving the anchors arbitrarily.
- Protected central zone: maintain padding around name, orb, and caption; no drawing strokes or decorative images may overlap it.
- Button: one simple invitation, preferably `Begin`; no text input on landing.
- Tagline shortlist (final undecided): `For a world that's yours.`, `For the adventure of being you.`, `For the stories only you can tell.`, `For all that makes you, you.`, `For the world within you.`. Use the first as temporary copy, configurable.

Use CSS variables for tokens and a single `visualConfig.ts` for the current art direction. No user-facing palette UI.

## 4. USER JOURNEYS

### 4.1 First visit
1. App loads fast; renders paper texture, `yearning.`, selected tagline, and single button.
2. On Begin, request microphone permission as a direct result of user interaction. Handle denial with a tasteful, non-destructive recovery affordance. Never start recording before consent.
3. Button softly transforms into the orb through ink/watercolor mask animation. Do not use particles or abrupt DOM swapping.
4. Establish voice connection and play natural first question: “What should I call you?”
5. Render streaming ephemeral caption below orb; hide when no longer relevant.
6. Parse preferred name from explicit reply; confirm ambiguity conversationally when needed.
7. Absorb `yearning.` into paper and reveal the user's name at the same position; default remove tagline.
8. Begin continuous art work, initially near-imperceptible.

### 4.2 Conversation
- Natural voice-first dialogue, supports interruption/barge-in, silence, reconnect, mute, and optional pause.
- The user can discuss any subject. No forced topics, linear questionnaire, visible steps, or completion bar.
- Insights update structured personal understanding with evidence and confidence.
- Art planner schedules restrained scene operations; renderer continues working independent of model latency.
- A separate website creative director builds a provisional site brief as preferences emerge.
- User may verbally correct interpretation, remove a motif, ask for a different aesthetic, or request privacy.
- Preserve user agency: no automatic publication or forced self-disclosure.

### 4.3 Payment
- Proposed free allowance: initial meaningful experience, **configurable** via server policy; default dev fixture is 5 minutes, not a hard product commitment.
- Payment invitation appears at a natural conversational boundary when approaching usage budget; must not abruptly interrupt an emotional disclosure. Have a hard spend cap to prevent unbounded billing.
- Inline paper/ink treatment: “Shall we keep going?”; propose $29 one-time creation, but make price server-configurable.
- Server validates entitlements and metered usage; browser is never the source of truth.
- Stripe Checkout or Payment Element with verified webhook; return to same persisted canvas and session.
- If declined, preserve canvas and allow return. Do not claim purchase until webhook/verified entitlement.
- Do not offer unlimited voice without budget controls.

### 4.4 Completion and reveal
1. User explicitly chooses to finish via speech or discreet accessible control.
2. Freeze acceptance of new artistic subjects but allow existing strokes to settle; checkpoint scene and site brief.
3. Start or continue bounded site build in isolated sandbox. Website planning and asset preparation should already have been underway.
4. Canvas gently gathers into wet watercolor/pigment motion; preserve calm pacing and visual continuity.
5. Show short, grounded reflections and truthful status narration; never invent personal insights or fake technical milestones.
6. Do not reveal until build, runtime, mobile, accessibility, and privacy gates pass; if build fails, communicate calmly and offer retry, without fake completion.
7. Reveal working site preview. User can review, revise, and explicitly publish.

### 4.5 Return
- Authenticated users can resume conversation and unfinished artwork; deterministic scene replay reconstructs state.
- Site revisions are versioned, previewed, and published only with approval.
- User can inspect, export, and delete personal data, subject to retention policy.

## 5. PROPOSED STACK

- **Application:** Next.js App Router, React, TypeScript strict, Tailwind optional for layout only; bespoke CSS for art surfaces.
- **Voice:** OpenAI Realtime GA over browser WebRTC; server-side ephemeral client secret or unified connection; never expose standard API keys. Use current official API schemas, not beta examples.
- **Rendering:** PixiJS v8 for scene composition, textures, masks, and vector geometry; custom Canvas2D/SVG stroke reveal or WebGL shaders for ink diffusion. Do not assume PixiJS's SVG parser supports text, all filters, or all clipping operations; pre-process SVG assets and test unsupported constructs.
- **Animation:** Browser `requestAnimationFrame` with deterministic timeline scheduler; CSS only for simple chrome transitions.
- **Backend:** Next.js route handlers for short HTTP operations; separate durable worker for generation and longer-running jobs.
- **Database:** PostgreSQL (managed Supabase/Neon acceptable) + Drizzle or Prisma, choose one and document why.
- **Storage:** S3-compatible object storage for assets, site artifacts, and screenshots.
- **Queue:** Durable jobs (e.g., Trigger.dev, Inngest, or BullMQ with Redis); choose based on deploy constraints. Must support retries, idempotency, cancellation, and job status.
- **Billing:** Stripe with server-side webhook signature validation.
- **Site build:** Agent abstraction, isolated sandbox provider, allowlisted dependencies, capped runtime/resources; Playwright for browser QA.
- **Auth:** Managed auth (e.g., Clerk or Supabase Auth), guest sessions before payment, safe account linking.
- **Monitoring:** OpenTelemetry-compatible traces or equivalent; Sentry optional; cost ledger.
- **Tests:** Vitest for unit, Playwright for E2E and screenshots, typecheck, lint, accessibility tooling.

Providers are replaceable behind interfaces. Select and pin versions after inspecting current official docs. No unsupported SDK method calls.

## 6. REPOSITORY STRUCTURE

```text
/app
  /(experience)/page.tsx
  /preview/[siteId]/page.tsx
  /account/page.tsx
  /api/sessions/route.ts
  /api/sessions/[id]/events/route.ts
  /api/realtime/connect/route.ts
  /api/art/plan/route.ts
  /api/sites/[id]/build/route.ts
  /api/sites/[id]/publish/route.ts
  /api/checkout/route.ts
  /api/webhooks/stripe/route.ts
/components/experience/
  PaperSurface.tsx
  InkWordmark.tsx
  WatercolorOrb.tsx
  EphemeralCaption.tsx
  LivingCanvas.tsx
  InvitationButton.tsx
  PaymentInvitation.tsx
  RevealTransition.tsx
/lib/voice/
  VoiceSession.ts
  RealtimeAdapter.ts
  MockVoiceAdapter.ts
/lib/understanding/
  schemas.ts
  extractInsights.ts
  memoryReducer.ts
  conversationPolicy.ts
/lib/art/
  sceneSchema.ts
  sceneReducer.ts
  compositionPlanner.ts
  compositionValidator.ts
  artDirector.ts
  assetPipeline.ts
  strokeScheduler.ts
  renderers/
    VectorStrokeRenderer.ts
    InkAbsorptionRenderer.ts
    WatercolorRenderer.ts
    MaterialSettlingRenderer.ts
/lib/site/
  creativeBrief.ts
  SiteGenerationAdapter.ts
  SandboxAdapter.ts
  buildWorker.ts
  qaRunner.ts
  publish.ts
/lib/billing/
  entitlements.ts
  usageLedger.ts
  stripe.ts
/lib/db/
  schema.ts
  migrations/
/public/references/
/public/textures/
/public/art-assets/
/tests/unit/
/tests/integration/
/tests/e2e/
/docs/
  ARCHITECTURE.md
  ART_DIRECTION.md
  PRIVACY.md
  RUNBOOK.md
  IMPLEMENTATION_STATUS.md
.env.example
```

Do not over-engineer file boundaries before they are needed; retain logical interfaces even if the first implementation is smaller.

## 7. EVENT MODEL AND STATE MACHINES

**Session states:** `landing -> requesting_microphone -> connecting -> asking_name -> conversing -> payment_invitation -> conversing -> preparing_reveal -> building -> revealing -> preview -> published`; additional `paused`, `recoverable_error`, and `ended` transitions. State transitions must be explicit and validated.

**Event envelope:**

```ts
type YearningEvent = {
  id: string;               // UUID, idempotency key
  sessionId: string;
  sequence: number;         // server-monotonic within session
  timestamp: string;        // ISO-8601
  type: string;             // discriminated union in implementation
  payload: unknown;         // validated by per-type Zod schema
  source: 'user' | 'voice' | 'understanding' | 'art' | 'site' | 'system';
};
```

Required typed event variants: `SESSION_STARTED`, `MIC_PERMISSION_GRANTED`, `VOICE_CONNECTED`, `USER_SPEECH_FINAL`, `ASSISTANT_SPEECH_FINAL`, `NAME_CONFIRMED`, `INSIGHT_ADDED`, `INSIGHT_CORRECTED`, `AESTHETIC_PREFERENCE_UPDATED`, `ART_OPERATION_PLANNED`, `ART_OPERATION_COMMITTED`, `ART_OPERATION_COMPLETED`, `USAGE_THRESHOLD_REACHED`, `PAYMENT_CONFIRMED`, `REVEAL_REQUESTED`, `SITE_BUILD_STARTED`, `SITE_BUILD_FAILED`, `SITE_BUILD_SUCCEEDED`, `PREVIEW_APPROVED`, `SITE_PUBLISHED`.

**Persistence:** Append event log transactionally. Keep derived snapshot of scene and memory with `lastAppliedSequence`. On reconnect, fetch snapshot + replay later events. Reject duplicates. Ensure old worker responses cannot overwrite newer scene versions.

## 8. UNDERSTANDING ENGINE

Store **explicit facts** separately from **tentative inferences**. Every memory fact has source turn IDs, confidence, visibility classification, and correction history. Do not infer sensitive identity traits unless user explicitly states them. Do not infer diagnoses from self-descriptions (e.g., “delusions of grandeur”).

```ts
type MemoryFact = {
  id: string;
  category: 'identity' | 'interest' | 'experience' | 'ambition' |
    'project' | 'aesthetic' | 'website_intent' | 'other';
  statement: string;
  sourceEventIds: string[];
  provenance: 'explicit' | 'inferred';
  confidence: number; // 0..1
  userConfirmed: boolean;
  sensitivity: 'normal' | 'personal' | 'sensitive';
  allowedForArt: boolean;
  allowedForPublication: boolean; // default false
  supersededBy?: string;
};
```

Extract periodically at semantic boundaries, not every token. Keep real-time speech path unblocked. Use schema-constrained model output, then validate with Zod. Deduplicate, merge, and track corrections. Art planner can use appropriate private facts for local display; public website requires explicit selection/approval. The user must be able to say “don't include that” and have both future planning and publication respect it.

Conversation system behavior: curious, human, non-clinical, not flattering by default; ask one question at a time; avoid interview cadence; ask clarifying questions where interpretation would otherwise be wrong. Learn site preferences naturally. Never claim the user is “fully understood.”

## 9. PERSISTENT ART SCENE GRAPH

Use normalized coordinates (`x`, `y`, `width`, `height` in 0..1) relative to a logical canvas, with viewport-specific transforms and reserved UI zones. **Do not store viewport pixels as semantic positions.**

```ts
type SceneObject = {
  id: string;
  sceneId: string;
  semanticTags: string[];
  sourceMemoryIds: string[];
  kind: 'landscape' | 'architecture' | 'figure' | 'symbol' |
    'text_fragment' | 'photo_transfer' | 'abstract_mark';
  position: { x: number; y: number };
  size: { w: number; h: number };
  zIndex: number;
  assetId: string;
  strokePlanId?: string;
  medium: 'graphite' | 'sepia_ink' | 'watercolor' | 'photo';
  palette: string[];
  state: 'planned' | 'drawing' | 'refining' | 'settling' | 'stable';
  opacity: number;
  relatedObjectIds: string[];
  protected: boolean;
  version: number;
};

type ArtOperation = {
  id: string;
  sceneId: string;
  objectId: string;
  kind: 'stroke' | 'hatch' | 'pigment_diffuse' | 'dry' |
    'erase_ghost' | 'refine' | 'connect' | 'reveal';
  startAtMs: number;  // logical scene timeline
  durationMs: number;
  seed: number;       // deterministic replay
  params: Record<string, unknown>; // validated by kind-specific schema
  priority: number;
  status: 'queued' | 'running' | 'completed' | 'cancelled';
};
```

**Art planner contract:** Inputs: recent insights, entire semantic scene summary, reserved zones, occupied area map, current aesthetic profile, active operations, user corrections, scene version. Outputs: `add_object`, `refine_object`, `connect_objects`, `update_palette`, `do_nothing`, with reason, referenced memory IDs, approximate placement, duration, and budget impact. The validator may reject plans. `do_nothing` is a valid creative choice.

**Composition validator:** Enforce name/orb protected zone; no overlap of caption safe area; preserve earlier semantic motifs; prohibit full-scene replacement; cap new visible area by adaptive budget; limit saturation and contrast; maintain balanced distribution; reject giant illustrations at early depth; reserve capacity for future subjects; ensure mobile cropping doesn't lose essential meaning.

**Density model:** Do NOT infer a numeric percent-complete from clock time. Maintain a conservative occupancy target based on meaningful subject diversity, confidence, art direction, and user-chosen finish. Early-stage heuristic: first 5–10% of a representative conversation leaves >85–90% of canvas visually unoccupied. This is an **art direction test fixture**, not a guaranteed percentage in unknown-length real conversations. As the canvas matures, prefer refinement and interconnection to indiscriminate new objects. Final art retains purposeful negative space.

**Reference fixture:** Example disclosures in order: novel idea -> Africa/Bhutan/Iranian pride -> entrepreneurship and ambition -> backpacking and dream of a better city/society -> rap and rock -> venture capital. After each disclosure, prior motifs remain; name/orb do not move; canvas remains sparse early; fine sepia architectural/explorer drawings dominate; later user aesthetic preferences can gently tint existing artwork. This fixture is a mandatory E2E test.

## 10. DRAWING AND MATERIAL RENDERER

**Critical distinction:** The renderer receives structured drawing instructions, not just a finished PNG. For curated SVG/vector assets, precompute ordered strokes and masks. For raster assets, a generated or artist-authored stroke guide must approximate physical construction; an opacity crossfade is not accepted as the primary draw animation.

**Required behaviors:**
- Ordered stroke reveal: path length sampling and progressive stroke tessellation, varied pressure/width/ink density.
- Graphite: layered contour passes, fine hatching, uneven grain, occasional faint construction lines.
- Sepia ink: absorption into fiber masks, subtle edge feathering, local pigment density.
- Watercolor: muted pigment diffusion and drying using masked textures/shaders; avoid glowing liquid blobs.
- Refinement: schedule detail passes on existing objects long after initial creation.
- Erasure: leave faint ghosts and preserve meaningful objects unless user explicitly requests removal.
- Simultaneous operations: e.g., book hatching + mountain contour + drying pigment; at most 1–3 salient moving regions at a time.
- Deterministic replay from seed and logical timestamps. Pause/resume/reconnect must not reshuffle art.
- Performance fallback: static composited canvas + limited subtle motion for low-end devices and `prefers-reduced-motion`.

**Scheduler algorithm:** Each frame, advance active operations based on monotonic elapsed logical time, clamp delta after background-tab suspension, render only dirty regions where possible, and launch next valid queued operation when motion budget permits. Keep a backlog of legitimate refinements so work feels continuous, but never fabricate personal facts or insert meaningless decorative objects merely to keep animation active. If no legitimate operation exists, material settling and near-imperceptible changes may continue; it is acceptable for the scene to become momentarily still.

**Art asset strategy:** Begin with 10–20 exquisite hand-curated vector sketches (book, mountain, backpacker, acacia, Iranian architectural motif, Bhutanese monastery, speculative city, vinyl, guitar, skyline, botanical growth, etc.), each with stroke order and refinement passes. Do not use crude emoji or icon-font substitutes. Only after the renderer passes visual review, add generated custom sketches and conversion pipelines. Every asset must have license/provenance metadata. Assets must not be pasted as big opaque rectangles.

**Typography:** Custom ink wordmark and arbitrary-name rendering are separate from art illustration. Load licensed font, support Latin and fallback scripts, preserve Unicode names, handle very long names, and never assume name `Kavon` in production. Use ink-density shader and mask transitions for wordmark replacement. Reconstruct approved font when reference is provided; don't claim generated lettering is a licensed font.

## 11. VOICE, CAPTIONS, AND CONSENT

Implement a `VoiceAdapter` with `connect`, `disconnect`, `mute`, `unmute`, `sendInstruction`, `onTranscriptDelta`, `onTranscriptFinal`, `onAudioState`, `onError`. Provide real and mock adapters. The mock must permit text-triggered scripted utterances for automated tests but not appear as the main production UI.

Use Realtime GA browser WebRTC. Server generates ephemeral session credentials or proxies the unified SDP handshake. No standard API key in client bundles. Track session ID and usage on server. Support interruption, VAD/turn detection, graceful reconnect, and permission errors. Avoid storing raw audio by default. Display transient text beneath orb, respecting live transcript revisions and preventing old captions from reappearing. Caption text must be accessible to screen readers without flooding announcements. Provide a discreet transcript access/export option in account/privacy UI if retention is enabled, without displaying a chat log on the canvas.

## 12. SITE CREATION ENGINE

Separate from collage. Inputs: explicit site intent, approved publishable facts, user-selected content, aesthetic preferences, site creative brief. Do not infer final site's visual style from sepia collage unless user requests it.

**Pipeline:**
1. Maintain versioned `SiteCreativeBrief` throughout conversation: goals, audience, information architecture, content, typography, palette, motion, interactions, reference styles, explicit exclusions, open questions.
2. Prepare assets and architecture opportunistically while conversation continues, within cost caps.
3. On finish, generate complete working code in sandbox using agent adapter.
4. Run dependency install, typecheck, lint, production build, runtime smoke tests, Playwright desktop/mobile screenshots, keyboard navigation, basic accessibility scan, and content/privacy checks.
5. If failed, bounded repair loop (e.g., max 3 attempts, configurable), log errors and cost; never claim completion until verified.
6. Store immutable build artifact and preview URL, show to user, allow conversational revisions, and version every revision.
7. Publish only after explicit approval. Support rollback and domain mapping.

**Quality bar:** No generic template with swapped copy; avoid standard portfolio sections unless desired. Must allow original structures, interactions, and visual languages. Visual critique should compare output to creative brief, but multimodal scoring is advisory, not proof of taste. Include founder-curated golden websites and human review during beta.

**Security:** Build agent runs with isolated filesystem, network restrictions, resource/time caps, dependency allowlist, no production secrets, content sanitization, and safe artifact serving. Generated code must never execute in the main app process. Protect previews and prevent unauthorized domain claims.

## 13. BILLING, ENTITLEMENTS, AND COST CONTROLS

Create configurable `free_voice_seconds`, `paid_voice_seconds`, `max_session_spend_usd`, `max_art_model_calls`, `max_site_build_attempts`, and `site_hosting_entitlement`. Server usage ledger stores provider/model, tokens/audio seconds, image calls, estimated cost, settled cost, and entitlement consumption. Enforce limits server-side, including when client disconnects. Near limit, choose natural conversational pause; at hard limit, stop new billable actions safely, preserve scene, and explain next step.

Provisional product hypothesis: 5-minute free exploration, $29 one-time creation, optional later $8–12/month hosting/ongoing updates. Prices and allowances are configurable, not validated. Stripe checkout session server-side; signed webhook is source of entitlement confirmation; idempotent processing. Never grant paid access from return URL alone.

## 14. DATA MODEL

Minimum relational tables:
- `users`, `guest_identities`, `sessions`, `session_events`, `session_snapshots`
- `memory_facts`, `memory_fact_revisions`, `aesthetic_profiles`
- `art_scenes`, `scene_objects`, `art_operations`, `art_assets`, `asset_provenance`
- `site_briefs`, `site_builds`, `site_build_checks`, `site_revisions`, `deployments`, `domains`
- `payments`, `entitlements`, `usage_ledger`, `job_runs`, `audit_events`

All session-scoped records have owner IDs and authorization checks. Use row-level security where supported. Encrypt data at rest using provider controls and secrets in managed secret storage. Define deletion cascades and asynchronous deletion of external assets/build artifacts. Back up DB and store migrations in source control. Avoid collecting precise personal information not needed for the product.

## 15. API CONTRACTS

Implement Zod-validated requests/responses, session ownership checks, CSRF/origin protections as appropriate, and rate limits:

- `POST /api/sessions`: create guest/auth session, return session and limits.
- `GET /api/sessions/:id`: session snapshot + replay cursor.
- `POST /api/sessions/:id/events`: authenticated client events; idempotency keys.
- `POST /api/realtime/connect`: establish voice session via chosen documented GA WebRTC pattern.
- `POST /api/art/plan`: server-only/worker-triggered planning; not public unrestricted LLM endpoint.
- `POST /api/checkout`: server-validated product/price, create checkout session.
- `POST /api/webhooks/stripe`: raw-body signature verification, idempotent entitlement updates.
- `POST /api/sites/:id/build`: enqueue authorized build, enforce limits.
- `GET /api/sites/:id/build`: job state, logs safe for user.
- `POST /api/sites/:id/publish`: explicit approval, authorization, deploy verification.
- `POST /api/sites/:id/revise`: conversational change request, versioned preview.
- `GET /api/users/me/export`, `DELETE /api/users/me`: privacy requests.

Adjust Next.js file placement to actual dynamic route conventions. For realtime updates use a provider-supported channel, SSE, or polling; don't build bespoke websocket infrastructure unless needed.

## 16. TESTING AND VISUAL REGRESSION

**Unit:** memory extraction merge/correction, scene reducer, protected zones, occupancy budget, scheduler deterministic timing, entitlement caps, state transitions, webhook idempotency.

**Integration:** mock voice events -> memory -> art plan -> scene operations -> render snapshot; reconnect replay; payment gate; site brief generation; sandbox failure/retry; privacy approvals.

**E2E:**
- Fresh visitor sees only wordmark/tagline/button on warm paper.
- Begin requests microphone appropriately, morphs to orb, asks for name.
- User says “Kavon”; wordmark absorbs, `Kavon.` appears at identical anchor, orb unchanged.
- Caption appears and fades, no chat bubbles.
- Scripted disclosures (novel, Africa, Bhutan, Iranian heritage, founding/ambition, backpacking, utopian city, rap/rock, VC) add cumulative imagery; earlier objects remain with stable IDs.
- At early scripted depth, page remains overwhelmingly empty.
- Drawing continues during periods with no new transcript events; older artwork gains detail.
- Aesthetic preference “I love deep burgundy” gently introduces restrained pigment without exposing color controls.
- Reconnect reconstructs same art and position.
- Payment gate preserves canvas; webhook unlocks only on verified payment.
- Completion runs real build adapter in integration environment, validates preview, requires publication approval.
- Reduced-motion, mobile, keyboard, and screen-reader modes work.

**Golden visual tests:** desktop 1440×900, laptop 1280×800, mobile 390×844; landing, post-name, early collage, evolving collage, payment invitation, reveal, site preview. Compare against approved visual references when supplied. Store screenshot artifacts in CI and make failures visible; do not silently update snapshots.

**Manual art review:** Does the paper feel real? Does the name look like ink? Is the orb subtle? Does a drawing emerge stroke by stroke? Is there generous negative space? Does older art persist? Does the composition feel curated rather than a collage of generated thumbnails? Do 5-minute and 15-minute sessions feel meditative rather than busy?

## 17. PERFORMANCE, ACCESSIBILITY, AND RELIABILITY

Targets for capable desktop hardware: 60fps typical art rendering, graceful 30fps fallback, no main-thread stalls >100ms during ordinary drawing, fast interaction response, audio unaffected by art inference. Measure actual performance; these are targets, not promises. Avoid large uncompressed textures and unbounded GPU allocations. Use DPR caps, LOD, texture caching, and offscreen work where appropriate. Pause expensive effects in background tabs without losing deterministic timeline.

Accessibility: keyboard-accessible controls, readable contrast for actionable UI (decorative drawings exempt), screen-reader equivalents for meaningful content, reduced-motion mode, caption accessibility, microphone-denied recovery, no essential interaction dependent on color alone. Keep text selectable where practical. Make privacy and payment legible, even if visually restrained.

Failure modes: microphone denied; realtime API down; asset job fails; art planner times out; tab closed mid-drawing; payment webhook delayed; sandbox crashes; website fails QA; deploy fails. Each has a recovery path that preserves user work. No blank screen or silent loss.

## 18. ENVIRONMENT AND OPERATIONS

Provide `.env.example` with documented names and required/optional status; no actual keys. Include local dev script, test scripts, DB migration/seed, mock adapters, and a single-command demo mode. Seed curated art assets and scripted conversation fixtures. Document deploy setup and job worker requirements. Log event IDs and timings but avoid sensitive transcript contents in general application logs. Maintain cost dashboards and per-user budget alarms.

## 19. IMPLEMENTATION MILESTONES AND ACCEPTANCE GATES

### M0 — Repository, reference assets, and contracts
- Scaffold app, strict TS, lint, tests, DB schema, mocks, architecture docs, visual reference inventory.
- **Gate:** `typecheck`, `lint`, `test`, and app startup succeed; mock mode needs no paid API keys.

### M1 — Extraordinary landing and name transformation
- Paper material, reference-driven ink wordmark, one tagline, one button, watercolor orb, ink absorption/name reveal, responsive safe zones.
- **Gate:** screenshot comparison and manual approval. Name and orb anchor positions stable. No generic SaaS UI.

### M2 — Working voice and ephemeral captions
- Realtime GA adapter, mock adapter, permission flow, interruptions, captions, first question/name recognition, session recovery.
- **Gate:** real mic round trip tested with credentials; automated mock tests pass; no secret leakage.

### M3 — Persistent continuous drawing engine
- Scene graph, curated vector assets with stroke order, graphite/sepia renderer, concurrent operations, deterministic replay, protected zones.
- **Gate:** 5-minute uninterrupted artist animation, old objects gain detail, no sudden finished-image pop-ins.

### M4 — Understanding and generative art direction
- Memory extractor, correction handling, aesthetic profile, scene planner, validator, cumulative test fixture, adaptive whitespace budget.
- **Gate:** scripted conversation produces coherent, cumulative, sparse collage; color enters only on disclosed preference; no UI controls.

### M5 — Site brief, sandbox generation, and QA
- Parallel site creative director, agent adapter, isolated builds, Playwright QA, preview, revision loop.
- **Gate:** generate at least two meaningfully different functional websites from different briefs, both pass build/mobile/interaction checks.

### M6 — Painterly transition and reveal
- Calm wet-pigment gathering, truthful personalized narration, build-state synchronization, reveal, failure recovery.
- **Gate:** no false progress, no reveal before build passes, transitions preserve visual continuity.

### M7 — Billing, privacy, publishing, and operations
- Stripe entitlements, usage metering, accounts, data controls, publishing, domains, observability, reliability.
- **Gate:** test purchase/webhook, spend caps, authorized publish, delete/export, retry/recovery E2E all pass.

### M8 — Artistic calibration and private beta
- Real-user observation, reference matching, asset quality curation, long-conversation pacing, performance optimization, pricing experiments.
- **Gate:** founder approves visual experience and site outputs. Automated tests alone cannot satisfy this gate.

## 20. DEFINITION OF DONE

Do not mark the product complete merely because all routes exist. Completion requires: functioning voice, fixed name/orb, ephemeral captions, cumulative and continuously drawn collage, adaptive negative space, conversation-driven aesthetic evolution, secure paid continuation, independently designed functional website generation, reliable QA, user-controlled publication, privacy and recovery, and a founder-approved artistic standard.

**Explicitly out of initial scope:** social discovery/matching, public conversation search, importing entire third-party chat histories, advanced custom domains for free guests, native mobile apps, multiplayer canvas, full unrestricted general-purpose art generation, unlimited voice. Design interfaces so these can be added later without complicating MVP.

## 21. FIRST CODEX TASK — START HERE

1. Inspect repository and available reference assets.
2. Create `docs/ARCHITECTURE.md`, `docs/ART_DIRECTION.md`, `docs/IMPLEMENTATION_STATUS.md`, and `.env.example`.
3. Scaffold Next.js/TS with a testable single-screen landing, asset slots, and strict design tokens.
4. Implement **M1 only** to founder-review quality: tactile paper, ink typography, minimal button, button-to-orb painterly transition, first-question caption mock, `yearning.` to arbitrary name transformation (demo with `Kavon.`), fixed anchors.
5. Add Playwright screenshots for desktop and mobile; add tests for name length, non-Latin fallback, reduced motion, anchor stability, and no chat UI.
6. Run all checks, capture screenshots, report exact changed files, tests, remaining deviations from approved reference, and next milestone. Do not rush into website generation before M1 looks exceptional.

## 22. REFERENCE DOCUMENTATION

- OpenAI Realtime GA: https://developers.openai.com/api/docs/guides/realtime
- OpenAI WebRTC: https://developers.openai.com/api/docs/guides/voice-webrtc
- Next.js App Router: https://nextjs.org/docs/app/getting-started
- Next.js Route Handlers: https://nextjs.org/docs/app/getting-started/route-handlers
- PixiJS Graphics: https://pixijs.com/8.x/guides/components/scene-objects/graphics
- PixiJS SVG: https://pixijs.com/8.x/guides/components/assets/svg

**End of specification.**
