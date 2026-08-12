# Visual regression checklist

Run this checklist in both light and dark variants. Record the Heroic version, display scale and screenshots for a release candidate.

## Global

- [ ] Main window background, title bar and left sidebar use the expected palette.
- [ ] Controls are square; no framework-default circular buttons remain.
- [ ] Raised, hover, active, focus and disabled states do not change button dimensions.
- [ ] Patreon, Ko-fi and GitHub Sponsors icons remain present and correctly sized.

## Library

- [ ] Toolbar icons are sharp, centered horizontally and vertically, and do not alter the segmented button strip.
- [ ] Game-card play, download and game-settings icons retain their accepted colors and proportions.
- [ ] GOG, Epic Games and Amazon marks are readable and smooth.
- [ ] Store marks sit in 42×42 px sunken boxes matching the tile-area background.
- [ ] Search, sorting, filtering, refresh and help states remain aligned.

## Game details

- [ ] Back button is visible and not a blank gray square.
- [ ] Store mark in the game card uses the same artwork and a 46×46 px area.
- [ ] Three-dot menu button displays the accepted macOS 9-inspired three-dot icon.
- [ ] Every item in the expanded game-tools menu has a matching classic icon.
- [ ] Install information, achievements and system requirements tabs use coordinated icons.
- [ ] Guide/help icon matches the Library help icon.
- [ ] Launch-problem warning triangle has classic depth and remains readable.
- [ ] Store link uses the accepted shopping-cart icon.

## Settings and Wine Manager

- [ ] Settings icons are square and sharp.
- [ ] Wine Manager toolbar icons remain centered without changing button chrome.
- [ ] Add/remove Wine path buttons use matching classic plus/minus icons.
- [ ] Close buttons and information popovers use the correct raised/menu surfaces.

## Checkboxes

- [ ] Native, hidden-input and MUI checkbox variants share the same square style.
- [ ] Checked state uses the accepted `✔` glyph.
- [ ] Indeterminate state is distinct from checked state.
- [ ] Hover, focus and disabled states remain legible.

## Scrollbars

- [ ] Global scrollbar is 17 px wide/high.
- [ ] End buttons are square 17×17 px controls.
- [ ] Vertical and horizontal triangles are centered and flattened.
- [ ] Track pattern does not move above or below the thumb while scrolling.
- [ ] Thumb and buttons have no rounded corners.
- [ ] Library, Promotions, settings, dialogs and long menus use the coordinated scrollbar.

## Suggested evidence

Capture at minimum:

1. Library grid with GOG, Epic and Amazon cards;
2. game-details page with the tools menu open;
3. Settings with checkbox states visible;
4. Wine Manager and its settings dialog;
5. a long Library or Promotions view showing the scrollbar at top, middle and bottom.
