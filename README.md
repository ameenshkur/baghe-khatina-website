# Baghe Khatina website

A bilingual English/Arabic starter website based on the supplied company profiles. It is a static site, so no build step or dependencies are needed.

## Develop locally

Run `python -m http.server 8000` in this folder and open `http://localhost:8000`. Edit `index.html`, `ar.html`, and `styles.css`. Images are in `assets/`.

## Publishing

GitHub Pages publishes the repository root from the `main` branch. Every push to `main` updates the site. The `.nojekyll` file ensures GitHub serves the static files directly.

## Content notes

- The site paraphrases the English and Arabic company profile PDFs. The source PDFs are not committed.
- The 75+ branch count and brand relationships are taken from the profiles and may need confirmation before a full production launch.
- The profile's 100-branch goal was for the end of 2025; the site labels it as a historical target.
- Social account names appear as text because the PDFs do not specify verified URLs.
- The photos are extracted from the supplied English profile PDF.
