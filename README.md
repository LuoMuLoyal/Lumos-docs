# Lumos Docs

VitePress document site for the Lumos workspace.

## Purpose

This repository is the documentation hub, not the only source of truth.

- Current project docs still belong to their owning repositories:
  - `Lucent/docs`
  - `Luminous/docs`
- Generated API browsing pages can be derived from Lucent OpenAPI.
- Historical archive material can be imported from `docs-archive`.
- This repo should own hub-specific content such as navigation, landing pages, grouping, search presentation, and future sync scripts.

## Commands

```powershell
pnpm install
pnpm docs:sync:openapi
pnpm docs:dev
pnpm docs:build
pnpm docs:preview
```

## Structure

```text
docs/
  .vitepress/
  api/
  archive/
  current/
  index.md
scripts/
```

As the site grows, keep source ownership clear:

- Edit Lucent and Luminous operational docs in their own repositories.
- Use this repo to aggregate, generate, and present them.
