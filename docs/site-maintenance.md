# Maintaining the academic site

The site continues to use Hugo 0.136.5 and the existing HugoBlox modules. The production domain is hosted by Netlify, which rebuilds from the GitHub repository using `netlify.toml`. No client-side framework or production npm dependency has been added.

The repository also contains a legacy GitHub Pages workflow. On 2026-09-25 it failed at `Setup Pages` because no Pages site was configured. This is separate from the working Netlify deployment; no GitHub Pages or domain settings were changed in this revision.

## Content

- Home: `content/_index.md`; layout: `layouts/landing/list.html`.
- Research: three pages under `content/research/`. Their titles, questions, illustrations and research IDs are shared by the home page, research index and publication filters.
- Publications: `content/publication/*/index.md`. Use `status: published` or `status: preprint`; use `strands` to associate a paper with `proactive`, `mechanisms`, or `technology`.
- Only selected published work should have `home_selected`, a positive number determining home-page order. Remove it from unpublished work.
- `contribution` provides a concise explanation distinct from the formal title. The template falls back to `summary`.
- Use one DOI field; do not add a duplicate DOI to `links`. `preprint_url` provides the separate arXiv link.
- About: biography in `content/about.md`; work, education, methods and awards remain in `content/authors/admin/_index.md`.
- Common styling: `assets/css/custom.css`. Publication filters: `assets/js/site.js`.

Original research images remain in `assets/media/research/`. Hugo generates responsive WebP previews; the research detail pages also link to full-resolution originals. Provenance is in `docs/figure-sources.md`.

## Deliberate exclusions

No downloadable CV, homepage metrics, unsupported proficiency percentages, empty news block, or Project Leader entry. Education is grouped at the School of Transportation, Southeast University; only the Ph.D. award year (2023) is displayed.

Old Experience and Projects URLs redirect through Hugo aliases. Empty Blog, Talks and Teaching sections and the old project pages remain in the source as drafts.

## Verification

Run `hugo --minify` and `hugo server --disableFastRender --port 1313`.

The optional browser regression test requires Node.js and Playwright (`npm install --no-save playwright`). It uses installed Edge on Windows; on other platforms install Playwright Chromium with `npx playwright install chromium`.

Run `node tests/verify-site.cjs`. Set `SITE_URL` to test another origin. Screenshots and a JSON report are written to the ignored `qa/redesign/` directory. The test covers five viewport sizes, image loading, navigation, old URL redirects, publication filtering, empty results, no-JavaScript fallback and browser errors.
