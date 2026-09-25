# Maintaining the academic site

The site uses Hugo 0.136.5 and the existing HugoBlox modules. Netlify rebuilds the production domain from GitHub using `netlify.toml`. No production npm dependency has been added.

A separate legacy GitHub Pages workflow failed at Setup Pages on 2026-09-25 because no Pages site was configured. It does not serve the domain. This revision does not change hosting or domain settings.

## Content

- Home: `content/_index.md`; layout: `layouts/landing/list.html`.
- Research: four pages in `content/research/`. Their titles, questions, figures and IDs are shared by Home, Research and the publication filters.
- Strand IDs: `proactive`, `mechanisms`, `technology`, `multimodal`.
- Publications: `content/publication/*/index.md`. Supported status values: `published`, `preprint`, `submitted`.
- `strands` may contain more than one ID. `primary_strand` records the principal classification where provided.
- Only published papers receive `home_selected`, a positive display-order number. Four are currently featured.
- The list contains 15 selected published papers, one preprint and nine submitted manuscripts. It is not the entire CV; Google Scholar links to the complete record.
- `contribution` is the short explanation; the template falls back to `summary`. Submitted work uses the heading Research focus.
- Use one DOI field and no duplicate DOI in `links`. `preprint_url` supplies a separate arXiv link.
- Do not guess author names or ordering. Six screenshot-sourced submissions currently omit the author field pending the owner's complete lists.
- Projects: `content/project/_index.md` (served at /projects/) and `content/project/*/index.md`. The project `group` determines the display section: `pi-awarded`, `pi-pending`, `collaborative`, or `other`.
- Funding amounts are total project budgets, not personal grants. Keep pending applications separate and do not aggregate currencies.
- About: biography in `content/about.md`; appointments, education, methods and awards in `content/authors/admin/_index.md`; engineering, teaching, committees, service and qualifications in `data/about.yaml`.
- Styles: `assets/css/custom.css`. Filters: `assets/js/site.js`.

Original research images are in `assets/media/research/`. Hugo produces WebP previews. Detail pages link to the original figures; provenance is in `docs/figure-sources.md`.

## September 2026 evidence and decisions

Source: the owner's September 25, 2026 CV, submission screenshots in the referenced website-advice conversation, primary publication metadata, and direct clarifications.

- The owner explicitly restored China Design Group Project Leader experience on this revision.
- The SAVeD dataset preprint and deployment-oriented protocol are independent works.
- FHWA roadway infrastructure/ADAS project: PI, awarded, 2026, $246,950.
- FDOT speed-management proposal: PI, pending approval, $240,000 proposed.
- SHRP2 has no cash funding reported; it appears under other research involvement, not the funded-PI section. Do not infer the type or value of non-cash support.
- Published DOI records supersede duplicated submitted entries in the CV (for example, the BiLSTM-Transformer and DE-GAM articles).
- The VLM review was published online July 15, 2026, with an October 2026 issue date. Use the online date so Hugo does not hide a published paper as future content.
- Qualifications distinguish passing FE/PE examinations from professional licensure. Do not add the P.E. postnominal.
- Doctoral committee membership does not imply primary supervision.
- Keep manuscript IDs, editors, private screenshots, license numbers, full CV extraction, and local QA evidence out of public assets and commits.

## Deliberate exclusions

No downloadable CV, homepage metrics, proficiency percentages or empty news section. Education is grouped at the School of Transportation, Southeast University; only the Ph.D. award year (2023) is displayed.

Experience redirects to About; the old project index redirects to Projects. Historical project detail URLs retain aliases to the corresponding research themes. Empty Blog, Talks and Teaching sections and the four old project bundles remain drafts.

## Verification

Run `hugo --minify` and `hugo server --disableFastRender --port 1313`.

The optional regression test needs Node.js and Playwright. It uses installed Edge on Windows; elsewhere install Playwright Chromium.

Run `node tests/verify-site.cjs`. Set `SITE_URL` for another origin. The test covers 13 routes at five viewport sizes, image loading, navigation, internal links, legacy redirects, status/area/year/search filters, no-JavaScript fallback, and factual display constraints. Screenshots and the report go to ignored `qa/revision2/`.
