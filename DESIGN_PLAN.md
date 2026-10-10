# Design direction

The site is a company introduction for prospective brand partners and customers in Iraq. The layout emphasizes what Baghe Khatina does, which brands it represents, where its stores fit, and how to contact the team.

## Composition

- A text-led hero reserves a wide photographic field. The current field is a labeled placeholder.
- Two equal portrait frames follow the company story: a current location and a product still life.
- A wide campaign frame creates one visual pause between expertise and the brand portfolio.
- The branch section uses four equal landscape frames in a two-column grid. Numbered captions identify each scene.
- Contact methods share one three-column band, followed by a consistent social row.

All image slots use restrained solid-color placeholders, without generated images or decorative imitations of products. See README.md for the eight-photo brief.

## Interaction

The branch and company frames move in proportion to scrolling: a small rise, scale and opacity change resolves as each frame enters view, then reverses on upward scroll. The work is scheduled with `requestAnimationFrame` and uses only transforms and opacity. Static content is the default without JavaScript and when reduced motion is requested. The delayed hero cue retains its portfolio-inspired eight-second behavior.

## Research basis

- [Nielsen Norman Group: Homepage Design Principles](https://www.nngroup.com/articles/homepage-design-principles/) informed the clear hierarchy and purposeful imagery.
- [MDN: Scroll-driven animation timelines](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines) informed the choice to make motion respond to scroll progress rather than play as a fixed entrance sequence.
- [W3C WAI: Reduced motion](https://www.w3.org/WAI/WCAG22/Techniques/css/C39.html) informed the static fallback.
