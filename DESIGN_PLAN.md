# Baghe Khatina — implemented design direction

The company profile uses a light editorial composition with magenta headings and blush expertise and contact sections. The actual company mark appears on light backgrounds, preserving its supplied PNG artwork.

## Page sequence

1. Company proposition and real Baghe Khatina/Flormar storefront photography.
2. Baghdad origin and concise company background.
3. Three visible capabilities: representation, distribution and retail.
4. Nine international brand identities with descriptions of their products and relationship to the company, followed by Barbara and Lazurde as company lines.
5. Four retail photographs, complementing the two storefront photographs in the opening and company story.
6. A dedicated contact desk for phone, email and location, followed by three social account links and a compact footer.

## Typography and proportions

Alexandria remains the copy and interface font. English headings use Onest; Arabic headings use El Messiri. Large display text is reserved for the opening and section headings. Body copy, captions and navigation have separate readable scales. The company section label sits directly above its heading, removing the empty side column.

The content column is capped at 1280px. Logical properties adapt alignment and spacing for Arabic. Photo proportions, heading line breaks, logo sizes and responsive stacking are deliberately controlled.

## Brand artwork

The invented monogram favicon has been removed. The company PNG supplies the favicon and touch icon. Logo CSS applies no shadows or color filters.

The partner wall contains six genuine SVGs: Flormar, Callista, Debby, Pastel, Petite Maison and Kezy. Remaining marks use authentic PNG artwork, with source records in `assets/partners/sources.json`. Their visible weights are balanced through individual size limits.

## Interaction

The business model is readable without tabs. The portfolio has no filters. English heading lines reveal through masks; Arabic lines fade and move without masks to prevent clipped diacritics. Sections enter on scroll; photos and directional links respond to hover. Navigation highlights the section being read. Reduced-motion support cancels animations; content stays visible before JavaScript runs. Contact channels and social buttons pair vector icons with labels and adjacent directional arrows. Source and photography handoff notes remain in the README rather than the visitor-facing copy.

## Reference principles

[Puig](https://www.puig.com/en/brands/) and [L’Oréal](https://www.loreal.com/en/our-global-brands-portfolio/) informed the distinction between the company’s voice and its individual brand identities. [cosnova](https://www.cosnova.com/en) and [Beauty Corporation](https://beauty-corporation.com/) informed clear corporate content and a direct commercial contact route.

## Handoff

The product-image placeholder requires an authentic 4:5 still life. Store photographs currently come from the supplied company profile. The company’s phone and present brand relationships should be confirmed for public release. Local visual and browser checks are recorded in `README.md`.
