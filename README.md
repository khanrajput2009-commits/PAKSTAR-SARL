# PAK STAR SARL — Website (Djibouti)

Bilingual (English / Français), dark-mode-ready, animated multi-page website. Pure HTML + CSS + vanilla JS. No build step, no backend.

## Run
Open `index.html`, or `python3 -m http.server 8080` in this folder.

## Real business data (edit in one place: `js/catalog.js`)
- `PK.CO`: address, phone +253 77 49 94 88, WhatsApp, email pakstar.dji@gmail.com, Facebook, opening hours, Google Maps link.
- `PK.PRODUCTS`: 21 United Motorcycles vehicles (5 categories) with descriptions, specs, versions, videos. Prices are "on request (quote in DJF)".
- Facebook link: `PK.CO.fb` points to the official page https://www.facebook.com/667032463169985/

## Features
- Contact + Inquiry + Become-a-dealer forms: validation, drafts saved in localStorage (with fallbacks), send via WhatsApp or email.
- Product pages and popups: photo gallery, specs table, versions table, WhatsApp button, video modal.
- Header video on every page, fixed background video on Home and Motorcycles, optional music, EN/FR, dark mode.
- Contact page: Google Maps embed (address) + open-in-Maps link; tel:, mailto:, wa.me and Facebook links.
- Logo: star logo in `assets/images/brand/` (old logos in `brand/old/`).

Vehicle photos, brochures and the factory video belong to United Motorcycles (manufacturer).

## Folder layout
- `*.html` : the 9 pages (root)
- `css/` : stylesheets
- `js/` : scripts (catalogue, translations, chat, forms…)
- `products/` : all vehicle photos (exactly 100 files, so it can be uploaded to GitHub in one go)
- `assets/` : everything else (logo, factory photos, videos, music, favicon source)
- `favicon.ico` : browser-tab icon (kept in the root because browsers ask for it there)
