# Implementation status

## Scope

Read the complete supplied YEARning_CODEX_SPEC.md; retained verbatim beside this report. Implemented the M0 foundation and an M1 founder-review candidate. M2–M8 are intentionally unimplemented. The product is not complete.

## M0 — verified for the local mock workflow

- Next.js App Router, React, strict TypeScript, exact dependency pins and npm lockfile; Node 24.
- Bespoke surface components; visualConfig tokens; runtime-validated names and explicit state reducer.
- VoiceAdapter contract and deterministic, text-driven MockVoiceAdapter; no paid API keys or microphone required.
- Initial Drizzle PostgreSQL schema and generated migration: users, sessions, ordered events, snapshots. Not connected or applied to a database; full product schema and authorization are deferred.
- Vitest, Playwright, axe, production build, CI artifact retention; self-hosted OFL fonts and provenance hashes.
- Architecture, art direction, runbook, privacy boundary, visual inventory, exact changed-file manifest, asset requests and original specification.

## M1 — implemented, artistic gate pending founder approval

- Tactile procedural paper, restrained peripheral pigment, calligraphic lettering with ink density treatment.
- Single tagline and Begin invitation, continuous shared watercolor surface contracting into a small orb.
- Mock first question, disappearing ephemeral caption, post-Begin demo name entry; no landing textbox or chat log.
- Spatial name reveal and outgoing ink absorption; fixed name/orb anchor containers.
- Arbitrary Unicode names, long-name wrapping/scaling, keyboard access, mobile safe zones and reduced motion.
- Six current candidate screenshots retained in docs/review: landing/post-name at 1440×900, 1280×800, 390×844. Visually inspected desktop and mobile candidates; mobile calligraphic overhang corrected.

## Final verification

- `npm ci --ignore-scripts`: passed; lockfile reproduces the dependency set.
- `npm run typecheck`: passed, including route-type generation.
- `npm run lint`: passed with no errors.
- `npm test`: 15 tests passed, no skips.
- `npm run test:e2e`: production build passed, all 12 browser tests passed, no skips.
- Browser coverage: initial minimal surface, keyboard Begin, first question, Kavon reveal, exact unchanged name/orb bounding boxes, no chat log, no page errors, zero axe violations on named surface, no viewport scrolling, Arabic/CJK/long names, reduced motion, no API requests, mock disclosure, caption expiry.
- `npm run db:generate`: initial SQL migration generated successfully; no database integration test claimed.
- App startup verified by Playwright production webServer and functional browser interactions.

## Diagnosed earlier failures

Initial sandboxed server/build attempts lacked required process/network capabilities. Running supported commands outside the command sandbox resolved compiler/server execution. The default Turbopack development path displayed a static page but did not advance Begin; Webpack development and production paths were verified and explicitly selected. An earlier mobile test was interrupted by a dev-server restart during formatting; final acceptance runs use stable production code. A lint violation from synchronous effect state updates was fixed by clearing state in the transcript callback. These earlier results are superseded by the complete passing final run, not hidden or accepted failures.

## Remaining limitations

- M1's screenshot comparison/manual approval gate is OPEN. Candidate captures are not approved golden baselines. The conversation reference was visually available but its original binary was not available for automated pixel comparison.
- Approved isolated wordmark, paper, orb, and arbitrary-name typography are missing. Current assets are explicitly temporary approximations. See ASSET_REQUESTS.md and VISUAL_REVIEW.md for exact deviations.
- Unicode font coverage partly relies on OS fallback fonts; the local machine has Arabic and CJK fonts. Brand-approved cross-platform fallback typography still needs selection.
- No real voice, live audio, recording, saved conversation, art scene, paid billing, generated website, deployment, or publication is claimed. Name state is intentionally memory-only in this review study.
- No fluid simulation or exact approved ink shader reproduction is claimed. Procedural masks and pigment layers need founder calibration with source assets.
- The full product database, workers and provider integrations are future milestones. Initial SQL has not been migrated into a live database.
- CI is configured, but no hosted CI run is claimed by local validation.

## Environment reuse

Saved `install_script` and `start_skill` in the environment draft. They install with the frozen lockfile, generate types/build, and start the mock application in the existing checkout without creating worktrees. Saving is confirmed; the draft is not applied or published by that save. Review and save in environment settings, then publish the prepared environment when desired. Fresh-task restoration has not been independently verified.

## Next task

Founder review of docs/review screenshots and the interactive M1 study; supply/approve the missing reference assets and calibrate typography, texture and pigment. Only after that artistic review proceed to M2's real GA WebRTC permission/voice/caption/recovery work and exercise an actual microphone round trip with credentials.
