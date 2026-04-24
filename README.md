# Portfolio - Nguyen Gia Hau

This is a static, data-driven portfolio designed to be easy to extend without rewriting the page layout.

## Structure

- `index.html`: main page shell.
- `assets/styles/main.css`: full styling and responsive layout.
- `assets/scripts/data.js`: all CV data, projects, achievements, and evidence entries.
- `assets/scripts/app.js`: dynamic rendering logic and gallery filtering.
- `evidence/`: supporting files (images, PDFs, demo links).

## Run

1. Open `index.html` in a browser.
2. Or use VS Code Live Server for real-time preview while editing.

## Quick Extension Guide

1. Update profile, experience, and project data in `assets/scripts/data.js`.
2. Add new evidence files to `evidence/`, then declare new items in `evidenceCategories`.
3. If you need a new section (for example: certifications or blog), add data in `data.js` and render a new block in `assets/scripts/app.js`.
4. Tune visuals in `assets/styles/main.css` using existing color tokens and card patterns.

## Notes

- File paths with Vietnamese characters are safely handled using `encodeURI` in the script.
- The current architecture is suitable for future migration to Angular/React because data and rendering logic are already separated by section.
