#!/bin/bash
set -e
S=/tmp/claude-0/-home-user-test/f010b762-eae1-5e10-a511-cba9e32bcd26/scratchpad
cd "$S/build" && rm -rf out review && node build.js "$S/build/out" >/dev/null
cd "$S/build/out" && for d in 0*/; do (cd "$d" && for f in *.docx; do zip -q -d "$f" '*/' >/dev/null 2>&1 || true; done); done
timeout 300 soffice --headless --convert-to pdf --outdir "$S/build/out/pdf_tmp" 0*/*.docx >/dev/null 2>&1
python3 -I - "$S/build/out/pdf_tmp" <<'PY'
import sys,glob,os,pypdf
bad=0
for f in sorted(glob.glob(os.path.join(sys.argv[1],'*.pdf'))):
    n=len(pypdf.PdfReader(f).pages); exp = 2 if f.endswith('Resource.pdf') else 1
    if n!=exp: bad+=1; print('BAD', n, os.path.basename(f))
print('page-count problems:', bad)
PY
mkdir -p "$S/build/review" && cd "$S/build/out/pdf_tmp" && for f in *.pdf; do pdftoppm -r 60 -png "$f" "$S/build/review/${f%.pdf}"; done
