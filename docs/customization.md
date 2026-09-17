# Customization

Everything site-specific lives in `src/config.ts`, `src/styles/global.css`, and `src/assets/`. You should not need to touch component files for the changes below.

## Site identity

`src/config.ts`, `site` object:

- `name` — shown in the header and page titles.
- `description` — used for meta description and RSS.
- `url` — your production URL. Set this before deploying; it feeds canonical links, RSS, and sitemap.
- `locale` — `'en'` or `'ko'`, picks the default interface strings.
- `author` — shown in the footer and JSON-LD structured data.
- `defaultOgImage` — imported from `src/assets/og-default.png` (see below).

## Navigation and social links

`src/config.ts`, `nav` object:

- `nav.header` — top bar links (`label`, `href`). Keep it short; four links fit a phone.
- `nav.footer` — array of groups, each with a `title` and a `links` array.
- `nav.social` — icon links (`label`, `href`, `icon`; icon names are `lucide:*` via astro-icon).

## Color tokens

`src/styles/global.css`, inside the `@theme` block:

- `--color-background`, `--color-foreground`, `--color-muted`, `--color-border`, `--color-primary`.
- Dark mode values are set in the adjacent `.dark` block (same variable names).
- Use hex values only. After changing a color, re-check text contrast against the background (WCAG AA, 4.5:1) in light and dark. The comment above the tokens lists the current ratios. Preview tokens in dev at `/styleguide` (not built into production).
- Only use these `@theme` tokens in components; do not put arbitrary hex values in classes.

## Self-hosted fonts

Font files live in `src/assets/fonts/` (woff2, self-hosted, licensed under the OFL files alongside them) and are declared with `@font-face` at the top of `src/styles/global.css`. Do not add external font CDN links (e.g. Google Fonts `<link>` tags); add a self-hosted file instead.

## Logo and favicon

- Logo: `src/assets/logo.svg`.
- Favicon: `public/favicon.svg` (favicon is one of the few files allowed directly under `public/`).

## Default OG image

`src/assets/og-default.png`, 1200x630. Imported by `src/config.ts` as `site.defaultOgImage` and used whenever a page or post has no more specific image.

## Home page sections

`src/pages/index.astro` imports section components from `src/components/sections/` and passes them props to compose the home page; edit this file to reorder or change home page content. Available sections: `Hero`, `RecentPosts`, `Features`, `Newsletter`, `CTA`. Section components only accept props; they do not fetch their own data.

## UI strings

`src/i18n/<locale>.ts` (`src/i18n/en.ts`, `src/i18n/ko.ts`). `site.locale` picks which file is used. To add a language, copy `en.ts` to `src/i18n/<locale>.ts`, translate it, and register it in `src/i18n/t.ts`. Do not hardcode user-facing strings inside components; add a key here and read it with `useT(Astro.currentLocale)`.

## Dark mode

`src/config.ts`, `features.darkMode` (`true`/`false`). Dark styling uses the `dark:` Tailwind variant, toggled by a `dark` class on `<html>`.

## Forms

`src/config.ts`, `forms` object:

- `forms.web3formsKey` — access key from [web3forms.com](https://web3forms.com), used by `/contact`.
- `forms.newsletter.action` — your newsletter service's subscribe URL. The form posts a single `email` field to it and opens the result in a new tab.
- Until these are filled in, the forms render but do not submit.

## Analytics

`src/config.ts`, `analytics.provider` (`null`, `'plausible'`, or `'ga4'`) and `analytics.id`.

## Blog options

`src/config.ts`, `blog` object:

- `blog.postsPerPage` — pagination size.
- `blog.dropCap` — drop the first letter of a post two lines, in the accent color (browsers without `initial-letter` show a plain letter).

## SEO

`src/config.ts`, `seo` object:

- `seo.titleTemplate` — e.g. `'%s · Pilcrow'`.
- `seo.twitterHandle`.
- `seo.jsonLd` — `{ type: 'Person' | 'Organization', name }`, used for structured data.
