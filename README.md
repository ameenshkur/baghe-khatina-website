# Baghe Khatina website

A static company site in English (`index.html`), Arabic (`ar.html`) and Sorani Kurdish (`ku.html`). Preview locally with `python -m http.server 8000`. No build step is required.

## Photography to supply

The hero and wide campaign area show provisional makeup scenes extracted from the company profile. The portrait pair and four retail frames use provisional location and product display photos from the same profile. Replace all eight with approved photographs when available. Each frame is identified by `data-photo-slot` in the HTML:

| No. | Slot | Photograph needed | Minimum size |
| --- | --- | --- | --- |
| 01 | `hero-wide` | Campaign photograph that conveys Baghe Khatina's beauty business. Keep a quiet area for the headline on the left in English and on the right in Arabic and Sorani; separate crops for RTL and mobile are ideal. | 2400 x 1350 px, 16:9 |
| 02 | `company-portrait` | Current Baghe Khatina storefront or team at a real location. | 1600 x 2000 px, 4:5 |
| 03 | `product-portrait` | Carefully arranged products actually stocked or produced by the company, with correct packaging and logos. | 1600 x 2000 px, 4:5 |
| 04 | `campaign-wide` | Environmental beauty or retail campaign scene with quiet space for a large statement. | 2400 x 1350 px, 16:9 |
| 05 | `retail-05` | Flormar storefront. | 2000 x 1500 px, 4:3 |
| 06 | `retail-06` | Baghe Khatina and Flormar storefront. | 2000 x 1500 px, 4:3 |
| 07 | `retail-07` | Inside a store, showing the shopping space. | 2000 x 1500 px, 4:3 |
| 08 | `retail-08` | A close detail of a display or product shelf. | 2000 x 1500 px, 4:3 |

Use original photographs with no text baked into the image. Keep image rights and current brand presentation verified. The profile images in slots 01 and 04 meet the requested pixel sizes but show generic makeup rather than approved campaign work. The portrait images in slots 02 and 03 are profile storefront/display scenes, 659 × 628 and 605 × 463 pixels. The images shown in slots 05–08 are only 678–1280 pixels wide, and the last is a wider store display view rather than the requested close detail. Their dates and current storefront presentation have not been verified. Brand logos remain the supplied artwork.

## Design and motion

`refresh.css` follows `styles.css` and applies the employee arrival app's active black (`#111111`), pink (`#febcc8`), white, and light gray palette. The hero and campaign section use balanced split compositions. The company pair has equal 4:5 frames with editorial number markers and caption plates. Flormar leads a compact portfolio grid, and the owned labels have a separate dark panel. Branches appear in a balanced two-column gallery. All three languages share the same structure.

Photo frames open with a short top-down curtain, slight image scale settle and growing caption rule as they enter the viewport. Cards reveal in pairs with a small stagger; the motion follows scroll position and reverses when scrolling back. `script.js` updates through `requestAnimationFrame`. Without JavaScript or with reduced motion, all photos remain visible. The home scroll cue appears after eight seconds on the hero and hides when the visitor leaves it or switches tabs.

The layout and scroll reveal were checked at 320, 390, 820, and 1440px in all three languages. English and Arabic copy use Alexandria. Sorani copy uses IBM Plex Sans Arabic. Headlines use Instrument Serif for English and Kufam for Arabic and Sorani; the Kufam file was checked for Sorani-specific letters. The copy and current contact details should be reviewed by the company before publication; Sorani should receive a native editorial review.

## Brand artwork and content provenance

The company mark, favicon and touch icon are supplied assets. Local font files include Onest, Alexandria, IBM Plex Sans Arabic, Noto Sans Arabic, Instrument Serif and Kufam with their licenses. Partner logos retain their existing SVG or PNG assets; source URLs are listed in `assets/partners/sources.json`.

The supplied English and Arabic company profiles support the Baghdad origin, Flormar relationship, distribution and retail activities, company labels and phone number. Both source PDFs were supplied outside the checkout and their embedded images are extracted into `profile-images/`, with a page-by-page thumbnail browser and editing manifest. Historic branch counts and unsupported market-share claims are omitted. The social destinations and email originate from the company website or profile and should be confirmed before publication.

## References

- [Nielsen Norman Group: Homepage Design Principles](https://www.nngroup.com/articles/homepage-design-principles/) for a clear proposition and purposeful visual hierarchy.
- [Instrument Serif project](https://github.com/Instrument/instrument-serif) for the English editorial headline typeface.
- [Kufam typeface project](https://github.com/originaltype/kufam) for Arabic and Sorani display headlines.
- [Google Chrome scroll-driven animation example](https://github.com/GoogleChrome/developer.chrome.com/blob/main/site/en/articles/scroll-driven-animations/index.md) for scroll-linked image motion.
- [W3C WAI: Reduced motion](https://www.w3.org/WAI/WCAG22/Techniques/css/C39.html) for static presentation when motion is reduced.
