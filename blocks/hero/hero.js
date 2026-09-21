/**
 * hero — the Red Ball Tennis lead band (replica of the source's hero container).
 * Schema: stardust/eds-schema/<page>.json § hero (template-slotted, #95).
 *
 * Authoring (one row, one cell, flat siblings — DA delivers this shape, #62):
 *   <h1>            page title ("Red Ball Tennis" | "Tennis <em>Red</em>esigned For You" | …)
 *   <p><strong>…</strong></p>   eyebrow ("REDRAW THE LINES" — home only)
 *   <picture>       FIRST picture = the mobile image (hand with ball | play photo | host photo)
 *   <p>…</p>        lede paragraph(s) — 32px
 *   <p><a href="https://www.youtube.com/…"></a></p>   video link → iframe in the media panel (home)
 *   <picture>       SECOND picture (optional) = the desktop media-panel photo (play/host)
  * Variants: `video` (media panel = YouTube iframe on the red vector), `photo` (media panel =
  *   photo).
 * Every authored node is MOVED into role slots (EW1–EW3); the block adds no words (#100).
  * The YouTube URL row is text-as-metadata: @ew-exempt <a> /youtube|vimeo/ — config: embed source
  *   link
 */

function wrapNode(node, className) {
  const w = document.createElement('div');
  w.className = className;
  w.append(node);
  return w;
}

function collectNodes(block) {
  const out = [];
  block.querySelectorAll(':scope > div > div').forEach((cell) => {
    let kids = [...cell.children];
    if (kids.length === 1 && kids[0].tagName === 'P' && kids[0].children.length
        && kids[0].querySelector('picture, img')) {
      kids = [...kids[0].childNodes].map((n) => {
        if (n.nodeType === 1) return n;
        // harness-only fallback (EW5): bare text inside the wrapper <p> — never fires on DA content
        if (n.textContent.trim()) { const p = document.createElement('p'); p.append(n); return p; }
        return null;
      }).filter(Boolean);
    }
    if (kids.length) out.push(...kids);
    else if (cell.textContent.trim()) { const p = document.createElement('p'); p.append(...cell.childNodes); out.push(p); }
  });
  return out.length ? out : [...block.children];
}

const isVideoLink = (a) => /youtube\.com|youtu\.be|vimeo\.com/.test(a.href);

function youtubeEmbed(url, title) {
  const u = new URL(url);
  let id = u.searchParams.get('v');
  if (!id) id = u.pathname.split('/').filter(Boolean).pop();
  const iframe = document.createElement('iframe');
  iframe.src = `https://www.youtube.com/embed/${id}`;
  iframe.title = title || 'Video';
  iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('loading', 'lazy');
  iframe.width = '450';
  iframe.height = '315';
  return iframe;
}

export default function decorate(block) {
  const nodes = collectNodes(block);
  if (!nodes.length) return;

  const heading = nodes.find((n) => /^H[1-6]$/.test(n.tagName));
  const pictures = nodes.filter((n) => n.matches('picture, img') || n.querySelector?.('picture, img'));
  const ledes = nodes.filter((n) => n.tagName === 'P' && !n.querySelector('a, picture, img, strong'));
  const eyebrow = nodes.find((n) => n.tagName === 'P' && n.querySelector('strong') && !n.querySelector('a'));
  const videoP = nodes.find((n) => n.tagName === 'P' && n.querySelector('a') && isVideoLink(n.querySelector('a')));
  const mobilePic = pictures[0] || null;
  const panelPic = pictures[1] || null;

  const wrap = document.createElement('div');
  wrap.className = 'hero-grid';

  // text column
  const textCol = document.createElement('div');
  textCol.className = 'hero-text';
  const inner = document.createElement('div');
  inner.className = 'hero-text-inner';
  const titleBlock = document.createElement('div');
  titleBlock.className = 'hero-title-block';
  if (heading) titleBlock.append(wrapNode(heading, 'hero-title'));
  if (eyebrow) titleBlock.append(wrapNode(eyebrow, 'hero-eyebrow'));
  inner.append(titleBlock);
  if (mobilePic) {
    const p = mobilePic.closest('p') || mobilePic;
    inner.append(wrapNode(p, 'hero-mobile-media'));
  }
  const ledeWrap = document.createElement('div');
  ledeWrap.className = 'hero-lede';
  ledes.forEach((p) => ledeWrap.append(p));
  inner.append(ledeWrap);
  textCol.append(inner);
  wrap.append(textCol);

  // media column
  const media = document.createElement('div');
  media.className = 'hero-media';
  const mediaInner = document.createElement('div');
  mediaInner.className = 'hero-media-inner';
  if (videoP) {
    block.classList.add('video');
    const a = videoP.querySelector('a');
    const embed = document.createElement('div');
    embed.className = 'hero-embed';
    embed.append(youtubeEmbed(a.href, heading ? heading.textContent : ''));
    mediaInner.append(embed);
    videoP.hidden = true; // text-as-metadata (EW5): the URL row stays authored, never displayed
    mediaInner.append(videoP);
  } else if (panelPic) {
    block.classList.add('photo');
    const p = panelPic.closest('p') || panelPic;
    mediaInner.append(wrapNode(p, 'hero-panel-media'));
  } else {
    block.classList.add('photo');
  }
  media.append(mediaInner);
  wrap.append(media);

  // leftovers: anything not slotted degrades to visible default styling (DROPPED CONTENT guard)
  nodes.forEach((n) => { if (!wrap.contains(n) && n.isConnected) inner.append(n); });

  const first = block.querySelector('img');
  if (first) { first.setAttribute('loading', 'eager'); first.setAttribute('fetchpriority', 'high'); }
  block.replaceChildren(wrap);
}
