# M1 visual review · revised after rejection

The first implementation at commit 462b504 was rejected by the founder. Its functional tests passed, but its aesthetic did not meet the image guidance. Those screenshots are retained in Git history, not used as a visual baseline.

## Reference and current captures

The supplied reference is a 1671×941 warm cotton-paper landing with long ink descenders, a handwritten poetic line and a textured watercolor Begin wash. The current browser matrix includes that exact viewport, plus 1440×900, 1280×800 and 390×844. Landing and post-name captures are retained in docs/review.

| Element | Rejected first revision | Current revision |
| --- | --- | --- |
| Paper | Faint procedural noise on a mostly flat surface | Cotton-fiber material image, deckled layers, soft edge shadows and peripheral muted pigment |
| Wordmark | Pale, uniform Pinyon font treatment | Separate textured ink illustration, warm sepia/plum variation and prominent y/g descenders |
| Supporting lettering | Small thin type disconnected from the composition | Larger airy italic, with spacing and placement checked at the reference viewport |
| Invitation | Blurry overlapping radial circles | Transparent granulated watercolor with visible tide marks and irregular capillary edges |
| Composition | Rough center alignment without matching the reference's material balance | Reference-proportioned wordmark, tagline and wash at approximately 38%, 51% and 69.5% vertical anchors |
| Mobile | Simplified paper and generic wordmark | Separate portrait paper artwork, retained material scale and safe letterform margins |
| Landing additions | Visible study footer | Only wordmark, tagline and Begin visible; mock disclosure remains accessible |
| Name reveal | Live script text with a font mismatch | Delicate live Cormorant italic with ink density; generated-wordmark/live-font difference still disclosed |

## Approval boundary

The generated paper, wordmark and watercolor are review candidates, not the original founder-approved source assets. They are committed separately so the application remains interactive; the page is not a flattened image. Arbitrary names remain live Unicode text.

The original reference image is visually available in the conversation but not as an imported source binary. Spatial proportions and material language were compared visually; no exact pixel-match score or approved golden baseline is claimed. Do not auto-accept screenshots. Founder approval is still required for M1.

The functional browser suite additionally checks actual material image decoding, absence of added landing chrome, keyboard access, no audio/API collection, name overflow, reduced motion, caption expiry, accessibility and stable anchor positions. These checks protect functionality and reviewability; they do not prove artistic approval.
