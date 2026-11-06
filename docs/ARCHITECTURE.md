# Architecture · M0/M1

Next.js App Router, strict TypeScript, React, bespoke CSS, separately layered image materials and a deterministic SVG ink-density filter. Exact dependency versions are in package.json and package-lock.json. Node 24 is used in development and CI. All fonts are self-hosted; the landing has no external runtime requests.

The experience reducer permits landing → morphing → asking_name → absorbing → conversing. Invalid transitions are ignored. Zod validates arbitrary Unicode names before state changes. Display punctuation preserves existing terminal punctuation. Protected viewport anchors use one visualConfig source and responsive safe zones; neither text length nor caption changes reposition them.

The VoiceAdapter interface and MockVoiceAdapter define the next milestone boundary. M1 uses only this explicitly disclosed mock, without microphone access, network calls, audio, or fabricated live speech. The temporary name entry is revealed only after Begin. The reference-driven landing visibly contains only the illustrated wordmark, tagline and Begin; the mock disclosure is attached accessibly to Begin and shown after activation.

Material assets in public/materials are generated, optimized WebP with alpha where needed. Desktop and mobile use distinct paper compositions. Wordmark and pigment are separate from paper and interactive controls; the application is not a full-page screenshot. All production assets are self-hosted. Provenance records distinguish generated review candidates from unavailable approved originals. Initial material preloads and browser image-decode assertions prevent empty-asset screenshots. It is not the planned production voice UI. Nothing is uploaded or persisted in M1; reloading resets the study.

Drizzle is selected over Prisma for a small, typed, SQL-visible PostgreSQL contract and reviewable migrations. M0 includes users, sessions, append-only event shape, per-session sequence uniqueness, and snapshots. No active database, guest authentication, event API, ownership enforcement, RLS, transaction replay, or full product tables are claimed. Those must precede server persistence. DATABASE_URL is intentionally unnecessary for M1.

Later interfaces: real WebRTC GA voice in M2; normalized semantic scene and deterministic stroke scheduler M3; fact provenance and conservative art planning M4; isolated site builds and durable jobs M5. Worker, storage, auth, queue and deploy providers remain undecided until those milestones. No fake endpoints are exposed.

Security: name validation rejects control characters and markup; React escapes text. No paid credentials, client API secrets, transcript logging, analytics, raw audio, automatic publishing, or generated code execution exist in this milestone.
