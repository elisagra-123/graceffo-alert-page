<<<<<<< HEAD
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
=======
# Graceffo Alert Website

## Project Overview
Graceffo Alert is a personal notification service that monitors official MLB game data and sends SMS messages when Gordon Graceffo enters a St. Louis Cardinals game. This repository contains the public-facing GitHub Pages site for product positioning, architecture communication, privacy disclosures, and Twilio campaign support content.

## Website Purpose
The site is designed to serve four goals:
- public product overview for portfolio and résumé use
- technical architecture communication for engineering audiences
- legal and privacy transparency for recipients
- SMS compliance support for Twilio A2P campaign review

## GitHub Pages Deployment
This repository is designed for static hosting with GitHub Pages.

Typical deployment flow:
1. Push changes to the default branch.
2. Enable GitHub Pages in repository settings.
3. Set source to the branch/root containing the HTML files.
4. Confirm the published URL and update canonical metadata if needed.

## Repository Structure
- `/index.html` — Home page with product overview, reliability summary, timeline, trust indicators, and enrollment CTA.
- `/architecture.html` — Dedicated system architecture page for engineering audiences.
- `/compliance.html` — SMS program compliance details for campaign reviewers.
- `/request-enrollment.html` — Canonical enrollment CTA page with Microsoft Forms workflow, required disclosures, and compliance card.
- `/enrollment-confirmation.html` — Post-submission confirmation page shown after completing the Enrollment Request Form.
- `/sms-enrollment.html` — SMS enrollment process documentation including disclosures, supported commands, and example messages.
- `/privacy.html` — Privacy policy.
- `/terms.html` — Terms & Conditions.
- `/faq.html` — Expanded recipient and reviewer FAQ.
- `/contact.html` — Support and communication page.
- `/styles.css` — Shared styling and accessibility-focused interaction states.
- `/config.js` — Site configuration including Microsoft Forms URL and enrollment mode.

## Configuring the Microsoft Forms URL
Update the `ENROLLMENT_FORM_URL` value in `config.js` when the Microsoft Forms URL is available. This is the only place that needs to be changed:

```js
const GRACEFFO_CONFIG = {
  ENROLLMENT_FORM_URL: "https://forms.office.com/YOUR_FORM_ID",
  ENROLLMENT_FORM_MODE: "tab" // "tab" opens in new tab; "iframe" embeds the form
};
```

## Contact Information
The official contact address for all support, enrollment, privacy, and opt-out requests is:
**graceffoalert@outlook.com**

## How to Update Policies
1. Edit `privacy.html` and/or `terms.html`.
2. Keep section headings stable when possible for easier review history.
3. Update "Last updated" text in the footer of modified pages.
4. Verify compliance references in `compliance.html` remain consistent with policy text.

## Future Roadmap
- Add versioned policy change log for recipient transparency.
- Add optional architecture sequence diagram variants for mobile and dark/light exports.
- Add automated accessibility regression checks in CI.
- Add optional multilingual content variants if recipient needs expand.
>>>>>>> origin/main
