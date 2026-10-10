# Baghe Khatina website

A static company site in English (`index.html`), Arabic (`ar.html`) and Sorani Kurdish (`ku.html`). Preview locally with `python -m http.server 8000`. No build step is required.

## Photography to supply

All content-image areas now contain plain, labeled placeholders. The image slots are identified by `data-photo-slot` in the HTML. Please provide eight approved photographs:

| No. | Slot | Photograph needed | Minimum size |
| --- | --- | --- | --- |
| 01 | `hero-wide` | Campaign photograph that conveys Baghe Khatina's beauty business. Keep a quiet area for the headline on the left in English and on the right in Arabic and Sorani; separate crops for RTL and mobile are ideal. | 2400 x 1350 px, 16:9 |
| 02 | `company-portrait` | Current Baghe Khatina storefront or team at a real location. | 1600 x 2000 px, 4:5 |
| 03 | `product-portrait` | Carefully arranged products actually stocked or produced by the company, with correct packaging and logos. | 1600 x 2000 px, 4:5 |
| 04 | `campaign-wide` | Environmental beauty or retail campaign scene with quiet space for a large statement. | 2400 x 1350 px, 16:9 |
| 05 | `retail-landscape` | Flormar storefront. | 2000 x 1500 px, 4:3 |
| 06 | `retail-landscape` | Baghe Khatina and Flormar storefront. | 2000 x 1500 px, 4:3 |
| 07 | `retail-landscape` | Inside a store, showing the shopping space. | 2000 x 1500 px, 4:3 |
| 08 | `retail-landscape` | A close detail of a display or product shelf. | 2000 x 1500 px, 4:3 |

Use original photographs with no text baked into the image. Keep image rights and current brand presentation verified. The old extracted store photographs remain in `assets/stores/` as source material but are no longer displayed in these slots. Brand logos remain the supplied artwork.

## Design and motion

`refresh.css` follows `styles.css` and contains the current editorial layout. The company pair has equal 4:5 frames. The branch gallery has four equal 4:3 frames. The contact methods and social links use consistent columns rather than a floating panel. All three languages share the same structure.

Media frames respond to scroll progress through the small `requestAnimationFrame` controller in `script.js`: they rise and settle as they enter view, and reverse when scrolling back. Without JavaScript, frames remain fully visible. Reduced-motion users see static frames. The existing home scroll cue appears after eight seconds on the hero and hides when the visitor leaves it or switches tabs.

The layout was checked at 320, 390, 820 and 1440px in all three languages. The copy and current contact details should be reviewed by the company before publication; Sorani should receive a native editorial review.

## Brand artwork and content provenance

The company mark, favicon and touch icon are supplied assets. Local font files include Onest, Alexandria, IBM Plex Sans Arabic and Noto Sans Arabic with their licenses. Partner logos retain their existing SVG or PNG assets; source URLs are listed in `assets/partners/sources.json`.

The supplied English and Arabic company profiles support the Baghdad origin, Flormar relationship, distribution and retail activities, company labels and phone number. Historic branch counts and unsupported market-share claims are omitted. The social destinations and email originate from the company website or profile and should be confirmed before publication.

## References

- [Nielsen Norman Group: Homepage Design Principles](https://www.nngroup.com/articles/homepage-design-principles/) for a clear proposition and purposeful visual hierarchy.
- [MDN: Scroll-driven animation timelines](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines) for motion tied to scroll progress.
- [W3C WAI: Reduced motion](https://www.w3.org/WAI/WCAG22/Techniques/css/C39.html) for static presentation when motion is reduced.
