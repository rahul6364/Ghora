# GHORA Fraud Operations Center (Frontend)

## Dashboard Preview

![Dashboard Preview](./public/screenshots/dashboard.png)

A React + Vite + Tailwind CSS single-page application that simulates a fraud operations center dashboard. It uses mocked data and APIs, so you can run it locally with no backend required.

## Prerequisites
- Node.js 18 or newer (LTS recommended)
- npm (bundled with Node.js)

## Getting Started
1. Navigate to the project directory:
   - Datavex-/
2. Install dependencies:
   - npm install
3. Start the development server:
   - npm run dev
4. Open the app in your browser:
   - Vite will print a local URL in the terminal (commonly http://localhost:5173/).

## Available Scripts
- Development: `npm run dev`
- Lint: `npm run lint`
- Build for production: `npm run build` (outputs to `dist/`)
- Preview production build locally: `npm run preview`

## Tech Stack
- React 19 + React DOM
- Vite 5 (build & dev server)
- Tailwind CSS 3
- React Router DOM 7
- Chart.js 4 + react-chartjs-2 (where charts are used)

## Project Structure (high level)
- index.html — Vite entry file
- src/
  - main.jsx — App entry
  - App.jsx — Router + app layout
  - pages/ — Route pages (Dashboard, Analytics, Cases, Orchestration, etc.)
  - components/ — Reusable UI and layout components
  - data/ — Mocked data used by the app
  - services/api.js — Simulated API calls (no real backend calls)
  - styles/ — Global styles (Tailwind is configured)

## Tailwind CSS
Tailwind is already configured via `tailwind.config.js` and `postcss.config.js`. Styles are imported in `src/index.css` and used throughout the components.

## Environment / API
- No API keys or environment variables are required. The app uses local mocked data and simulated delays in `src/services/api.js`.

## Troubleshooting
- If the default dev port is busy, you can run the dev server on another port, e.g.: `npm run dev -- --port 3000`.
- Ensure you run commands from the Datavex- directory (where `package.json` lives).
- If you encounter dependency issues, verify your Node version is 18+ and reinstall (`rm -rf node_modules && npm install`).

## Production Build
To create an optimized production build: `npm run build`. Serve the `dist/` folder with any static file server or use `npm run preview` to test locally.
