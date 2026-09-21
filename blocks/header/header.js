/**
 * header — replica of the Red Ball Tennis chrome (USTA network strip + main bar + breadcrumb),
 * template-slotted (#95) from the authored /nav document (content/nav.html):
 *   section 1 = utility list (USTA SITES → sub-list), section 2 = brand (desktop logo link),
 *   section 3 = nav links, section 4 = mobile logo link.
 * Interaction machinery = the stock block's (hamburger toggle, aria-expanded, escape/focus-out),
 * restyled; the two observed live state machines (USTA SITES dropdown, ≤1369 drawer) are mirrored
 * with the same attributes and classes (stardust/replica/motion/index*.json).
 * Breadcrumb: chrome derived from the URL path (D1 BREADCRUMB) with labels from the nav links.
 * Authored nodes are MOVED into slots (EW1); the breadcrumb is runtime chrome (nav landmark).
 */
import { getMetadata, loadCSS } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

const isDesktop = window.matchMedia('(min-width: 1370px)');

function wrapNode(node, className) {
  const w = document.createElement('div');
  w.className = className;
  w.append(node);
  return w;
}

function unwrapP(li) {
  li.querySelectorAll(':scope > p').forEach((p) => p.replaceWith(...p.childNodes));
}

function closeAll(nav) {
  nav.querySelectorAll('[aria-expanded="true"]').forEach((el) => el.setAttribute('aria-expanded', 'false'));
  const topBar = nav.querySelector('.top-bar');
  if (topBar) topBar.classList.remove('top-bar-opened', 'top-to-bottom');
  const menu = nav.querySelector('.navigation-menu');
  if (menu && !isDesktop.matches) menu.style.display = 'none';
}

function buildBreadcrumb(navLinks) {
  const wrap = document.createElement('div');
  wrap.className = 'breadcrumb red-ball-colors';
  const inner = document.createElement('div');
  inner.className = 'breadcrumb-wrapper';
  const bc = document.createElement('nav');
  bc.setAttribute('aria-label', 'Breadcrumb');
  const ol = document.createElement('ol');
  ol.className = 'breadcrumb-navigation';
  const labels = new Map(navLinks.map((a) => [new URL(a.href, window.location).pathname.replace(/\/$/, '') || '/', a.textContent.trim()]));
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  const here = labels.get(path);
  const homeLabel = labels.get('/') || 'Home';
  if (path === '/') {
    const li = document.createElement('li');
    li.className = 'breadcrumb-item breadcrumb-item-active';
    li.textContent = homeLabel.charAt(0) + homeLabel.slice(1).toLowerCase();
    ol.append(li);
  } else {
    const li = document.createElement('li');
    li.className = 'breadcrumb-item breadcrumb-item-inactive';
    const a = document.createElement('a');
    a.href = '/';
    a.textContent = homeLabel.charAt(0) + homeLabel.slice(1).toLowerCase();
    const div = document.createElement('span');
    div.className = 'breadcrumb-divider';
    div.textContent = '>';
    li.append(a, div);
    const cur = document.createElement('li');
    cur.className = 'breadcrumb-item breadcrumb-item-active';
    const leaf = path.split('/').filter(Boolean).pop() || '';
    const label = here || leaf;
    cur.textContent = label.charAt(0).toUpperCase() + label.slice(1).toLowerCase();
    ol.append(li, cur);
  }
  bc.append(ol);
  inner.append(bc);
  wrap.append(inner);
  return wrap;
}

export default async function decorate(block) {
  const navMeta = getMetadata('nav');
  const navPath = navMeta ? new URL(navMeta, window.location).pathname : '/nav';
  await loadCSS(`${window.hlx.codeBasePath}/blocks/fragment/fragment.css`);
  const fragment = await loadFragment(navPath);
  block.textContent = '';
  const sections = fragment ? [...fragment.children] : [];
  const [utilitySec, brandSec, linksSec, mobileBrandSec] = sections;

  const root = document.createElement('div');
  root.className = 'topnavigation';
  const nav = document.createElement('nav');
  nav.id = 'nav';
  nav.className = 'top-navigation red-ball-colors loadingDone';
  nav.setAttribute('aria-label', 'Site');

  // ── top bar: USTA SITES dropdown ──
  const topBar = document.createElement('div');
  topBar.id = 'top-navigation-bar';
  topBar.className = 'top-bar';
  const topWrap = document.createElement('div');
  topWrap.className = 'top-bar-wrapper';
  const utilLi = utilitySec ? utilitySec.querySelector('ul > li') : null;
  if (utilLi) {
    unwrapP(utilLi);
    const subList = utilLi.querySelector('ul');
    const dropdown = document.createElement('div');
    dropdown.className = 'dropdown';
    const dd = document.createElement('div');
    dd.className = 'drop-down';
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.id = 'label-id-8';
    btn.className = 'drop-down-label-wrapper';
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-controls', 'list-id-8');
    const icon = document.createElement('span');
    icon.className = 'drop-down-select-icon';
    const label = document.createElement('p');
    label.className = 'drop-down-label';
    // the authored trigger text is the li's own text node — move it (EW1)
    const textNode = [...utilLi.childNodes].find((n) => n.nodeType === 3 && n.textContent.trim());
    if (textNode) label.append(textNode); else label.textContent = 'USTA SITES';
    btn.append(icon, label);
    const panel = document.createElement('div');
    panel.className = 'drop-down-select-list';
    const img = document.createElement('div');
    img.className = 'drop-down-image';
    img.innerHTML = '<img src="/icons/usta-sites.svg" alt="USTA Logo" width="170" height="28"><p class="drop-down-slogan">VISIT OUR OTHER SITES</p>';
    const row = document.createElement('div');
    row.className = 'drop-down-select-list-row';
    if (subList) {
      const col = document.createElement('div');
      col.id = 'list-id-8';
      col.className = 'drop-down-select-list-column';
      subList.querySelectorAll(':scope > li').forEach((li) => { unwrapP(li); li.prepend(' '); });
      col.append(subList);
      row.append(col);
    }
    const close = document.createElement('div');
    close.className = 'drop-down-close';
    close.setAttribute('role', 'button');
    close.setAttribute('aria-label', 'Close');
    close.tabIndex = 0;
    panel.append(img, row, close);
    dd.append(btn, panel);
    dropdown.append(dd);
    topWrap.append(dropdown);
    const toggle = () => btn.setAttribute('aria-expanded', btn.getAttribute('aria-expanded') === 'true' ? 'false' : 'true');
    btn.addEventListener('click', toggle);
    close.addEventListener('click', () => btn.setAttribute('aria-expanded', 'false'));
    close.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') btn.setAttribute('aria-expanded', 'false'); });
    document.addEventListener('click', (e) => { if (!e.target.closest('.dropdown')) btn.setAttribute('aria-expanded', 'false'); });
  }
  const userSection = document.createElement('div');
  userSection.className = 'user-section';
  topWrap.append(userSection);
  topBar.append(topWrap);

  // ── main bar: hamburger + logos + nav links ──
  const mainBar = document.createElement('div');
  mainBar.className = 'main-bar';
  const logo = document.createElement('div');
  logo.className = 'logo';
  const burger = document.createElement('button');
  burger.type = 'button';
  burger.className = 'logo-hamburger';
  burger.setAttribute('aria-expanded', 'false');
  burger.setAttribute('aria-label', 'Menu');
  burger.setAttribute('aria-controls', 'top-navigation-bar');
  burger.innerHTML = '<img class="logo-hamburger-menu" src="/icons/hamburger-menu-white.svg" alt="" width="24" height="24"><img class="logo-hamburger-cancel" src="/icons/cancel-bold-white.svg" alt="" width="18" height="18">';
  logo.append(burger);
  const brandLink = brandSec ? brandSec.querySelector('a') : null;
  const mobileLink = mobileBrandSec ? mobileBrandSec.querySelector('a') : null;
  const link = document.createElement('a');
  link.className = 'logo-link';
  link.href = brandLink ? brandLink.getAttribute('href') : '/';
  if (brandLink) {
    const pic = brandLink.querySelector('picture, img');
    if (pic) link.append(wrapNode(pic, 'logo-img-desktop'));
  }
  if (mobileLink) {
    const pic = mobileLink.querySelector('picture, img');
    if (pic) link.append(wrapNode(pic, 'logo-img-mobile'));
  }
  logo.append(link);
  mainBar.append(logo);

  const menu = document.createElement('nav');
  menu.id = 'main-menu';
  menu.className = 'navigation-menu';
  menu.setAttribute('aria-label', 'Main menu');
  const ul = linksSec ? linksSec.querySelector('ul') : null;
  const navLinks = [];
  if (ul) {
    const listWrap = document.createElement('div');
    listWrap.className = 'nav-list';
    ul.querySelectorAll(':scope > li').forEach((li) => {
      unwrapP(li);
      const a = li.querySelector('a');
      if (!a) return;
      const here = new URL(a.href, window.location).pathname.replace(/\/$/, '') || '/';
      const path = window.location.pathname.replace(/\/$/, '') || '/';
      if (here === path && path !== '/') a.setAttribute('aria-current', 'page');
      navLinks.push(a);
      const content = document.createElement('div');
      content.className = 'level-1-content';
      const inner = document.createElement('div');
      inner.append(a);
      content.append(inner);
      li.append(content);
    });
    listWrap.append(ul);
    menu.append(listWrap);
  }
  mainBar.append(menu);

  nav.append(topBar, mainBar);
  root.append(nav);

  // ── drawer state machine (≤1369): the top bar lives inside .logo and holds the menu ──
  const layout = () => {
    if (!isDesktop.matches) {
      if (topBar.parentNode !== logo) logo.insertBefore(topBar, link);
      if (menu.parentNode !== topBar) topBar.append(menu);
      if (burger.getAttribute('aria-expanded') !== 'true') menu.style.display = 'none';
    } else {
      if (topBar.parentNode !== nav) nav.insertBefore(topBar, mainBar);
      if (menu.parentNode !== mainBar) mainBar.append(menu);
      menu.style.display = '';
      burger.querySelectorAll('img').forEach((i) => { i.style.display = ''; });
      closeAll(nav);
    }
  };
  const setDrawer = (open) => {
    burger.setAttribute('aria-expanded', String(open));
    topBar.classList.toggle('top-bar-opened', open);
    topBar.classList.toggle('top-to-bottom', open);
    menu.style.display = open ? 'block' : 'none';
    const [m, c] = burger.querySelectorAll('img');
    if (m) m.style.display = open ? 'none' : 'inline';
    if (c) c.style.display = open ? 'inline' : 'none';
    document.body.style.overflowY = open ? 'hidden' : '';
  };
  burger.addEventListener('click', () => setDrawer(burger.getAttribute('aria-expanded') !== 'true'));
  window.addEventListener('keydown', (e) => { if (e.key === 'Escape') { setDrawer(false); closeAll(nav); } });
  nav.addEventListener('focusout', (e) => { if (!nav.contains(e.relatedTarget) && !isDesktop.matches && burger.getAttribute('aria-expanded') === 'true') setDrawer(false); });
  layout();
  isDesktop.addEventListener('change', layout);

  const wrapper = document.createElement('div');
  wrapper.className = 'nav-wrapper';
  wrapper.append(root, buildBreadcrumb(navLinks));
  block.append(wrapper);
}
