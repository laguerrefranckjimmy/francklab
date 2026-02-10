# FranckLab Portfolio (React + Vite)

This project is a personal portfolio web app built with **React** and **Vite**.  
It combines a classic portfolio experience (hero, projects, skills, contact) with interactive mini-tools (currency conversion and breaking news) accessible from the sidebar.

---

## Tech stack

- **React 19** for component-based UI
- **Vite** for fast local development and optimized builds
- **Vanilla CSS** (component-scoped stylesheets)
- **ESLint** for linting and code quality checks

---

## Getting started

### Prerequisites

- Node.js 18+ (or current LTS)
- npm

### Install and run

```bash
npm install
npm run dev
```

Then open the local URL shown by Vite (usually `http://localhost:5173`).

### Build for production

```bash
npm run build
npm run preview
```

---

## Codebase structure

```text
.
├── public/
│   ├── logo.png
│   ├── Franck_Laguerre_Resume.pdf
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── logo.png
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Navbar.jsx
│   │   ├── Sidebar.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Contact.jsx
│   │   ├── CurrencyConverter.jsx
│   │   ├── BreakingNews.jsx
│   │   └── css/
│   │       ├── Navbar.css
│   │       ├── Sidebar.css
│   │       ├── Hero.css
│   │       ├── Projects.css
│   │       ├── Skills.css
│   │       ├── Contact.css
│   │       ├── CurrencyConverter.css
│   │       └── BreakingNews.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── eslint.config.js
```

### What each top-level area does

- `src/main.jsx`: App bootstrap and React root mount.
- `src/App.jsx`: Main layout and high-level UI routing between portfolio sections and tools.
- `src/components/`: Reusable UI sections and tool pages.
- `src/components/css/`: Style files organized by component.
- `src/index.css`: Global styles and shared layout defaults.
- `public/`: Static assets served as-is at runtime.

---

## Core concepts and architecture

### 1) Layout + state-driven view switching

`App.jsx` holds a single piece of UI state (`activeTool`) that determines what appears in the main content area:

- `null` → show portfolio sections (`Hero`, `Projects`, `Skills`, `Contact`)
- `"currency"` → show the currency converter tool
- `"news"` → show the breaking news tool

This keeps navigation lightweight without bringing in a full routing library.

### 2) Sidebar as the tool launcher

`Sidebar.jsx` is intentionally simple and stateless. It receives `setActiveTool` from `App.jsx` and triggers tool changes when buttons are clicked. This creates a clean parent-child data flow:

- parent owns state
- child emits UI intent

### 3) Feature components own feature behavior

Each interactive feature component manages its own local state and API interaction:

- `CurrencyConverter.jsx`:
  - Maintains selected currencies, input amount, loading/error/result state
  - Calls an API endpoint to fetch conversion rate + converted amount
- `BreakingNews.jsx`:
  - Maintains selected country/category filters, loading state, expanded article state
  - Calls a news API endpoint and renders expandable article cards

This keeps feature logic encapsulated and avoids global complexity.

### 4) Styling strategy

Styles are split by component (`components/css/*.css`) and imported directly into each component. The pattern is:

- global foundations in `index.css`
- component-specific styles close to component logic

This makes styles easy to find and maintain.

---

## Extending the app

### Add a new tool to the sidebar

1. Create `src/components/NewTool.jsx`
2. Add its stylesheet under `src/components/css/NewTool.css`
3. Import it in `src/App.jsx`
4. Add a new `case` in the `renderContent()` switch
5. Add a button in `src/components/Sidebar.jsx` that sets the matching `activeTool` key

### Add a new portfolio section

1. Create the section component in `src/components/`
2. Import it in `src/App.jsx`
3. Render it in the default (`portfolio`) branch of `renderContent()`
4. Add/update styles in `src/components/css/`

---

## Available scripts

From `package.json`:

- `npm run dev` — Start the Vite dev server
- `npm run build` — Build production assets
- `npm run preview` — Preview production build locally
- `npm run lint` — Run ESLint checks

---

## Notes

- API-backed features (currency and news) rely on external endpoints; behavior depends on endpoint availability and returned payload shape.
- The current app uses local component state for simplicity; if the app grows significantly, consider introducing React Router and shared state patterns where needed.
