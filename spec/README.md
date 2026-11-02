# Portfolio spec: index

> Personal portfolio of **Maia Drebet**, a student in seconde at the Lycée Français International de Singapour (LFIS), for higher-education admissions after the baccalauréat (mainly **Singapore and France**).
> The site is bilingual French / English, has a light/dark mode, and gets updated every year from seconde to terminale.

**For Claude Code:** read this file first, then the files below. The code goes in exactly three files at the root of the project: `index.html`, `styles.css` and `app.js` (see `02-technical.md`).
Lines marked **`TODO`** are content Maia hasn't decided yet. Until then, use clear placeholder text in both languages, or hide the element as the section file says.

## Global rules (apply to the whole site)

| File | What it covers |
|------|----------------|
| [01-goals.md](01-goals.md) | Why the site exists, who reads it |
| [02-technical.md](02-technical.md) | The three files, no frameworks, folder structure, GitHub Pages |
| [03-layout-navigation.md](03-layout-navigation.md) | Single-page layout, sticky nav bar, scroll spy, mobile menu |
| [04-language-switch.md](04-language-switch.md) | FR / EN switching, default language, saving the choice |
| [05-content-data.md](05-content-data.md) | How all text and lists are stored in `app.js` |
| [06-design.md](06-design.md) | Purple palette, fonts, light/dark mode, animations |
| [07-accessibility-quality.md](07-accessibility-quality.md) | Semantic HTML, keyboard, contrast, no console errors |
| [08-later-ideas.md](08-later-ideas.md) | Not in version 1, for later |

## Page sections (in nav order)

| # | File | Section id | FR label | EN label |
|---|------|------------|----------|----------|
| 1 | [sections/about.md](sections/about.md) | `about` | À propos | About |
| 2 | [sections/education.md](sections/education.md) | `education` | Parcours scolaire | Education |
| 3 | [sections/projects.md](sections/projects.md) | `projects` | Projets | Projects |
| 4 | [sections/activities.md](sections/activities.md) | `activities` | Activités & Engagement | Activities & Involvement |
| 5 | [sections/skills.md](sections/skills.md) | `skills` | Compétences | Skills |
| 6 | [sections/awards.md](sections/awards.md) | `awards` | Distinctions | Awards |
| 7 | [sections/cv.md](sections/cv.md) | `cv` | CV | Résumé |
| 8 | [sections/contact.md](sections/contact.md) | `contact` | Contact | Contact |
| – | [sections/footer.md](sections/footer.md) | – | (footer, not in nav) | |

## Where to look when…

- **Adding or changing a section** → its file in `sections/` + the table above + `03-layout-navigation.md`
- **Changing text or translations** → `05-content-data.md`
- **Changing the look or the light/dark mode** → `06-design.md`

## Still open (`TODO`)

- 3rd spécialité for première (`sections/education.md`)
- Mandarin level and any other language studied at school (`sections/skills.md`)
- Contact email (`sections/contact.md`)
- CV PDFs (`sections/cv.md`)
- Photo (`sections/about.md`)
