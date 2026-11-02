# 03 – Layout & navigation

A **single scrolling page**. The navigation bar links to each section and scrolls to it smoothly.

```
┌───────────────────────────────────────────────────────────────┐
│ Maia Drebet │ About Education Projects Activities Skills      │
│             │ Awards CV Contact               [FR | EN]  [☾] │
├───────────────────────────────────────────────────────────────┤
│                   Hero / About me                              │
│                   Education                                    │
│                   Projects                                     │
│                   ...                                          │
│                   Footer                                       │
└───────────────────────────────────────────────────────────────┘
```

## Navigation bar

- Stays fixed at the top of the screen while scrolling (sticky).
- Left: my name, **Maia Drebet** (clicking it scrolls back to the top).
- Center/right: one link per section, in the order listed in `README.md`.
- Far right: the **language switch `FR | EN`** (see `04-language-switch.md`) and the **light/dark mode button** ☀/☾ (see `06-design.md`).
- The link of the section currently on screen is highlighted (scroll spy).
- Section headings must not be hidden under the sticky bar when scrolled to (use `scroll-margin-top`).

## Mobile (under 768px wide)

- The links collapse into a **hamburger menu** (☰) that opens a dropdown.
- Clicking a link closes the menu.
- The language switch and the theme button stay visible outside the menu.
