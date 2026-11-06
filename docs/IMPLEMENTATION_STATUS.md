# Implementation status

## Current scope and artistic status

M0 foundation plus M1 visual study. M2–M8 remain unimplemented. The complete supplied specification is retained verbatim beside this report.

The founder rejected the first landing at commit 462b504. Its functional tests passed, but its font/noise/gradient interpretation missed the supplied image. That version is not an approved baseline. The current revision rebuilds the landing around the reference's physical paper, ink, watercolor and composition. Founder artistic approval remains OPEN.

## Current M1 revision

- Separate generated landscape cotton-paper material, transparent textured ink wordmark and transparent watercolor pigment wash. No UI text or controls are baked into the paper background.
- Independently generated portrait paper for mobile; preserved deckled edges, physical fibers and corner pigment without desktop image splicing.
- Reference-proportioned wordmark and prominent descending y/g swashes, lighter supporting italic, larger granulated watercolor invitation and generous whitespace.
- Initially only wordmark, tagline and Begin are visible. Mock disclosure is accessible through Begin and appears visibly after activation.
- Shared pigment surface gathers into a small organic orb; no abrupt switch to a different asset.
- Outgoing illustrated wordmark absorption and live arbitrary-name reveal. Name/orb anchors stay fixed; reveal settles only after the lettering is fully visible.
- Selectable Unicode names, long-name handling, system-script fallbacks, keyboard operation and reduced motion remain supported.
- Pinyon is retired from the UI. Cormorant Garamond Italic supplies live names/supporting text with fiber-density treatment. This font is not claimed to match the illustrated wordmark exactly.
- Source descriptions, generated-asset status, hashes and format conversion are recorded in public/materials. These assets are candidates, not original founder-approved sources.

## Final verification of this revision

- `npm run typecheck`: passed, including Next.js route-type generation.
- `npm run lint`: passed.
- `npm test`: all 15 unit tests passed; no skips.
- `CI=true npm run test:e2e`: production build passed, all 16 browser tests passed; no skips. The prior app server was stopped first, so the suite used a fresh production server rather than stale application code.
- Browser matrix: exact reference size 1671×941, desktop 1440×900, laptop 1280×800, mobile 390×844.
- Browser coverage: material assets decode successfully; minimal initial screen; accessible mock disclosure; keyboard Begin; first question; Kavon reveal; unchanged name/orb bounding boxes; no chat log; no page errors; zero axe violations on post-name surface; no viewport scrolling; Arabic/CJK/long names; reduced motion; no API/audio collection; caption expiry.
- Eight current captures are retained in docs/review: landing/post-name at all four viewports. Desktop reference-size, mobile and name captures were visually inspected; the heavier experimental italic was rejected internally and replaced before the final suite.
- No approved golden baseline or exact pixel-match score is claimed. The original reference was visually supplied in the conversation; its original binary is not available for automated image diffing.

## M0 retained foundation

Next.js App Router, React, strict TypeScript, exact dependency pins, npm lockfile, Node 24, runtime name validation and explicit experience reducer. VoiceAdapter and text-driven MockVoiceAdapter require no paid keys. Initial Drizzle PostgreSQL schema/migration covers users, sessions, ordered events and snapshots. The database is not connected or migrated, and full product tables, auth/RLS and server persistence are deferred. CI retains browser review artifacts; no hosted CI run is claimed by these local results.

The original frozen dependency reinstall and database migration generation passed during M0. This revision adds no dependencies or service requirements. Reusable installation/startup instructions remain valid.

## Remaining limitations

- Founder visual approval is still required. Do not call the artistic gate passed because the functional suite is green.
- Original approved isolated wordmark, paper, orb and intended arbitrary-name typography remain unavailable. Newly generated candidate materials and exact reproduction needs are documented in ASSET_REQUESTS.md, ART_DIRECTION.md and VISUAL_REVIEW.md. Missing originals are not used to justify simplifying the supplied visual guidance.
- Live-name font and generated wordmark letterforms differ. Cross-platform Arabic/CJK typography relies partly on OS fallbacks.
- No real voice/audio, microphone access, persisted conversation, continuous drawing, billing, generated website, deployment or publication is implemented. Names remain memory-only in this review study.
- No physical fluid simulation, original font reconstruction, or exact recreation of approved ink shaders is claimed.

## Environment reuse

Saved install_script and start_skill prepare/build/start the app in the existing checkout without worktrees. They require no changes for this revision. Processes do not survive snapshots. Draft persistence was previously confirmed; configuration publication and fresh-task restoration are not claimed. Run `npm run demo` for development or `npm start` for the current production build. See RUNBOOK.md.

## Next task

Founder review of the revised reference-size/mobile screens and interactive name transition. Continue artistic calibration or incorporate approved source assets based on that review. Do not advance into live voice or website generation merely because the functional checks pass.
