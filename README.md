# Lumos Docs

VitePress document site for the Lumos workspace.

## Purpose

This repository is the documentation hub, not the only source of truth.

- Current project docs still belong to their owning repositories:
  - `../Lucent/docs`
  - `../Luminous/docs`
- Derived knowledge can be imported from:
  - `../.qoder/repowiki`
  - `../docs-archive`
- This repo should own hub-specific content such as navigation, landing pages, grouping, search presentation, and future sync scripts.

## Commands

```powershell
pnpm install
pnpm docs:dev
pnpm docs:build
pnpm docs:preview
```

## Structure

```text
docs/
  .vitepress/
  index.md
```

As the site grows, keep source ownership clear:

- Edit Lucent and Luminous operational docs in their own repositories.
- Use this repo to aggregate and present them.
