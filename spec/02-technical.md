# 02 – Technical constraints

- Exactly three code files at the project root:
  - `index.html`: page structure only. Text is filled in by `app.js` (French text can stay in the HTML as a fallback).
  - `styles.css`: all styling.
  - `app.js`: translations, content data, language and theme switching, navigation behaviour.
- Plain HTML / CSS / JavaScript: **no framework, no build step, no external libraries** (Google Fonts allowed).
- Works by opening `index.html` directly in a browser.

## Hosting: GitHub Pages

- The site is published with **GitHub Pages** from the root of the `main` branch.
- `index.html` must be at the root of the repository.
- Use only **relative paths** (`assets/photo.jpg`, not `/assets/photo.jpg`), so the site works both locally and at `https://<username>.github.io/<repo>/`.
- File names are **case-sensitive** on GitHub Pages: keep them all lowercase, no spaces.
- The `spec/` folder will be public in the repository too. That's fine, but it must not contain private information.

## Folder structure

```
portfolio/
├── index.html
├── styles.css
├── app.js
├── assets/
│   ├── photo.jpg
│   ├── cv-fr.pdf          ← later
│   ├── cv-en.pdf          ← later
│   └── projects/          ← project images
└── spec/                  ← this specification
```

The old `style.css` (without "s") is replaced by `styles.css`.
