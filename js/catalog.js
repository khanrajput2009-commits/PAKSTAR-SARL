/* PAK STAR SARL — catalog.js : the real product range (2 & 3 wheelers).
   Products shown are United Motorcycles models offered by PAK STAR SARL. Technical data is taken from the
   manufacturer's own brochures; where a brochure gives no figure, none is shown (full specifications on request).
   No prices are published: customers ask for a quote in DJF. */
(function () {
  'use strict';
  var PK = (window.PK = window.PK || {}), b = PK.b;
  function S(l, lf, v, vf) { return [b(l, lf), vf ? b(v, vf) : v]; }

  /* ------------------------------------------------------------ business facts (single source of truth) */
  PK.CO = {
    name: 'PAK STAR SARL', short: 'PAK STAR',
    tagline: b('Make Mobility Easy', 'Make Mobility Easy'),
    phone: '+253 77 49 94 88',
    email: 'pakstar.dji@gmail.com',
    fb: 'https://www.facebook.com/667032463169985/', fbName: 'Pakstar SARL',
    addr: b('Cittie Hillace, Near Mosque Quba, Balbala, Djibouti, Republic of Djibouti', 'Cittie Hillace, près de la mosquée Quba, Balbala, Djibouti, République de Djibouti'),
    mapShort: 'https://goo.gl/maps/a2wy473Lb5ohpeoH8?g_st=aw',
    mapQuery: 'Cittie Hillace Balbala Djibouti',
    hours: [
      { d: b('Saturday – Thursday', 'Samedi – Jeudi'), h: '08:00 – 12:00 · 16:00 – 20:00' },
      { d: b('Friday', 'Vendredi'), h: b('Closed', 'Fermé') }
    ],
    about: b('We offer high quality 2 & 3 wheelers for personal and commercial uses.', 'Nous proposons des 2 et 3 roues de haute qualité pour un usage personnel et professionnel.')
  };
  PK.CO.tel = '+25377499488'; PK.CO.wa = '25377499488';
  PK.CO.waLink = function (msg) { return 'https://wa.me/' + PK.CO.wa + (msg ? '?text=' + encodeURIComponent(msg) : ''); };

  /* ------------------------------------------------------------ categories */
  PK.CATS = [
    { id: 'moto', icon: 'route', type: 'commuter', color: '#1f5fd8', name: b('Motorcycles', 'Motos'),
      desc: b('Petrol motorcycles from 70 cc to 150 cc for work and daily travel.', 'Motos essence de 70 à 150 cc pour le travail et les trajets quotidiens.'),
      long: b('Our motorcycle range runs from the light 70 cc and 100 cc workhorses to the 125 cc and the sporty 150 cc with self start and alloy wheels. Simple to ride, easy to maintain and economical to run: made for Djibouti’s daily roads.', 'Notre gamme de motos va des robustes 70 et 100 cc aux 125 cc et au sportif 150 cc avec démarreur électrique et jantes alliage. Simples à conduire, faciles à entretenir et économiques : pensées pour les routes de Djibouti.') },
    { id: 'electric', icon: 'bolt', type: 'electric', color: '#0e9f6e', name: b('Electric', 'Électriques'),
      desc: b('Electric motorcycles, scooter and three-wheelers with lithium iron phosphate batteries.', 'Motos, scooter et trois-roues électriques à batterie lithium fer phosphate.'),
      long: b('The Electric range includes the Electric Bullet in six versions (including swappable-battery models with up to 200 km of range), the Electric Sharp scooter, and the E-Rikshaw and E-Loader three-wheelers. Quiet, clean and very cheap to run.', 'La gamme électrique comprend l’Electric Bullet en six versions (dont des modèles à batteries interchangeables jusqu’à 200 km d’autonomie), le scooter Electric Sharp et les trois-roues E-Rikshaw et E-Loader. Silencieux, propres et très économiques à l’usage.') },
    { id: 'rickshaw', icon: 'users', type: 'cargo', color: '#e6a100', name: b('Passenger three-wheelers', 'Trois-roues passagers'),
      desc: b('Rickshaws (tuk-tuks) and school vans for carrying people.', 'Rickshaws (tuk-tuks) et vans scolaires pour transporter des personnes.'),
      long: b('Three-wheelers are a practical way to move people through busy streets. Choose the 3-seater tuk-tuk, the 6-seater 200 cc auto rickshaw or the 100 cc school van.', 'Les trois-roues sont une solution pratique pour transporter des personnes dans les rues animées. Choisissez le tuk-tuk 3 places, le rickshaw 200 cc 6 places ou le van scolaire 100 cc.') },
    { id: 'cargo', icon: 'truck', type: 'cargo', color: '#d9480f', name: b('Cargo & business', 'Cargo & professionnels'),
      desc: b('Loaders, pickup vans and mobile shops for goods and trade.', 'Chargeurs, pick-up et boutiques mobiles pour les marchandises et le commerce.'),
      long: b('Cargo three-wheelers (150 cc Deluxe and Deluxe Plus), the 200 cc hi-roof pickup van, and 200 cc mobile milk, grocery and vegetable shops: affordable ways to start or grow a business.', 'Trois-roues cargo (Deluxe et Deluxe Plus 150 cc), pick-up à toit haut 200 cc et boutiques mobiles 200 cc (lait, épicerie, légumes) : des moyens abordables de lancer ou développer une activité.') },
    { id: 'special', icon: 'shield', type: 'cargo', color: '#c92a2a', name: b('Special purpose', 'Usages spéciaux'),
      desc: b('Ambulances, security and medical bikes, and municipal loaders.', 'Ambulances, motos de sécurité et médicales, chargeurs municipaux.'),
      long: b('Vehicles built for a job: tricycle and cabin ambulances, 125 cc security and first-responder motorcycles, and the hydraulic bucket loader for waste collection and construction.', 'Des véhicules conçus pour une mission : ambulances tricycle et à cabine, motos de sécurité et de premiers secours 125 cc, et chargeur à godet hydraulique pour la collecte des déchets et le BTP.') }
  ];

  /* ------------------------------------------------------------ shared spec blocks */
  var E200 = [
    S('Engine', 'Moteur', '4-stroke, water-cooled', '4 temps, refroidi par eau'), S('Displacement', 'Cylindrée', '198 cc'),
    S('Bore & stroke', 'Alésage × course', '63 × 63.5 mm'), S('Fuel', 'Carburant', 'Petrol', 'Essence'),
    S('Front suspension', 'Suspension avant', 'Shock absorber', 'Amortisseur'), S('Rear suspension', 'Suspension arrière', 'Leaf spring', 'Ressort à lames'),
    S('Clutch', 'Embrayage', 'Multi-plate, wet type', 'Multidisque, bain d’huile'), S('Transmission', 'Transmission', '4-speed + 1 reverse', '4 vitesses + marche arrière'),
    S('Starting', 'Démarrage', 'Kick + self start', 'Kick + démarreur électrique'), S('Fuel tank', 'Réservoir', '5 L'), S('Battery', 'Batterie', '12 V')
  ];
  var E150C = [
    S('Engine', 'Moteur', '4-stroke OHV, single cylinder, air-cooled', '4 temps OHV, monocylindre, refroidi par air'), S('Displacement', 'Cylindrée', '149 cc'),
    S('Compression ratio', 'Taux de compression', '9.1 : 1'), S('Front brake', 'Frein avant', 'Drum, mechanical', 'Tambour, mécanique'), S('Rear brake', 'Frein arrière', 'Drum, mechanical', 'Tambour, mécanique'),
    S('Transmission', 'Transmission', '5-speed', '5 vitesses'), S('Starting', 'Démarrage', 'Kick / self start', 'Kick / démarreur électrique'), S('Fuel tank', 'Réservoir', '11 L'),
    S('Tyres (front / rear)', 'Pneus (av. / arr.)', '5.00-12 / 5.00-12'), S('Battery', 'Batterie', '12 V'), S('Engine oil', 'Huile moteur', '1.25 L')
  ];
  var E125 = [
    S('Engine', 'Moteur', '4-stroke, single cylinder, air-cooled', '4 temps, monocylindre, refroidi par air'), S('Displacement', 'Cylindrée', '125 cc'),
    S('Bore & stroke', 'Alésage × course', '56.5 × 49.5 mm'), S('Compression ratio', 'Taux de compression', '9.0 : 1'),
    S('Clutch', 'Embrayage', 'Wet type, multi-plate', 'Bain d’huile, multidisque'), S('Transmission', 'Transmission', '4-speed', '4 vitesses'), S('Starting', 'Démarrage', 'Kick start', 'Kick'),
    S('Fuel tank', 'Réservoir', '9 L'), S('Frame', 'Cadre', 'Backbone', 'Épine dorsale'), S('Ground clearance', 'Garde au sol', '140 mm'),
    S('Tyres (front / rear)', 'Pneus (av. / arr.)', '2.50-18 / 3.00-17'), S('Dimensions (L × W × H)', 'Dimensions (L × l × H)', '1900 × 710 × 1040 mm'), S('Dry weight', 'Poids à sec', '94.5 kg')
  ];
  function elec(power, range, speed, charge, batt, extra) {
    var r = [S('Motor power', 'Puissance moteur', power), S('Range per charge', 'Autonomie par charge', range), S('Top speed (plain road)', 'Vitesse max. (route plane)', speed),
      S('Charging time', 'Temps de charge', charge, charge.replace('hours', 'heures')), S('Battery', 'Batterie', batt, batt.replace('Lithium iron phosphate', 'Lithium fer phosphate'))];
    return extra ? r.concat(extra) : r;
  }
  var COLS = function (en, fr) { return S('Colours', 'Couleurs', en, fr); };

  /* ------------------------------------------------------------ products */
  PK.PRODUCTS = [
    /* ---- motorcycles ---- */
    { id: 'us70', cat: 'moto', type: 'commuter', color: '#c1121f', name: 'US70', fuel: 'petrol', trans: 'manual', eng: '70 cc',
      tag: b('Motorcycle', 'Moto'), pill: b('Classic', 'Classique'),
      desc: b('The light, simple 70 cc classic: chrome mudguards, spoked wheels and a bright red finish.', 'Le classique léger et simple de 70 cc : garde-boues chromés, roues à rayons et finition rouge éclatante.'),
      use: b('Daily commuting and light errands', 'Trajets quotidiens et petites courses'),
      feats: [b('Chrome mudguards and exhaust', 'Garde-boues et échappement chromés'), b('Spoked wheels', 'Roues à rayons'), b('Red tank with graphic design', 'Réservoir rouge à décor graphique'), b('Light, easy-to-handle frame', 'Cadre léger et maniable')],
      specs: [S('Displacement', 'Cylindrée', '70 cc'), COLS('Red', 'Rouge')], note: true },
    { id: 'us100', cat: 'moto', type: 'commuter', color: '#111', name: 'US100', fuel: 'petrol', trans: 'manual', eng: '100 cc',
      tag: b('Motorcycle', 'Moto'), pill: b('Alloy wheels', 'Jantes alliage'),
      desc: b('A dependable 100 cc all-rounder in black, with alloy wheels and front protection bars.', 'Un 100 cc polyvalent et fiable, noir, avec jantes alliage et arceaux de protection avant.'),
      use: b('Daily work, delivery and family transport', 'Travail quotidien, livraison et transport familial'),
      feats: [b('Alloy wheels', 'Jantes alliage'), b('Front protection bars', 'Arceaux de protection avant'), b('Chrome silencer', 'Silencieux chromé'), b('Black finish with colour graphics', 'Finition noire à décor coloré')],
      specs: [S('Displacement', 'Cylindrée', '100 cc'), COLS('Black', 'Noir')], note: true },
    { id: 'us125', cat: 'moto', type: 'commuter', color: '#c1121f', name: 'US125', fuel: 'petrol', trans: 'manual', eng: '125 cc',
      tag: b('Motorcycle', 'Moto'), pill: b('4-speed', '4 vitesses'),
      desc: b('The 125 cc standard: air-cooled single cylinder, 4-speed gearbox and a strong backbone frame.', 'La référence 125 cc : monocylindre refroidi par air, boîte 4 vitesses et solide cadre épine dorsale.'),
      use: b('Everyday riding and work', 'Conduite quotidienne et travail'),
      feats: [b('4-speed gearbox', 'Boîte 4 vitesses'), b('140 mm ground clearance', 'Garde au sol de 140 mm'), b('9-litre fuel tank', 'Réservoir de 9 litres'), b('Light: 94.5 kg dry weight', 'Léger : 94,5 kg à sec')],
      specs: E125.concat([COLS('Red, black', 'Rouge, noir')]) },
    { id: 'us150', cat: 'moto', type: 'sport', color: '#e5383b', name: 'US150', fuel: 'petrol', trans: 'manual', eng: '149 cc',
      tag: b('Motorcycle', 'Moto'), pill: b('Self start', 'Démarreur'),
      desc: b('The sporty 150 cc: self start, alloy wheels, front disc brake and a 13-litre tank.', 'Le sportif 150 cc : démarreur électrique, jantes alliage, frein à disque avant et réservoir de 13 litres.'),
      use: b('Commuting and longer trips', 'Trajets quotidiens et longues distances'),
      feats: [b('Self start', 'Démarreur électrique'), b('Alloy wheels', 'Jantes alliage'), b('Front disc brake', 'Frein à disque avant'), b('13-litre fuel tank', 'Réservoir de 13 litres')],
      specs: [S('Engine', 'Moteur', '4-stroke SOHC, single cylinder, air-cooled', '4 temps SOHC, monocylindre, refroidi par air'), S('Displacement', 'Cylindrée', '149 cc'), S('Compression ratio', 'Taux de compression', '9.1 : 1'),
        S('Front brake', 'Frein avant', 'Disc', 'Disque'), S('Rear brake', 'Frein arrière', 'Drum, mechanical', 'Tambour, mécanique'), S('Transmission', 'Transmission', '5-speed', '5 vitesses'),
        S('Starting', 'Démarrage', 'Kick / self start', 'Kick / démarreur électrique'), S('Fuel tank', 'Réservoir', '13 L'), S('Tyres (front / rear)', 'Pneus (av. / arr.)', '80/100-18 (47P) / 90/90-18 (51P)'),
        S('Battery', 'Batterie', '12 V'), S('Engine oil', 'Huile moteur', '1.25 L'), COLS('Red, black', 'Rouge, noir')] },

    /* ---- electric ---- */
    { id: 'electric-bullet', cat: 'electric', type: 'electric', color: '#1f5fd8', name: 'Electric Bullet', fuel: 'electric', trans: 'electric', eng: '2000 W',
      tag: b('Electric', 'Électrique'), pill: b('up to 200 km', 'jusqu’à 200 km'),
      desc: b('A 2000 W electric motorcycle in six versions, from 80 km up to 200 km of range with swappable batteries.', 'Une moto électrique de 2000 W en six versions, de 80 à 200 km d’autonomie avec batteries interchangeables.'),
      use: b('Daily commuting, delivery, low running cost', 'Trajets quotidiens, livraison, faible coût d’usage'),
      feats: [b('2000 W motor, top speed 90 km/h', 'Moteur 2000 W, vitesse max. 90 km/h'), b('Lithium iron phosphate (LiFePO4) battery', 'Batterie lithium fer phosphate (LiFePO4)'), b('Full charge in 4 to 5 hours', 'Charge complète en 4 à 5 heures'), b('Swap versions with two removable batteries', 'Versions Swap avec deux batteries amovibles')],
      specs: [S('Motor power', 'Puissance moteur', '2000 W'), S('Top speed (plain road)', 'Vitesse max. (route plane)', '90 km/h'), S('Charging time', 'Temps de charge', '4 to 5 hours', '4 à 5 heures'),
        S('Battery', 'Batterie', 'Lithium iron phosphate (LiFePO4), 72 V', 'Lithium fer phosphate (LiFePO4), 72 V'), S('Range per charge', 'Autonomie par charge', '80 – 200 km (by version)', '80 – 200 km (selon la version)')],
      viewNames: ['Bullet', 'Swap Pro', 'Swap Max', 'Ultimate', 'Max', 'Pro'],
      variants: { head: [b('Version', 'Version'), b('Range', 'Autonomie'), b('Battery (72 V)', 'Batterie (72 V)')], rows: [
        ['Bullet', '80 – 85 km', '25 Ah'], ['Pro', '90 – 95 km', '30 Ah'], ['Max', '110 – 115 km', '40 Ah'], ['Ultimate', '140 – 145 km', '55 Ah'],
        ['Swap Pro', '160 – 165 km', '60 Ah (2 × 30 Ah)'], ['Swap Max', '190 – 200 km', '80 Ah (2 × 40 Ah)']] } },
    { id: 'electric-sharp', cat: 'electric', type: 'scooter', color: '#6d28d9', name: 'Electric Sharp', fuel: 'electric', trans: 'electric', eng: '1500 W',
      tag: b('Scooter', 'Scooter'), pill: b('75–80 km', '75–80 km'),
      desc: b('A 1500 W electric scooter with a rear top box: quiet, clean and made for city streets.', 'Un scooter électrique de 1500 W avec top-case : silencieux, propre et fait pour la ville.'),
      use: b('City commuting and short deliveries', 'Trajets urbains et petites livraisons'),
      feats: [b('1500 W motor', 'Moteur 1500 W'), b('Rear top box (as pictured)', 'Top-case arrière (comme sur la photo)'), b('Charge in 4 to 5 hours', 'Charge en 4 à 5 heures'), b('LED-class lighting: 20 W headlight', 'Éclairage : phare 20 W')],
      specs: elec('1500 W', '75 – 80 km', '55 – 60 km/h', '4 to 5 hours', 'Lithium iron phosphate (LiFePO4), 72 V – 36 Ah', [S('Lighting', 'Éclairage', 'Headlight 20 W · winker 5 W · tail light 5/10 W', 'Phare 20 W · clignotant 5 W · feu arrière 5/10 W')]) },
    { id: 'e-rikshaw', cat: 'electric', type: 'electric', color: '#0e9f6e', name: 'E-Rikshaw', fuel: 'electric', trans: 'electric', eng: '4000 W',
      tag: b('Electric three-wheeler', 'Trois-roues électrique'), pill: b('180–200 km', '180–200 km'),
      desc: b('An electric passenger rickshaw: 4000 W, up to 200 km per charge and a 800–1000 kg loading capacity.', 'Un rickshaw électrique pour passagers : 4000 W, jusqu’à 200 km par charge et 800–1000 kg de capacité de charge.'),
      use: b('Passenger transport with very low running cost', 'Transport de passagers à très faible coût d’usage'),
      feats: [b('4000 W motor', 'Moteur 4000 W'), b('180 – 200 km per full charge', '180 – 200 km par charge complète'), b('Enclosed canopy with side screens', 'Habitacle fermé avec rideaux latéraux'), b('No fuel, quiet operation', 'Sans carburant, fonctionnement silencieux')],
      specs: elec('4000 W', '180 – 200 km', '50 km/h', '5 to 6 hours', 'Lithium iron phosphate (LiFePO4), 72 V – 145 Ah', [S('Loading capacity', 'Capacité de charge', '800 – 1000 kg')]) },
    { id: 'e-loader', cat: 'electric', type: 'cargo', color: '#0ea5a5', name: 'E-Loader', fuel: 'electric', trans: 'electric', eng: '4000 W',
      tag: b('Electric cargo', 'Cargo électrique'), pill: b('800–1000 kg', '800–1000 kg'),
      desc: b('The electric cargo three-wheeler: 4000 W, 180–200 km per charge, an open load bed and 800–1000 kg capacity.', 'Le trois-roues cargo électrique : 4000 W, 180–200 km par charge, benne ouverte et 800–1000 kg de capacité.'),
      use: b('Goods delivery and market trade', 'Livraison de marchandises et commerce de marché'),
      feats: [b('4000 W motor', 'Moteur 4000 W'), b('Open cargo bed with side panels', 'Benne ouverte à ridelles'), b('Cabin-style roof for the rider', 'Toit de protection pour le conducteur'), b('Low running cost', 'Faible coût d’usage')],
      specs: elec('4000 W', '180 – 200 km', '50 km/h', '5 to 6 hours', 'Lithium iron phosphate (LiFePO4), 72 V – 145 Ah', [S('Loading capacity', 'Capacité de charge', '800 – 1000 kg')]) },

    /* ---- passenger three-wheelers ---- */
    { id: 'rickshaw-3', cat: 'rickshaw', type: 'cargo', color: '#e6a100', name: '3-Seater Rickshaw (Tuk-tuk)', fuel: 'petrol', trans: 'manual', eng: '3 seats',
      tag: b('Rickshaw', 'Rickshaw'), pill: b('3 passengers', '3 passagers'),
      desc: b('The classic yellow tuk-tuk: a compact 3-seater with a canvas hood, built for busy streets.', 'Le tuk-tuk jaune classique : un compact 3 places à capote en toile, pensé pour les rues animées.'),
      use: b('Taxi service and short passenger trips', 'Service de taxi et courts trajets de passagers'),
      feats: [b('Seats three passengers', 'Trois places passagers'), b('Canvas hood with side windows', 'Capote en toile avec fenêtres latérales'), b('Patterned interior lining and cushioned seats', 'Garnissage intérieur à motifs et sièges rembourrés'), b('Driver cabin with dashboard and mirrors', 'Cabine conducteur avec tableau de bord et rétroviseurs')],
      specs: [S('Seats', 'Places', '3 passengers', '3 passagers'), S('Body', 'Carrosserie', 'Yellow, brown canvas hood', 'Jaune, capote en toile marron')], note: true },
    { id: 'rickshaw-6', cat: 'rickshaw', type: 'cargo', color: '#1f5fd8', name: '6-Seater Rickshaw 200 cc', fuel: 'petrol', trans: 'manual', eng: '198 cc',
      tag: b('Rickshaw', 'Rickshaw'), pill: b('6 passengers', '6 passagers'),
      desc: b('The 200 cc auto rickshaw: water-cooled engine, 4 speeds plus reverse, and room for six passengers.', 'Le rickshaw auto 200 cc : moteur refroidi par eau, 4 vitesses plus marche arrière, et de la place pour six passagers.'),
      use: b('Shared taxi routes and passenger transport', 'Taxis collectifs et transport de passagers'),
      feats: [b('Water-cooled 198 cc engine', 'Moteur 198 cc refroidi par eau'), b('4 speeds + reverse', '4 vitesses + marche arrière'), b('Kick and self start', 'Démarrage au kick et électrique'), b('Closed cabin with seats and dashboard', 'Cabine fermée avec sièges et tableau de bord')],
      specs: [S('Seats', 'Places', '6 passengers', '6 passagers')].concat(E200), video: 'rickshaw-walk' },
    { id: 'school-van', cat: 'rickshaw', type: 'cargo', color: '#c1121f', name: '100 cc School Van', fuel: 'petrol', trans: 'manual', eng: '97 cc',
      tag: b('Passenger three-wheeler', 'Trois-roues passagers'), pill: b('Covered cabin', 'Cabine fermée'),
      desc: b('A covered 100 cc three-wheeler for carrying children and passengers: economical and simple to run.', 'Un trois-roues couvert de 100 cc pour transporter enfants et passagers : économique et simple à utiliser.'),
      use: b('School runs and short passenger routes', 'Ramassage scolaire et courts trajets'),
      feats: [b('Fully covered passenger body', 'Carrosserie passagers entièrement couverte'), b('4-speed gearbox', 'Boîte 4 vitesses'), b('8.5-litre fuel tank', 'Réservoir de 8,5 litres'), b('Economical 97 cc engine', 'Moteur économique de 97 cc')],
      specs: [S('Engine', 'Moteur', '4-stroke OHC, single cylinder, air-cooled', '4 temps OHC, monocylindre, refroidi par air'), S('Displacement', 'Cylindrée', '97 cc'), S('Compression ratio', 'Taux de compression', '8.1 : 1'),
        S('Brakes (front / rear)', 'Freins (av. / arr.)', 'Drum, mechanical / drum, mechanical', 'Tambour mécanique / tambour mécanique'), S('Transmission', 'Transmission', '4-speed', '4 vitesses'), S('Starting', 'Démarrage', 'Kick'),
        S('Fuel tank', 'Réservoir', '8.5 L'), S('Tyres (front / rear)', 'Pneus (av. / arr.)', '2.50-18 4PR / 2.75-18 6PR'), S('Battery', 'Batterie', '12 V'), S('Engine oil', 'Huile moteur', '0.8 L')] },

    /* ---- cargo & business ---- */
    { id: 'deluxe-150', cat: 'cargo', type: 'cargo', color: '#c1121f', name: '150 cc Deluxe', fuel: 'petrol', trans: 'manual', eng: '149 cc',
      tag: b('Cargo three-wheeler', 'Trois-roues cargo'), pill: b('5-speed', '5 vitesses'),
      desc: b('A tough 150 cc cargo three-wheeler with a big open bed for building materials, produce and goods.', 'Un robuste trois-roues cargo 150 cc avec grande benne ouverte pour matériaux, produits et marchandises.'),
      use: b('Goods transport and small trade', 'Transport de marchandises et petit commerce'),
      feats: [b('Large open cargo bed with side rails', 'Grande benne ouverte à ridelles'), b('5-speed gearbox', 'Boîte 5 vitesses'), b('Kick and self start', 'Démarrage au kick et électrique'), b('11-litre fuel tank', 'Réservoir de 11 litres')], specs: E150C },
    { id: 'deluxe-plus-150', cat: 'cargo', type: 'cargo', color: '#c1121f', name: '150 cc Deluxe Plus', fuel: 'petrol', trans: 'manual', eng: '149 cc',
      tag: b('Cargo three-wheeler', 'Trois-roues cargo'), pill: b('High-side bed', 'Benne haute'),
      desc: b('The Deluxe Plus adds a taller, reinforced cargo body to the 150 cc platform for bigger loads.', 'Le Deluxe Plus ajoute une benne plus haute et renforcée à la base 150 cc pour de plus grosses charges.'),
      use: b('Heavier and bulkier loads', 'Charges plus lourdes et volumineuses'),
      feats: [b('Taller reinforced cargo body', 'Benne plus haute et renforcée'), b('5-speed gearbox', 'Boîte 5 vitesses'), b('Kick and self start', 'Démarrage au kick et électrique'), b('Drum brakes front and rear', 'Freins à tambour avant et arrière')], specs: E150C },
    { id: 'hiroof-van', cat: 'cargo', type: 'cargo', color: '#2b9348', name: '200 cc Hi-Roof Pickup Van', fuel: 'petrol', trans: 'manual', eng: '198 cc',
      tag: b('Pickup van', 'Pick-up'), pill: b('Hi-roof body', 'Caisse à toit haut'),
      desc: b('A 200 cc three-wheel pickup with a tall covered body that keeps goods dry, clean and secure.', 'Un pick-up trois-roues 200 cc à caisse haute couverte qui garde les marchandises au sec, propres et en sécurité.'),
      use: b('Covered goods delivery', 'Livraison de marchandises à couvert'),
      feats: [b('Tall covered cargo body', 'Caisse haute couverte'), b('Enclosed driver cabin with windscreen', 'Cabine conducteur fermée avec pare-brise'), b('4 speeds + reverse', '4 vitesses + marche arrière'), b('Water-cooled engine', 'Moteur refroidi par eau')], specs: E200 },
    { id: 'milk-carrier', cat: 'cargo', type: 'cargo', color: '#2b9348', name: '200 cc Milk Carrier', fuel: 'petrol', trans: 'manual', eng: '198 cc',
      tag: b('Special body', 'Carrosserie spéciale'), pill: b('Steel tank', 'Cuve inox'),
      desc: b('A 200 cc three-wheeler carrying a stainless-steel tank, made for collecting and delivering milk.', 'Un trois-roues 200 cc portant une cuve en acier inoxydable, conçu pour collecter et livrer du lait.'),
      use: b('Milk collection and delivery', 'Collecte et livraison de lait'),
      feats: [b('Stainless-steel tank with top hatch', 'Cuve inox avec trappe supérieure'), b('Covered driver cabin', 'Cabine conducteur couverte'), b('4 speeds + reverse', '4 vitesses + marche arrière'), b('Water-cooled engine', 'Moteur refroidi par eau')], specs: E200 },
    { id: 'grocery-shop', cat: 'cargo', type: 'cargo', color: '#2b9348', name: '200 cc Grocery Shop', fuel: 'petrol', trans: 'manual', eng: '198 cc',
      tag: b('Mobile shop', 'Boutique mobile'), pill: b('Shelved body', 'Caisse à rayonnages'),
      desc: b('A mobile grocery shop on three wheels, with shelves and an open front to sell goods wherever people are.', 'Une épicerie mobile sur trois roues, avec rayonnages et façade ouverte pour vendre là où se trouvent les clients.'),
      use: b('Mobile retail and neighbourhood trade', 'Commerce ambulant et de quartier'),
      feats: [b('Fitted shelving and display counter', 'Rayonnages et comptoir d’exposition'), b('Awning over the selling side', 'Auvent côté vente'), b('4 speeds + reverse', '4 vitesses + marche arrière'), b('Low start-up cost for a shop', 'Faible coût de lancement d’une boutique')], specs: E200 },
    { id: 'veg-shop', cat: 'cargo', type: 'cargo', color: '#2b9348', name: '200 cc Vegetables Shop', fuel: 'petrol', trans: 'manual', eng: '198 cc',
      tag: b('Mobile shop', 'Boutique mobile'), pill: b('Display baskets', 'Paniers d’exposition'),
      desc: b('A mobile fruit and vegetable shop with tilted display baskets and a fold-out canopy.', 'Une boutique mobile de fruits et légumes avec paniers d’exposition inclinés et auvent déployable.'),
      use: b('Fruit and vegetable street trade', 'Vente ambulante de fruits et légumes'),
      feats: [b('Tilted display baskets', 'Paniers d’exposition inclinés'), b('Fold-out canopy for shade', 'Auvent déployable pour l’ombre'), b('4 speeds + reverse', '4 vitesses + marche arrière'), b('Water-cooled engine', 'Moteur refroidi par eau')], specs: E200 },

    /* ---- special purpose ---- */
    { id: 'ambulance-tricycle', cat: 'special', type: 'cargo', color: '#c92a2a', name: 'Ambulance Tricycle', fuel: 'petrol', trans: 'manual', eng: '198 cc',
      tag: b('Ambulance', 'Ambulance'), pill: b('Stretcher + oxygen', 'Civière + oxygène'),
      desc: b('A cost-effective tricycle ambulance that reaches narrow, crowded or remote places where regular ambulances cannot.', 'Une ambulance tricycle économique qui atteint les lieux étroits, encombrés ou isolés où les ambulances classiques ne peuvent pas aller.'),
      long: b('Tricycle Ambulance: Affordable Life-Saving Mobility for Compact & Rural Areas. This cost-effective tricycle ambulance is designed to bridge the critical gap in emergency medical transport for narrow, congested, or remote locations where traditional ambulances cannot reach or are too expensive. Serving as a vital patient transfer vehicle, it ensures basic life support and swift movement of patients from villages, slums, and dense urban alleyways to main health centers. Durable, fuel-efficient, and highly maneuverable, it provides a practical and life-saving solution for communities with limited infrastructure.',
        'Ambulance Tricycle : Solution Économique pour le Transfert de Patients en Zone Rurale et Dense. Cette ambulance tricycle économique a été conçue pour combler le manque crucial de transport médicalisé dans les zones rurales, reculées ou les ruelles étroites où les ambulances traditionnelles ne peuvent pas accéder. Utilisée comme véhicule de transfert de patients, elle garantit des soins de base et une évacuation rapide des villages vers les centres de santé. Robuste, maniable et extrêmement économique à utiliser, elle représente une solution pratique et salvatrice pour les communautés aux infrastructures limitées.'),
      use: b('Patient transfer in rural and dense areas', 'Transfert de patients en zones rurales et denses'),
      feats: [b('High maneuverability: navigates narrow paths, trails and crowded streets with ease', 'Maniabilité exceptionnelle : accède aux sentiers étroits, aux chemins difficiles et aux marchés bondés'),
        b('Cost-effective: low acquisition and operating costs', 'Solution économique : faible coût d’achat et de fonctionnement'),
        b('Essential life support: stretcher, basic oxygen support and a first-aid kit', 'Équipement essentiel : civière, kit de premiers secours et possibilité d’administrer de l’oxygène'),
        b('All-terrain capability for rough roads and rural terrain', 'Tout-terrain : conçue pour les routes non goudronnées et les terrains accidentés'),
        b('Community-focused: no one left behind for lack of transport', 'Au service de la communauté : l’isolement géographique n’est plus un obstacle aux soins')],
      specs: [S('Model', 'Modèle', '200 cc / 150 cc ambulance', 'Ambulance 200 cc / 150 cc')].concat(E200), video: 'ambulance-demo' },
    { id: 'ambulance-cabin', cat: 'special', type: 'cargo', color: '#c92a2a', name: '200 cc Cabin Ambulance', fuel: 'petrol', trans: 'manual', eng: '200 cc',
      tag: b('Ambulance', 'Ambulance'), pill: b('Closed cabin', 'Cabine fermée'),
      desc: b('A 200 cc three-wheel ambulance with a closed driver cabin and an enclosed, marked patient compartment.', 'Une ambulance trois-roues 200 cc avec cabine conducteur fermée et compartiment patient fermé et balisé.'),
      use: b('Urban and peri-urban patient transport', 'Transport de patients en ville et en périphérie'),
      feats: [b('Closed driver cabin with windscreen and wiper', 'Cabine conducteur fermée avec pare-brise et essuie-glace'), b('Enclosed patient compartment with windows', 'Compartiment patient fermé avec fenêtres'), b('Roof beacon lights and ambulance markings', 'Gyrophares de toit et marquage ambulance')],
      specs: [S('Engine class', 'Classe moteur', '200 cc')], note: true },
    { id: 'security-bike', cat: 'special', type: 'sport', color: '#1f5fd8', name: '125 cc Security & Medical Bike', fuel: 'petrol', trans: 'manual', eng: '125 cc',
      tag: b('Special bike', 'Moto spéciale'), pill: b('Beacon + top box', 'Gyrophare + top-case'),
      desc: b('Two purpose-built versions of the 125 cc: a police-style security bike and a first-responding medical bike.', 'Deux versions spéciales de la 125 cc : une moto de sécurité de type police et une moto médicale de premiers secours.'),
      use: b('Security patrol and first response', 'Patrouille de sécurité et premiers secours'),
      feats: [b('Security version with blue beacon and storage box', 'Version sécurité avec gyrophare bleu et coffre'), b('First-responding medical version with top box', 'Version médicale de premiers secours avec top-case'), b('Windscreen and rear backrest', 'Pare-brise et dosseret arrière'), b('Proven 125 cc air-cooled engine', 'Moteur 125 cc refroidi par air éprouvé')],
      specs: E125 },
    { id: 'bucket-loader', cat: 'special', type: 'cargo', color: '#2b9348', name: 'Hydraulic Bucket Bike Loader 150 cc', fuel: 'petrol', trans: 'manual', eng: '150 cc',
      tag: b('Municipal loader', 'Chargeur municipal'), pill: b('Hydraulic bucket', 'Godet hydraulique'),
      desc: b('The versatile 150 cc loader with a hydraulic tipping bucket for waste collection and building sites.', 'Le chargeur polyvalent 150 cc à godet hydraulique basculant pour la collecte des déchets et les chantiers.'),
      long: b('150CC Hydraulic Bucket Loader Bike: Your Agile Worksite Partner. This versatile 150CC loader bike is a compact powerhouse designed for tough urban and construction tasks. Equipped with a robust hydraulic bucket, it effortlessly handles garbage collection, transporting sand, gravel, cement bags, and other building materials. Its motorcycle-like agility allows it to navigate narrow streets and crowded sites with ease, offering a cost-effective and efficient solution for municipal services and small-scale construction projects. Durable, practical, and built to work hard.',
        'Vélo Chargeur à Godet Hydraulique 150CC : Le Partenaire Polyvalent pour le BTP et la Propreté. Ce vélo chargeur 150CC est une solution ingénieuse et puissante pour les chantiers et la collecte des déchets. Équipé d’un godet hydraulique robuste, il est parfaitement adapté pour le transport du sable, du gravier, des sacs de ciment, ainsi que pour la collecte des ordures ménagères. Son agilité, comparable à celle d’une moto, lui permet d’accéder aux ruelles étroites et aux zones denses, en faisant un allié indispensable pour les services municipaux et les petits artisans du BTP. Un outil fiable, économique et conçu pour la performance.'),
      use: b('Waste collection and construction work', 'Collecte des déchets et chantiers'),
      feats: [b('Robust hydraulic tipping bucket', 'Godet hydraulique basculant robuste'), b('Carries sand, gravel, cement bags and household waste', 'Transporte sable, gravier, sacs de ciment et ordures ménagères'), b('Motorcycle-like agility for narrow streets', 'Agilité de moto pour les ruelles étroites'), b('Cost-effective for municipal services', 'Économique pour les services municipaux')],
      specs: [S('Displacement', 'Cylindrée', '150 cc'), S('Body', 'Benne', 'Hydraulic tipping bucket', 'Godet hydraulique basculant')], video: 'loader-demo' }
  ];

  PK.TRANS = { manual: b('Manual gearbox', 'Boîte manuelle'), auto: b('Automatic', 'Automatique'), electric: b('Electric drive', 'Motorisation électrique') };
  PK.FUEL = { petrol: b('Petrol', 'Essence'), electric: b('Electric', 'Électrique') };

  /* ------------------------------------------------------------ extra UI strings merged into the dictionary */
  PK.I18N_EXTRA = {
    'foot.rights': ['All rights reserved to Fahad Nisar.', 'Tous droits réservés à Fahad Nisar.'], 'foot.owner': ['Owner: Umair', 'Propriétaire : Umair'],
    'news.page.title': ['News & Updates', 'Actualités'], 'news.page.lead': ['Buyer’s guides, product stories and business ideas about every vehicle in our range.', 'Guides d’achat, fiches produit et idées d’activité sur chaque véhicule de notre gamme.'],
    'dealers.lead': ['Join PAK STAR SARL as a dealer or distributor and offer motorcycles, electric bikes, rickshaws, cargo and special vehicles to your customers.', 'Rejoignez PAK STAR SARL comme revendeur ou distributeur et proposez motos, motos électriques, rickshaws, véhicules de charge et spéciaux à vos clients.'],
    'dealers.eyebrow': ['Partner with us', 'Devenez partenaire'], 'dealers.h2': ['Grow your business with PAK STAR SARL', 'Développez votre activité avec PAK STAR SARL'],
    'dn.why.eyebrow': ['Why partner with us', 'Pourquoi nous rejoindre'], 'dn.why.title': ['A range your customers will ask for', 'Une gamme que vos clients vont demander'], 'dn.why.lead': ['Everything you need to serve riders, businesses and organisations.', 'Tout ce qu’il faut pour servir particuliers, entreprises et organisations.'],
    'dn.c1.t': ['A complete range', 'Une gamme complète'], 'dn.c1.d': ['21 vehicles in 5 categories: motorcycles, electric, rickshaws, cargo and special vehicles, all from one supplier.', '21 véhicules en 5 catégories : motos, électrique, rickshaws, charge et véhicules spéciaux, auprès d’un seul fournisseur.'],
    'dn.c2.t': ['A known manufacturer', 'Un constructeur reconnu'], 'dn.c2.d': ['Every vehicle is manufactured by United Motorcycles. You can see the factory on our About page.', 'Chaque véhicule est fabriqué par United Motorcycles. Vous pouvez voir l’usine sur notre page À propos.'],
    'dn.c3.t': ['Demand in every trade', 'Une demande dans chaque métier'], 'dn.c3.d': ['Taxi and shuttle rickshaws, cargo trucks, mobile shops, ambulances and electric vehicles for lower running costs.', 'Rickshaws taxi et navette, véhicules de charge, boutiques mobiles, ambulances et véhicules électriques pour réduire les coûts.'],
    'dn.c4.t': ['Direct, bilingual contact', 'Contact direct et bilingue'], 'dn.c4.d': ['Talk to us on WhatsApp, by phone or email in English or French.', 'Parlez-nous sur WhatsApp, par téléphone ou par e-mail en français ou en anglais.'],
    'dn.steps.eyebrow': ['How it works', 'Comment ça marche'], 'dn.steps.title': ['From inquiry to partnership', 'De la demande au partenariat'],
    'dn.s1.t': ['1. Send an inquiry', '1. Envoyez une demande'], 'dn.s1.d': ['Fill in the “Become a dealer” form or message us on WhatsApp with your business details.', 'Remplissez le formulaire « Devenir revendeur » ou écrivez-nous sur WhatsApp avec les détails de votre activité.'],
    'dn.s2.t': ['2. We get in touch', '2. Nous vous contactons'], 'dn.s2.d': ['Our team calls or messages you to understand your location, customers and plans.', 'Notre équipe vous appelle ou vous écrit pour comprendre votre lieu, vos clients et vos projets.'],
    'dn.s3.t': ['3. Choose your range', '3. Choisissez votre gamme'], 'dn.s3.d': ['We discuss which vehicles fit your market, with availability and quotes in DJF.', 'Nous discutons des véhicules adaptés à votre marché, avec disponibilité et devis en DJF.'],
    'dn.s4.t': ['4. Agree and start', '4. Accord et démarrage'], 'dn.s4.d': ['Terms are agreed directly with the owner, then you can start offering our vehicles.', 'Les conditions sont convenues directement avec le propriétaire, puis vous pouvez commencer à proposer nos véhicules.'],
    'dn.range.eyebrow': ['What you can offer', 'Ce que vous pouvez proposer'], 'dn.range.title': ['Our five vehicle categories', 'Nos cinq catégories de véhicules'],
    'dn.contact.title': ['Talk to us directly', 'Parlez-nous directement'], 'dn.contact.d': ['Dealer and distributor inquiries are handled by the owner, Umair.', 'Les demandes de revendeurs et distributeurs sont traitées par le propriétaire, Umair.'],
    'hero.t1': ['Make', 'Make'], 'hero.t2': ['Mobility', 'Mobility'], 'hero.t3': ['Easy.', 'Easy.'],
    'f.sort.feat': ['Our order', 'Notre ordre'],
    'about.lead': ['High quality 2 and 3 wheelers for personal and commercial use in Djibouti.', 'Des 2 et 3 roues de haute qualité pour un usage personnel et professionnel à Djibouti.'],
    's.vehicles': ['Vehicles in our range', 'Véhicules dans notre gamme'], 's.cats': ['Vehicle categories', 'Catégories de véhicules'], 's.bullet': ['Electric Bullet versions', 'Versions Electric Bullet'], 's.langs': ['Languages: English and French', 'Langues : anglais et français'],
    'mq.1': ['Make Mobility Easy', 'Make Mobility Easy'], 'mq.2': ['Motorcycles', 'Motos'], 'mq.3': ['Electric', 'Électrique'], 'mq.4': ['Rickshaws', 'Rickshaws'], 'mq.5': ['Cargo', 'Charge'], 'mq.6': ['Special vehicles', 'Véhicules spéciaux'],
    'gal.eyebrow': ['Gallery', 'Galerie'], 'gal.title': ['Our vehicles in pictures', 'Nos véhicules en images'], 'gal.lead': ['Click any image to open the viewer; use the arrow keys or swipe to browse.', 'Cliquez sur une image pour l’agrandir ; utilisez les flèches ou balayez pour parcourir.'],
    'steps.lead': ['Four simple steps from your first look to your first ride.', 'Quatre étapes simples, du premier regard à la première balade.'],
    'why.eyebrow': ['Why PAK STAR', 'Pourquoi PAK STAR'], 'why.lead': ['What you can count on when you choose PAK STAR SARL.', 'Ce sur quoi vous pouvez compter en choisissant PAK STAR SARL.'],
    'cats.title': ['Choose your kind of ride', 'Choisissez votre type de véhicule'], 'cats.lead': ['Five categories, from daily motorcycles to special-purpose vehicles. Open any card for the full picture.', 'Cinq catégories, des motos du quotidien aux véhicules spéciaux. Ouvrez une carte pour tout voir.'],
    'map.title': ['Visit our showroom', 'Visitez notre showroom'], 'dealers.map.title': ['Our showroom', 'Notre showroom'],
    'hero.c1': ['Motorcycles', 'Motos'], 'hero.c2': ['Electric', 'Électrique'], 'hero.c3': ['Business', 'Professionnel'],
    'hero.m1': ['Vehicles', 'Véhicules'],
    'hero.lead': ['Motorcycles, electric bikes, rickshaws, cargo and special vehicles in Djibouti. Make Mobility Easy.', 'Motos, motos électriques, rickshaws, véhicules de charge et spéciaux à Djibouti. Make Mobility Easy.'],
    'intro.title': ['Vehicles for every road and every business', 'Des véhicules pour toutes les routes et toutes les activités'],
    'intro.p1': ['From daily motorcycles and electric bikes to rickshaws, cargo vehicles and ambulances, PAK STAR SARL helps people and businesses in Djibouti find the right vehicle.', 'Des motos du quotidien et motos électriques aux rickshaws, véhicules de charge et ambulances, PAK STAR SARL aide particuliers et entreprises de Djibouti à trouver le bon véhicule.'],
    'intro.li2': ['Prices as a quote in DJF, on request', 'Prix sous forme de devis en DJF, sur demande'],
    'intro.li3': ['Options for riders, businesses and dealers', 'Solutions pour particuliers, entreprises et revendeurs'],
    'feat.lead': ['A selection from our range. Use Quick view on any card for photos and details.', 'Une sélection de notre gamme. Utilisez l’aperçu rapide sur chaque carte pour les photos et les détails.'],
    'intro.badge': ['Make Mobility Easy', 'Make Mobility Easy'],
    'news.lead': ['Our vehicles and what they are used for.', 'Nos véhicules et leurs usages.'],
    'title.home': ['PAK STAR SARL — Make Mobility Easy', 'PAK STAR SARL — Make Mobility Easy'],
    'dealers.p1': ['Visit our showroom in Cittie Hillace, Balbala, or contact us on WhatsApp. If you would like to represent PAK STAR SARL as a dealer or distributor, send us a business inquiry.', 'Passez à notre showroom à Cittie Hillace, Balbala, ou contactez-nous sur WhatsApp. Pour représenter PAK STAR SARL comme revendeur ou distributeur, envoyez-nous une demande professionnelle.'],
    'dl.lead': ['Interested in representing PAK STAR SARL? Send a short business inquiry and we will get back to you.', 'Intéressé pour représenter PAK STAR SARL ? Envoyez une courte demande professionnelle et nous vous répondrons.'],
    'news.title': ['Our vehicles at a glance', 'Nos véhicules en bref'],
    'about.who.title': ['Make Mobility Easy', 'Make Mobility Easy'],
    'about.who.p1': ['PAK STAR SARL offers high quality 2 and 3 wheelers for personal and commercial use in Djibouti: motorcycles, electric bikes, rickshaws, cargo vehicles and special vehicles.', 'PAK STAR SARL propose des 2 et 3 roues de haute qualité pour un usage personnel et professionnel à Djibouti : motos, motos électriques, rickshaws, véhicules de charge et véhicules spéciaux.'],
    'about.who.p2': ['Our showroom is in Cittie Hillace, near Mosque Quba, Balbala. The vehicles are manufactured by United Motorcycles.', 'Notre showroom se trouve à Cittie Hillace, près de la mosquée Quba, à Balbala. Les véhicules sont fabriqués par United Motorcycles.'],
    'about.how.lead': ['How we work with every customer.', 'Notre façon de travailler avec chaque client.'],
    'about.fac.eyebrow': ['The manufacturer', 'Le constructeur'],
    'about.fac.title': ['United Motorcycles factory', 'L’usine United Motorcycles'],
    'about.fac.lead': ['Our vehicles are built by United Motorcycles. Photos and video of the factory: engine, CNC machining, shock absorbers, paint line and assembly hall.', 'Nos véhicules sont construits par United Motorcycles. Photos et vidéo de l’usine : moteurs, usinage CNC, amortisseurs, peinture et hall d’assemblage.'],
    'about.fac.credit': ['Factory images and video: courtesy of United Motorcycles.', 'Images et vidéo de l’usine : avec l’aimable autorisation de United Motorcycles.'],
    'form.notice': ['Your message is prepared here and sent through WhatsApp or email. Your draft is saved on this device until you send it.', 'Votre message est préparé ici puis envoyé par WhatsApp ou par e-mail. Votre brouillon est conservé sur cet appareil jusqu’à l’envoi.'],
    'ok.text': ['Your message is ready. Choose how you would like to send it to PAK STAR SARL:', 'Votre message est prêt. Choisissez comment l’envoyer à PAK STAR SARL :'],
    'ok.toast': ['Message ready to send', 'Message prêt à envoyer'],
    'ok.wa': ['Send on WhatsApp', 'Envoyer par WhatsApp'],
    'ok.mail': ['Send by email', 'Envoyer par e-mail'],
    'foot.demo': ['Vehicles manufactured by United Motorcycles.', 'Véhicules fabriqués par United Motorcycles.'],
    'faq.lead': ['Short answers about our vehicles and how inquiries work.', 'Réponses courtes sur nos véhicules et le fonctionnement des demandes.'],
    'map.lead': ['Find our showroom in Djibouti. Open it in Google Maps for directions.', 'Retrouvez notre showroom à Djibouti. Ouvrez-le dans Google Maps pour l’itinéraire.'],
    'map.open': ['Open in Google Maps', 'Ouvrir dans Google Maps'],
    'feat.title': ['Our featured vehicles', 'Nos véhicules à la une'],
    'contact.wa': ['Chat on WhatsApp', 'Discuter sur WhatsApp'],
    'contact.fb': ['Visit us on Facebook', 'Retrouvez-nous sur Facebook'],
    'sample.note': ['Specifications are taken from the manufacturer’s brochures (United Motorcycles). Availability, colours and prices are confirmed by PAK STAR SARL: contact us for a quote in DJF.', 'Les caractéristiques proviennent des fiches du constructeur (United Motorcycles). Disponibilité, couleurs et prix sont confirmés par PAK STAR SARL : contactez-nous pour un devis en DJF.'],
    'sample.tag': ['Photo', 'Photo'],
    'pd.price.ph': ['On request (quote in DJF)', 'Sur demande (devis en DJF)'],
    'pd.indic': ['', ''],
    'pd.spec.eng': ['Engine / motor', 'Moteur'],
    'pd.spec.fuel': ['Power', 'Énergie'],
    'pd.spec.use': ['Best for', 'Idéal pour'],
    'pd.spec.keyspec': ['Key feature', 'Point fort'],
    'pd.variants': ['Versions', 'Versions'],
    'pd.video': ['Watch video', 'Voir la vidéo'],
    'modal.models': ['Models', 'Modèles'],
    'f.fuel': ['Power', 'Énergie'],
    'fuel.petrol': ['Petrol', 'Essence'], 'fuel.electric': ['Electric', 'Électrique'],
    'hero.sw.moto': ['Motorcycles', 'Motos'], 'hero.sw.electric': ['Electric', 'Électrique'], 'hero.sw.rickshaw': ['Rickshaws', 'Rickshaws'], 'hero.sw.special': ['Special', 'Spécial'],
    'foot.demo': ['Product names, logos and images of United Motorcycles belong to their respective owner.', 'Les noms, logos et images de produits United Motorcycles appartiennent à leur propriétaire.'],
    'foot.desc': ['High quality 2 & 3 wheelers for personal and commercial use, in Balbala, Djibouti.', 'Des 2 et 3 roues de haute qualité pour un usage personnel et professionnel, à Balbala, Djibouti.'],
    'moto.title': ['Our Range', 'Notre gamme'],
    'moto.lead': ['Motorcycles, electric vehicles, rickshaws, cargo and special-purpose three-wheelers. Filter, search and compare up to three models.', 'Motos, véhicules électriques, rickshaws, trois-roues cargo et spéciaux. Filtrez, cherchez et comparez jusqu’à trois modèles.'],
    'cat.cta.wa': ['Ask on WhatsApp', 'Demander sur WhatsApp']
  };


  /* ------------------------------------------------------------ real content overrides (replace the earlier placeholder lists) */
  PK.NEWS = [
    { id: 'n1', pid: 'us150', cat: b('Motorcycles', 'Motos'), date: b('Buyer’s guide', 'Guide d’achat'), type: 'commuter', scene: 'studio', color: '#ff5a1f',
      t: b('US70, US100, US125 or US150: which one fits you?', 'US70, US100, US125 ou US150 : lequel choisir ?'), d: b('A simple way to choose between the four United US motorcycles.', 'Une façon simple de choisir parmi les quatre motos United US.'),
      m: b('The United US series covers four engine sizes: 70 cc, 100 cc, 125 cc and 150 cc. All are petrol motorcycles with a manual gearbox, built for everyday riding.\n\nThe US70 is the light, simple classic with chrome mudguards and spoked wheels. The US100 is a dependable all-rounder with alloy wheels and front protection bars. The US125 is the standard choice, with an air-cooled single cylinder, a 4-speed gearbox and a strong backbone frame.\n\nThe US150 is the sportiest of the four: self start, alloy wheels, a front disc brake and a 13-litre fuel tank, which suits commuting and longer trips. Open any model to see photos and the full specification, then send us an inquiry for availability and a quote in DJF.', 'La série United US propose quatre cylindrées : 70, 100, 125 et 150 cc. Ce sont toutes des motos essence à boîte manuelle, conçues pour un usage quotidien.\n\nLa US70 est le classique léger et simple, avec garde-boues chromés et roues à rayons. La US100 est une moto polyvalente et fiable, avec jantes alliage et protections avant. La US125 est le choix standard, avec un monocylindre refroidi par air, une boîte 4 vitesses et un solide cadre dorsal.\n\nLa US150 est la plus sportive : démarreur électrique, jantes alliage, frein à disque avant et réservoir de 13 litres, idéale pour le trajet quotidien et les longs trajets. Ouvrez un modèle pour voir les photos et la fiche complète, puis envoyez-nous une demande pour la disponibilité et un devis en DJF.') },
    { id: 'n2', pid: 'electric-bullet', cat: b('Electric', 'Électrique'), date: b('Product story', 'Fiche produit'), type: 'electric', scene: 'studio', color: '#19c7b6',
      t: b('Electric Bullet: six versions, one idea', 'Electric Bullet : six versions, une même idée'), d: b('From the Bullet to the Ultimate: 2000 W electric motorcycles with swappable batteries.', 'De la Bullet à l’Ultimate : motos électriques 2000 W à batteries amovibles.'),
      m: b('The Electric Bullet is a 2000 W electric motorcycle offered in six versions: Bullet, Swap Pro, Swap Max, Ultimate, Max and Pro. Depending on the version, the range goes from 80 km up to 200 km on a charge.\n\nThe batteries are lithium iron phosphate and a full charge takes about 4 to 5 hours. Some versions use swappable batteries, which means you can change the battery instead of waiting for it to charge.\n\nElectric motorcycles are quiet and cheap to run, which makes them a good fit for city riding and delivery work. Compare the six versions on the product page and ask us which one matches your daily distance.', 'L’Electric Bullet est une moto électrique de 2000 W proposée en six versions : Bullet, Swap Pro, Swap Max, Ultimate, Max et Pro. Selon la version, l’autonomie va de 80 km jusqu’à 200 km par charge.\n\nLes batteries sont au lithium fer phosphate et une charge complète prend environ 4 à 5 heures. Certaines versions utilisent des batteries amovibles : vous échangez la batterie au lieu d’attendre la recharge.\n\nLes motos électriques sont silencieuses et économiques à l’usage, ce qui convient bien à la ville et aux livraisons. Comparez les six versions sur la fiche produit et demandez-nous laquelle correspond à votre distance quotidienne.') },
    { id: 'n3', pid: 'electric-sharp', cat: b('Electric', 'Électrique'), date: b('Product story', 'Fiche produit'), type: 'electric', scene: 'studio', color: '#19c7b6',
      t: b('Electric Sharp: a quiet scooter for the city', 'Electric Sharp : un scooter silencieux pour la ville'), d: b('A 1500 W electric scooter with a rear top box.', 'Un scooter électrique 1500 W avec top case.'),
      m: b('The Electric Sharp is a 1500 W electric scooter with a rear top box for your bag, shopping or small deliveries.\n\nIt is quiet, clean and made for short city trips. See the product page for the full specification and photos, and ask us about availability.', 'L’Electric Sharp est un scooter électrique de 1500 W avec un top case pour votre sac, vos courses ou de petites livraisons.\n\nIl est silencieux, propre et pensé pour les trajets urbains courts. Consultez la fiche produit pour la fiche technique et les photos, et demandez-nous la disponibilité.') },
    { id: 'n4', pid: 'e-rikshaw', cat: b('Electric', 'Électrique'), date: b('Business', 'Professionnel'), type: 'cargo', scene: 'studio', color: '#19c7b6',
      t: b('E-Rickshaw and E-Loader: electric three-wheelers for work', 'E-Rickshaw et E-Loader : tricycles électriques pour le travail'), d: b('4000 W motors, up to 200 km per charge.', 'Moteurs 4000 W, jusqu’à 200 km par charge.'),
      m: b('Our electric three-wheelers are built for daily work. The E-Rikshaw carries passengers and the E-Loader carries goods on an open load bed.\n\nBoth use a 4000 W motor and reach up to 200 km on a charge, with a loading capacity of 800 to 1000 kg. For businesses that cover many kilometres every day, lower running costs are the main benefit.\n\nContact us for the specification sheet and a quote in DJF.', 'Nos tricycles électriques sont conçus pour le travail quotidien. L’E-Rikshaw transporte des passagers et l’E-Loader transporte des marchandises sur une plateforme ouverte.\n\nTous deux utilisent un moteur de 4000 W et atteignent jusqu’à 200 km par charge, avec une capacité de charge de 800 à 1000 kg. Pour les entreprises qui roulent beaucoup chaque jour, la réduction des coûts d’usage est le principal avantage.\n\nContactez-nous pour la fiche technique et un devis en DJF.') },
    { id: 'n5', pid: 'rickshaw-6', cat: b('Passenger', 'Passagers'), date: b('Product story', 'Fiche produit'), type: 'cargo', scene: 'studio', color: '#3b82f6',
      t: b('3-seater or 6-seater: choosing your auto rickshaw', '3 ou 6 places : choisir son auto rickshaw'), d: b('Two passenger three-wheelers for taxi and shuttle work.', 'Deux tricycles passagers pour le taxi et la navette.'),
      m: b('The 3-seater tuk-tuk is the classic compact rickshaw with a canvas hood, built for busy streets. The 6-seater is a 200 cc auto rickshaw with a water-cooled engine, 4 speeds plus reverse and room for six passengers.\n\nChoose the 3-seater for narrow streets and short trips; choose the 6-seater when you carry more people on shared routes. Watch the walk-around video of the 6-seater on its product page.', 'Le tuk-tuk 3 places est le rickshaw compact classique avec capote en toile, conçu pour les rues animées. Le 6 places est un auto rickshaw de 200 cc à moteur refroidi par eau, 4 vitesses plus marche arrière et six places passagers.\n\nChoisissez le 3 places pour les rues étroites et les courts trajets ; choisissez le 6 places pour transporter plus de monde sur des lignes partagées. Regardez la vidéo de présentation du 6 places sur sa fiche produit.') },
    { id: 'n6', pid: 'school-van', cat: b('Passenger', 'Passagers'), date: b('Product story', 'Fiche produit'), type: 'cargo', scene: 'studio', color: '#3b82f6',
      t: b('School van: a covered three-wheeler for children and passengers', 'Van scolaire : un tricycle couvert pour enfants et passagers'), d: b('Economical and simple to run.', 'Économique et simple à utiliser.'),
      m: b('The 100 cc school van is a covered three-wheeler designed for carrying children and passengers. It is economical and simple to run, and the covered body protects riders from sun and dust.\n\nOpen the product page for photos and details, and contact us if you want to discuss your school or transport route.', 'Le van scolaire 100 cc est un tricycle couvert conçu pour transporter des enfants et des passagers. Il est économique et simple à utiliser, et la carrosserie couverte protège du soleil et de la poussière.\n\nOuvrez la fiche produit pour les photos et les détails, et contactez-nous pour parler de votre école ou de votre ligne de transport.') },
    { id: 'n7', pid: 'deluxe-plus-150', cat: b('Business', 'Entreprise'), date: b('Buyer’s guide', 'Guide d’achat'), type: 'cargo', scene: 'studio', color: '#3b82f6',
      t: b('Cargo three-wheelers: Deluxe, Deluxe Plus and Hi-Roof', 'Tricycles de charge : Deluxe, Deluxe Plus et Hi-Roof'), d: b('Which cargo body suits your goods?', 'Quelle benne pour vos marchandises ?'),
      m: b('The Deluxe 150 is a tough 150 cc cargo three-wheeler with a big open bed for building materials, produce and goods. The Deluxe Plus adds a taller, reinforced cargo body for bigger loads.\n\nThe Hi-Roof van is a 200 cc three-wheel pickup with a tall covered body that keeps goods dry, clean and secure.\n\nPick the open bed for bulky materials, the Plus for heavier loads and the Hi-Roof van when goods must stay covered.', 'Le Deluxe 150 est un tricycle de charge robuste de 150 cc avec une grande benne ouverte pour matériaux, produits et marchandises. Le Deluxe Plus ajoute une benne plus haute et renforcée pour de plus grandes charges.\n\nLe van Hi-Roof est un pick-up à trois roues de 200 cc avec une carrosserie haute et couverte qui garde les marchandises au sec, propres et en sécurité.\n\nChoisissez la benne ouverte pour les matériaux volumineux, le Plus pour les charges lourdes et le Hi-Roof lorsque les marchandises doivent rester couvertes.') },
    { id: 'n8', pid: 'grocery-shop', cat: b('Business', 'Entreprise'), date: b('Business idea', 'Idée d’activité'), type: 'cargo', scene: 'studio', color: '#3b82f6',
      t: b('Mobile shops: grocery, vegetables and milk on three wheels', 'Boutiques mobiles : épicerie, légumes et lait sur trois roues'), d: b('Sell where your customers are.', 'Vendez là où sont vos clients.'),
      m: b('A mobile shop lets you bring goods to the customer. The grocery shop has shelves and an open front to sell goods wherever people are. The vegetable shop has tilted display baskets and a fold-out canopy for fruit and vegetables.\n\nFor dairy, the milk carrier is a 200 cc three-wheeler with a stainless-steel tank made for collecting and delivering milk.\n\nThese vehicles suit small businesses that want to start selling without renting a shop. Ask us about the version that fits your trade.', 'Une boutique mobile apporte les produits au client. L’épicerie dispose d’étagères et d’une façade ouverte pour vendre là où se trouvent les gens. Le marchand de légumes a des paniers d’exposition inclinés et un auvent rabattable pour les fruits et légumes.\n\nPour les produits laitiers, le porteur de lait est un tricycle de 200 cc avec une cuve en acier inoxydable conçue pour collecter et livrer le lait.\n\nCes véhicules conviennent aux petites entreprises qui veulent commencer à vendre sans louer de boutique. Demandez-nous la version adaptée à votre activité.') },
    { id: 'n9', pid: 'ambulance-tricycle', cat: b('Special vehicles', 'Véhicules spéciaux'), date: b('Product story', 'Fiche produit'), type: 'cargo', scene: 'studio', color: '#ef4444',
      t: b('Ambulance tricycle and cabin ambulance', 'Ambulance tricycle et ambulance à cabine'), d: b('Two ways to reach patients in narrow or remote places.', 'Deux façons d’atteindre les patients dans les lieux étroits ou isolés.'),
      m: b('The ambulance tricycle is a cost-effective vehicle that reaches narrow, crowded or remote places where regular ambulances cannot. Watch it in the video on its product page.\n\nThe cabin ambulance is a 200 cc three-wheeler with a closed driver cabin and an enclosed, marked patient compartment.\n\nBoth are suited to clinics, communities and organisations that need a low-cost way to move patients. Contact us for the specification and a quote.', 'L’ambulance tricycle est un véhicule économique qui accède aux lieux étroits, encombrés ou isolés où les ambulances classiques ne peuvent pas aller. Regardez-la dans la vidéo de sa fiche produit.\n\nL’ambulance à cabine est un tricycle de 200 cc avec une cabine conducteur fermée et un compartiment patient fermé et signalisé.\n\nLes deux conviennent aux cliniques, communautés et organisations qui cherchent un moyen économique de transporter des patients. Contactez-nous pour la fiche technique et un devis.') },
    { id: 'n10', pid: 'security-bike', cat: b('Special vehicles', 'Véhicules spéciaux'), date: b('Product story', 'Fiche produit'), type: 'commuter', scene: 'studio', color: '#ef4444',
      t: b('Security bike and medical bike: the 125 cc at work', 'Moto de sécurité et moto médicale : la 125 cc au travail'), d: b('Two purpose-built versions of the 125 cc.', 'Deux versions spécialisées de la 125 cc.'),
      m: b('The 125 cc is also offered as two purpose-built vehicles: a police-style security bike and a first-responding medical bike.\n\nA motorcycle can get through traffic and narrow streets quickly, which is what first responders and patrol teams need. See the product page for details.', 'La 125 cc existe aussi en deux versions spécialisées : une moto de sécurité de style police et une moto médicale de première intervention.\n\nUne moto traverse rapidement la circulation et les rues étroites, ce dont les premiers secours et les équipes de patrouille ont besoin. Voir la fiche produit pour les détails.') },
    { id: 'n11', pid: 'bucket-loader', cat: b('Business', 'Entreprise'), date: b('Product story', 'Fiche produit'), type: 'cargo', scene: 'studio', color: '#f59e0b',
      t: b('Hydraulic bucket loader: faster waste collection', 'Chargeur à godet hydraulique : une collecte plus rapide'), d: b('A 150 cc loader with a hydraulic tipping bucket.', 'Un chargeur 150 cc avec godet basculant hydraulique.'),
      m: b('The hydraulic bucket loader is a versatile 150 cc vehicle with a hydraulic tipping bucket. It is used for waste collection and building sites, especially in narrow places where a truck cannot enter.\n\nThe bucket lifts and tips by itself, which saves time and effort compared to loading by hand. See it working in the video on its product page.', 'Le chargeur à godet hydraulique est un véhicule polyvalent de 150 cc avec un godet basculant hydraulique. Il est utilisé pour la collecte des déchets et les chantiers, surtout dans les endroits étroits où un camion ne peut pas entrer.\n\nLe godet se lève et bascule tout seul, ce qui fait gagner du temps et de l’effort par rapport au chargement à la main. Voyez-le à l’œuvre dans la vidéo de sa fiche produit.') },
    { id: 'n12', pid: 'us125', cat: b('Manufacturer', 'Constructeur'), date: b('About us', 'À propos'), type: 'commuter', scene: 'studio', color: '#0b5fff',
      t: b('About United Motorcycles, our manufacturer', 'À propos de United Motorcycles, notre constructeur'), d: b('Where our vehicles are built.', 'Où nos véhicules sont construits.'),
      m: b('All the vehicles we offer are manufactured by United Motorcycles. On our About page you can watch a video of the factory and see photos of the engine assembly line, CNC machining, shock absorber production, the paint shop and the main assembly hall.\n\nPAK STAR SARL brings these vehicles to Djibouti and supports customers from the first inquiry to the showroom visit.', 'Tous les véhicules que nous proposons sont fabriqués par United Motorcycles. Sur notre page À propos, vous pouvez voir une vidéo de l’usine et des photos de la chaîne d’assemblage des moteurs, de l’usinage CNC, de la production d’amortisseurs, de l’atelier de peinture et du hall d’assemblage principal.\n\nPAK STAR SARL apporte ces véhicules à Djibouti et accompagne les clients de la première demande jusqu’à la visite du showroom.') }
  ];
  PK.FEATURES = [
    { id: 'range', icon: 'route', t: b('Two and three wheels', 'Deux et trois roues'), d: b('Motorcycles, electric bikes and three-wheelers.', 'Motos, motos électriques et tricycles.'), m: b('We offer high quality 2 and 3 wheelers for personal and commercial use: motorcycles, electric bikes, rickshaws, cargo vehicles and special vehicles.', 'Nous proposons des 2 et 3 roues de haute qualité pour un usage personnel et professionnel : motos, motos électriques, rickshaws, véhicules de charge et véhicules spéciaux.') },
    { id: 'electric', icon: 'plug', t: b('Electric options', 'Options électriques'), d: b('Silent, low running costs.', 'Silencieux, faibles coûts d’usage.'), m: b('Electric bikes, an e-rickshaw and an e-loader are part of our range for riders and businesses who want lower running costs.', 'Des motos électriques, un e-rickshaw et un e-loader font partie de notre gamme pour ceux qui veulent réduire leurs coûts d’usage.') },
    { id: 'business', icon: 'users', t: b('Solutions for business', 'Solutions pour les pros'), d: b('Cargo, passenger and special vehicles.', 'Vehicules de charge, passagers et spéciaux.'), m: b('Cargo three-wheelers, mobile shops, school vans, ambulance tricycles and bucket loaders for small businesses and organisations.', 'Tricycles de charge, boutiques mobiles, vans scolaires, ambulances tricycles et chargeurs à godet pour petites entreprises et organisations.') },
    { id: 'price', icon: 'tag', t: b('Quotes in DJF', 'Devis en DJF'), d: b('Clear prices on request.', 'Prix clairs sur demande.'), m: b('Prices are given on request, as a quote in Djiboutian Franc (DJF). Send us an inquiry or a WhatsApp message.', 'Les prix sont communiqués sur demande, sous forme de devis en franc Djibouti (DJF). Envoyez-nous une demande ou un message WhatsApp.') },
    { id: 'lang', icon: 'globe', t: b('Bilingual support', 'Support bilingue'), d: b('Service in French and English.', 'Service en français et en anglais.'), m: b('This website and our inquiry flow are in English and French so every visitor can ask in their preferred language.', 'Ce site et notre formulaire de demande sont en français et en anglais pour que chacun puisse écrire dans sa langue.') },
    { id: 'whatsapp', icon: 'chat', t: b('Fast answers on WhatsApp', 'Réponses rapides sur WhatsApp'), d: b('+253 77 49 94 88', '+253 77 49 94 88'), m: b('Message us on WhatsApp at +253 77 49 94 88 or visit the showroom in Balbala, Djibouti.', 'Écrivez-nous sur WhatsApp au +253 77 49 94 88 ou passez au showroom à Balbala, Djibouti.') }
  ];
  PK.FAQ = [
    { q: b('How do I request information about a vehicle?', 'Comment demander des informations sur un véhicule ?'), a: b('Open any vehicle, press “Request information” or the WhatsApp button, and send us your request. The model is pre-selected for you.', 'Ouvrez un véhicule, appuyez sur « Demander des informations » ou sur le bouton WhatsApp et envoyez votre demande. Le modèle est présélectionné.') },
    { q: b('What are the prices?', 'Quels sont les prix ?'), a: b('Prices are given on request as a quote in Djiboutian Franc (DJF). Contact us by WhatsApp, phone or email.', 'Les prix sont donnés sur demande, sous forme de devis en franc Djibouti (DJF). Contactez-nous par WhatsApp, téléphone ou e-mail.') },
    { q: b('Where is the showroom?', 'Où se trouve le showroom ?'), a: b('Cittie Hillace, near Mosque Quba, Balbala, Djibouti. Open Saturday to Thursday, 08:00–12:00 and 16:00–20:00. Closed on Friday.', 'Cittie Hillace, près de la mosquée Quba, Balbala, Djibouti. Ouvert du samedi au jeudi, 8h–12h et 16h–20h. Fermé le vendredi.') },
    { q: b('Who makes the vehicles?', 'Qui fabrique les véhicules ?'), a: b('The vehicles are manufactured by United Motorcycles. PAK STAR SARL offers them in Djibouti.', 'Les véhicules sont fabriqués par United Motorcycles. PAK STAR SARL les propose à Djibouti.') },
    { q: b('Can I become a dealer or distributor?', 'Puis-je devenir revendeur ou distributeur ?'), a: b('Send a business inquiry through the “Become a Dealer” page or contact us directly.', 'Envoyez une demande via la page « Devenir revendeur » ou contactez-nous directement.') },
    { q: b('Which languages does the website support?', 'Quelles langues le site propose-t-il ?'), a: b('English and French. Use the language menu; your choice is remembered on this device.', 'Anglais et français. Utilisez le menu de langue ; votre choix est mémorisé sur cet appareil.') }
  ];
  PK.STEPS = [
    { t: b('Explore', 'Explorer'), d: b('Browse the range and compare models.', 'Parcourez la gamme et comparez les modèles.'), m: b('Use the filters, open any vehicle in the quick viewer and compare up to three models side by side.', 'Utilisez les filtres, ouvrez un véhicule dans la vue rapide et comparez jusqu’à trois modèles côte à côte.') },
    { t: b('Inquire', 'Demander'), d: b('Send a request by form or WhatsApp.', 'Envoyez une demande par formulaire ou WhatsApp.'), m: b('Fill in the inquiry form or message us directly on WhatsApp with the model you like.', 'Remplissez le formulaire ou écrivez-nous directement sur WhatsApp avec le modèle choisi.') },
    { t: b('Quote', 'Devis'), d: b('Receive availability and a quote in DJF.', 'Recevez disponibilité et devis en DJF.'), m: b('Our team replies with availability and a quote in Djiboutian Franc.', 'Notre équipe vous répond avec la disponibilité et un devis en franc Djibouti.') },
    { t: b('Ride', 'Rouler'), d: b('Visit the showroom and take delivery.', 'Passez au showroom et récupérez votre véhicule.'), m: b('Visit us in Balbala to see the vehicle and complete your purchase.', 'Passez nous voir à Balbala pour découvrir le véhicule et finaliser votre achat.') }
  ];

  PK.VIDEOS = {
    'loader-demo': { t: b('Hydraulic bucket loader at work', 'Le chargeur à godet hydraulique au travail'), d: b('A close look at the 150 cc hydraulic bucket bike loader used for waste collection and building sites.', 'Un regard de près sur le chargeur 150 cc à godet hydraulique utilisé pour la collecte des déchets et les chantiers.'), href: 'product-details.html?id=bucket-loader' },
    'rickshaw-walk': { t: b('6-seater rickshaw walk-around', 'Tour du rickshaw 6 places'), d: b('Walk around the blue 200 cc auto rickshaw: cabin, seats and dashboard.', 'Tour du rickshaw auto 200 cc bleu : cabine, sièges et tableau de bord.'), href: 'product-details.html?id=rickshaw-6' },
    'ambulance-demo': { t: b('Ambulance tricycle', 'Ambulance tricycle'), d: b('The tricycle ambulance outside and inside: patient compartment, stretcher and equipment.', 'L’ambulance tricycle à l’extérieur et à l’intérieur : compartiment patient, civière et équipement.'), href: 'product-details.html?id=ambulance-tricycle' },
    'united-factory': { t: b('United Motorcycles factory', 'L’usine United Motorcycles'), d: b('A look inside the factory of United Motorcycles, the manufacturer of the vehicles we offer.', 'Un regard à l’intérieur de l’usine United Motorcycles, le constructeur des véhicules que nous proposons.'), wide: true, href: 'about.html' }
  };

  /* ------------------------------------------------------------ small render helpers shared by modal + detail page */
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  PK.variantsHtml = function (p) {
    if (!p.variants) return '';
    var v = p.variants, L = PK.L;
    return '<h3 style="font-size:1.2rem;margin-top:1.4rem">' + esc(PK.t('pd.variants', 'Versions')) + '</h3><div class="tbl-wrap"><table class="spec-table variants"><thead><tr>' + v.head.map(function (h) { return '<th scope="col">' + esc(L(h)) + '</th>'; }).join('') + '</tr></thead><tbody>' +
      v.rows.map(function (r) { return '<tr>' + r.map(function (c, i) { return i === 0 ? '<th scope="row">' + esc(c) + '</th>' : '<td>' + esc(c) + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table></div>';
  };
  PK.videoBtn = function (p) {
    if (!p.video) return '';
    return '<button type="button" class="btn ghost" data-open="video:' + p.video + '"><span>' + esc(PK.t('pd.video', 'Watch video')) + '</span>' + PK.icon('arrow') + '</button>';
  };
  PK.waBtn = function (p) {
    return '<a class="btn wa" href="' + esc(PK.CO.waLink('Hello PAK STAR SARL, I am interested in: ' + p.name)) + '" target="_blank" rel="noopener"><span>' + esc(PK.t('cat.cta.wa', 'Ask on WhatsApp')) + '</span></a>';
  };
})();
