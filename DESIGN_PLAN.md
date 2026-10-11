# Design direction

The site is a company introduction for prospective brand partners and customers in Iraq. The layout emphasizes what Baghe Khatina does, which brands it represents, where its stores fit, and how to contact the team.

## Composition

- A balanced split hero reserves half its width for campaign photography. A wide profile makeup scene fills it provisionally.
- Two equal portrait frames follow the company story: a Baghe Khatina/Flormar location and an in-store product display from the profile. Both are provisional low-resolution photos pending the requested new shoots.
- A wide profile makeup scene creates one visual pause between expertise and the brand portfolio.
- The branch section uses a balanced two-column gallery with numbered captions. Each photo opens as its row enters the viewport, with a short, paired scroll reveal and slight image depth. Profile photographs provide provisional content.
- Contact methods share one three-column band, followed by a consistent social row.

The hero, visual interlude, portrait pair and four retail slots show existing profile photographs provisionally. See README.md for the eight-photo brief and source limitations.

## Interaction

The paired portrait and branch frames reveal with a brief top-down image curtain, a restrained scale settle and caption rule. The pair follows a slight stagger; the effect tracks scroll position and reverses on upward scroll. Motion is scheduled with `requestAnimationFrame`; without JavaScript or with reduced motion, the images remain visible. The delayed hero cue retains its eight-second behavior.

English display headlines use Instrument Serif; Arabic and Sorani display headlines use Kufam, checked for Sorani-specific glyph coverage. Alexandria remains the English and Arabic copy face, and IBM Plex Sans Arabic remains the Sorani copy face.

## Research basis

- [Nielsen Norman Group: Homepage Design Principles](https://www.nngroup.com/articles/homepage-design-principles/) informed the clear hierarchy and purposeful imagery.
- [Google Fonts: Instrument Serif](https://github.com/Instrument/instrument-serif) informed the English headline choice for its contemporary display serif construction.
- [Google Fonts: Kufam](https://github.com/originaltype/kufam) informed the Arabic and Sorani headline choice for its Kufi-inspired Arabic and Latin forms.
- [Google Chrome: Scroll-driven animations](https://github.com/GoogleChrome/developer.chrome.com/blob/main/site/en/articles/scroll-driven-animations/index.md) informed the scroll-linked image treatment.
- [W3C WAI: Reduced motion](https://www.w3.org/WAI/WCAG22/Techniques/css/C39.html) informed the static fallback.
