# 04 – Language switch

- Two languages: **French (`fr`)** and **English (`en`)**.
- A `FR | EN` switch at the far right of the nav bar. The active language is highlighted.
- Default language: the one saved from my last visit. If there is none, the browser's language (`fr` if it starts with "fr", otherwise `en`).
- The choice is saved in `localStorage` (wrapped in `try/catch` so the site still works if storage is blocked).
- Switching changes **all** text instantly, with no page reload:
  - nav links, section titles, content, buttons, footer
  - image `alt` texts
  - the page `<title>`
  - the `<html lang="">` attribute
- The CV download button links to the CV in the current language.
- Every piece of text exists in both languages. If a translation is missing, show the French text.
