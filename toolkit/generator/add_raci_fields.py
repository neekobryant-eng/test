"""Add 35 fillable text fields (7 task rows x Task/R/A/C/I) to a RACI PDF.
Usage: python3 -I add_raci_fields.py in.pdf out.pdf [page_index]
Cell geometry is detected from the rendered table so fields align exactly with the printed grid.
"""
import sys
import pdfplumber
from pypdf import PdfReader, PdfWriter
from pypdf.generic import (ArrayObject, DictionaryObject, NameObject, NumberObject, TextStringObject, FloatObject, BooleanObject)

src, dst = sys.argv[1], sys.argv[2]
page_idx = int(sys.argv[3]) if len(sys.argv) > 3 else None


def find_raci_table(page):
    for t in page.find_tables():
        rows = t.rows
        if len(rows) == 8 and all(len(r.cells) == 5 for r in rows):
            head = page.crop(rows[0].cells[0]).extract_text() or ''
            if 'Task' in head:
                return t
    return None


with pdfplumber.open(src) as pdf:
    candidates = [page_idx] if page_idx is not None else range(len(pdf.pages))
    found = None
    for i in candidates:
        t = find_raci_table(pdf.pages[i])
        if t:
            found = (i, t, pdf.pages[i].height)
            break
    if not found:
        sys.exit('RACI table not found in ' + src)
    pidx, table, ph = found
    cells = []
    cols = ['Task', 'R', 'A', 'C', 'I']
    for r, row in enumerate(table.rows[1:], start=1):
        for c, (x0, top, x1, bottom) in enumerate(row.cells):
            inset_l = 16 if c == 0 else 3   # leave room for the printed row number
            rect = [x0 + inset_l, ph - bottom + 2.5, x1 - 3, ph - top - 2.5]
            cells.append((f'{cols[c]}_{r}', rect))

reader = PdfReader(src)
writer = PdfWriter()
writer.append(reader)
page = writer.pages[pidx]

helv = DictionaryObject({NameObject('/Type'): NameObject('/Font'), NameObject('/Subtype'): NameObject('/Type1'),
                         NameObject('/BaseFont'): NameObject('/Helvetica'), NameObject('/Encoding'): NameObject('/WinAnsiEncoding')})
helv_ref = writer._add_object(helv)
fields = ArrayObject()
annots = page.get('/Annots')
if annots is None:
    annots = ArrayObject()
    page[NameObject('/Annots')] = annots
else:
    annots = annots.get_object()

for name, rect in cells:
    f = DictionaryObject({
        NameObject('/Type'): NameObject('/Annot'), NameObject('/Subtype'): NameObject('/Widget'),
        NameObject('/FT'): NameObject('/Tx'), NameObject('/T'): TextStringObject(name),
        NameObject('/TU'): TextStringObject(name.replace('_', ' row ')),
        NameObject('/Rect'): ArrayObject([FloatObject(v) for v in rect]),
        NameObject('/F'): NumberObject(4), NameObject('/Ff'): NumberObject(4096),  # multiline
        NameObject('/DA'): TextStringObject('/Helv 9 Tf 0.12 0.15 0.17 rg'),
        NameObject('/V'): TextStringObject(''), NameObject('/P'): page.indirect_reference,
        NameObject('/MK'): DictionaryObject({}),
    })
    ref = writer._add_object(f)
    fields.append(ref)
    annots.append(ref)

acro = DictionaryObject({
    NameObject('/Fields'): fields, NameObject('/NeedAppearances'): BooleanObject(True),
    NameObject('/DA'): TextStringObject('/Helv 9 Tf 0 g'),
    NameObject('/DR'): DictionaryObject({NameObject('/Font'): DictionaryObject({NameObject('/Helv'): helv_ref})}),
})
writer._root_object[NameObject('/AcroForm')] = writer._add_object(acro)
writer.write(dst)
print(f'{dst}: {len(cells)} fields on page {pidx + 1}')
