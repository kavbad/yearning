# Development

Use the existing /workspace/yearning checkout; every cloud task is already isolated. Do not create a worktree unless explicitly requested.

Node 24; `npm ci` then `npm run demo`. No keys or services are needed. Begin transforms the invitation into an orb and displays the mocked first question. Choose “Try a name”, enter any name, and submit. This is a visual study, with no real voice or recording. “Begin again” reloads and resets it. No user data is persisted.

Checks: `npm run typecheck`, `npm run lint`, `npm test`, `npm run build`, `npm run test:e2e`. Browser testing uses system /usr/bin/chromium; elsewhere run `npx playwright install --with-deps chromium` and `PLAYWRIGHT_USE_BUNDLED=true npm run test:e2e`. Screenshot and HTML-report artifacts are generated in test-results/ and playwright-report/ and uploaded by CI. Do not treat newly generated screenshots as approved reference baselines.

Production smoke: `npm run build`, `npm start`, then request `/` locally and exercise Begin/name in a browser. Webpack is explicitly selected for repeatable compilation in this managed environment. Local servers and browsers require process/network capabilities in this command sandbox.

`npm run db:generate` regenerates the initial PostgreSQL schema migration if the schema changes. Demo does not apply it or require a database. Production database migration execution, auth/RLS and ownership enforcement are deliberately deferred; do not deploy this schema as a complete product backend.

No paid integrations are configured. For M2, inspect current official OpenAI GA WebRTC docs and implement a server credential boundary before requesting live credentials. Deploy/queue/storage/billing configuration is deferred to the corresponding milestone.

Browser suite builds and starts production code (`npm run test:e2e`), avoiding development hot reloads during screenshots. Typecheck first generates Next.js route types so it also works from a fresh checkout.

The reference correction adds no dependencies or services. Material artwork lives in public/materials with provenance. The browser matrix now includes the original reference size (1671×941), and all eight landing/name captures are retained in docs/review. For a guaranteed fresh production test, stop only app servers you started and use `CI=true npm run test:e2e`; the suite then refuses to reuse an existing server. Do not treat the rejected first revision's screenshots as approved baselines.
