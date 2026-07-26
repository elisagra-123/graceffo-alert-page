# Graceffo Alert Public Website

This repository contains the static public website for **Graceffo Alert**.

Graceffo Alert is a personal software project that monitors official MLB game data and sends SMS notifications when Gordon Graceffo enters a St. Louis Cardinals game for approved recipients.

## Purpose

This site serves two goals:

1. Provide required public documentation for Twilio A2P campaign review.
2. Present a professional landing page for the project.

## Deployment (GitHub Pages)

This site is plain static HTML/CSS/JS with no build step.

To deploy with GitHub Pages:

1. Push changes to your default branch.
2. In GitHub, open **Settings → Pages**.
3. Set Source to **Deploy from a branch**.
4. Select your branch and `/ (root)` folder.
5. Save. GitHub Pages will publish the site.

## Repository Structure

```text
/
├── index.html
├── privacy.html
├── terms.html
├── contact.html
├── faq.html
├── 404.html
├── robots.txt
├── sitemap.xml
├── favicon.ico
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── images/
    ├── hero.svg
    └── architecture.svg
```

## Customize Before Publishing

Update placeholders in the following files:

- `contact.html`
- `privacy.html`
- `terms.html`

Replace:

- `email@example.com` with your real support/contact email
- `https://github.com/elisagra-123/graceffo-alert-page` with your final repository URL
- Canonical/OpenGraph URLs if using a custom domain

## Updating Policy Pages

- Edit `privacy.html` for privacy and data handling statements.
- Edit `terms.html` for SMS terms, HELP/STOP wording, and frequency language.
- Keep Twilio compliance language explicit (consent, opt-out, HELP, no marketing).

## How GitHub Pages Hosting Works

GitHub Pages serves files directly from this repository. Since no framework or build pipeline is required:

- edits to `.html`, `.css`, and `.js` files are immediately deployable
- no package installation is needed
- policy/content updates are low maintenance
