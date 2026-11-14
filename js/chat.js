/* PAK STAR SARL: on-site assistant (rule-based, runs in the browser, no external service) */
(function () {
  'use strict';
  var PK = window.PK; if (!PK) return;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function lang() { return (PK.i18n && PK.i18n.lang) || 'en'; }
  function T(en, fr) { return lang() === 'fr' ? fr : en; }
  function L(o) { return PK.L ? PK.L(o) : o; }
  function norm(s) { return String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }

  var UI = {
    title: ['PAK STAR assistant', 'Assistant PAK STAR'],
    sub: ['Ask about our vehicles, prices or showroom', 'Posez vos questions sur nos véhicules, prix ou showroom'],
    ph: ['Type your question…', 'Écrivez votre question…'],
    send: ['Send', 'Envoyer'], open: ['Open chat assistant', 'Ouvrir l’assistant'], close: ['Close chat', 'Fermer le chat']
  };
  function u(k) { return UI[k][lang() === 'fr' ? 1 : 0]; }

  function waLink(msg) { return PK.CO.waLink(msg); }
  function waBtn(msg, label) { return '<a class="cb-link wa" href="' + waLink(msg) + '" target="_blank" rel="noopener">' + esc(label || T('Chat on WhatsApp', 'Discuter sur WhatsApp')) + '</a>'; }
  function productCard(p) {
    var msg = T('Hello PAK STAR SARL, I would like information about: ', 'Bonjour PAK STAR SARL, je souhaite des informations sur : ') + p.name;
    return '<div class="cb-card"><b>' + esc(p.name) + '</b><span>' + esc(L(p.desc)) + '</span><div class="cb-links"><a class="cb-link" href="product-details.html?id=' + p.id + '">' + esc(T('View details', 'Voir les détails')) + '</a>' + waBtn(msg, T('Ask price', 'Demander le prix')) + '</div></div>';
  }
  function list(arr) { return '<div class="cb-links">' + arr.join('') + '</div>'; }

  function findProducts(q) {
    var n = norm(q), out = [];
    PK.PRODUCTS.forEach(function (p) {
      var name = norm(p.name), id = norm(p.id).replace(/-/g, ' ');
      if (n.indexOf(name) > -1 || n.indexOf(id) > -1) out.push(p);
    });
    if (out.length) return out.slice(0, 3);
    var m = n.match(/\bus\s?(70|100|125|150)\b/); if (m) { var p = PK.find(PK.PRODUCTS, 'us' + m[1]); if (p) return [p]; }
    return [];
  }
  function inCat(id) { return PK.PRODUCTS.filter(function (p) { return p.cat === id; }); }
  function catReply(id, intro) {
    var c = PK.find(PK.CATS, id), ps = inCat(id);
    return '<p>' + esc(intro) + '</p>' + list(ps.map(function (p) { return '<a class="cb-link" href="product-details.html?id=' + p.id + '">' + esc(p.name) + '</a>'; })) + '<p><a class="cb-link" href="motorcycles.html?cat=' + id + '">' + esc(T('See all ', 'Tout voir : ') + L(c.name)) + '</a></p>';
  }

  var INTENTS = [
    { k: /(hello|hi\b|hey|salam|salut|bonjour|bonsoir|assalam)/, a: function () { return '<p>' + esc(T('Hello! Welcome to PAK STAR SARL. How can I help you today?', 'Bonjour ! Bienvenue chez PAK STAR SARL. Comment puis-je vous aider ?')) + '</p>'; } },
    { k: /(price|prix|cost|combien|tarif|how much|devis|quote|djf|cher)/, a: function () { return '<p>' + esc(T('Prices are given on request as a quote in Djiboutian Franc (DJF). Tell us the model and we will reply with availability and price.', 'Les prix sont communiqués sur demande, sous forme de devis en franc Djibouti (DJF). Indiquez-nous le modèle et nous vous répondrons avec la disponibilité et le prix.')) + '</p>' + list([waBtn(T('Hello PAK STAR SARL, I would like a price quote.', 'Bonjour PAK STAR SARL, je souhaite un devis.'), T('Ask for a quote on WhatsApp', 'Demander un devis sur WhatsApp')), '<a class="cb-link" href="inquiry.html">' + esc(T('Inquiry form', 'Formulaire de demande')) + '</a>']); } },
    { k: /(where|location|address|adresse|ou etes|ou se trouve|map|carte|showroom|balbala|find you|localis|itineraire|direction)/, a: function () { return '<p>' + esc(L(PK.CO.addr)) + '</p>' + list(['<a class="cb-link" href="' + PK.CO.mapShort + '" target="_blank" rel="noopener">' + esc(T('Open in Google Maps', 'Ouvrir dans Google Maps')) + '</a>', '<a class="cb-link" href="contact.html#map">' + esc(T('Contact page', 'Page contact')) + '</a>']); } },
    { k: /(hour|open|opening|horaire|heure|ouvert|ferme|closed|friday|vendredi|when)/, a: function () { return '<p>' + PK.CO.hours.map(function (x) { return esc(L(x.d)) + ': ' + esc(L(x.h)); }).join('<br>') + '</p>'; } },
    { k: /(phone|call|tel|telephone|appel|numero|number|whatsapp|contact|email|mail|facebook|reach|joindre)/, a: function () { var C = PK.CO; return '<p>' + esc(T('You can reach us here:', 'Vous pouvez nous joindre ici :')) + '</p>' + list([waBtn(), '<a class="cb-link" href="tel:' + C.tel + '">' + esc(C.phone) + '</a>', '<a class="cb-link" href="mailto:' + C.email + '">' + esc(C.email) + '</a>', '<a class="cb-link" href="' + C.fb + '" target="_blank" rel="noopener">Facebook</a>']); } },
    { k: /(electric|electrique|e-?bike|battery|batterie|lithium|bullet|e-?rickshaw|e-?loader|charge time)/, a: function () { return catReply('electric', T('Our electric range:', 'Notre gamme électrique :')); } },
    { k: /(ambulance|medical|patient|security|securite|school|ecole|scolaire|special|loader|bucket|godet|waste|dechet)/, a: function () { return catReply('special', T('Special-purpose vehicles:', 'Véhicules spéciaux :')) + '<p>' + esc(T('Also see our school van and bucket loader on their product pages.', 'Voyez aussi notre van scolaire et notre chargeur à godet sur leurs fiches.')) + '</p>'; } },
    { k: /(rickshaw|rikshaw|taxi|passenger|passager|tuk|3 seat|6 seat|three.?wheel|tricycle|seater)/, a: function () { return catReply('rickshaw', T('Passenger three-wheelers:', 'Tricycles passagers :')); } },
    { k: /(cargo|business|shop|milk|grocery|vegetable|legume|lait|epicerie|deliver|livraison|transport|commerce|van)/, a: function () { return catReply('cargo', T('Cargo and business vehicles:', 'Véhicules de charge et professionnels :')); } },
    { k: /(motorcycle|motorbike|moto|bike|us ?70|us ?100|us ?125|us ?150|scooter|commuter|daily)/, a: function () { return catReply('moto', T('Our motorcycles (United US series):', 'Nos motos (série United US) :')); } },
    { k: /(dealer|distribut|revend|partner|partenaire|franchise|wholesale|gros)/, a: function () { return '<p>' + esc(T('We welcome dealer and distributor inquiries.', 'Nous accueillons les demandes de revendeurs et distributeurs.')) + '</p>' + list(['<a class="cb-link" href="become-a-dealer.html">' + esc(T('Become a dealer', 'Devenir revendeur')) + '</a>', waBtn()]); } },
    { k: /(who make|made by|manufactur|fabric|united|brand|marque|quality|warranty|garantie|spare|piece|pieces|service|after.?sales)/, a: function () { return '<p>' + esc(T('Our vehicles are manufactured by United Motorcycles. For warranty, spare parts and service details, please ask our team directly.', 'Nos véhicules sont fabriqués par United Motorcycles. Pour la garantie, les pièces détachées et le service, demandez directement à notre équipe.')) + '</p>' + list([waBtn(), '<a class="cb-link" href="about.html">' + esc(T('About us', 'À propos')) + '</a>']); } },
    { k: /(book|booking|reserve|order|buy|acheter|commande|purchase|test ride|essai|inquir|demande)/, a: function () { return '<p>' + esc(T('To order or book, send us an inquiry with the model you like. We will reply with availability and a quote.', 'Pour commander ou réserver, envoyez-nous une demande avec le modèle souhaité. Nous vous répondrons avec la disponibilité et un devis.')) + '</p>' + list(['<a class="cb-link" href="inquiry.html">' + esc(T('Inquiry form', 'Formulaire de demande')) + '</a>', waBtn(T('Hello PAK STAR SARL, I would like to order a vehicle.', 'Bonjour PAK STAR SARL, je souhaite commander un véhicule.'))]); } },
    { k: /(thank|merci|shukria|ok\b|great|super)/, a: function () { return '<p>' + esc(T('You are welcome! Anything else I can help with?', 'Avec plaisir ! Puis-je vous aider pour autre chose ?')) + '</p>'; } }
  ];

  function answer(q) {
    var ps = findProducts(q);
    if (ps.length) return ps.map(productCard).join('');
    var n = norm(q);
    for (var i = 0; i < INTENTS.length; i++) if (INTENTS[i].k.test(n)) return INTENTS[i].a();
    return '<p>' + esc(T('I am not sure I understood. Our team can answer this directly:', 'Je ne suis pas sûr d’avoir compris. Notre équipe peut vous répondre directement :')) + '</p>' + list([waBtn(T('Hello PAK STAR SARL, I have a question: ', 'Bonjour PAK STAR SARL, j’ai une question : ') + q, T('Ask on WhatsApp', 'Demander sur WhatsApp')), '<a class="cb-link" href="contact.html">' + esc(T('Contact page', 'Page contact')) + '</a>']);
  }

  var root, log, input, panel, btn, hist = [];
  function chips() {
    var C = [['Vehicles', 'Véhicules', 'vehicles'], ['Prices', 'Prix', 'price'], ['Showroom location', 'Adresse du showroom', 'where'], ['Opening hours', 'Horaires', 'hours'], ['Electric', 'Électrique', 'electric'], ['WhatsApp', 'WhatsApp', 'whatsapp']];
    return '<div class="cb-chips">' + C.map(function (c) { return '<button type="button" data-q="' + c[2] + '">' + esc(T(c[0], c[1])) + '</button>'; }).join('') + '</div>';
  }
  function add(role, html, save) {
    var d = document.createElement('div'); d.className = 'cb-msg ' + role; d.innerHTML = html; log.appendChild(d); log.scrollTop = log.scrollHeight;
    if (save !== false) { hist.push({ r: role, h: html }); hist = hist.slice(-30); try { PK.store.set('chat', hist); } catch (e) {} }
  }
  function ask(q, label) {
    add('user', esc(label || q));
    setTimeout(function () { add('bot', q === 'vehicles' ? '<p>' + esc(T('We offer these vehicle families:', 'Nos familles de véhicules :')) + '</p>' + list(PK.CATS.map(function (c) { return '<a class="cb-link" href="motorcycles.html?cat=' + c.id + '">' + esc(L(c.name)) + '</a>'; })) : answer(q)); }, 350);
  }
  function welcome() { add('bot', '<p>' + esc(T('Hello! I am the PAK STAR assistant. Ask me about our motorcycles, electric bikes, rickshaws, cargo and special vehicles, or our showroom.', 'Bonjour ! Je suis l’assistant PAK STAR. Posez-moi vos questions sur nos motos, motos électriques, rickshaws, véhicules de charge et spéciaux, ou sur notre showroom.')) + '</p>' + chips(), false); }

  function build() {
    root = document.createElement('div'); root.className = 'cb-root';
    root.innerHTML = '<button type="button" class="cb-fab" aria-haspopup="dialog" aria-expanded="false"><svg viewBox="0 0 24 24" aria-hidden="true" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/><path d="M9 11h6M9 14h4"/></svg></button>' +
      '<section class="cb-panel" role="dialog" aria-modal="false" aria-labelledby="cbTitle" hidden><header><div><b id="cbTitle"></b><small></small></div><button type="button" class="cb-x"><svg viewBox="0 0 24 24" aria-hidden="true" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg></button></header>' +
      '<div class="cb-log" role="log" aria-live="polite"></div><form class="cb-form"><input type="text" autocomplete="off" maxlength="300"><button type="submit"></button></form></section>';
    document.body.appendChild(root);
    btn = $('.cb-fab', root); panel = $('.cb-panel', root); log = $('.cb-log', root); input = $('input', root);
    function labels() { $('#cbTitle', root).textContent = u('title'); $('small', root).textContent = u('sub'); input.placeholder = u('ph'); input.setAttribute('aria-label', u('ph')); $('.cb-form button', root).textContent = u('send'); btn.setAttribute('aria-label', u('open')); $('.cb-x', root).setAttribute('aria-label', u('close')); }
    labels();
    var saved = null; try { saved = PK.store.get('chat', null); } catch (e) {}
    if (saved && saved.length) { hist = saved; saved.forEach(function (m) { add(m.r, m.h, false); }); } else welcome();
    function toggle(open) { panel.hidden = !open; btn.setAttribute('aria-expanded', open); root.classList.toggle('is-open', open); if (open) { input.focus(); log.scrollTop = log.scrollHeight; } else btn.focus(); }
    btn.addEventListener('click', function () { toggle(panel.hidden); });
    $('.cb-x', root).addEventListener('click', function () { toggle(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !panel.hidden) toggle(false); });
    $('.cb-form', root).addEventListener('submit', function (e) { e.preventDefault(); var q = input.value.trim(); if (!q) return; input.value = ''; ask(q); });
    log.addEventListener('click', function (e) { var b = e.target.closest('[data-q]'); if (!b) return; var k = b.getAttribute('data-q'); ask(k === 'whatsapp' ? 'whatsapp' : k, b.textContent); });
    PK.on && PK.on('lang', function () { labels(); });
  }
  document.addEventListener('DOMContentLoaded', function () { setTimeout(build, 50); });
})();
