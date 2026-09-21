/* stardust:replica — chrome state machine, mirrored from motion-observe evidence
   (stardust/replica/motion/index.json, index-360.json) and chrome-states-live.json.
   Observed: (1) USTA SITES button toggles aria-expanded → sibling panel shown (1440, click);
   (2) ≤1369px the hamburger toggles aria-expanded and #top-navigation-bar gains
       .top-navigation__top-bar--opened.top-to-bottom; the bar lives inside .logo and holds the
       navigation menu (re-parented) — the same element morphs, no clone. No entrance animations,
       no header scroll morph (headerTimeline identity 195px rest = scrolled). */
(function () {
  const mq = window.matchMedia('(max-width: 1369px)');
  const topBar = document.getElementById('top-navigation-bar');
  const logo = document.querySelector('.logo');
  const logoLink = document.querySelector('.logo__link');
  const nav = document.querySelector('.navigation-menu');
  const mainBar = document.querySelector('.main-bar');
  const burger = document.querySelector('.logo__hamburger');
  const ddBtn = document.getElementById('label-id-8');
  const ddClose = document.querySelector('.drop-down__close');
  if (!topBar || !nav || !mainBar) return;
  const desktopWrapper = topBar.parentNode; const navHome = nav.parentNode; const navNext = nav.nextSibling;

  function layout() {
    if (mq.matches) {
      if (topBar.parentNode !== logo) logo.insertBefore(topBar, logoLink);
      if (nav.parentNode !== topBar) topBar.appendChild(nav);
    } else {
      if (topBar.parentNode !== desktopWrapper) desktopWrapper.insertBefore(topBar, mainBar);
      if (nav.parentNode !== navHome) navHome.insertBefore(nav, navNext);
      nav.style.display = ''; if (imgMenu) imgMenu.style.display = ''; if (imgCancel) imgCancel.style.display = '';
      closeDrawer();
    }
  }
  const imgMenu = burger && burger.querySelector('.logo__hamburger--menu');
  const imgCancel = burger && burger.querySelector('.logo__hamburger--cancel');
  function setDrawer(open) {
    // live mutates inline display on the nav and the two hamburger images (motion-observe 360: 3 style-mutated elements)
    burger.setAttribute('aria-expanded', String(open));
    topBar.classList.toggle('top-navigation__top-bar--opened', open);
    topBar.classList.toggle('top-to-bottom', open);
    nav.style.display = open ? 'block' : 'none';
    if (imgMenu) imgMenu.style.display = open ? 'none' : 'inline';
    if (imgCancel) imgCancel.style.display = open ? 'inline' : 'none';
  }
  function closeDrawer() { if (burger) setDrawer(false); }
  if (burger) burger.addEventListener('click', () => setDrawer(burger.getAttribute('aria-expanded') !== 'true'));
  if (ddBtn) {
    ddBtn.addEventListener('click', () => {
      const open = ddBtn.getAttribute('aria-expanded') === 'true';
      ddBtn.setAttribute('aria-expanded', String(!open));
    });
    const close = () => ddBtn.setAttribute('aria-expanded', 'false');
    if (ddClose) { ddClose.addEventListener('click', close); ddClose.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') close(); }); }
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { close(); closeDrawer(); } });
    document.addEventListener('click', (e) => { if (!e.target.closest('.dropdown')) close(); });
  }
  layout(); mq.addEventListener('change', layout);
})();
