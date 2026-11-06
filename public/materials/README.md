# Reference-driven material assets

Generated for this project with OpenAI image generation after the founder rejected the first procedural implementation. These are newly generated illustrations, not original founder-approved assets and not a font reconstruction. No third-party stock photography or stock UI graphics are used.

- `cotton-paper.webp`: landscape cotton-paper background. Generation was guided by the user-supplied original reference and a detailed material description. Blank center; typography remains separate and interactive.
- `cotton-paper-mobile.webp`: portrait adaptation of that generated landscape paper, generated separately to preserve natural texture and deckled composition rather than stretching/cropping desktop paper.
- `yearning-ink.webp`: transparent illustration of the wordmark, with ink texture and natural swashes. The accessible heading still contains the brand name. Arbitrary personal names remain live Unicode text, using a licensed italic font with a fiber-density filter; no arbitrary-name font was synthesized or claimed.
- `watercolor-bloom.webp`: transparent pigment wash, with granulation and capillary tide edges. Shared by the invitation and the anchored orb. No static full-page screenshot is used as the application.

WebP conversion uses Sharp at quality 94, alphaQuality 100 where applicable, without compositing a background into the transparent artwork. Original generated PNGs are retained outside the checkout in /workspace/generated_images on the current machine; production uses only the committed optimized WebP assets. File hashes and generation provenance are recorded in provenance.json. No asset is described as founder-approved until it actually is approved.
