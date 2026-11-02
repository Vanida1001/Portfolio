/* ==========================================================================
   Maia Drebet – portfolio
   1. SETTINGS and CONTENT DATA  (edit this part to update the site)
   2. LOGIC                      (rendering, language, theme, navigation)
   ========================================================================== */


/* ==========================================================================
   1. SETTINGS
   ========================================================================== */

const settings = {
  // Set to true once assets/cv-fr.pdf and assets/cv-en.pdf exist.
  cvAvailable: false,

  // Set to true once assets/photo.jpg exists. Until then, a purple circle with "MD" is shown.
  photoAvailable: false,

  // Contact email, e.g. "maia.drebet@example.com". Empty = "coming soon" message.
  email: "",

  // GitHub profile URL, e.g. "https://github.com/your-username". Empty = link hidden.
  githubUrl: "",

  // Date shown in the footer. Format YYYY-MM-DD. Update it each time you change the site.
  lastUpdated: "2026-11-02"
};


/* ==========================================================================
   CONTENT: static text (French and English)
   Every key must exist in both languages. If an English key is missing,
   the French text is shown instead.
   ========================================================================== */

const content = {
  fr: {
    meta: { title: "Maia Drebet – Portfolio" },
    a11y: { skip: "Aller au contenu", language: "Langue", menu: "Menu", mainNav: "Navigation principale" },
    nav: {
      about: "À propos",
      education: "Parcours scolaire",
      projects: "Projets",
      activities: "Activités & Engagement",
      skills: "Compétences",
      awards: "Distinctions",
      cv: "CV",
      contact: "Contact"
    },
    theme: { toDark: "Passer en mode sombre", toLight: "Passer en mode clair" },
    about: {
      tagline: "Lycéenne à Singapour, curieuse de business, de logistique et de tout ce qui se construit avec des maths et du code.",
      intro: "Je suis une lycéenne française en seconde au Lycée Français International de Singapour, où je suis scolarisée depuis la grande section. Je m'intéresse au business et à la logistique : comprendre comment les choses s'organisent et les faire mieux fonctionner. J'aime les maths et créer des projets : j'ai conçu un jeu de pâtisserie et ce portfolio, en rédigeant les spécifications et en testant chaque détail pendant que l'IA écrivait le code. Je m'adapte vite, j'aime travailler en équipe, et quand je m'engage sur quelque chose, je le mène jusqu'au bout.",
      photoAlt: "Photo de Maia Drebet",
      seeProjects: "Voir mes projets",
      downloadCv: "Télécharger mon CV"
    },
    education: { upcoming: "À venir" },
    projects: {
      filters: "Filtrer les projets",
      all: "Tout",
      code: "Code",
      math: "Maths",
      personal: "Perso",
      school: "Scolaire",
      seeMore: "Voir plus"
    },
    activities: {
      groups: {
        sports: "Sport",
        school: "Vie scolaire & clubs",
        volunteering: "Bénévolat"
      }
    },
    skills: {
      languages: "Langues",
      technical: "Compétences techniques",
      technicalSentence: "Je crée mes projets en rédigeant des spécifications détaillées, en dirigeant l'IA pour écrire le code et en testant moi-même chaque fonctionnalité.",
      qualities: "Qualités personnelles",
      levelOf: "Niveau {n} sur 6"
    },
    awards: {
      obtained: "Obtenus",
      upcoming: "À venir",
      upcomingLabel: "À venir",
      viewCertificate: "Voir le certificat"
    },
    cv: {
      soon: "Mon CV sera bientôt disponible ici.",
      available: "Mon CV est disponible en téléchargement (PDF).",
      download: "Télécharger mon CV (PDF)"
    },
    contact: {
      soon: "Coordonnées bientôt disponibles.",
      email: "E-mail",
      github: "GitHub"
    },
    footer: {
      // {date} is replaced by the date from settings.lastUpdated. Change the year here when needed.
      text: "© 2026 Maia Drebet – Dernière mise à jour : {date}",
      top: "Retour en haut"
    }
  },

  en: {
    meta: { title: "Maia Drebet – Portfolio" },
    a11y: { skip: "Skip to content", language: "Language", menu: "Menu", mainNav: "Main navigation" },
    nav: {
      about: "About",
      education: "Education",
      projects: "Projects",
      activities: "Activities & Involvement",
      skills: "Skills",
      awards: "Awards",
      cv: "Résumé",
      contact: "Contact"
    },
    theme: { toDark: "Switch to dark mode", toLight: "Switch to light mode" },
    about: {
      tagline: "High-school student in Singapore, curious about business, logistics, and anything you can build with maths and code.",
      intro: "I'm a French student in seconde at the Lycée Français International de Singapour, where I've studied since kindergarten. I'm drawn to business and logistics: understanding how things are organised, and making them work better. I love maths and building things: I designed a bakery game and this portfolio, writing the specifications and testing every detail while AI wrote the code. I adapt fast, I work well in a team, and when I take something on, I see it through.",
      photoAlt: "Photo of Maia Drebet",
      seeProjects: "See my projects",
      downloadCv: "Download my CV"
    },
    education: { upcoming: "Upcoming" },
    projects: {
      filters: "Filter projects",
      all: "All",
      code: "Code",
      math: "Maths",
      personal: "Personal",
      school: "School",
      seeMore: "See more"
    },
    activities: {
      groups: {
        sports: "Sports",
        school: "Clubs & school life",
        volunteering: "Volunteering"
      }
    },
    skills: {
      languages: "Languages",
      technical: "Technical skills",
      technicalSentence: "I build projects by writing detailed specifications, directing AI to write the code, and testing every feature myself.",
      qualities: "Personal qualities",
      levelOf: "Level {n} of 6"
    },
    awards: {
      obtained: "Obtained",
      upcoming: "Upcoming",
      upcomingLabel: "Upcoming",
      viewCertificate: "View certificate"
    },
    cv: {
      soon: "My CV will be available here soon.",
      available: "My CV is available to download (PDF).",
      download: "Download my CV (PDF)"
    },
    contact: {
      soon: "Contact details coming soon.",
      email: "Email",
      github: "GitHub"
    },
    footer: {
      text: "© 2026 Maia Drebet – Last updated: {date}",
      top: "Back to top"
    }
  }
};


/* ==========================================================================
   LISTS: education, projects, activities, skills, awards
   Each list is an array of objects. Text fields are { fr: "...", en: "..." }.
   Order on the page = order in the array (awards are sorted by date).
   ========================================================================== */

const lists = {

  /* ---- EDUCATION (most recent first) ----------------------------------
     To add a year: copy one object below and edit it.
       years       "2026–2027", or { fr: "...", en: "..." } if it needs translating
       level       { fr, en }
       school      optional, text
       highlights  list of { fr, en } lines
       upcoming    true = faded, with an "Upcoming" label                   */
  education: [
    {
      years: "2028–2029",
      level: { fr: "Terminale", en: "Terminale (Year 13 / Grade 12)" },
      upcoming: true,
      highlights: [
        { fr: "Spécialités : Mathématiques, SES (Sciences économiques et sociales)", en: "Spécialités (specialisation subjects): Mathematics, SES (Economics and Social Sciences)" },
        { fr: "Option envisagée : Maths expertes", en: "Option being considered: Maths expertes (advanced mathematics)" },
        { fr: "Section européenne Histoire-Géographie", en: "European Section (bilingual Hist-Geo, taught partly in English)" },
        { fr: "Baccalauréat", en: "Baccalauréat (French national high-school diploma)" }
      ]
    },
    {
      years: "2027–2028",
      level: { fr: "Première", en: "Première (Year 12 / Grade 11)" },
      upcoming: true,
      highlights: [
        { fr: "Épreuve anticipée de français (partie française du baccalauréat)", en: "Épreuve anticipée de français (French part of the baccalauréat)" },
        { fr: "Spécialités : Mathématiques, SES, et une troisième spécialité (à définir)", en: "Spécialités (specialisation subjects): Mathematics, SES, and a third one (to be decided)" },
        { fr: "Section européenne Histoire-Géographie", en: "European Section (bilingual Hist-Geo, taught partly in English)" }
      ]
    },
    {
      years: "2026–2027",
      level: { fr: "Seconde", en: "Seconde (Year 11 / Grade 10)" },
      school: "Lycée Français International de Singapour",
      highlights: [
        { fr: "Section européenne Histoire-Géographie (histoire-géographie en partie enseignée en anglais)", en: "European Section (bilingual Hist-Geo, taught partly in English)" },
        { fr: "Voyage scolaire au Vietnam : 5 jours, octobre 2026", en: "School trip to Vietnam: 5 days, October 2026" }
      ]
    },
    {
      years: "2022–2026",
      level: { fr: "Collège", en: "Collège (middle school)" },
      school: "Lycée Français International de Singapour",
      highlights: [
        { fr: "Diplôme national du brevet, mention Très Bien (2026)", en: "Diplôme national du brevet (national exam at the end of middle school), with highest honours (2026)" },
        { fr: "MCC – Mandarin Culture et Civilisation : cours de langue mandarine et de culture et civilisation chinoises", en: "MCC – Mandarin Culture & Civilisation (Mandarin language and Chinese culture course)" },
        { fr: "MATh.en.JEANS (3ème) : atelier de recherche sur l'infini et ce que l'on peut faire avec des nombres infinis", en: "MATh.en.JEANS (3ème): research workshop on infinity and what you can do with infinite numbers" },
        { fr: "Gagnante d'un concours de programmation de robot avec Scratch (4ème)", en: "Winner of a Scratch robot coding competition (4ème)" }
      ]
    },
    {
      years: { fr: "Avant 2022", en: "Before 2022" },
      level: { fr: "Maternelle & primaire", en: "Maternelle & primaire (nursery & primary school)" },
      school: "Lycée Français International de Singapour",
      highlights: [
        { fr: "Au Lycée Français International de Singapour depuis la Grande Section. J'ai toujours vécu à Singapour.", en: "At the Lycée Français International de Singapour since Grande Section (kindergarten). I've lived in Singapore my whole life." }
      ]
    }
  ],

  /* ---- PROJECTS -------------------------------------------------------
     To add a project, add one object:
       image        e.g. "assets/projects/robot.jpg" (empty "" = coloured placeholder)
       category     "code" or "math"
       type         "personal" or "school"
       date         "2026-10" (shown as "Oct 2026" / "oct. 2026"), or free text like "2025–2026"
       link         optional URL (empty "" = no "See more" link)
       title        { fr, en }
       description  { fr, en }                                                */
  projects: [
    {
      image: "",
      category: "code",
      type: "personal",
      date: "",
      link: "",
      title: { fr: "Jeu de pâtisserie", en: "Bakery game" },
      description: {
        fr: "Dans ce jeu, on incarne un pâtissier qui prépare gâteaux et pâtisseries pour des clients. J'ai rédigé les spécifications, testé le jeu et dirigé le développement ; l'IA a écrit le code.",
        en: "In this game you play a baker making cakes and pastries for customers. I wrote the specification, tested the game and directed the development; AI wrote the code."
      }
    },
    {
      image: "",
      category: "code",
      type: "personal",
      date: "2026",
      link: "",
      title: { fr: "Ce portfolio", en: "This portfolio" },
      description: {
        fr: "Un site bilingue créé en HTML, CSS et JavaScript, hébergé sur GitHub Pages. Même méthode : j'ai rédigé les spécifications, fait les choix de design et tout testé, pendant que l'IA écrivait le code.",
        en: "A bilingual website built with HTML, CSS and JavaScript and hosted on GitHub Pages. Same method: I wrote the specifications, made the design choices and tested everything, while AI wrote the code."
      }
    },
    {
      image: "",
      category: "math",
      type: "school",
      date: "2025–2026",
      link: "",
      title: { fr: "MATh.en.JEANS", en: "MATh.en.JEANS" },
      description: {
        fr: "Un atelier de recherche en maths sur toute l'année (3ème). Notre groupe a exploré l'infini : ce que sont les nombres infinis et ce que l'on peut faire avec.",
        en: "A year-long maths research workshop (3ème). Our group explored infinity: what infinite numbers are and what you can do with them."
      }
    },
    {
      image: "",
      category: "code",
      type: "school",
      date: "2024–2025",
      link: "",
      title: { fr: "Concours de robotique Scratch", en: "Scratch robot competition" },
      description: {
        fr: "Un concours de programmation où nous avons programmé un robot avec Scratch pour relever des défis (4ème). J'ai gagné.",
        en: "A coding competition where we programmed a robot with Scratch to complete challenges (4ème). I won."
      }
    }
  ],

  /* ---- ACTIVITIES -----------------------------------------------------
     To add an activity, add one object:
       group        "sports", "school" or "volunteering"
       name, role, period, description   all { fr, en }
     To add a new group (e.g. Arts & Music): add a title for it in
     content.fr.activities.groups and content.en.activities.groups,
     add its key to activityGroups below, then use it as `group`.
     A group with no items is hidden.                                       */
  activities: [
    {
      group: "sports",
      name: { fr: "Roller", en: "Roller skating" },
      role: { fr: "Pratique de loisir", en: "Recreational skater" },
      period: { fr: "Depuis la 4ème (2024 – aujourd'hui)", en: "Since 4ème (2024 – present)" },
      description: {
        fr: "Une année en activité périscolaire à l'école, puis je continue dans un club en dehors de l'école. Sans compétition.",
        en: "One year as a school extracurricular activity, then I continued in a club outside school. No competitions."
      }
    },
    {
      group: "school",
      name: { fr: "Collectif Égalité", en: "Collectif Égalité (Equality collective)" },
      role: { fr: "Membre", en: "Member" },
      period: { fr: "2026 – aujourd'hui", en: "2026 – present" },
      description: {
        fr: "Un groupe d'élèves qui travaille sur l'égalité au sein de l'école.",
        en: "A student group working on equality at school."
      }
    },
    {
      group: "volunteering",
      name: { fr: "Bénévole aux événements de l'école", en: "School events volunteer" },
      role: { fr: "Bénévole", en: "Volunteer" },
      period: { fr: "Depuis : à préciser", en: "Since: to be confirmed" },
      description: {
        fr: "J'aide à organiser et à faire vivre les événements de l'école.",
        en: "I help organise and run school events."
      }
    }
  ],

  /* ---- SKILLS ---------------------------------------------------------
     languages   name, level { fr, en }, bar (0 to 6; 0 hides the bar),
                 note (optional { fr, en })
     technical, qualities   lists of { fr, en } chips                       */
  languages: [
    {
      name: { fr: "Français", en: "French" },
      level: { fr: "Langue maternelle", en: "Native" },
      bar: 6
    },
    {
      name: { fr: "Anglais", en: "English" },
      level: { fr: "Langue maternelle", en: "Native" },
      bar: 6,
      note: { fr: "IELTS prévu en juin 2027", en: "IELTS planned for June 2027" }
    },
    {
      name: { fr: "Chinois (mandarin)", en: "Mandarin" },
      level: { fr: "Niveau à préciser", en: "Level to be confirmed" },
      bar: 0,
      note: {
        fr: "Étudié via le cours MCC (Mandarin Culture et Civilisation) au collège. HSK prévu en juin 2027 (niveau à préciser).",
        en: "Studied through the MCC course (Mandarin Culture & Civilisation) at collège. HSK planned for June 2027 (level to be confirmed)."
      }
    }
  ],

  technical: [
    { fr: "Développement assisté par IA", en: "AI-assisted development" },
    { fr: "Rédaction de spécifications", en: "Writing specifications" },
    { fr: "Tests et débogage", en: "Testing & debugging" },
    { fr: "Scratch", en: "Scratch" },
    { fr: "GitHub & GitHub Pages", en: "GitHub & GitHub Pages" }
  ],

  qualities: [
    { fr: "Travail en équipe", en: "Teamwork" },
    { fr: "Capacité d'adaptation", en: "Adaptability" },
    { fr: "Sens des responsabilités", en: "Accountability" },
    { fr: "Curiosité", en: "Curiosity" }
  ],

  /* ---- AWARDS ---------------------------------------------------------
     To add an award or certificate, add one object:
       date     "2026-06" (month) or "2025" (year)
       title    { fr, en }
       issuer   { fr, en } (optional, "" to hide)
       status   "obtained" or "upcoming"
       link     optional URL to a certificate or scan ("" = none)
     When a result comes in, change status to "obtained" and add the score
     or mention to the title.                                               */
  awards: [
    {
      date: "2026-06",
      title: { fr: "Diplôme national du brevet, mention Très Bien", en: "Diplôme national du brevet (national middle-school diploma), with highest honours" },
      issuer: { fr: "Ministère de l'Éducation nationale", en: "French Ministry of National Education" },
      status: "obtained",
      link: ""
    },
    {
      date: "2025",
      title: { fr: "1re place, concours de robotique Scratch", en: "1st place, Scratch robot coding competition" },
      issuer: { fr: "Organisateur : à préciser", en: "Organiser: to be confirmed" },
      status: "obtained",
      link: ""
    },
    {
      date: "2027-06",
      title: { fr: "IELTS (anglais)", en: "IELTS (English)" },
      issuer: "",
      status: "upcoming",
      link: ""
    },
    {
      date: "2027-06",
      title: { fr: "HSK (chinois mandarin)", en: "HSK (Mandarin)" },
      issuer: { fr: "Niveau à préciser", en: "Level to be confirmed" },
      status: "upcoming",
      link: ""
    },
    {
      date: "2028-06",
      title: { fr: "Baccalauréat : épreuve anticipée de français (épreuves écrite et orale de français passées en première)", en: "Baccalauréat – early French exams (taken one year before the rest of the bac)" },
      issuer: "",
      status: "upcoming",
      link: ""
    },
    {
      date: "2029-06",
      title: { fr: "Baccalauréat général", en: "Baccalauréat général" },
      issuer: "",
      status: "upcoming",
      link: ""
    }
  ]
};

// Order of the activity groups on the page (see the note in the activities list).
const activityGroups = ["sports", "school", "volunteering"];


/* ==========================================================================
   2. LOGIC  (no need to edit below this line to update content)
   ========================================================================== */

const LANG_KEY = "portfolio-lang";
const THEME_KEY = "portfolio-theme";

let lang = "fr";
let projectFilter = "all";

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

/* ---- Helpers ---------------------------------------------------------- */

function readStorage(key) {
  try { return localStorage.getItem(key); } catch (error) { return null; }
}

function writeStorage(key, value) {
  try { localStorage.setItem(key, value); } catch (error) { /* storage blocked: ignore */ }
}

function lookup(object, path) {
  return path.split(".").reduce((node, key) => (node == null ? undefined : node[key]), object);
}

// Static text for the current language; falls back to French.
function t(key) {
  const value = lookup(content[lang], key);
  if (value !== undefined) return value;
  const fallback = lookup(content.fr, key);
  return fallback !== undefined ? fallback : "";
}

// A field that is either a plain string or { fr, en }.
function loc(value) {
  if (value == null) return "";
  if (typeof value === "string") return value;
  return value[lang] || value.fr || "";
}

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

function locale() {
  return lang === "fr" ? "fr-FR" : "en-US";
}

// "2026-10" -> "Oct 2026" / "oct. 2026"; anything else is shown as written.
function formatDate(value) {
  const match = /^(\d{4})-(\d{2})$/.exec(value || "");
  if (!match) return value || "";
  const date = new Date(Number(match[1]), Number(match[2]) - 1, 1);
  return new Intl.DateTimeFormat(locale(), { month: "short", year: "numeric" }).format(date);
}

function formatLongDate(isoDate) {
  const date = new Date(isoDate + "T00:00:00");
  if (Number.isNaN(date.getTime())) return isoDate;
  const tag = lang === "fr" ? "fr-FR" : "en-GB";
  return new Intl.DateTimeFormat(tag, { day: "numeric", month: "long", year: "numeric" }).format(date);
}

function cvHref() {
  return "assets/cv-" + lang + ".pdf";
}

/* ---- Static text (data-i18n attributes) ------------------------------- */

function applyStaticText() {
  document.documentElement.lang = lang;
  document.title = t("meta.title");

  $$("[data-i18n]").forEach((node) => { node.textContent = t(node.dataset.i18n); });
  $$("[data-i18n-aria]").forEach((node) => { node.setAttribute("aria-label", t(node.dataset.i18nAria)); });
  $$("[data-i18n-alt]").forEach((node) => { node.alt = t(node.dataset.i18nAlt); });

  $$(".lang-switch button").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.lang === lang));
  });
}

/* ---- Section rendering ------------------------------------------------ */

function renderAbout() {
  const avatar = $("#avatar");
  avatar.replaceChildren();
  if (settings.photoAvailable) {
    const img = el("img");
    img.src = "assets/photo.jpg";
    img.alt = t("about.photoAlt");
    avatar.append(img);
  } else {
    avatar.append(el("span", "avatar-initials", "MD"));
  }

  const cvButton = $("#about-cv-button");
  cvButton.hidden = !settings.cvAvailable;
  cvButton.href = cvHref();
}

function renderEducation() {
  const list = $("#education-list");
  list.replaceChildren();

  lists.education.forEach((entry) => {
    const item = el("li", "timeline-item card" + (entry.upcoming ? " is-upcoming" : ""));

    const head = el("div", "timeline-head");
    head.append(el("span", "timeline-years", loc(entry.years)));
    if (entry.upcoming) head.append(el("span", "badge badge-upcoming", t("education.upcoming")));
    item.append(head, el("h3", "timeline-level", loc(entry.level)));

    if (entry.school) item.append(el("p", "timeline-school", loc(entry.school)));

    if (entry.highlights && entry.highlights.length) {
      const highlights = el("ul", "highlights");
      entry.highlights.forEach((line) => highlights.append(el("li", "", loc(line))));
      item.append(highlights);
    }
    list.append(item);
  });
}

function renderProjects() {
  const grid = $("#projects-grid");
  grid.replaceChildren();

  $$(".filter-button").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.filter === projectFilter));
  });

  lists.projects
    .filter((project) => projectFilter === "all" || project.category === projectFilter)
    .forEach((project) => {
      const card = el("article", "card project-card");

      const media = el("div", "project-media project-media-" + project.category);
      if (project.image) {
        const img = el("img");
        img.src = project.image;
        img.alt = loc(project.title);
        img.loading = "lazy";
        media.append(img);
      } else {
        media.setAttribute("aria-hidden", "true");
        media.append(el("span", "project-icon", project.category === "math" ? "∑" : "</>"));
      }

      const body = el("div", "project-body");
      const meta = el("div", "project-meta");
      meta.append(el("span", "tag tag-" + project.category, t("projects." + project.category)));
      meta.append(el("span", "label", t("projects." + project.type)));
      const date = formatDate(project.date);
      if (date) meta.append(el("span", "project-date", date));

      body.append(meta, el("h3", "project-title", loc(project.title)), el("p", "", loc(project.description)));

      if (project.link) {
        const link = el("a", "text-link", t("projects.seeMore"));
        link.href = project.link;
        link.target = "_blank";
        link.rel = "noopener";
        body.append(link);
      }

      card.append(media, body);
      grid.append(card);
    });
}

function renderActivities() {
  const container = $("#activities-groups");
  container.replaceChildren();

  activityGroups.forEach((group) => {
    const items = lists.activities.filter((activity) => activity.group === group);
    if (!items.length) return;

    const block = el("div", "activity-group");
    block.append(el("h3", "subheading", t("activities.groups." + group)));

    const grid = el("div", "card-grid");
    items.forEach((activity) => {
      const card = el("article", "card activity-card");
      card.append(el("h4", "activity-name", loc(activity.name)));
      card.append(el("p", "activity-role", loc(activity.role)));
      card.append(el("p", "activity-period", loc(activity.period)));
      card.append(el("p", "", loc(activity.description)));
      grid.append(card);
    });

    block.append(grid);
    container.append(block);
  });
}

function renderSkills() {
  const languages = $("#languages-list");
  languages.replaceChildren();
  lists.languages.forEach((language) => {
    const item = el("li", "language-item");
    const top = el("div", "language-top");
    top.append(el("span", "language-name", loc(language.name)), el("span", "language-level", loc(language.level)));
    item.append(top);

    if (language.bar > 0) {
      const bar = el("div", "level-bar");
      bar.setAttribute("role", "img");
      bar.setAttribute("aria-label", t("skills.levelOf").replace("{n}", language.bar));
      for (let i = 1; i <= 6; i++) bar.append(el("span", i <= language.bar ? "filled" : ""));
      item.append(bar);
    }
    if (language.note) item.append(el("p", "language-note", loc(language.note)));
    languages.append(item);
  });

  const fillChips = (selector, items) => {
    const list = $(selector);
    list.replaceChildren();
    items.forEach((chip) => list.append(el("li", "chip", loc(chip))));
  };
  fillChips("#technical-list", lists.technical);
  fillChips("#qualities-list", lists.qualities);
}

function renderAwards() {
  const sortKey = (award) => award.date || "";
  const groups = [
    { status: "obtained", container: "#awards-obtained", wrapper: "#awards-obtained-block", order: -1 },
    { status: "upcoming", container: "#awards-upcoming", wrapper: "#awards-upcoming-block", order: 1 }
  ];

  groups.forEach(({ status, container, wrapper, order }) => {
    const list = $(container);
    list.replaceChildren();

    // Obtained: most recent first. Upcoming: soonest first.
    const awards = lists.awards
      .filter((award) => award.status === status)
      .sort((a, b) => order * sortKey(a).localeCompare(sortKey(b)));

    $(wrapper).hidden = awards.length === 0;

    awards.forEach((award) => {
      const item = el("li", "card award-item" + (status === "upcoming" ? " is-upcoming" : ""));
      const head = el("div", "award-head");
      head.append(el("span", "award-date", formatDate(award.date)));
      if (status === "upcoming") head.append(el("span", "badge badge-upcoming", t("awards.upcomingLabel")));
      item.append(head, el("h4", "award-title", loc(award.title)));
      if (loc(award.issuer)) item.append(el("p", "award-issuer", loc(award.issuer)));

      if (award.link) {
        const link = el("a", "text-link", t("awards.viewCertificate"));
        link.href = award.link;
        link.target = "_blank";
        link.rel = "noopener";
        item.append(link);
      }
      list.append(item);
    });
  });
}

function renderCv() {
  const container = $("#cv-content");
  container.replaceChildren();

  if (!settings.cvAvailable) {
    container.append(el("p", "notice", t("cv.soon")));
    return;
  }

  container.append(el("p", "", t("cv.available")));
  const button = el("a", "button button-primary", t("cv.download"));
  button.href = cvHref();
  button.target = "_blank";
  button.rel = "noopener";
  container.append(button);
}

function renderContact() {
  const container = $("#contact-content");
  container.replaceChildren();

  const list = el("ul", "contact-list");
  const addLink = (label, text, href, external) => {
    const item = el("li", "contact-item");
    item.append(el("span", "contact-label", label));
    const link = el("a", "text-link", text);
    link.href = href;
    if (external) { link.target = "_blank"; link.rel = "noopener"; }
    item.append(link);
    list.append(item);
  };

  if (settings.email) addLink(t("contact.email"), settings.email, "mailto:" + settings.email, false);
  if (settings.githubUrl) addLink(t("contact.github"), settings.githubUrl.replace(/^https?:\/\//, ""), settings.githubUrl, true);

  if (list.children.length) container.append(list);
  else container.append(el("p", "notice", t("contact.soon")));
}

function renderFooter() {
  $("#footer-text").textContent = t("footer.text").replace("{date}", formatLongDate(settings.lastUpdated));
}

function renderAll() {
  renderAbout();
  renderEducation();
  renderProjects();
  renderActivities();
  renderSkills();
  renderAwards();
  renderCv();
  renderContact();
  renderFooter();
}

/* ---- Language --------------------------------------------------------- */

function initialLanguage() {
  const saved = readStorage(LANG_KEY);
  if (saved === "fr" || saved === "en") return saved;
  const browser = (navigator.language || "en").toLowerCase();
  return browser.startsWith("fr") ? "fr" : "en";
}

function setLanguage(next, save) {
  lang = next;
  if (save) writeStorage(LANG_KEY, next);
  applyStaticText();
  renderAll();
  updateThemeButton();
  updateLayout();
}

/* ---- Theme ------------------------------------------------------------ */

function currentTheme() {
  return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
}

function updateThemeButton() {
  const button = $("#theme-toggle");
  const dark = currentTheme() === "dark";
  button.textContent = dark ? "☀" : "☾";
  button.setAttribute("aria-label", t(dark ? "theme.toLight" : "theme.toDark"));
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  updateThemeButton();
}

function initTheme() {
  const saved = readStorage(THEME_KEY);
  const hasChoice = saved === "light" || saved === "dark";
  applyTheme(hasChoice ? saved : (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));

  // Follow the device setting while the visitor hasn't chosen.
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
    if (!readStorage(THEME_KEY)) applyTheme(event.matches ? "dark" : "light");
  });

  $("#theme-toggle").addEventListener("click", () => {
    const next = currentTheme() === "dark" ? "light" : "dark";
    const root = document.documentElement;
    root.classList.add("theme-transition");
    applyTheme(next);
    writeStorage(THEME_KEY, next);
    window.setTimeout(() => root.classList.remove("theme-transition"), 400);
  });
}

/* ---- Navigation: mobile menu, scroll spy, header height --------------- */

const navLinks = () => $$("#nav-links a");

function setMenu(open) {
  $("#nav-links").classList.toggle("open", open);
  $("#menu-toggle").setAttribute("aria-expanded", String(open));
}

function updateLayout() {
  const header = $(".site-header");
  document.documentElement.style.setProperty("--header-h", header.offsetHeight + "px");
  updateScrollSpy();
}

function updateScrollSpy() {
  const sections = $$("main > section[id]");
  if (!sections.length) return;

  const offset = $(".site-header").offsetHeight + 40;
  let current = sections[0].id;
  sections.forEach((section) => {
    if (section.getBoundingClientRect().top <= offset) current = section.id;
  });
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
    current = sections[sections.length - 1].id;
  }

  navLinks().forEach((link) => {
    const active = link.getAttribute("href") === "#" + current;
    link.classList.toggle("active", active);
    if (active) link.setAttribute("aria-current", "true");
    else link.removeAttribute("aria-current");
  });
}

function initNavigation() {
  const toggle = $("#menu-toggle");
  toggle.addEventListener("click", () => setMenu(toggle.getAttribute("aria-expanded") !== "true"));

  navLinks().forEach((link) => link.addEventListener("click", () => setMenu(false)));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      setMenu(false);
      toggle.focus();
    }
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".site-header")) setMenu(false);
  });

  let ticking = false;
  window.addEventListener("scroll", () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(() => { updateScrollSpy(); ticking = false; });
  }, { passive: true });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) setMenu(false);
    updateLayout();
  });
}

/* ---- Fade-in on scroll ------------------------------------------------ */

function initReveal() {
  const items = $$(".reveal");
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced || !("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("visible"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  items.forEach((item) => observer.observe(item));
}

/* ---- Start ------------------------------------------------------------ */

function init() {
  initTheme();

  $$(".lang-switch button").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.lang, true));
  });

  $$(".filter-button").forEach((button) => {
    button.addEventListener("click", () => {
      projectFilter = button.dataset.filter;
      renderProjects();
    });
  });

  initNavigation();
  setLanguage(initialLanguage(), false);
  initReveal();

  // Content is built by JavaScript, so a link like index.html#awards must scroll once it exists.
  if (location.hash.length > 1) {
    const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (target) target.scrollIntoView({ behavior: "instant" });
  }
  updateScrollSpy();
}

document.addEventListener("DOMContentLoaded", init);
