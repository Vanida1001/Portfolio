# 05 – Content data (`app.js`)

All text lives in **one data object**, so updating the site means editing only this:

```js
const content = {
  fr: { nav: {...}, about: {...}, ... },
  en: { nav: {...}, about: {...}, ... }
};
```

## Lists

Lists (education entries, projects, activities, awards…) are **arrays of objects** with the text fields given in both languages:

```js
projects: [
  {
    image: "assets/projects/robot.jpg",
    category: "science",
    date: "2026-10",
    link: "",
    title: { fr: "Bras robotique", en: "Robotic arm" },
    description: { fr: "...", en: "..." }
  }
]
```

`app.js` builds the cards and lists from these arrays. To add a project, I add one object to the array.
The exact fields for each list are described in that section's file in `sections/`.

## Static text

In `index.html`, static texts use a `data-i18n="key"` attribute (e.g. `data-i18n="nav.projects"`) that `app.js` fills in with the current language.

## Keep it editable

- The data block sits at the **top of `app.js`** with comments explaining how to add an entry.
- The logic (rendering, switching, nav) comes after it.
