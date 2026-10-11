# Company profile image handoff

The complete embedded-image extraction from the two supplied 10-page PDFs is now in `extracted/english/` and `extracted/arabic/`. The English profile has **37 image placements** and the Arabic profile has **38**. Each language folder has page-numbered subfolders, a `manifest.csv` with original pixel sizes and PDF object IDs, and an `index.html` thumbnail browser. Some artwork repeats on several pages and in both language editions; it is intentionally retained at every placement so nothing is omitted.

`branches/original/` contains the six unchanged store JPEGs also used in the site. `brand-marks/original/` contains the eleven raster brand marks retained from earlier profile work. The root `manifest.csv` lists these 17 quick-access files, their pixel dimensions, and editing notes.

To repeat the extraction with a revised profile PDF, run:

```powershell
python tools/extract_profile_images.py "C:\path\to\company-profile.pdf" --output profile-images/extracted/revised
```

The script writes every embedded image placement to a page-numbered folder with a manifest and thumbnail browser. Keep revised exports separate so the existing site photos remain untouched.

## What is where

| Profile page | Content to review | Editing use |
| --- | --- | --- |
| 1 | Wide makeup flat lay, 3707 × 2085 | Possible campaign reference; the visible packaging is generic and should be approved before site use. |
| 2–4 | Beauty portraits | Campaign reference only; these do not show company staff. |
| 7, Arabic edition | Wide unbranded skincare scene, 3000 × 1307 | Possible campaign reference; verify usage rights. |
| 8 | Brand marks and background | Compare marks with current official artwork before publishing. |
| 9 | Six Baghe Khatina and Flormar store photographs | Best starting point for branch slots 05–08. |
| 10 | Wide makeup flat lay, 2998 × 1688 | Possible campaign reference with open space for text. |

The website currently uses the wide images from English pages 1 and 10 provisionally in slots 01 and 04. Approved campaign imagery can replace `assets/campaign/profile-hero.jpeg` and `assets/campaign/profile-interlude.jpeg` without changing the layout.

## How to prepare the branch photos

1. Edit copies of the files in `branches/original/`; keep those originals unchanged.
2. Correct perspective, exposure, white balance, glare, and noise. Preserve real signage, logos, product packaging, architecture, and people. Avoid synthetic text or invented products.
3. Export a 4:3 crop for each website branch slot. For slots 05–08, aim for at least **2000 × 1500 px** from the original camera files. Enlarging these small PDF extracts alone does not restore true detail.
4. Name the approved exports `retail-05.jpg` through `retail-08.jpg` and place them in `assets/stores/approved/`. Replace the matching `src` values in `index.html`, `ar.html`, and `ku.html`.

| Website slot | Current profile source | What to supply |
| --- | --- | --- |
| 05 | `profile-store-51.jpeg` | Flormar storefront, clean exterior and readable sign |
| 06 | `profile-store-47.jpeg` | Baghe Khatina + Flormar storefront |
| 07 | `profile-store-52.jpeg` | Store interior with a clear view into the shopping space |
| 08 | `profile-store-50.jpeg` | A tighter display or shelf detail; the current source is too wide |

The hero, company portrait, product portrait, and wide campaign scene remain separate new-photo slots. Their sizes are in the project `README.md`.
