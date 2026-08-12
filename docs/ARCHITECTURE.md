# Theme architecture

## Loading model

Heroic 2.22.x reads every `.css` file from the configured Custom Themes Path. When a custom theme is selected, Heroic injects the CSS into a `<style class="customTheme">` element and derives the `body` class from the filename.

The theme is therefore loaded globally, not inside a Shadow DOM or isolated component tree. Selector scope and source order are part of the public behavior.

## Source organization

The files contain three conceptual layers:

1. palette and shared Platinum primitives;
2. component-specific Heroic 2.22.x adaptations;
3. compatibility rules for icons, checkboxes, store marks and scrollbars.

The source is intentionally readable. Technical section comments explain why a rule exists, but the final value is determined by normal CSS cascade rules. Internal development-version history is deliberately excluded from public files.

## Theme API variables

There are two categories of custom properties:

- internal macOS 9-inspired primitives such as `--mac9-raised`, `--mac9-sunken` and `--macos9-*` assets;
- Heroic theme API variables such as `--primary-button`, `--text-default` and `--sidebar-background`.

Many Heroic variables are consumed by Heroic's own stylesheets rather than by a `var(...)` expression in this repository. Local-reference-only dead-code tools will produce false positives.

## Icon system

Icons are applied in three ways:

- replacing an existing SVG surface with an embedded PNG/SVG background;
- drawing a small control through a CSS pseudo-element;
- retaining the native icon shape while changing fill, stroke, size or alignment.

The parent button and the icon must be treated separately. A common regression is improving icon alignment while accidentally replacing the established raised button geometry.

The theme defines 46 unique `--macos9-*` asset variables per variant and contains 69 embedded image occurrences. These counts are guarded by `scripts/validate.js` to detect accidental asset loss.

## Checkboxes

Native-looking square checkboxes are recreated using pseudo-elements. Checked states use the text glyph `\2714`; the original framework SVG is hidden. The exact glyph and sizing are intentional because previous replacements were less readable and visually inconsistent.

## Store logos

Heroic does not expose a dedicated store-name class on every logo, so the theme maps existing SVG `viewBox` values:

| Store      | `viewBox`     |
| ---------- | ------------- |
| GOG        | `0 0 32 32`   |
| Epic Games | `0 0 24 24`   |
| Amazon     | `0 0 448 512` |

Library cards use a 42×42 px sunken box. Game details retain the native 46×46 px area. Both surfaces use `var(--dolphin-panel)` so the box matches the game-tile background. Store marks are deliberately smooth rather than pixelated.

This mapping is version-sensitive: if Heroic replaces an upstream SVG, verify the new markup before changing the selector.

## Scrollbars

The final scrollbar is 17 px wide/high and uses square 17×17 px single-button arrows.

The patterned track must remain stationary:

- `::-webkit-scrollbar-track` owns the pattern;
- `::-webkit-scrollbar-track-piece` is transparent;
- the thumb is a separate raised control.

Applying the pattern to `track-piece` causes the segment after the thumb to re-anchor while scrolling and creates a visible moving-background defect.

Vertical arrow art is 8×4 px. Horizontal arrow art is 4×8 px. The flattened proportions match the accepted classic look.

## Light/dark relationship

Structure and dimensions should normally match between variants. Differences should be limited to palette, contrast and explicitly variant-specific assets, such as the high-contrast dark Epic/Amazon marks.

## Safe compression policy

Conservative consolidation is possible, but size is not the primary goal. Comments are retained when they protect selector, cascade or asset invariants.

Safe candidates:

- declarations proven to be superseded by an identical selector, property, importance and context;
- repeated data URIs replaced with a verified alias;
- genuinely unused internal variables after checking Heroic source.

Unsafe operations:

- generic minification that rewrites embedded data URIs or selector order;
- removing variables based only on local `var(...)` references;
- merging state selectors without checking specificity;
- assuming syntactic equality implies visual equality.
