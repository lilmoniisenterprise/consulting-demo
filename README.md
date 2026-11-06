# Aldermoor Advisory — Professional Services Website (Demo)

**Project 04 of the Virellion Apex portfolio.** This is a complete, deployable website for a fictional consulting firm. It shows what Virellion Apex can build for consultancies, agencies, accountants and other professional service providers.

> This website is a demonstration project developed by Virellion Apex. The consulting firm, team members, testimonials, and business information are fictional.

Every form (appointments, onboarding, contact, newsletter) runs in **demonstration mode**. Nothing is sent to a server, and no professional advice is given.

- **Stack:** HTML5, CSS3 and vanilla JavaScript. No framework, no build step, no API keys.
- **Hosting:** any static host. Ready for GitHub and Cloudflare Pages.
- **Built by:** [Virellion Apex](https://virellionapex.com)

---

## What's included

| Page | Features |
|---|---|
| `index.html` | Hero section, an at-a-glance strip of how the firm works, firm introduction, index of the 7 practice areas (hovering a row shows a photo), value proposition, comparison table, testimonial carousel, latest insights, consultation calls to action |
| `about.html` | Firm story, principles, timeline, working approach, FAQ (`#faq`) |
| `services.html` | All 7 practice areas, 3 engagement models with illustrative fees, FAQ |
| `service-details.html` | One template for every service via `?service=<slug>`: description, benefits, process, deliverables, FAQs, "Request consultation" buttons, links to the previous and next service |
| `team.html` | 6 fictional team profiles that open in a dialog, each with a "Book with…" link |
| `insights.html` | Featured article, category filters, live search, article reader with shareable `?article=<slug>` links, resource list, newsletter form (demo) |
| `appointments.html` | 5-step booking: appointment type → calendar date → time slot → customer details → meeting preferences → review → confirmation with a downloadable `.ics` calendar file |
| `onboarding.html` | 5-step new-client inquiry: business info, service interests, objectives, budget range, preferred consultation method. Validates each step and auto-saves a draft on the device |
| `contact.html` | Contact form, email, phone, location map (OpenStreetMap), consultation calls to action, Virellion Apex call to action |
| `404.html` | "Page not found" page |

**Layout:** "annual report" editorial style. There's a fixed left-hand navigation rail on desktop that becomes a full-screen menu on phones, sections are numbered like chapters, and services are listed like a printed index. It deliberately doesn't reuse the layout of virellionapex.com or the other portfolio demos.

**Brand:** forest `#1d3a32`, paper `#f5f4ef`, sage `#dfe6db`, rust `#a94f27`. Fonts are Fraunces (headings), IBM Plex Sans (body text) and IBM Plex Mono (labels).

### URL parameters (for deep links and pre-filled forms)

- `service-details.html?service=financial-consulting`
- `appointments.html?type=intro|strategy|financial|workshop&advisor=<team-slug>&service=<service-slug>`
- `onboarding.html?service=<service-slug>`
- `insights.html?article=<article-slug>`
- `contact.html?topic=new-project`

---

## File structure

```
consulting-demo/
├── index.html, about.html, services.html, service-details.html, team.html,
│   insights.html, appointments.html, onboarding.html, contact.html, 404.html
├── css/style.css          # Whole design system (colours and fonts set as variables in :root)
├── js/script.js           # Content data at the top (SERVICES, TEAM, ARTICLES, APPT_TYPES), then app logic
├── images/
│   ├── logo.png / logo.svg
│   ├── hero.jpg           # Local fallback, shown if the hero photo can't load
│   └── team/*.svg         # Illustrated portrait placeholders
├── assets/                # favicon.svg, favicon-32.png, apple-touch-icon.png, og-image.jpg (1200×630)
├── _headers               # Security headers for Cloudflare Pages
├── robots.txt, sitemap.xml, .nojekyll
└── README.md
```

---

## Run locally

```bash
cd consulting-demo
python3 -m http.server 8080
# open http://localhost:8080
```

---

## Deploy: GitHub + Cloudflare Pages (free)

1. **Push to GitHub** (repository `consulting-demo`):
   ```bash
   git init && git add . && git commit -m "Aldermoor Advisory demo"
   git branch -M main
   git remote add origin https://github.com/<account>/consulting-demo.git
   git push -u origin main
   ```
2. **Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git**, then select the repository.
3. **Build settings:** Framework preset **None**, build command **empty**, output directory **`/`**.
4. **Save and Deploy.** You get a `https://consulting-demo.pages.dev` address, and every push to `main` redeploys automatically.
5. **Custom subdomain (optional):** in the Pages project, go to **Custom domains → Set up a domain** and enter `consulting.virellionapex.com`. Wait for SSL to show *Active*, then test.
6. **Update URLs:** canonical, Open Graph, `sitemap.xml` and `robots.txt` URLs point to the live address. If you change the domain, find-and-replace the old URL across `*.html`, `sitemap.xml` and `robots.txt`.
7. **Verify:** open every page on a phone and a laptop, complete a booking, an onboarding inquiry and a contact message, then check DevTools → Network → response headers to confirm `_headers` is applied.

**GitHub Pages also works** (Settings → Pages → Deploy from branch `main`, folder `/`). It can't send custom headers, so every page also sets the Content-Security-Policy in a `<meta>` tag.

---

## Replacing demo content for a real client

| What | Where |
|---|---|
| Firm name, wordmark | `.brand-name` in every HTML page; `<title>` and meta tags |
| Logo | Replace `images/logo.png` (192×192, transparent), `images/logo.svg`, `assets/favicon.svg`, `assets/favicon-32.png`, `assets/apple-touch-icon.png` |
| Colours and fonts | `:root` variables at the top of `css/style.css`; Google Fonts link in each page `<head>` |
| Services, team, articles, appointment types | Data arrays at the top of `js/script.js`. The static services, team and home sections are in the HTML pages |
| Team headshots | Replace `images/team/<slug>.svg` with real photos (4:5 ratio, e.g. 800×1000 JPG) and update the `src` in `team.html` and `script.js` |
| Photography | Images load from Unsplash (free licence, credited in the footer). For a client, use their own or licensed photography. Search for `images.unsplash.com` to find every reference |
| Social share image | `assets/og-image.jpg`, 1200×630 |
| Contact details | Email/phone use `.example` and 555 placeholders. Replace them with verified details only |
| Disclaimer | Remove the demo disclaimer, demo notes and "Fictional example" tags only when every detail is real and the forms are connected |
| Testimonials | Use only real, permission-granted client quotes |

---

## Connecting real services

The front end never needs secrets. Anything that needs an API key belongs on a server (for example a Cloudflare Pages Function), never in `script.js`.

### Appointment booking → Calendly
- **Simplest:** replace the booking section in `appointments.html` with Calendly's inline embed and create one Calendly event type per appointment type. The free plan supports one event type; Standard is needed for several.
- Add `https://assets.calendly.com` to `script-src` and `style-src`, and `https://calendly.com` to `frame-src`, in the CSP `<meta>` tag and in `_headers`.
- **Keep the custom UI:** you can keep this booking interface and send the final step to a Calendly scheduling link, with name and email pre-filled through URL parameters (`?name=&email=`). Real availability always comes from Calendly; the demo calendar is simulated.

### Contact and onboarding forms
Choose one:
1. **Hosted form service** (Formspree, Basin, Web3Forms): set the form `action` to the service URL, add it to `form-action` and `connect-src` in the CSP, and replace the demo submit handler with a `fetch` POST.
2. **Cloudflare Pages Function** (recommended): add `functions/api/inquiry.js`. It validates the input, checks a **Cloudflare Turnstile** token (free spam protection), then emails the inquiry (e.g. through Resend or Postmark) or forwards it to your CRM. API keys live in Pages → Settings → Environment variables.
3. Always validate on the server too. Never trust client-side validation alone.

### Customer management (CRM)
- **HubSpot (free CRM):** use HubSpot Forms, or call its Forms API from the Pages Function so contacts, companies and inquiry fields are created automatically.
- Map the onboarding fields (industry, size, services, budget range, consultation method) to CRM properties. They're already structured for this.
- Add a privacy policy and consent wording that matches your region (GDPR, CCPA) before collecting real data.

---

## Accessibility, SEO and performance

- Semantic landmarks, skip link, visible focus states, and labelled fields with `aria-invalid` and linked error messages. Errors are announced and focus moves to the first invalid field.
- Native `<dialog>` for profiles and articles (closes with Esc or a backdrop click). `prefers-reduced-motion` is respected.
- Every page has a unique title and description, plus canonical, Open Graph and Twitter Card tags, a sitemap and robots.txt.
- No framework: one CSS file and one JS file (about 50 KB combined before compression). Images are lazy-loaded and served at responsive sizes.
- Security: strict CSP (no inline scripts or styles), no third-party scripts, no secrets.

## Credits

Photography: [Unsplash](https://unsplash.com) contributors, credited in the site footer. Map: © OpenStreetMap contributors. Team portraits, logo and share image: original placeholders made for this demo.

© Virellion Apex. Demonstration build.
