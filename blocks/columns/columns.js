/**
 * columns — HOW TO PLAY / HOW TO SCORE (Block Collection `columns` model, variant `rules`).
 * Schema: stardust/eds-schema/en-home-play-html.json § rules-band (2 repeat units).
 *
 * Authoring: one row, one cell per column; each cell: <picture> icon, <h2> title,
 *   <p><strong>…</strong></p> lines (the source's empty spacer paragraphs are CSS rhythm).
 * Every authored node is MOVED (EW1); no words added (#100).
 */

function wrapNode(node, className) {
  const w = document.createElement('div');
  w.className = className;
  w.append(node);
  return w;
}

export default function decorate(block) {
  const rows = [...block.children];
  if (!rows.length) return;
  const cols = [...rows[0].children];
  block.classList.add(`columns-${cols.length}-cols`);
  const grid = document.createElement('div');
  grid.className = 'columns-grid';
  cols.forEach((cell) => {
    const col = document.createElement('div');
    col.className = 'column';
    const pic = cell.querySelector('picture, img');
    if (pic) {
      const p = pic.closest('p') || pic;
      col.append(wrapNode(p, 'column-icon'));
    }
    const text = document.createElement('div');
    text.className = 'column-text';
    [...cell.children].forEach((el) => { if (!col.contains(el)) text.append(el); });
    col.append(text);
    grid.append(col);
  });
  // further rows (none on this site) degrade to visible default styling
  rows.slice(1).forEach((r) => grid.append(r));
  block.replaceChildren(grid);
}
