# Changelog

All notable changes to this project are documented here. Format: [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [1.1.2] - 2026-09-21

### Fixed

- The Lighthouse gate measures each URL three times instead of once. The first URL in the list
  absorbs the runner's cold start, so a page could fail the 95 threshold with the site unchanged.

## [1.1.1] - 2026-09-21

### Fixed

- CI uploads the Lighthouse report when the performance gate fails. `.lighthouseci` is a dotted
  directory, and `upload-artifact` skips hidden files by default, so the report that explains a
  failure was never actually attached.

## [1.1.0] - 2026-09-21

### Added

- Umami as an analytics provider, next to Plausible and GA4. `analytics.host` points a self-hosted
  Plausible or Umami at your own origin; leave it empty for the hosted service. The default is
  still `provider: null`, and a build with nothing set loads no third-party script.
- Deploy buttons for Vercel and Netlify in the README, beside the Cloudflare one.

## [1.0.4] - 2026-09-19

### Fixed

- No more `[astro-icon] Failed to load icons from "src/icons"` warning on every build. `src/icons/` now ships empty, ready for your own SVG icons.

## [1.0.3] - 2026-09-19

### Fixed

- `pnpm install` works with pnpm 9 and older pnpm 10 releases. The project now pins pnpm 10.34.5 instead of pnpm 12, which older pnpm could not read or switch to.

### Changed

- README and `docs/deploy.md` list the required Node.js and pnpm versions.

## [1.0.2] - 2026-09-19

### Changed

- README links to the Pro demo.

## [1.0.1] - 2026-09-17

### Changed

- README links to the Pro checkout page.

## [1.0.0] - 2026-09-17

### Added

- Rubricated drop cap on posts (`blog.dropCap`), serif italic section labels in a hanging left column.
- Blog with tags, pagination, RSS, sitemap, and JSON-LD.
- Home sections: Hero, Recent posts, Features, Newsletter, CTA.
- Pages: About, Contact (Web3Forms), Privacy, Terms, 404.
- Dark mode, self-hosted fonts (Newsreader, Inter, JetBrains Mono), UI strings in English and Korean.
- User docs: `docs/customization.md`, `docs/content.md`, `docs/deploy.md`, and `AGENTS.md`.
