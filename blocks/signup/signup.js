/**
 * signup — "JOIN THE FUN" email + ZIP sign-up (dynamics row #29: UI rebuilt,
 * submission blocked until the owner names the USTA marketing endpoint).
 * Schema: stardust/eds-schema/<page>.json § signup-band (template-slotted).
 *
 * Authoring (one row, one cell):
 *   <picture>   the RBT badge icon
 *   <h4>        title ("RED IS IN. ARE YOU?" | "Interested in hosting Red Ball
 *               Tennis?")
 *   <p>         subtitle
 *   <p>         disclaimer (with the Terms / Privacy links)
 * Field labels and the button label are site-wide constants: /placeholders.json
 * (keys signupEmail, signupZip, signupSubmit, signupNoBackend) with in-code
 * defaults.
 * Every authored node is MOVED (EW1); generated strings are runtime UI labels only.
 */

const DEFAULTS = {
  signupEmail: 'EMAIL',
  signupZip: 'ZIP/POSTAL CODE',
  signupSubmit: '*JOIN THE FUN',
  signupNoBackend: 'Sign-up is not connected yet — no backend configured for this preview.',
};

function wrapNode(node, className) {
  const w = document.createElement('div');
  w.className = className;
  w.append(node);
  return w;
}

function field(id, name, label) {
  const wrap = document.createElement('div');
  wrap.className = `text-input signup-${name}`;
  const base = document.createElement('div');
  base.className = 'v-base-input';
  const lbl = document.createElement('label');
  lbl.htmlFor = id;
  const star = document.createElement('span');
  star.className = 'signup-asterisk';
  star.textContent = '*';
  lbl.append(star, label);
  const inWrap = document.createElement('div');
  inWrap.className = 'v-base-input-wrapper';
  const input = document.createElement('input');
  input.id = id;
  input.type = 'text';
  input.name = name;
  input.required = true;
  input.setAttribute('aria-invalid', 'false');
  input.setAttribute('aria-describedby', `${id}-error`);
  const err = document.createElement('div');
  err.id = `${id}-error`;
  err.className = 'v-base-input-error';
  err.hidden = true;
  inWrap.append(input, err);
  base.append(lbl, inWrap);
  wrap.append(base);
  return wrap;
}

export default async function decorate(block) {
  const cells = [...block.querySelectorAll(':scope > div > div')];
  const nodes = cells.flatMap((c) => [...c.children]);
  const pic = nodes.find((n) => n.matches('picture, img') || n.querySelector?.('picture, img'));
  const heading = nodes.find((n) => /^H[1-6]$/.test(n.tagName));
  const ps = nodes.filter((n) => n.tagName === 'P' && !n.querySelector('picture, img'));
  const subtitle = ps.find((p) => !p.querySelector('a'));
  const disclaimer = ps.find((p) => p !== subtitle);

  let ph = {};
  try {
    const res = await fetch(`${window.hlx.codeBasePath}/placeholders.json`);
    if (res.ok) {
      const json = await res.json();
      (json.data || []).forEach((r) => { if (r.Key) ph[r.Key] = r.Text; });
    }
  } catch { ph = {}; }
  const t = (k) => ph[k] || DEFAULTS[k];

  const form = document.createElement('form');
  form.className = 'signup-form';
  form.noValidate = true;
  form.setAttribute('data-backend', 'none');
  if (pic) form.append(wrapNode(pic.closest('p') || pic, 'signup-icon'));
  if (heading) form.append(wrapNode(heading, 'signup-title'));
  if (subtitle) form.append(wrapNode(subtitle, 'signup-subtitle'));

  const row = document.createElement('div');
  row.className = 'inputs-row';
  row.append(field('email-value-id', 'email', t('signupEmail')), field('zipcode-value-id', 'zipcode', t('signupZip')));
  const buttons = document.createElement('div');
  buttons.className = 'signup-buttons';
  const submit = document.createElement('button');
  submit.type = 'submit';
  submit.className = 'subscribe-button';
  submit.textContent = t('signupSubmit');
  submit.disabled = true;
  buttons.append(submit);
  row.append(buttons);
  form.append(row);

  const status = document.createElement('p');
  status.className = 'signup-notice';
  status.setAttribute('role', 'status');
  status.hidden = true;
  form.append(status);
  if (disclaimer) form.append(wrapNode(disclaimer, 'signup-terms'));

  // leftovers degrade to visible default styling (DROPPED CONTENT guard)
  nodes.forEach((n) => { if (!form.contains(n) && n.isConnected) form.append(n); });

  const inputs = [...row.querySelectorAll('input')];
  const validate = () => { submit.disabled = !inputs.every((i) => i.value.trim()); };
  inputs.forEach((i) => i.addEventListener('input', validate));
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // dynamics #29: no backend connected — explicit message, never a silent no-op
    status.textContent = t('signupNoBackend');
    status.hidden = false;
  });
  block.replaceChildren(form);
}
