# Section: CV – `#cv`

FR: **CV** · EN: **Résumé**

I don't have a CV yet.

- In `app.js`, a setting `cvAvailable` (default **`false`**).
- When `false`: the section shows a short message, "My CV will be available here soon." / « Mon CV sera bientôt disponible ici. », and the CV button in the About section is hidden.
- When `true`: the section shows a short sentence and a **download button** for the PDF in the current language (`assets/cv-fr.pdf` or `assets/cv-en.pdf`), opening in a new tab.
- `TODO`: write the CV (it can be made from the content of this spec), then add the PDFs and set `cvAvailable: true`.
