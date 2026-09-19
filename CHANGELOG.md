# Changelog

All notable changes to this project are documented here. Format: [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

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
