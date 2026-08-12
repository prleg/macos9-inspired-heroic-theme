# Instructions for coding agents and LLMs

These instructions apply to the entire repository. They document visual invariants that are easy to break with generic CSS cleanup.

## Project contract

- Public theme version is `1.0`. Do not add internal development-version history to source comments or documentation.
- Target Heroic Games Launcher 2.22.x.
- Treat `themes/macos9-inspired-light.css` and `themes/macos9-inspired-dark.css` as a coordinated pair.
- Keep sources readable and unminified. Never create or commit a `DISTRIBUTION` build.
- Preserve all user-visible behavior unless the issue explicitly requests a visual change.
- Run `npm test` after every CSS edit and complete `docs/VISUAL-REGRESSION.md` before a release.

## Do not infer dead code from local references alone

Heroic consumes many custom properties directly from its own component CSS. A property can be required even if this repository contains no `var(--property)` reference. Do not remove theme API variables based only on a text search in these two files.

Repeated selectors can also be intentional compatibility layers. Before removing an earlier declaration, resolve specificity, source order, `!important`, pseudo-state and the actual Heroic 2.22.x DOM.

## Visual invariants

- Global scrollbar: final width and height are 17 px.
- The patterned background belongs to `::-webkit-scrollbar-track` only.
- `::-webkit-scrollbar-track-piece` must remain transparent; adding a pattern makes the area below the thumb appear to move.
- Scrollbar arrow buttons are square 17×17 px. Vertical arrow artwork is 8×4 px; horizontal artwork is 4×8 px.
- The store-logo box is sunken and uses `var(--dolphin-panel)` as its surface.
- Store-logo box on Library cards is 42×42 px. The game-details wrapper retains its native 46×46 px area.
- Store recognition currently depends on SVG `viewBox` values: GOG `0 0 32 32`, Epic `0 0 24 24`, Amazon `0 0 448 512`.
- Store logos must use smooth rendering. Do not apply pixelated rendering to them.
- Checkmarks use `\2714`. Do not replace them with a different glyph, generated SVG or icon font.
- Preserve the established play/download colors and light/dark differences.
- Icon replacement should not modify the raised/sunken geometry of its parent button.
- Preserve the classic square shape: do not introduce border radii into controls, menus, dialogs or scrollbars.

## Embedded assets

- The CSS is self-contained and uses embedded data URIs.
- Do not convert embedded assets to remote URLs.
- Do not re-encode raster assets without pixel-by-pixel visual comparison. Metadata stripping, optimization and minification have previously changed results.
- When the same artwork is reused, a custom property alias is preferred over duplicating a long data URI, but only after both selectors are verified visually.
- Do not change trademark artwork or notices without checking `THIRD_PARTY_NOTICES.md` and `ASSET-AUDIT.md`.
- Do not mark a release public while an asset group remains `REVIEW`, `REPLACE` or `REMOVE`.

## Editing workflow

1. Reproduce the problem in Heroic 2.22.x and identify the exact element/state.
2. Change both variants unless the requirement is explicitly palette-specific.
3. Prefer a narrow selector near the related final block over broad global rules.
4. Avoid adding another override when an existing final rule can be updated safely.
5. Run `npm test`.
6. Compare the affected screen in light and dark variants, including normal, hover, active, focus and disabled states.
7. Update `CHANGELOG.md` and relevant architecture notes when the contract changes.

## Forbidden shortcuts

- No blanket minification or property sorting.
- No automatic deletion of “unused” custom properties.
- No global `svg`, `button`, `input` or `::-webkit-scrollbar-*` rewrite without checking all listed screens.
- No claim of visual equivalence based only on a successful CSS parse.
- No release when only one color variant has been tested.
