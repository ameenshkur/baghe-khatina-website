"""Extract every embedded image placement from a company profile PDF.

Usage: python tools/extract_profile_images.py path/to/profile.pdf
Optional: --output profile-images/full-pdf-extraction
Requires PyMuPDF (`pip install pymupdf`).
"""

import argparse
import csv
from html import escape
from pathlib import Path

import fitz


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("pdf", type=Path)
    parser.add_argument("--output", type=Path, default=Path("profile-images/extracted"))
    args = parser.parse_args()
    if not args.pdf.is_file():
        parser.error(f"PDF not found: {args.pdf}")

    args.output.mkdir(parents=True, exist_ok=True)
    rows = []
    with fitz.open(args.pdf) as document:
        page_count = len(document)
        for page_number, page in enumerate(document, start=1):
            page_dir = args.output / f"page-{page_number:02d}"
            for placement_number, image_info in enumerate(page.get_images(full=True), start=1):
                xref = image_info[0]
                image = document.extract_image(xref)
                extension = image["ext"]
                filename = f"image-{placement_number:02d}-xref-{xref}.{extension}"
                page_dir.mkdir(exist_ok=True)
                target = page_dir / filename
                target.write_bytes(image["image"])
                rows.append(
                    [page_number, placement_number, xref, image["width"], image["height"],
                     str(target.relative_to(args.output)).replace("\\", "/")]
                )

    with (args.output / "manifest.csv").open("w", newline="", encoding="utf-8-sig") as stream:
        writer = csv.writer(stream)
        writer.writerow(["page", "placement", "pdf_xref", "width_px", "height_px", "file"])
        writer.writerows(rows)
    cards = "\n".join(
        f'<figure><a href="{escape(row[5])}"><img src="{escape(row[5])}" alt="Page {row[0]}, image {row[1]}" loading="lazy"></a>'
        f'<figcaption>Page {row[0]:02d} · Image {row[1]:02d} · {row[3]} × {row[4]} px</figcaption></figure>'
        for row in rows
    )
    (args.output / "index.html").write_text(
        '<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">'
        f'<title>{escape(args.pdf.name)} images</title>'
        '<style>body{font:15px/1.5 system-ui;margin:0;padding:32px;background:#f7f7f7;color:#111}'
        'main{max-width:1400px;margin:auto}h1{font-size:clamp(24px,4vw,42px)}'
        '.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:18px}'
        'figure{margin:0;padding:12px;background:#fff;border:1px solid #ddd}'
        'img{display:block;width:100%;height:190px;object-fit:contain;background:#eee}'
        'figcaption{padding-top:8px;font-size:12px}a{color:inherit}</style>'
        f'<main><h1>{escape(args.pdf.name)}</h1><p>{len(rows)} image placements across {page_count} pages. '
        'Click a thumbnail for the original file. See manifest.csv for every image.</p>'
        f'<div class="grid">{cards}</div></main></html>', encoding="utf-8"
    )
    print(f"Extracted {len(rows)} image placements from {page_count} pages to {args.output}")


if __name__ == "__main__":
    main()
