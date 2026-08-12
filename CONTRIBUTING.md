# Contributing

Thank you for helping maintain macOS 9 Inspired Theme for Heroic.

## Before changing CSS

1. Read `AGENTS.md` and `docs/ARCHITECTURE.md`.
2. Confirm the issue in Heroic 2.22.x.
3. Record whether it affects light, dark or both variants.
4. Prefer the narrowest selector that fixes the observed component.

## Required checks

```bash
npm ci
npm test
```

Then complete the relevant items in `docs/VISUAL-REGRESSION.md`. A parse-only test is not sufficient for visual CSS.

## Pull requests

A pull request should include:

- a concise problem description;
- Heroic version and operating system;
- before/after screenshots in both variants when applicable;
- the affected normal/hover/active/focus/disabled states;
- confirmation that no external asset URL was introduced;
- an update to `CHANGELOG.md` when user-visible behavior changes.

## Style

- Keep CSS expanded and readable.
- Preserve explanatory comments when they still describe the final behavior.
- Keep structural changes synchronized between light and dark themes.
- Do not submit minified builds or generated `DISTRIBUTION` files.
- Do not bulk-optimize embedded images without visual proof.
- Do not remove custom properties solely because this repository has no local `var(...)` reference.

## New embedded assets

Document the source, author, license, modifications and trademark status in `THIRD_PARTY_NOTICES.md` and `ASSET-AUDIT.md`. Assets with unclear redistribution rights must not be included in a public release.
