# Art direction · reference correction

The founder rejected the first M1 landing. Its generic font treatment, faint procedural paper, blurred radial washes and extra footer copy did not match the supplied reference. Functional test results did not satisfy the artistic gate. The current revision uses the image's material, composition and expressive ink as the visual target.

## Current material system

- Landscape paper is a generated cotton-paper image with physical fibers, softly lit deckled edges and muted rose, slate and ochre around the perimeter. The center remains blank. No text, buttons or other UI are baked into it.
- Mobile uses a separately generated portrait composition of the same paper. It keeps natural material scale and peripheral pigment rather than stretching or slicing the desktop image.
- The `yearning.` wordmark is a separate transparent illustration: uneven sepia/plum ink density, open italic letterforms, a long descending y and flourishing g. It is no longer a generic font rendered with a tint. It is newly generated review artwork, not the original approved wordmark or a reconstructed licensed font.
- Arbitrary names remain real selectable Unicode text, using self-hosted OFL Cormorant Garamond Italic with a fiber-density filter and muted umber/plum variation. The name font is not claimed to be identical to the illustrated wordmark. Pinyon, used in the rejected first revision, is retired from the UI.
- The invitation and voice orb share one transparent watercolor image. It contains irregular capillary edges, pigment pooling, granulation and overlapping rose/ochre/indigo washes. The initial wash gathers into a smaller, more circular organic shape without an abrupt asset replacement. There is no blurred gradient orb.

## Reference composition

The exact 1671×941 reference viewport is now included in browser QA, in addition to desktop, laptop and mobile. The name anchor is centered at 38% of viewport height, tagline around 51%, and invitation at 69.5%. Wordmark artwork occupies approximately 36% of viewport width before its transparent margins. The initial screen has only the wordmark, tagline and Begin visibly present. The mock disclosure is accessible through Begin's description and becomes visible after activation.

The supporting tagline and Begin use the lighter Cormorant italic, avoiding the heavier experimental Fell italic. An internal review rejected that heavier face before final capture. On mobile, the name anchor is 37% and invitation 66.5%, with safe space for calligraphic descenders and captions. Name changes do not reposition either anchor.

## Motion and review boundaries

Spatial absorption and reveal masks transition from the wordmark artwork into live name text. The reveal finishes before the state settles so QA captures a complete name. Pigment layers drift subtly within the fixed orb. Reduced motion removes these animations.

Material provenance, hashes, source descriptions and conversion details are in public/materials. These images are generated candidates. Original founder-approved isolated assets remain unavailable; founder visual approval remains OPEN. Exact pixel comparison is not claimed without the original source binary. Review the actual captured screen rather than treating assets, unit tests, or layout assertions as evidence of artistic acceptance.
