#!/bin/bash
set -e
S=/tmp/claude-0/-home-user-test/f010b762-eae1-5e10-a511-cba9e32bcd26/scratchpad
OUT="$S/build/out_b"; REV="$S/build/review_b"
cd "$S/build" && rm -rf "$OUT" "$REV" && CONTENT=./content_b node build.js "$OUT" >/dev/null
cd "$OUT" && for d in 0*/; do (cd "$d" && for f in *.docx; do zip -q -d "$f" '*/' >/dev/null 2>&1 || true; done); done
timeout 300 soffice --headless --convert-to pdf --outdir "$OUT/pdf_tmp" 0*/*.docx >/dev/null 2>&1
python3 -I - "$OUT/pdf_tmp" <<'PY'
import sys,glob,os,pypdf
bad=0
for f in sorted(glob.glob(os.path.join(sys.argv[1],'*.pdf'))):
    n=len(pypdf.PdfReader(f).pages); exp = 2 if f.endswith('Resource.pdf') else 1
    if n!=exp: bad+=1; print('BAD', n, os.path.basename(f))
print('page-count problems:', bad)
PY
mkdir -p "$REV" && cd "$OUT/pdf_tmp" && for f in *.pdf; do pdftoppm -r 60 -png "$f" "$REV/${f%.pdf}"; done
