# 06 – Design

**Clean and professional, but colourful and creative.** It should look serious enough for a university, with personality coming from colour, not clutter.

## Colours

The main colour is **purple**. All colours are defined as **CSS variables in `:root`**, so changing one value changes the whole site.

| Role | Light mode | Dark mode |
|------|-----------|-----------|
| Primary (buttons, links, active nav, timeline) | deep purple, e.g. `#6D28D9` | lighter purple, e.g. `#A78BFA` |
| Secondary accent (tags, highlights, small details) | a warm contrast to purple, e.g. coral `#F97362` or amber `#F59E0B` | same, slightly lighter |
| Soft background for cards and sections | very light lavender, e.g. `#F5F3FF` | dark purple-grey, e.g. `#1E1B2E` |
| Page background | off-white `#FCFCFD` | near-black `#121019` |
| Text | dark navy `#1F1B2D` | off-white `#EDEBF5` |

Creative touches:
- A subtle purple gradient behind the hero (About) section.
- Each project category has its own colour for its tag (e.g. Code = purple, Maths = coral).
- Section titles have a small coloured underline or marker.

## Light / dark mode

- A ☀/☾ button in the nav bar switches between light and dark.
- Default: follow the device setting (`prefers-color-scheme`). If the user has clicked the button, use their choice.
- The choice is saved in `localStorage` (wrapped in `try/catch`).
- Implemented with a `data-theme="light|dark"` attribute on `<html>` that swaps the CSS variables.
- The theme is applied before the page is drawn, so there is no white flash when loading in dark mode.
- Contrast must stay readable in both modes.

## Fonts

- Headings: *Poppins* (Google Fonts).
- Body text: *Inter* (Google Fonts).

## Layout

- Generous spacing, rounded corners on cards, light shadows (softer in dark mode).
- Responsive breakpoints: phone (< 768px), tablet (768–1024px), desktop (> 1024px).

## Animations

- Sections fade in when scrolled into view.
- Cards lift slightly on hover.
- The theme change is a smooth colour transition.
- All animations are disabled when the user has "reduce motion" turned on (`prefers-reduced-motion`).
