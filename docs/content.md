# Content

Content lives under `src/content/`, one folder per collection, defined in `src/content.config.ts`. Files are Markdown (`.md`) or MDX (`.mdx`) with a frontmatter block. Do not delete a schema field; new fields should be optional.

Images go in `src/assets/`, not `public/` (except favicon/robots). Reference `heroImage` with a path relative to the content file, and it is processed through `astro:assets`.

## blog

Files: `src/content/blog/<slug>.mdx`. The file name becomes the URL: `/blog/<slug>/`.

Fields:

- `title` (string, required)
- `description` (string, required, max 160 characters)
- `pubDate` (date, required)
- `updatedDate` (date, optional)
- `heroImage` (image, optional) — relative path from the post to a file in `src/assets/`, e.g. `../../assets/cover.jpg`
- `heroAlt` (string, required if `heroImage` is set)
- `tags` (string array, default `[]`)
- `draft` (boolean, default `false`) — `true` excludes the post from the production build

Example:

```md
---
title: On the pleasure of slow reading
description: A short case for reading fewer books, more carefully.
pubDate: 2026-03-02
tags: [reading]
---
```

## MDX features

- Footnotes, tables, and task lists (GFM) are supported out of the box.
- Code blocks are highlighted with Shiki in light and dark themes.
- Every post is attributed to `site.author` in `src/config.ts`.
- Section components can be embedded in the body of a post or page. See [Section components in a
  post](customization.md#section-components-in-a-post).
