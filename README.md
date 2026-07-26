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
- `/index.html` — Home page with product overview, reliability summary, timeline, trust indicators, and architecture flow diagram.
- `/architecture.html` — Dedicated system architecture page for engineering audiences.
- `/compliance.html` — SMS program compliance details for campaign reviewers.
- `/privacy.html` — Privacy policy.
- `/terms.html` — Terms & Conditions.
- `/faq.html` — Expanded recipient and reviewer FAQ.
- `/contact.html` — Support and communication page.
- `/styles.css` — Shared styling and accessibility-focused interaction states.

## How to Update Policies
1. Edit `privacy.html` and/or `terms.html`.
2. Keep section headings stable when possible for easier review history.
3. Update "Last updated" text in the footer of modified pages.
4. Verify compliance references in `compliance.html` remain consistent with policy text.

## How to Customize Contact Information
Update placeholders in `contact.html`:
- `your-email@example.com`
- `https://github.com/your-username/graceffo-alert`
- `https://github.com/your-username/graceffo-alert/issues`

Also update any matching links in footers and metadata to reflect the final repository and contact owner.

## Future Roadmap
- Add versioned policy change log for recipient transparency.
- Add optional architecture sequence diagram variants for mobile and dark/light exports.
- Add automated accessibility regression checks in CI.
- Add optional multilingual content variants if recipient needs expand.
