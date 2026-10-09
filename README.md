# Baghe Khatina company profile

English and Arabic static company website. Open `index.html` or `ar.html`, or preview with `python -m http.server 8000`. No build step is required.

## Design and identity

- Actual company PNG from the employee arrival app, proportionally resized for web use and displayed without shadows, outlines, recoloring or inversion. The favicon and Apple icon use that same artwork.
- [Alexandria](https://fonts.google.com/specimen/Alexandria) for copy, interface text and Arabic headings. [Onest](https://fonts.google.com/specimen/Onest) for English headings. All fonts and licenses are local.
- A full-width opening pairs a deep pink company panel with actual store photography. Two direct calls to action lead to brands and partnerships; a company-specific down arrow leads into the profile. Home appears in both navigation menus and participates in active section tracking.
- Magenta display accents, blush expertise and contact sections, all six store photos from the profile, and a clean partner wall with individual brand and relationship descriptions.
- No partner filters, tabbed business panels, invented monograms, generic model images or animated statistics.
- Logical layout properties, mirrored directional arrows, keyboard-accessible menus and reduced-motion behavior.

## Logo artwork

The logo wall uses authentic artwork. SVGs contain original paths, not traced bitmaps or raster images embedded in SVG wrappers. White variants of Callista and Debby are rendered in dark monochrome without changing their outlines. Pastel and Petite Maison paths were extracted directly from their original brand publications.

| Brand | Website asset | Artwork source |
| --- | --- | --- |
| Flormar | SVG | [Official website](https://www.flormar.com/) |
| Callista | SVG | [Official website](https://callistabeauty.co/en/) |
| Debby | SVG | [Official website](https://debbymakeup.it/), current wordmark |
| Pastel | SVG | [Pinkar brand catalogue](https://pinkar.com/catalog/Pastel_Katalog.pdf), cover paths |
| Petite Maison | SVG | [BFF brand publication](https://beautyff.com/pdf/1.pdf), cover wordmark paths |
| Kezy | SVG | [Official website](https://www.kezy.it/en) |
| Vagheggi | PNG | [Official website](https://www.vagheggi.com/en/) |
| Urban Care | PNG | [Official website](https://www.urbancare.com.tr/) |
| Paris Bleu | PNG | [Official website](https://www.parisbleu.com/) |
| Barbara and Lazurde | PNG | Supplied English company profile, page 8 |

Logo display sizes are balanced by their visible proportions, rather than scaling every differently shaped mark to the same width. Exact asset URLs are preserved in `assets/partners/sources.json`. Original profile extractions are retained in `assets/brand-logos/` as source files.

## Company content

The supplied English and Arabic PDFs provide the Baghdad origin, Flormar introduction, distribution and retail background, company lines and Baghdad phone number. Store photography was extracted from page 9 of the English PDF.

The older [company page](https://www.baghekhatina.com/aboutus.html) and [business page](https://www.baghekhatina.com/business.html) support the broad retail, wholesale and representation model. Their historic contact and branch figures differ from the PDF, so those records are not combined into a current count. Unsupported market-share and first/largest claims are omitted.

The portfolio note identifies its documentary source and offers a route to confirm current availability. Before public release, the company should verify its phone and current brand relationships.

## Remaining photography

The visible placeholder is for an authentic product still life: **4:5 portrait, at least 1600 × 2000px**, accurate packaging and logos, clean lighting and no text baked into the photograph. It should feature actual stocked or company-developed products.

Current exterior/interior photography can replace the profile images if available: **3:2 landscape, at least 1800 × 1200px**. Provide a wider **16:9** storefront photograph for the opening strip if possible.

Original SVGs for Vagheggi, Urban Care, Paris Bleu, Barbara and Lazurde would improve future asset handoff. Their current assets are honestly identified as raster artwork.

## Local review

The opening redesign was checked in both languages at 320, 375, 821, 1024 and 1440px, with screenshots reviewed at mobile and desktop sizes. No horizontal overflow or overflowing hero headings. Home highlights on entry; the down arrow moves to Company and updates the active section. Arabic headings have no clipping mask; their whole lines fade and move into view, preserving diacritics. Reduced motion leaves no running animations. JavaScript syntax and Git whitespace checks pass.

The opening references the prominent imagery and short brand positioning of [Puig](https://www.puig.com/en/) and [cosnova](https://www.cosnova.com/en/). The down-arrow motion takes inspiration from the portfolio's scroll cue, with the company palette, an integrated label and a native anchor. The arrow moves for three cycles rather than indefinitely.

## Motion and contact sources

[Motion on GitHub](https://github.com/motiondivision/motion) and its [inView documentation](https://motion.dev/docs/inview) informed viewport entrances and transform/opacity animation. This static site implements them with native IntersectionObserver and Web Animations, without a runtime dependency. Whole heading lines preserve Arabic joining; content remains readable without JavaScript. Active navigation updates once per animation frame. Contact and social icons use local SVGs from [Tabler Icons](https://github.com/tabler/tabler-icons), with the MIT license in `assets/icons/LICENSE`.

The profile footer names Instagram accounts `baghekhatina` and `flormar_iraq`, and a Facebook page called Baghe khatina iraq. The Facebook destination is taken from the existing company website. Email `info@baghekhatina.com` also comes from that website. Instagram/Facebook block automated verification; account ownership and current activity could not be independently confirmed. No corporate LinkedIn destination was established, so none is invented. These source-backed links are included for company review.
