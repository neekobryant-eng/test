# CLEAR Ownership Staff Resource Toolkit — professional format edition

Regenerated layout for the County of Monterey Department of Social Services (DSS)
CLEAR Ownership toolkit (6 topics x flyer / desk reference / resource = 18 Word files + 18 PDFs).

- `output/Monterey_CLEAR_Professional/` — the deliverable (same folder structure as the source ZIP),
  plus `Monterey_CLEAR_Complete_Reading_Copy.pdf` (24 pages, bookmarked) and `START_HERE.txt`.
- `generator/content.js` — the structured content for all 18 documents (wording unchanged from source).
- `generator/build.js` — docx-js renderer: County seal + DSS lockup header, Open Sans, navy/teal palette.
- `generator/add_raci_fields.py` — adds the 35 fillable AcroForm fields to each RACI PDF.
- `generator/run.sh` — build → LibreOffice PDF conversion → page-count check → preview PNGs
  (paths inside are session-specific; adjust `S=` before reuse).

Requirements: Node with the `docx` package, LibreOffice (`soffice`), Poppler, Python with
`pdfplumber` and `pypdf`, and the Open Sans TTFs installed for PDF rendering.

## Plain-language edition

- `output/Monterey_CLEAR_Plain_Language/` — same layout and page counts, plainer wording and
  topic-based titles. `WORDING_CHANGES.txt` lists what changed and the approved terms kept as-is.
- `generator/content_plain.js` — content for this edition. Build it with
  `CONTENT=./content_plain node build.js <outDir>` (see `generator/run_plain.sh`).

## Plain-language Version B

- `output/Monterey_CLEAR_Plain_Language_Version_B/` — an alternate wording of the plain-language
  edition (Version A) to choose from. Shorter, more conversational sentences and
  "Topic: what it does" titles. `COMPARE_VERSION_A_AND_B.txt` lists the differences.
- `generator/content_b.js` — build with `CONTENT=./content_b node build.js <outDir>`
  (see `generator/run_b.sh`).
