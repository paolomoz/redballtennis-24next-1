/**
 * footer — replica of the Red Ball Tennis footer experience fragment (template-slotted, #95).
 * Authored /footer document (content/footer.html): section 1 = logo link, section 2 = link list,
  * section 3 = hashtag (mobile only on the source). Every authored node is MOVED into role slots
  *   (EW1).
 */
import { getMetadata, loadCSS } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

export default async function decorate(block) {
  const footerMeta = getMetadata('footer');
  const footerPath = footerMeta ? new URL(footerMeta, window.location).pathname : '/footer';
  await loadCSS(`${window.hlx.codeBasePath}/blocks/fragment/fragment.css`);
  const fragment = await loadFragment(footerPath);

  block.textContent = '';
  const sections = fragment ? [...fragment.children] : [];
  const footer = document.createElement('div');
  footer.className = 'site-footer-inner';
  const grid = document.createElement('div');
  grid.className = 'footer-grid';

  const sep1 = document.createElement('div'); sep1.className = 'footer-sep footer-sep-mobile'; sep1.innerHTML = '<hr>';
  grid.append(sep1);

  const [logoSec, linksSec, tagSec] = sections;
  if (logoSec) {
    const logo = document.createElement('div');
    logo.className = 'footer-logo';
    const pic = logoSec.querySelector('picture, img');
    const p = pic ? (pic.closest('p') || pic) : logoSec.firstElementChild;
    if (p) logo.append(p);
    grid.append(logo);
  }
  if (linksSec) {
    const col = document.createElement('div');
    col.className = 'footer-links-col';
    const links = document.createElement('div');
    links.className = 'footer-links';
    const nav = document.createElement('nav');
    nav.setAttribute('aria-label', 'RedBallTennis footer links');
    const ul = linksSec.querySelector('ul');
    if (ul) {
      // the pipeline wraps list-item links in <p> (#98): unwrap
      ul.querySelectorAll(':scope > li > p').forEach((p) => p.replaceWith(...p.childNodes));
      const sites = document.createElement('div');
      sites.className = 'footer-links-sites';
      sites.append(ul);
      nav.append(sites);
    }
    links.append(nav);
    const social = document.createElement('nav');
    social.setAttribute('aria-label', 'Social media links');
    social.innerHTML = '<ul class="footer-links-social"></ul>';
    links.append(social);
    col.append(links);
    grid.append(col);
  }
  const sep2 = document.createElement('div'); sep2.className = 'footer-sep footer-sep-mobile'; sep2.innerHTML = '<hr>';
  grid.append(sep2);
  if (tagSec) {
    const tag = document.createElement('div');
    tag.className = 'footer-hashtag';
    [...tagSec.children].forEach((el) => tag.append(el));
    grid.append(tag);
  }
  const sep3 = document.createElement('div'); sep3.className = 'footer-sep footer-sep-bottom'; sep3.innerHTML = '<hr>';
  grid.append(sep3);

  footer.append(grid);
  block.append(footer);
}
