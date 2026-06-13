# AGENTS.md - Lumos Docs

## Read First

- `README.md`
- `docs/.vitepress/config.mts`

## Stack

- VitePress
- pnpm

## Commands

```powershell
pnpm install
pnpm docs:dev
pnpm docs:build
pnpm docs:preview
```

## Working Rules

- This repository is the documentation hub, not the source of truth for every Lumos document.
- Current Lucent docs stay owned by `../Lucent/docs`.
- Current Luminous docs stay owned by `../Luminous/docs`.
- Archive and repowiki content should be imported here as read-only or generated content unless a task explicitly changes their source.
- Keep changes focused on the doc site itself: navigation, landing pages, theme config, sync scripts, and imported content layout.

## Verification

- Run `pnpm docs:build` before finishing doc-site changes.
- Do not commit `node_modules/`, `docs/.vitepress/cache/`, or `docs/.vitepress/dist/`.
