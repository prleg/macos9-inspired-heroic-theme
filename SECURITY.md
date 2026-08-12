# Security policy

## Installing custom themes

Custom CSS is injected into Heroic's renderer and should be reviewed like code. Install themes only from sources you trust.

The official files in `themes/` are designed to be self-contained:

- no `@import` rules;
- no HTTP or HTTPS asset URLs;
- no JavaScript URLs;
- images embedded as data URIs.

The validation script rejects newly introduced external asset URLs and imports.

## Reporting

Do not publish a security-sensitive finding in a public issue before the repository owner has configured a private reporting channel. The owner should enable GitHub private vulnerability reporting before the public launch.

CSS rendering bugs and ordinary compatibility regressions can use the normal issue template.
