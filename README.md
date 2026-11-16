# Your Chef Provisions — website

Yacht & villa provisioning in the Greek islands.
Future domain: **yourchefprovisions.com**

Static site, no build step: `index.html`, `styles.css`, `app.js`, `assets/`.
Open `index.html` in a browser to run it locally. Hosted on GitHub Pages from the `main` branch.

## How ordering works
1. Customer adds products from the catalogue (category sidebar, search, custom items). The list is saved in the browser.
2. Fills in delivery details.
3. "Send on WhatsApp" opens WhatsApp with the full order pre-written; "Send by email" opens an email.
No backend, no payments on the site. Quotes and payment links are handled by the team.

## Where to edit
- Contact details: `CONFIG` at the top of `app.js`
- Products: `PRODUCTS` list in `app.js` (English + Greek names, unit, tags)
- English text: `index.html` · Greek text: `EL` in `app.js`

## To confirm with the client before launch
- 2-hour quote time, 14:00 cut-off, next-day delivery for Mykonos, Paros, Antiparos, Corfu, Crete
- 48–72 h areas, delivery fee / minimum order, season dates and hours
- Own WhatsApp number (currently a shared number) and an order email (email option is hidden until `CONFIG.email` is set)
- Legal entity, VAT number, Terms and Privacy pages (links are placeholders)
- Food business registration (EFET/HACCP); approved establishment if meat/fish is cut and packed in-house
- Own provisioning photos (the two hero photos are temporary)

## Launch checklist (yourchefprovisions.com)
- Remove `<meta name="robots" content="noindex">`, add canonical, update `og:url` / `og:image`
- Add a `CNAME` file with `yourchefprovisions.com` and set DNS to GitHub Pages
