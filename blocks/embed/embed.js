/**
 * embed — a YouTube / Vimeo URL authored as a plain link, auto-blocked by buildEmbedBlocks()
 * in scripts/scripts.js (D1). Replica of the source's 1500×900 iframe band (play page).
 * Authoring: one row, one cell holding the video link. The link is text-as-metadata
 * (@ew-exempt <a> /youtube|vimeo/ — config: embed source link); no words added (#100).
 */
export default function decorate(block) {
  const a = block.querySelector('a[href]');
  if (!a) return;
  const url = new URL(a.href);
  let src = a.href;
  if (/youtube\.com|youtu\.be/.test(url.hostname)) {
    const id = url.searchParams.get('v') || url.pathname.split('/').filter(Boolean).pop();
    src = `https://www.youtube.com/embed/${id}`;
  } else if (/vimeo\.com/.test(url.hostname)) {
    src = `https://player.vimeo.com/video/${url.pathname.split('/').filter(Boolean).pop()}`;
  }
  const wrap = document.createElement('div');
  wrap.className = 'embed-frame';
  const iframe = document.createElement('iframe');
  iframe.src = src;
  iframe.title = 'Video';
  iframe.width = '1500';
  iframe.height = '900';
  iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('loading', 'lazy');
  wrap.append(iframe);
  const spacer = document.createElement('div');
  spacer.className = 'embed-spacer';
  const p = a.closest('p') || a;
  p.hidden = true; // the URL stays authored (EW5 metadata), never displayed
  block.replaceChildren(wrap, spacer, p);
}
