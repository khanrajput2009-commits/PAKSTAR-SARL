/* PAK STAR SARL — forms.js
   Front-end validation + state for the contact, inquiry and dealer forms.
   IMPORTANT: Without a backend this is a DEMONSTRATION. Nothing is transmitted unless a form has a
   data-endpoint attribute pointing at a real service (email API, form backend, etc.). The confirmation
   screen says so explicitly. Drafts are kept in PK.store (localStorage with fallbacks) until sent; delivery is via WhatsApp / mailto. */
(function () {
  'use strict';
  var PK = (window.PK = window.PK || {});
  var $ = PK.$, $$ = PK.$$, L = PK.L, I = PK.icon, esc = PK.esc;

  function ctl(f) { return $('input:not([type=radio]):not([type=checkbox]), select, textarea, input[type=checkbox]', f); }
  function check(f) {
    var c = ctl(f), msg = '', radios = $$('input[type=radio]', f);
    if (radios.length) { if (f.hasAttribute('data-required') && !radios.some(function (r) { return r.checked; })) msg = ['err.required', 'This field is required']; }
    else if (c) {
      var v = (c.type === 'checkbox' ? (c.checked ? '1' : '') : c.value).trim();
      if (c.required && !v) msg = c.type === 'checkbox' ? ['err.consent', 'Please accept to continue'] : ['err.required', 'This field is required'];
      else if (v && c.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) msg = ['err.email', 'Enter a valid email address'];
      else if (v && c.getAttribute('data-type') === 'phone' && !/^\+?[0-9 ().-]{6,20}$/.test(v)) msg = ['err.phone', 'Enter a valid phone number'];
      else if (v && c.minLength > 0 && v.length < c.minLength) msg = ['err.min', 'Please write a little more (at least ' + c.minLength + ' characters)'];
    }
    var err = $('.err', f);
    f.classList.toggle('invalid', !!msg); f.classList.toggle('valid', !msg && !!(c && (c.value || c.checked)));
    if (c) c.setAttribute('aria-invalid', !!msg);
    if (err) { err.textContent = msg ? PK.t(msg[0], msg[1]).replace('{n}', c ? c.minLength : '') : ''; if (msg) err.setAttribute('data-k', msg[0]); }
    return !msg;
  }

  function initForm(form) {
    $$('.field', form).forEach(function (f) {
      var c = ctl(f); if (!c) return;
      c.addEventListener('blur', function () { if (c.value || f.classList.contains('invalid')) check(f); });
      c.addEventListener('input', function () { if (f.classList.contains('invalid')) check(f); });
      c.addEventListener('change', function () { if (f.classList.contains('invalid') || c.tagName === 'SELECT') check(f); });
      var err = $('.err', f); if (err) { var id = (c.id || 'f' + Math.random().toString(36).slice(2, 7)) + '-err'; err.id = id; err.setAttribute('role', 'alert'); c.setAttribute('aria-describedby', id); }
    });
    var dk = 'draft.' + (form.getAttribute('data-form') || 'form');
    function fields() { return $$('input,select,textarea', form).filter(function (c) { return c.name && c.type !== 'submit'; }); }
    function saveDraft() {
      var o = {}; fields().forEach(function (c) { if (c.type === 'radio') { if (c.checked) o[c.name] = c.value; } else if (c.type === 'checkbox') o[c.name] = c.checked; else o[c.name] = c.value; });
      PK.store.set(dk, o);
    }
    function loadDraft() {
      var o = PK.store.get(dk, null); if (!o || typeof o !== 'object') return;
      fields().forEach(function (c) {
        if (!(c.name in o)) return;
        if (c.type === 'radio') c.checked = (c.value === o[c.name]); else if (c.type === 'checkbox') c.checked = !!o[c.name]; else if (c.tagName !== 'SELECT' || !c.value) { c.value = o[c.name]; }
      });
    }
    form._loadDraft = loadDraft; loadDraft();
    form.addEventListener('input', saveDraft); form.addEventListener('change', saveDraft);
    function summary() {
      var lines = [];
      $$('.field', form).forEach(function (f) {
        var c = ctl(f), lab = $('label', f), t = lab ? lab.textContent.replace('*', '').trim() : '', v = '';
        if (!c) { var r = $$('input[type=radio]', f).filter(function (x) { return x.checked; })[0]; v = r ? (r.parentNode.textContent || r.value).trim() : ''; t = t || (r && r.name); }
        else if (c.type === 'checkbox') return;
        else if (c.tagName === 'SELECT') v = c.options[c.selectedIndex] ? c.options[c.selectedIndex].text : '';
        else v = c.value.trim();
        if (v) lines.push(t + ': ' + v);
      });
      return lines.join('\n');
    }
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var bad = $$('.field', form).filter(function (f) { return !check(f); });
      if (bad.length) { var c = ctl(bad[0]) || $('input', bad[0]); c && c.focus(); PK.toast(PK.t('err.fix', 'Please check the highlighted fields.'), 'info'); return; }
      var btn = $('[type=submit]', form), ep = form.getAttribute('data-endpoint');
      btn.disabled = true; btn.classList.add('is-loading'); var lbl = $('span', btn); var old = lbl.textContent; lbl.textContent = PK.t('btn.sending', 'Sending…');
      function done(ok) {
        btn.disabled = false; lbl.textContent = old; btn.classList.remove('is-loading');
        if (!ok) { PK.toast(PK.t('err.send', 'Could not send. Please try again.'), 'info'); return; }
        var okEl = $('#formOk'), CO = PK.CO, txt = 'PAK STAR SARL — ' + (form.getAttribute('aria-label') || '') + '\n\n' + summary(), od = $('.ok-demo', okEl);
        if (od) od.hidden = true;
        var row = $('.ok-send', okEl); if (!row) { row = document.createElement('div'); row.className = 'btn-row ok-send'; row.style.justifyContent = 'center'; row.style.marginBottom = '1.2rem'; (od || $('#again')).parentNode.insertBefore(row, od || $('#again')); }
        row.innerHTML = '<a class="btn wa" target="_blank" rel="noopener" href="' + CO.waLink(txt) + '"><span>' + esc(PK.t('ok.wa', 'Send on WhatsApp')) + '</span></a><a class="btn ghost" href="mailto:' + CO.email + '?subject=' + encodeURIComponent('PAK STAR SARL — ' + (form.getAttribute('aria-label') || '')) + '&body=' + encodeURIComponent(txt) + '"><span>' + esc(PK.t('ok.mail', 'Send by email')) + '</span></a>';
        PK.store.set(dk, null); form.hidden = true;
        try { window.open(CO.waLink(txt), '_blank', 'noopener'); } catch (e) {} okEl.classList.add('show'); 
        var h = $('h2', okEl); h.setAttribute('tabindex', '-1'); h.focus(); okEl.scrollIntoView({ behavior: PK.reduce ? 'auto' : 'smooth', block: 'center' });
        PK.toast(PK.t('ok.toast', 'Form validated successfully'));
      }
      if (ep) { fetch(ep, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } }).then(function (r) { done(r.ok); }).catch(function () { done(false); }); }
      else setTimeout(function () { done(true); }, 700);
    });
    form.addEventListener('reset', function () { setTimeout(function () { $$('.field', form).forEach(function (f) { f.classList.remove('invalid', 'valid'); }); }, 0); });
    var again = $('#again'); if (again) again.addEventListener('click', function () { form.reset(); PK.store.set(dk, null); form.hidden = false; $('#formOk').classList.remove('show'); var c = ctl($('.field', form)); c && c.focus(); });
  }

  function initInquiry() {
    var sel = $('#model'); if (!sel) return;
    function fill() {
      var dr = PK.store.get('draft.inquiry', null), cur = new URLSearchParams(location.search).get('model') || sel.value || (dr && dr.model) || '';
      sel.innerHTML = '<option value="">' + esc(PK.t('inq.general', 'General inquiry (no specific model)')) + '</option>' + PK.PRODUCTS.map(function (p) { return '<option value="' + p.id + '">' + esc(p.name + ' — ' + L(PK.find(PK.CATS, p.cat).name)) + '</option>'; }).join('');
      sel.value = PK.find(PK.PRODUCTS, cur) ? cur : ''; preview();
    }
    function preview() {
      var p = PK.find(PK.PRODUCTS, sel.value), box = $('#modelPreview'); if (!box) return;
      box.hidden = !p; if (!p) return;
      box.innerHTML = '<div class="frame" style="aspect-ratio:16/10;box-shadow:none">' + PK.modelImg(p, 0, p.name) + '</div><h3 style="margin:1rem 0 .2rem">' + esc(p.name) + '</h3><p style="color:var(--muted);margin:0">' + esc(L(p.desc)) + '</p>';
    }
    sel.addEventListener('change', preview); fill(); PK.on('lang', fill);
  }

  PK.on('ready', function () {
    $$('form[data-form]').forEach(initForm); initInquiry();
    PK.on('lang', function () { $$('.field.invalid').forEach(check); });
  });
})();
