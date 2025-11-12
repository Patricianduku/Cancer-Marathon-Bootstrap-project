# KUTRRH Cancer Marathon — Landing Page (Bootstrap)

This repository contains a static Bootstrap-based landing page for the KUTRRH Cancer Marathon event. The main entry is `index.html`, which includes the hero video, event countdown, packages, routes (interactive Google Map), testimonials, and contact / subscribe footer.

## What this project contains

- `index.html` — single-page landing site (hero, packages, routes, map embed, testimonials, footer)
- `css/` — Bootstrap and custom styles (`style.css`, `packages-improvements.css` if present)
- `js/` — site scripts (`main.js`)
- `img/` — images and local media. Notable asset: the highlights video `Highlights from the 2023 Standard Chartered Nairobi Marathon.mp4` (URL-encode or rename to remove spaces when linking)
- `lib/` — third-party libraries (Owl Carousel, WOW.js, easing, etc.)
- `LICENSE.txt` — project license (keep or update as appropriate)

## Features

- Full-screen hero background video
- Countdown timer to event day
- Package cards with collapsible details and register CTA
- Routes carousel + embedded Google Map section
- Testimonials carousel (Owl Carousel)
- Footer with subscription input (stores to localStorage in `main.js` if enabled)

## Quick local preview

Browsers restrict some features (video autoplay and local file access). Serve the project over HTTP for consistent results.

Option 1 — Python (works on Windows, macOS, Linux):

```powershell
# from the project folder
python -m http.server 8000
# open http://localhost:8000 in your browser
```

Option 2 — VS Code Live Server extension:

- Install Live Server and click "Go Live" to serve the project and preview live reload.

Notes:
- If you link the local mp4 directly, URL-encode spaces or rename the file (recommended: `highlights-2023.mp4`).
- Modern browsers often block autoplay with sound — use `muted` for autoplay or require a user click.

## Git / Deployment tips

- To push to GitHub, initialize a git repo, add files, commit and push:

```powershell
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Patricianduku/Cancer-Marathon-Bootstrap-project.git
git push -u origin main
```

## Accessibility & small improvements (recommended)

- Replace spaces in filenames with dashes or underscores to avoid encoding issues.
- Move inline spacer styles into `css/style.css` and use responsive utility classes instead of fixed pixel heights.
- Add alt text for all images and ensure color contrast for accessibility.

## License

See `LICENSE.txt` for license details.

---



