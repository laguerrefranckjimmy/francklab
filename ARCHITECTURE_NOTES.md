General structure

1) App entry & composition

src/main.jsx mounts <App /> inside React Strict Mode.

src/App.jsx is the orchestrator:

keeps activeTool state,

switches between portfolio sections and tool pages,

always renders Navbar + Sidebar.

2) UI components

Portfolio sections are straightforward presentational components:

Hero, Projects, Skills, Contact.

Navbar provides in-page anchor links (#projects, #skills, #contact).

Sidebar switches activeTool to show either converter/news pages.

3) “Tool” pages (API-backed)

CurrencyConverter:

form-based POST to https://api.francklab.fyi/currency-converter/convert,

handles loading/error/rate/result state,

includes a large static currency list in component file.

BreakingNews:

fetches news from an AWS API Gateway endpoint,

supports country/category selectors,

expands individual article cards on click.

4) Styling

Component-level CSS files exist under src/components/css/* and are imported by components.

But src/index.css also contains a very large set of duplicated component styles (Navbar, Sidebar, Hero, etc.), not just global styles.

There are broad selectors like button { ... } in styles that can affect all buttons globally.

5) Tooling + deployment

Scripts:

local dev/build/lint/preview,

deploy to S3 + CloudFront invalidation via AWS CLI scripts in package.json.

Lint config is modern ESLint flat config with React hooks + react-refresh rules.

Vite config is minimal (React plugin only).

Important things to know (before changing code)

View switching is state-driven, not route-driven.
If you add a new page/tool, you currently extend activeTool and the switch in App.jsx. There’s no react-router yet.

External API contracts are hardcoded in frontend.
Converter/news endpoints are directly in component code. Good for quick iteration, but brittle for environments (dev/stage/prod).

BreakingNews has no try/catch around fetch.
Failed network/JSON parse would currently throw and potentially break UX. Currency converter does error handling more defensively.

Styling has duplication and possible conflicts.
Since component CSS and index.css both define many of the same class blocks, future changes can seem “ignored” or inconsistent depending on import order/specificity.

Some code appears unused.
About.jsx exists but isn’t wired into App.jsx. Could be dead code or planned feature.

README is still template-level.
It currently explains generic Vite+React rather than this app’s architecture, APIs, and deploy workflow.

What to learn next (high-value path)

State & rendering flow in App.jsx first
Understand this before anything else—it controls which page users see.

API integration patterns
Compare CurrencyConverter and BreakingNews patterns; then standardize:

shared API client module,

robust error/loading handling,

environment-based API URLs.

CSS architecture cleanup
Pick one strategy:

keep per-component CSS only, or

keep centralized stylesheet only, or

move to CSS Modules/Tailwind.
Right now it’s mixed/duplicated.

Introduce routing
If this grows, switch from activeTool conditionals to route-based navigation (react-router).

Documentation upgrade
Add a real README section for:

app structure,

tool endpoints,

local run instructions,

deploy prerequisites (AWS CLI/auth/profile).

Reliability/security improvements

move endpoints to environment variables,

add request timeouts/retries and user-facing error states,

validate numeric input and edge cases in converter.

Commands I used to inspect the repo

pwd && find .. -name AGENTS.md -print

rg --files

sed -n '1,220p' README.md

sed -n '1,220p' package.json

sed -n '1,220p' src/main.jsx && sed -n '1,260p' src/App.jsx

sed -n '1,220p' src/components/*.jsx (targeted files)

sed -n '1,260p' src/index.css

rg -n "layout|main-content|About|activeTool" src

nl -ba ... | sed -n ... for cited line references
