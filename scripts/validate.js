const fs = require("fs");
const path = require("path");
const postcss = require("postcss");

const repositoryRoot = path.resolve(__dirname, "..");
const themePaths = [
  path.join(repositoryRoot, "themes", "macos9-inspired-light.css"),
  path.join(repositoryRoot, "themes", "macos9-inspired-dark.css"),
];
const retiredBrandingPattern = new RegExp(`nice${"os"}|nice${"9"}`, "i");
const internalVersionPattern = new RegExp(
  `\\bv${"0"}\\.\\d|\\bv1\\.[1-9]\\d*|\\b1\\.${"3"}\\.${"3"}\\b|\\bTEST\\b`,
);

function lastRule(root, selector) {
  let result;
  root.walkRules((rule) => {
    if (rule.selector === selector) result = rule;
  });
  return result;
}

function lastValue(rule, property) {
  let result;
  rule?.walkDecls(property, (declaration) => {
    result = declaration.value;
  });
  return result;
}

function fail(file, message) {
  console.error(`${path.basename(file)}: ${message}`);
  process.exitCode = 1;
}

for (const themePath of themePaths) {
  const css = fs.readFileSync(themePath, "utf8");
  const root = postcss.parse(css, { from: themePath });

  const macos9Assets = new Set();
  root.walkDecls((declaration) => {
    if (declaration.prop.startsWith("--macos9-"))
      macos9Assets.add(declaration.prop);
  });

  const dataImageCount = (css.match(/data:image\//g) || []).length;
  const uniqueImageCount = new Set(
    [...css.matchAll(/data:image\/[^;,)"']+(?:;[^,]*)?,[^)"']+/g)].map(
      (match) => match[0],
    ),
  ).size;
  if (macos9Assets.size !== 46)
    fail(themePath, `expected 46 --macos9 assets, found ${macos9Assets.size}`);
  if (dataImageCount !== 69)
    fail(themePath, `expected 69 embedded images, found ${dataImageCount}`);
  if (uniqueImageCount !== 58)
    fail(
      themePath,
      `expected 58 unique embedded images, found ${uniqueImageCount}`,
    );

  if (!css.includes("Version: 1.0"))
    fail(themePath, "public version marker must be 1.0");
  if (retiredBrandingPattern.test(css))
    fail(themePath, "retired project branding detected");
  if (internalVersionPattern.test(css))
    fail(themePath, "internal development-version history detected");

  if (/@import\b/i.test(css)) fail(themePath, "external imports are forbidden");
  if (/url\(\s*['"]?https?:/i.test(css))
    fail(themePath, "external HTTP(S) assets are forbidden");
  if (/javascript:/i.test(css))
    fail(themePath, "javascript URLs are forbidden");
  if (/repeating-conic-gradient\(/i.test(css))
    fail(themePath, "obsolete moving-track experiment detected");

  const scrollbar = lastRule(root, "::-webkit-scrollbar");
  if (
    lastValue(scrollbar, "width") !== "17px" ||
    lastValue(scrollbar, "height") !== "17px"
  ) {
    fail(themePath, "final scrollbar must be 17×17 px");
  }

  const track = lastRule(root, "::-webkit-scrollbar-track");
  const trackPiece = lastRule(root, "::-webkit-scrollbar-track-piece");
  if (!lastValue(track, "background")?.includes("repeating-linear-gradient")) {
    fail(themePath, "stationary scrollbar track pattern is missing");
  }
  if (lastValue(trackPiece, "background") !== "transparent") {
    fail(
      themePath,
      "track-piece must remain transparent to prevent a moving pattern",
    );
  }

  const arrowRequirements = [
    "width='8' height='4'",
    "background-size: 8px 4px !important",
    "width='4' height='8'",
    "background-size: 4px 8px !important",
  ];
  for (const requirement of arrowRequirements) {
    if (!css.includes(requirement))
      fail(themePath, `scrollbar arrow invariant missing: ${requirement}`);
  }

  const logoRequirements = [
    "width: 42px !important",
    "height: 42px !important",
    "background-color: var(--dolphin-panel) !important",
    "box-shadow: var(--mac9-sunken) !important",
    '[viewBox="0 0 32 32"]',
    '[viewBox="0 0 24 24"]',
    '[viewBox="0 0 448 512"]',
  ];
  for (const requirement of logoRequirements) {
    if (!css.includes(requirement))
      fail(themePath, `store-logo invariant missing: ${requirement}`);
  }

  const checkmarkCount = (css.match(/content:\s*"\\2714"/g) || []).length;
  if (checkmarkCount < 4)
    fail(
      themePath,
      `expected at least four accepted checkmark rules, found ${checkmarkCount}`,
    );

  if (!process.exitCode) {
    console.log(
      `${path.basename(themePath)}: PASS — parsed, assets intact, no external URLs, invariants preserved`,
    );
  }
}

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const item = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(item) : [item];
  });
}

const forbiddenDistribution = walk(repositoryRoot).filter((file) =>
  path.basename(file).toUpperCase().includes("DISTRIBUTION"),
);
if (forbiddenDistribution.length) {
  fail(
    repositoryRoot,
    `DISTRIBUTION files are forbidden: ${forbiddenDistribution.join(", ")}`,
  );
} else {
  console.log("Repository policy: PASS — no DISTRIBUTION files");
}

const textExtensions = new Set([
  "",
  ".css",
  ".js",
  ".json",
  ".md",
  ".yml",
  ".yaml",
]);
const publicFiles = walk(repositoryRoot).filter(
  (file) =>
    !file.includes(`${path.sep}node_modules${path.sep}`) &&
    textExtensions.has(path.extname(file)),
);
for (const file of publicFiles) {
  const contents = fs.readFileSync(file, "utf8");
  if (retiredBrandingPattern.test(contents))
    fail(file, "retired project branding detected");
  if (internalVersionPattern.test(contents))
    fail(file, "internal development-version history detected");
}

if (!process.exitCode) {
  console.log(
    "Public identity: PASS — macOS 9-inspired naming and version 1.0 only",
  );
}
