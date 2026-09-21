/**
 * cards — image tiles on the tennis-ball photo band (Block Collection `cards` model).
 * Schema: stardust/eds-schema/<page>.json § play-host-tiles / kit-band (repeat units).
 *
 * Authoring: one row per tile — cell 1 <picture> (tile image), cell 2 text
 *   (<p> copy + optional <p><strong|em><a>> CTA; kit variant: <h3> + <p>, one cell).
 * Variants: `tiles` (home/host: white pills on the blue photo band), `kit` (play: icon + h3 + p).
 * The section head/tail (h2, note, CTA) stay default content in the same section (D1).
 * Every authored node is MOVED (EW1–EW3); no words added (#100).
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
  const ul = document.createElement('ul');
  ul.className = 'cards-list';
  rows.forEach((row) => {
    const li = document.createElement('li');
    li.className = 'card';
    const cells = [...row.children];
    // media: the first picture in the row (one querySelector — pipeline wraps img in picture);
    //   it is MOVED out of its cell, so an image + text authored in ONE cell (kit) works too
    const pic = row.querySelector('picture, img');
    if (pic) {
      const p = pic.closest('p') || pic;
      li.append(wrapNode(p, 'card-image'));
    }
    const body = document.createElement('div');
    body.className = 'card-body';
    cells.forEach((cell) => {
      [...cell.children].forEach((el) => {
        if (!el.textContent.trim() && !el.querySelector('picture, img')) { el.remove(); return; }
        if (el.querySelector('a') && el.tagName === 'P') {
          const actions = body.querySelector(':scope > .card-actions') || (() => { const a = document.createElement('div'); a.className = 'card-actions'; body.append(a); return a; })();
          actions.append(el);
        } else if (/^H[1-6]$/.test(el.tagName)) {
          body.append(wrapNode(el, 'card-title'));
        } else {
          body.append(wrapNode(el, 'card-text'));
        }
      });
      // harness-only fallback: bare text in a cell (never fires on DA content — prose2aem keeps
      //   <p>)
      if (!cell.children.length && cell.textContent.trim()) { const p = document.createElement('p'); p.append(...cell.childNodes); body.append(wrapNode(p, 'card-text')); }
    });
    li.append(body);
    ul.append(li);
  });
  block.replaceChildren(ul);
}
