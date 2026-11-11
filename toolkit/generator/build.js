// Generates the 18 Word documents for the CLEAR Ownership Staff Resource Toolkit.
// Usage: node build.js <outDir>
const fs = require('fs');
const path = require('path');
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, ImageRun, Header, Footer,
  AlignmentType, BorderStyle, WidthType, ShadingType, VerticalAlign, TabStopType, LeaderType,
  PageNumber, ExternalHyperlink, TextDirection, HeightRule, PageBreak, LineRuleType,
} = require('docx');
const { DOCS, LADDER, QUADRANTS } = require('./content');

const OUT = process.argv[2] || path.join(__dirname, 'out');
const ASSETS = path.join(__dirname, 'assets');
const HEADER_IMG = fs.readFileSync(path.join(ASSETS, 'header_lockup.png'));

// ── Brand tokens (County of Monterey DSS: navy/teal, Open Sans) ──
const C = {
  navy: '1C3E5F', teal: '3D829A', ink: '1F272B', grey: '5F6B73', mid: '95B7C7',
  tint: 'EAF1F6', tint2: 'D3E1EA', line: 'CED9DF', light: 'F4F7F8', white: 'FFFFFF',
  ladder: ['EAF1F6', 'D3E1EA', 'B5CBD9', '95B7C7', '6E9DB3', '3D829A', '1C3E5F'],
};
const FONT = 'Open Sans';
const PAGE_W = 12240, PAGE_H = 15840;
const MARGIN_L = 1080, MARGIN_R = 1080, MARGIN_T = 2000, MARGIN_B = 1080;
const CW = PAGE_W - MARGIN_L - MARGIN_R; // 10080 DXA content width

// ── helpers ──
const run = (text, o = {}) => new TextRun({ text, font: FONT, size: o.size || 20, bold: !!o.bold, italics: !!o.italic, color: o.color || C.ink, characterSpacing: o.spacing, allCaps: !!o.caps });
const p = (children, o = {}) => new Paragraph({
  children: Array.isArray(children) ? children : [children],
  alignment: o.align, spacing: { before: o.before ?? 0, after: o.after ?? 0, line: o.line ?? 264, lineRule: LineRuleType.AUTO },
  keepNext: o.keepNext, keepLines: o.keepLines, border: o.border, indent: o.indent, tabStops: o.tabStops, shading: o.shading,
});
const noBorder = { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' };
const border = (color, size = 4) => ({ style: BorderStyle.SINGLE, size, color });
const borders = (b) => ({ top: b, bottom: b, left: b, right: b, insideHorizontal: b, insideVertical: b });
const shade = (fill) => ({ type: ShadingType.CLEAR, fill, color: 'auto' });
const margins = (v = 90, h = 140) => ({ top: v, bottom: v, left: h, right: h });
const pct = (widths) => { // percentages → DXA, summing exactly to CW
  const raw = widths.map((w) => Math.round((w / 100) * CW));
  raw[raw.length - 1] += CW - raw.reduce((a, b) => a + b, 0);
  return raw;
};
const cell = (children, o = {}) => new TableCell({
  children: Array.isArray(children) ? children : [children],
  width: { size: o.width, type: WidthType.DXA }, columnSpan: o.span,
  shading: o.fill ? shade(o.fill) : undefined, margins: o.margins || margins(),
  verticalAlign: o.valign || VerticalAlign.TOP, borders: o.borders, textDirection: o.dir,
});
const table = (rows, widths, o = {}) => new Table({
  rows, columnWidths: widths, width: { size: CW, type: WidthType.DXA },
  borders: o.borders || borders(border(C.line)), layout: 'fixed',
});
const rowH = (h) => (h ? { value: h, rule: HeightRule.ATLEAST } : undefined);

// ── block renderers ──
const B = {
  kicker: (b) => [new Paragraph({ children: [run(b.text, { size: 16, bold: true, color: C.teal, spacing: 20 })], pageBreakBefore: !!b.newPage, spacing: { before: 0, after: 40, line: 264, lineRule: LineRuleType.AUTO } })],
  title: (b, d) => [p(run(b.text, { size: d.type === 'Flyer' ? 50 : 42, bold: true, color: C.navy }), {
    after: 100, line: 240, border: { bottom: { style: BorderStyle.SINGLE, size: 12, color: C.teal, space: 6 } }, keepNext: true,
  })],
  lead: (b, d) => [p(run(b.text, { size: d.type === 'Flyer' ? 24 : 22, color: C.grey }), { before: 80, after: 140 })],
  para: (b, d) => [p(run(b.text, { size: d.type === 'Flyer' ? 22 : 20 }), { after: d.type === 'Flyer' ? 160 : 120, line: d.type === 'Flyer' ? 280 : 264 })],
  h1: (b, d) => [p(run(b.text, { size: d.type === 'Flyer' ? 26 : 24, bold: true, color: C.navy }), { before: 160, after: 70, keepNext: true })],
  quote: (b) => [p(run(b.text, { italic: true, size: 20 }), {
    after: 140, indent: { left: 240 }, line: 300,
    border: { left: { style: BorderStyle.SINGLE, size: 24, color: C.teal, space: 10 } },
  })],
  basis: (b) => {
    const kids = [run(b.text, { size: 15, italic: true, color: C.grey })];
    if (b.link) kids.push(run('   Learn more: ', { size: 15, bold: true, color: C.grey }), new ExternalHyperlink({ link: b.link[1], children: [new TextRun({ text: b.link[0], font: FONT, size: 15, color: C.teal, underline: {} })] }));
    return [p(kids, { before: 100, after: 0 })];
  },
  pagebreak: () => [],
  defs: (b, d) => b.items.map(([k, v]) => p([run(`${k}:  `, { bold: true, color: C.navy, size: d.type === 'Flyer' ? 22 : 20 }), run(v, { size: d.type === 'Flyer' ? 22 : 20 })], { after: 80, indent: { left: 200, hanging: 200 } })),
  links: (b) => {
    const kids = [run('Learn more:  ', { size: 16, bold: true, color: C.grey })];
    b.items.forEach(([label, url], i) => {
      if (i) kids.push(run('   |   ', { size: 16, color: C.grey }));
      kids.push(new ExternalHyperlink({ link: url, children: [new TextRun({ text: label, font: FONT, size: 16, color: C.teal, underline: {} })] }));
    });
    return [p(kids, { before: 50 })];
  },

  steps: (b) => {
    const lg = b.size === 'lg';
    const w = pct([lg ? 10 : 8, lg ? 90 : 92]);
    const rows = b.items.map((it) => new TableRow({
      height: rowH(lg ? (b.items.length <= 5 ? 1250 : 1090) : 520),
      children: [
        cell(p(run(it.n, { size: lg ? 34 : 22, bold: true, color: C.white }), { align: AlignmentType.CENTER, line: 240 }),
          { width: w[0], fill: C.navy, valign: VerticalAlign.CENTER, margins: margins(60, 40) }),
        cell([
          p(run(it.label, { size: lg ? 26 : 21, bold: true, color: C.navy }), { after: 20, line: 240 }),
          p(run(it.desc, { size: lg ? 22 : 19 }), { line: 260 }),
        ], { width: w[1], fill: C.tint, valign: VerticalAlign.CENTER, margins: margins(lg ? 110 : 80, 160) }),
      ],
    }));
    return [table(rows, w, { borders: borders(border(C.white, 20)) }), p(run('', { size: 8 }), { after: 60 })];
  },

  table: (b) => {
    const w = pct(b.widths);
    const center = new Set(b.center || []);
    const head = new TableRow({ tableHeader: true, children: b.headers.map((h, i) => cell(
      p(run(h, { size: 18, bold: true, color: C.white }), { align: center.has(i) ? AlignmentType.CENTER : undefined, line: 240 }),
      { width: w[i], fill: C.navy, margins: margins(80, 140) },
    )) });
    const body = b.rows.map((r, ri) => new TableRow({ cantSplit: true, children: r.map((txt, i) => cell(
      p(run(txt, { size: 19, bold: i === 0, color: i === 0 ? C.navy : C.ink }), { align: center.has(i) ? AlignmentType.CENTER : undefined, line: 250 }),
      { width: w[i], fill: ri % 2 ? C.light : C.white, margins: margins(80, 140), valign: VerticalAlign.CENTER },
    )) }));
    const bd = { top: border(C.navy, 8), bottom: border(C.navy, 8), left: noBorder, right: noBorder, insideHorizontal: border(C.line), insideVertical: noBorder };
    return [table([head, ...body], w, { borders: bd }), p(run('', { size: 8 }), { after: 80 })];
  },

  callout: (b, d) => {
    const fl = d.type === 'Flyer';
    const kids = [p(run(b.title, { size: fl ? 24 : 21, bold: true, color: C.navy }), { after: 40, line: 240 }), p(run(b.body, { size: fl ? 22 : 19 }), { line: 264 })];
    if (b.note) kids.push(p(run(b.note, { size: 16, italic: true, color: C.grey }), { before: 40 }));
    const bd = { top: noBorder, bottom: noBorder, right: noBorder, left: border(C.teal, 36) };
    return [new Table({ rows: [new TableRow({ cantSplit: true, children: [cell(kids, { width: CW, fill: C.tint, margins: margins(fl ? 240 : 140, 220), borders: bd })] })],
      columnWidths: [CW], width: { size: CW, type: WidthType.DXA }, layout: 'fixed', borders: borders(noBorder) }), p(run('', { size: 8 }), { after: 80 })];
  },

  notes: (b) => {
    const w = pct([30, 70]);
    const hdr = b.header || ['Use this space', 'Your notes'];
    const head = new TableRow({ tableHeader: true, children: hdr.map((h, i) => cell(p(run(h, { size: 18, bold: true, color: C.white }), { line: 240 }), { width: w[i], fill: C.navy, margins: margins(70, 140) })) });
    const rows = b.rows.map((lbl) => new TableRow({ height: rowH(b.rowHeight || 620), cantSplit: true, children: [
      cell(p(run(lbl, { size: 19, bold: true, color: C.navy }), { line: 240 }), { width: w[0], fill: C.light, margins: margins(80, 140), valign: VerticalAlign.CENTER }),
      cell(p(run('')), { width: w[1], margins: margins(80, 140) }),
    ] }));
    const bd = { top: border(C.navy, 8), bottom: border(C.navy, 8), left: noBorder, right: noBorder, insideHorizontal: border(C.line), insideVertical: border(C.line) };
    return [table([head, ...rows], w, { borders: bd }), p(run('', { size: 8 }), { after: 80 })];
  },

  lines: (b) => b.items.map((lbl) => p([run(`${lbl}:  `, { size: 19, bold: true, color: C.navy }), run('\t', { size: 19, color: C.mid })],
    { after: 110, tabStops: [{ type: TabStopType.RIGHT, position: CW, leader: LeaderType.UNDERSCORE }] })),

  fields: (b) => b.rows.map(([a, c]) => p([
    run(`${a}:  `, { size: 19, bold: true, color: C.navy }), run('\t', { size: 19, color: C.mid }),
    run(`\t${c}:  `, { size: 19, bold: true, color: C.navy }), run('\t', { size: 19, color: C.mid }),
  ], { after: 110, tabStops: [
    { type: TabStopType.RIGHT, position: 4760, leader: LeaderType.UNDERSCORE },
    { type: TabStopType.LEFT, position: 5200 },
    { type: TabStopType.RIGHT, position: CW, leader: LeaderType.UNDERSCORE },
  ] })),

  quadrants: (b) => {
    const lg = b.size === 'lg';
    const w = pct([12, 44, 44]);
    const hdr = (t, i) => cell(p(run(t, { size: lg ? 20 : 18, bold: true, color: C.white, spacing: 20 }), { align: AlignmentType.CENTER, line: 240 }), { width: w[i], fill: C.navy, valign: VerticalAlign.CENTER, margins: margins(90, 60) });
    const side = (t) => cell(p(run(t, { size: lg ? 20 : 15, bold: true, color: C.white, spacing: lg ? 20 : 8 }), { align: AlignmentType.CENTER, line: 240 }), { width: w[0], fill: C.navy, valign: VerticalAlign.CENTER, dir: TextDirection.BOTTOM_TO_TOP_LEFT_TO_RIGHT, margins: margins(60, 60) });
    const quad = (q, fill, fg, labelFg, i) => cell([
      p([run(`${q[0]}  •  `, { size: lg ? 30 : 22, bold: true, color: labelFg }), run(q[1], { size: lg ? 26 : 20, bold: true, color: labelFg, spacing: 10 })], { after: 80, line: 240 }),
      p(run(q[2], { size: lg ? 23 : 19, color: fg }), { line: 264 }),
    ], { width: w[i], fill, valign: VerticalAlign.CENTER, margins: margins(lg ? 200 : 120, 220) });
    const rows = [
      new TableRow({ height: rowH(460), children: [cell(p(run('')), { width: w[0], borders: borders(noBorder) }), hdr('URGENT', 1), hdr('NOT URGENT', 2)] }),
      new TableRow({ height: rowH(lg ? 2500 : 1560), cantSplit: true, children: [side('IMPORTANT'), quad(QUADRANTS.q1, C.navy, C.white, C.white, 1), quad(QUADRANTS.q2, C.teal, C.white, C.white, 2)] }),
      new TableRow({ height: rowH(lg ? 2500 : 1560), cantSplit: true, children: [side('NOT IMPORTANT'), quad(QUADRANTS.q3, C.tint, C.ink, C.navy, 1), quad(QUADRANTS.q4, C.light, C.grey, C.grey, 2)] }),
    ];
    return [table(rows, w, { borders: borders(border(C.white, 24)) }), p(run('', { size: 8 }), { after: 100 })];
  },

  ladder: (b) => {
    const lg = b.size === 'lg';
    const unit = 560; const cols = 8; // 6 spacers + number + text
    const widths = Array(cols).fill(unit); widths[cols - 1] = CW - unit * (cols - 1);
    const rows = LADDER.map(([label, q], idx) => {
      const r = 7 - idx; // rung number
      const fill = C.ladder[r - 1]; const dark = r <= 4;
      const kids = [];
      if (r > 1) kids.push(cell(p(run('')), { width: unit * (r - 1), span: r - 1, borders: borders(noBorder) }));
      kids.push(cell(p(run(String(r), { size: lg ? 26 : 22, bold: true, color: C.white }), { align: AlignmentType.CENTER, line: 240 }), { width: unit, fill: C.navy, valign: VerticalAlign.CENTER, margins: margins(40, 40) }));
      const textW = widths.slice(r, cols).reduce((a, c) => a + c, 0);
      kids.push(cell([p([run(label, { size: lg ? 25 : 20, bold: true, color: dark ? C.navy : C.white }), run('   ' + q, { size: lg ? 22 : 19, color: dark ? C.ink : C.white })], { line: 250 })],
        { width: textW, span: cols - r, fill, valign: VerticalAlign.CENTER, margins: margins(lg ? 100 : 70, 160) }));
      return new TableRow({ height: rowH(lg ? 940 : 560), cantSplit: true, children: kids });
    });
    return [table(rows, widths, { borders: borders(border(C.white, 20)) }),
      p([run('START HERE', { size: 15, bold: true, color: C.teal, spacing: 20 }), run('  •  Read from 1 at the bottom to 7 at the top.', { size: 16, color: C.grey })], { before: 60, after: 120 })];
  },

  raci: (b) => {
    const w = pct([34, 16.5, 16.5, 16.5, 16.5]);
    const h = { sm: 520, lg: 700, md: 600, xl: 680 }[b.rowHeight] || 600;
    const headCell = (a, bb, i) => cell([p(run(a, { size: 20, bold: true, color: C.white }), { line: 240 }), ...(bb ? [p(run(bb, { size: 16, color: C.white }), { line: 240 })] : [])], { width: w[i], fill: C.navy, margins: margins(80, 120), valign: VerticalAlign.CENTER });
    const head = new TableRow({ tableHeader: true, children: [headCell('Task or decision', null, 0), headCell('R', 'Responsible', 1), headCell('A', 'Accountable', 2), headCell('C', 'Consulted', 3), headCell('I', 'Informed', 4)] });
    const rows = Array.from({ length: 7 }, (_, i) => new TableRow({ height: rowH(h), cantSplit: true, children: [
      cell(p(run(String(i + 1), { size: 16, bold: true, color: C.teal }), { line: 240 }), { width: w[0], margins: margins(60, 120) }),
      ...[1, 2, 3, 4].map((k) => cell(p(run('')), { width: w[k], margins: margins(60, 120), fill: k === 2 ? C.light : undefined })),
    ] }));
    const bd = { top: border(C.navy, 8), bottom: border(C.navy, 8), left: border(C.line), right: border(C.line), insideHorizontal: border(C.line), insideVertical: border(C.line) };
    return [table([head, ...rows], w, { borders: bd }), p(run('', { size: 8 }), { after: 80 })];
  },

  raciLegend: (b) => {
    const w = pct([25, 25, 25, 25]);
    const row = new TableRow({ children: b.items.map(([L, name, desc], i) => cell([
      p([run(L, { size: 40, bold: true, color: C.navy }), run('  ' + name, { size: 20, bold: true, color: C.navy })], { after: 30, line: 240 }),
      p(run(desc, { size: 18 }), { line: 250 }),
    ], { width: w[i], fill: C.tint, margins: margins(120, 160), borders: { top: border(C.teal, 24), bottom: noBorder, left: noBorder, right: noBorder } })) });
    return [table([row], w, { borders: borders(border(C.white, 20)) }), p(run('', { size: 8 }), { after: 100 })];
  },

  raciStrip: () => [p([
    run('R', { bold: true, color: C.navy }), run(' does the work.    '),
    run('A', { bold: true, color: C.navy }), run(' owns the outcome.    '),
    run('C', { bold: true, color: C.navy }), run(' gives input before action.    '),
    run('I', { bold: true, color: C.navy }), run(' receives updates.'),
  ], { after: 140, before: 40 })],
};

// ── header / footer ──
function header() {
  const img = new ImageRun({ type: 'png', data: HEADER_IMG, transformation: { width: 335, height: 60 } });
  const w = [5200, CW - 5200];
  const t = new Table({ columnWidths: w, width: { size: CW, type: WidthType.DXA }, layout: 'fixed', borders: borders(noBorder), rows: [new TableRow({ children: [
    cell(p(img), { width: w[0], margins: margins(0, 0), valign: VerticalAlign.CENTER }),
    cell([
      p(run('CLEAR OWNERSHIP', { size: 17, bold: true, color: C.navy, spacing: 30 }), { align: AlignmentType.RIGHT, line: 240 }),
      p(run('Staff Resource Toolkit', { size: 16, color: C.grey }), { align: AlignmentType.RIGHT, line: 240 }),
    ], { width: w[1], margins: margins(0, 0), valign: VerticalAlign.CENTER }),
  ] })] });
  return new Header({ children: [t, p(run('', { size: 6 }), { after: 0, border: { bottom: { style: BorderStyle.SINGLE, size: 8, color: C.navy, space: 4 } } })] });
}
function footer(d) {
  return new Footer({ children: [p([
    run(`CLEAR Ownership  |  ${d.topic}  |  ${d.type}`, { size: 15, color: C.grey }),
    run('\t', { size: 15 }),
    run('Page ', { size: 15, color: C.grey }),
    new TextRun({ children: [PageNumber.CURRENT], font: FONT, size: 15, color: C.grey }),
    run(' of ', { size: 15, color: C.grey }),
    new TextRun({ children: [PageNumber.TOTAL_PAGES], font: FONT, size: 15, color: C.grey }),
  ], { tabStops: [{ type: TabStopType.RIGHT, position: CW }], border: { top: { style: BorderStyle.SINGLE, size: 6, color: C.teal, space: 6 } } })] });
}

// ── document ──
function buildDoc(d) {
  d.blocks.forEach((b, i) => { if (b.t === 'pagebreak' && d.blocks[i + 1]) d.blocks[i + 1].newPage = true; });
  const children = d.blocks.flatMap((b) => { const f = B[b.t]; if (!f) throw new Error('unknown block ' + b.t); return f(b, d); });
  return new Document({
    creator: 'County of Monterey Department of Social Services', title: `${d.topic} — ${d.type}`, subject: 'CLEAR Ownership: Staff Resource Toolkit',
    styles: { default: { document: { run: { font: FONT, size: 20, color: C.ink } } }, characterStyles: [{ id: 'Hyperlink', name: 'Hyperlink', run: { color: C.teal, underline: {} } }] },
    sections: [{
      properties: { page: { size: { width: PAGE_W, height: PAGE_H }, margin: { top: MARGIN_T, bottom: MARGIN_B, left: MARGIN_L, right: MARGIN_R, header: 420, footer: 440 } } },
      headers: { default: header() }, footers: { default: footer(d) }, children,
    }],
  });
}

(async () => {
  for (const d of DOCS) {
    const dir = path.join(OUT, d.folder); fs.mkdirSync(dir, { recursive: true });
    const buf = await Packer.toBuffer(buildDoc(d));
    fs.writeFileSync(path.join(dir, d.file + '.docx'), buf);
    console.log('wrote', d.folder + '/' + d.file + '.docx');
  }
})();
