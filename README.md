# Mudassir Akhtar — Venture Builder / Personal Brand Website

An original, editorial, multi-page Next.js personal-brand site based on the supplied 10-page **Mudassir Akhtar Venture Builder Personal Brand** document and on the structure/proof-first principles observed at https://jaketrinder.com/ (researched October 2026). Design and copy are original. No private imagery, copy, logos, or proprietary effects from the reference site were reproduced.

## What is included

- Next.js App Router + React + TypeScript source with modern semantic page structure.
- Responsive custom CSS design system: deep forest, warm cream, chartreuse accent, large editorial typography and restrained micro-interactions.
- Home, About, Work & Ventures, three detailed case studies, Ideas & Thinking, three complete editorial field notes, Media & Speaking, Contact, 404.
- Keyboard-accessible, interactive eight-step growth framework; mobile navigation; reduced-motion-aware entrance animations.
- Original SVG artwork for three featured projects (explicitly **not** product screenshots); Open Graph card and favicon.
- Basic metadata, sitemap, robots configuration, semantic HTML, accessible form labels and status announcements.
- **preview-home.html**: a standalone static *visual preview* of the homepage, viewable in your browser without installing Node dependencies. This is not the Next.js application and intentionally doesn't contain all pages.

## Run locally

Requires Node.js 20.9 or newer and access to the npm registry:

```bash
npm install
npm run dev
```

Open http://localhost:3000. Before publishing run:

```bash
npm run lint
npm run build
npm start
```

Deploy to Vercel by importing the repository. In Vercel, set the environment variables below and redeploy.

## Environment variables

Copy `.env.example` to `.env.local`.

| Variable | What it does |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Set to your real public `https://...` domain. Changes canonical metadata base and sitemap URLs. |
| `NEXT_PUBLIC_HERO_IMAGE` | Add an approved portrait file in `public/assets` and set this to `/assets/mudassir-portrait.webp`. The visual placeholder is replaced without changing code. |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Set to your real **verified public email**. When set, the contact form opens the visitor's local email client with a prepared message. |

**No messages are sent to a server.** The contact form is a mailto composer, not a transactional submission endpoint. When no email is configured it copies the completed inquiry to the clipboard with an explicit notice. To enable guaranteed delivery / storage, integrate a consent-aware server-side email service and abuse prevention and test it thoroughly.

## Editing content

- `lib/content.ts` — project case studies, factual evidence, articles, eight-stage framework, pillar descriptions. This is the central content library.
- `app/page.tsx` — main homepage composition.
- `app/about/page.tsx` — story, principles, leadership.
- `app/media/page.tsx` — media asset slots and labels.
- `app/contact/page.tsx` — inquiry types and collaboration copy.
- `app/globals.css` — fonts, colors, spacing, motion and breakpoints (320–large desktop).
- `public/assets/` — original project graphics and social preview.

When inserting genuine media, use optimized WebP/AVIF images with descriptive alt text, and preserve image dimensions/aspect ratios to prevent layout shifts. Only publish client logos, videos, screenshots or testimonials with permission.

## Required authentic assets before a public launch

1. An approved high-resolution professional **Mudassir Akhtar portrait** (currently a deliberately labeled placeholder in the hero).
2. Approved ArtDera UI screenshots, storefronts, pitch proof and up-to-date metrics.
3. Publicly shareable Novuli work/screenshots and verified role/permission statements.
4. FameWheels visit stills and approved slide extracts. State clearly what was proposed rather than implemented.
5. Real footage and event photography for the Media page; approved public video URLs, thumbnails and captions.
6. A verified contact email, public domain, and any permitted social profile URLs.
7. Optional consented testimonials, verified performance figures and references.

## Accuracy and scope notes

- ArtDera: described as venture-building/marketplace work; no unverified ownership claim or current user count.
- Novuli: described as product, client, software and growth **work**, not as company founder/co-founder.
- FameWheels: described as strategic analysis and **proposed** improvements, not implemented results. Company-reported listing/user/dealer/inspection counts in the case study are labeled as unverified context.
- 20+ is people **led or coordinated**, not an asserted current full-time headcount.
- Top-30 shortlist is documented in the provided brand brief; you should add original third-party proof before promotion.
- Three article texts are newly authored editorial drafts based on the supplied personal philosophy, not represented as historically published articles.

## QA checklist before going live

- Run `npm run lint` and `npm run build` using installed dependencies.
- Test all pages and internal/external links; verify all assets and claims.
- Test keyboard navigation and growth tabs, mobile menu, 320/375/390/768/1024/1440+ viewports.
- Check reduced-motion behavior, form validation, email-client flow and clipboard fallback.
- Audit contrast, content order, heading levels, Core Web Vitals, real device performance and media loading.
- Replace example site URL in environment, verify sitemap and social card.
- Confirm that no project screenshot or quote is published without permission.

### Build verification in the authoring environment

The authoring sandbox did not have downloadable Next.js/React npm packages and outbound package registry access was unavailable. The source has been syntax-checked with TypeScript's compiler parser, but Chromium rendering and the Next.js production build could not be completed in this sandbox. Use the included standalone preview and run the production build and browser QA in your normal development environment. This should be completed after `npm install` in your normal dev environment. Do not treat this as fully production-tested until those steps pass.
