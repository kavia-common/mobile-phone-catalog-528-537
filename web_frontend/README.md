# Mobile Phone Catalogue – Static React App

A modern, fully static React web application cataloguing mobile phones. This app delivers a responsive, accessible, user-friendly experience with features like search, sorting, pagination, favorites, theme toggle, and optimized performance — all without any backend or API dependencies.

---

## Overview

This project presents a visually appealing catalogue of mobile phones, each displayed with a name, image, and short description. The app is designed for static hosting and requires no database or server. Users can interactively search phones, sort, paginate, mark favorites, and enjoy accessibility and performance optimizations out-of-the-box.

---

## Usage

This section provides practical, step-by-step instructions for using the Mobile Phone Catalogue app.

### Navigating the Catalogue

- The main screen displays a grid of phones, each in a card with an image, name, and brief description.
- The top navigation bar displays the app name and the theme toggle button (🌙/☀️).

### Searching

- Use the search bar at the top of the catalogue to filter phones by name.
- As you type, the grid updates instantly to show only matching phones.
- If no phones match your search, a “No phones found.” message will appear and is announced by screen readers.

### Sorting

- Use the “Sort” dropdown (A–Z or Z–A) above the grid to control the phone order alphabetically.
- Changing the sorting resets to the first page of results.

### Pagination Controls

- If there are more phones than fit a single page, numbered buttons and “<”, “>” (previous/next) arrows appear below the grid.
- Click a page number to jump directly, or use previous/next buttons to move between pages.
- Pagination respects any ongoing search or sort settings.

### Managing Favorites

- Each phone card has a star icon (☆/★). Click to mark a phone as a favorite (★). Click again to remove it (☆).
- Your favorite selections are stored using your browser’s `localStorage`—they persist even if you close and reopen the app or browser.
- All favorites are displayed in a separate section beneath the catalogue for easy reference.

**Note:** Clearing localStorage (in your browser settings) or switching browsers/devices will reset your favorite selections.

### Toggling Themes

- Click the theme toggle button (top right) to switch between light and dark mode. The button icon switches from sun (☀️) to moon (🌙).
- The app remembers your chosen theme via localStorage and browser preferences.

### Keyboard Accessibility Tips

- `Tab` to move focus between the navigation bar, theme toggle, search, sort, and into the grid.
- Within the grid, `Arrow` keys (←/→/↑/↓) move focus across cards. `Enter` or `Space` on a card’s star icon toggles its favorite status.
- Pagination buttons and the theme toggle are fully accessible by keyboard.

### Troubleshooting Common Issues

- **No Results:** If the search yields no matches, check your spelling or try a broader term. Clearing the search bar will restore the full phone list.
- **Missing Images:** If a card image appears broken or missing, ensure that the referenced file exists in `public/assets/` and matches the file name in `src/data/phones.json`.
- **Favorites Not Saved:** If your favorite selections disappear unexpectedly, confirm that your browser allows localStorage or hasn’t been cleared.
- **Display Issues:** Refresh the page to resolve most layout issues. For persistent problems, clear your browser cache.

---

## Features

- **Responsive UI:** Phone "cards" are shown in a grid layout, adapting fluidly to different screens, from smartphones to large desktops.
- **Navbar:** Top bar displays project/app name, anchoring navigation and theme toggle.
- **Live Search Filter:** Instantly filters the visible phones as you type.
- **Sorting:** Sort phones alphabetically (A–Z, Z–A) using the accessible dropdown menu.
- **Pagination:** Browse results in pages (default: 4 per page), with Next/Previous buttons and visible page numbers for easy navigation.
- **Favorites:** Star/unstar phones to save your favorites, which persist across sessions via `localStorage`. View your favorites in a separate section.
- **Theme Toggle:** Instantly switch between light and dark modes using the control at the top-right corner. Theme is saved for future visits.
- **Accessibility Enhancements:**
  - All interactive elements (buttons, cards, dropdowns) are keyboard navigable.
  - Correct ARIA roles, labels, and a live region announce search results and "no results" dynamically for screen readers.
  - Focus outlines and good color contrast are enforced for clarity.
  - Special handling for keyboard grid navigation and focus management.
- **Performance Optimizations:**
  - Images use `loading="lazy"` and explicit dimensions to prevent layout shift.
  - Rendering of lists/cards is memoized to avoid unnecessary React re-renders.
  - Minimal dependence on third-party libraries ensures fast load (only small React/CSS core).
- **Data:** All phone catalogue data is loaded from a static JSON file for zero backend setup.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14+, recommended)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) (either is supported; scripts use npm by default)

### Local Development

Clone/download the repository and navigate into the `web_frontend` directory. Then:

```bash
# Install dependencies
npm install

# Start the development server
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to view the app locally. Most platforms automatically manage the preview and rebuild.

### Running Tests

```bash
npm test
```
Launches the test runner (based on Jest/React Testing Library).

### Production Build

```bash
npm run build
```
Compiles an optimized static build in the `build/` folder, suitable for static hosting.

---

## Configuration

This app is intended to operate entirely with static content. Several `REACT_APP_*` environment variables are present (for alignment with typical React setups):

- `REACT_APP_API_BASE`
- `REACT_APP_BACKEND_URL`
- `REACT_APP_FRONTEND_URL`
- `REACT_APP_WS_URL`
- `REACT_APP_NODE_ENV`
- `REACT_APP_NEXT_TELEMETRY_DISABLED`
- `REACT_APP_ENABLE_SOURCE_MAPS`
- `REACT_APP_PORT`
- `REACT_APP_TRUST_PROXY`
- `REACT_APP_LOG_LEVEL`
- `REACT_APP_HEALTHCHECK_PATH`
- `REACT_APP_FEATURE_FLAGS`
- `REACT_APP_EXPERIMENTS_ENABLED`

> **Note**: For this project, you do **not** need to set any of these variables; they are unused since all functionality is local and static. You may leave values as-is in `.env` or ignore them.

---

## Usage Guide

### Navigation

- **Search:** Type part of a phone’s name into the search bar. Results update instantly. The result count is announced to screen readers via a live region.
- **Sorting:** Use the “Sort” dropdown to order phones A–Z or Z–A.
- **Pagination:** Use the Next/Previous buttons or click page numbers to navigate through results (4 per page default).
- **Marking Favorites:** Click the star (☆) on any card to favorite it, or the filled star (★) to unfavorite. Your selections are saved (and shown) in a dedicated “Favorites” section.
- **Theme Toggle:** Use the button (🌙/☀️) at the top-right to switch between light and dark mode. Choice is saved in your browser.

### Accessibility – Keyboard Tips

- **Tab**: Move focus between search, sort dropdown, theme toggle, and grid.
- **Arrow Keys**: With a card focused, use arrow keys (←, →, ↑, ↓) to move through the grid.
- **Enter/Space**: On a focused card, opens focus; on the star button, toggles favorite.
- **Screen Reader**: Search results (or “No phones found”) are announced dynamically; all controls are labeled.

---

## Directory Structure

```
web_frontend/
  ├── src/
  │    ├── components/
  │    │     ├── Navbar.js, Navbar.css       # Top navigation bar
  │    │     ├── PhoneCard.js, PhoneCard.css # Individual phone cards
  │    ├── data/
  │    │     └── phones.json                 # Static phone data list
  │    ├── App.js, App.css                   # Main app logic & global styles
  │    ├── index.js, index.css               # Entry point & defaults
  │    └── setupTests.js                     # React Testing Library setup
  ├── public/
  │    └── assets/                           # Images referenced by phone data (e.g. s21.jpg)
  ├── package.json, README.md, etc.
```

- **Add new phones** to `src/data/phones.json`. Each entry requires an `id`, `name`, `image` path (`/assets/`), and a `shortDescription`.
- **Images**: Image files referenced in data (e.g., `/assets/s21.jpg`) should be added under `public/assets/`.
- **Components**: Custom structure or new features belong under `src/components`.

---

## Accessibility Notes

- Every button/input has a logical ARIA label and role.
- The app uses an invisible “live region” to announce search results and no-results to assistive technology.
- Strong color contrast and visual focus outlines make navigation clear.
- Cards and controls are all reachable via Tab or Arrow keys; favorite actions are accessible without a mouse.
- The grid structure is presented clearly to both visual and screen reader users.

---

## Performance and Optimization

- **Image Loading:** All catalogue images use lazy loading (`loading="lazy"`) and explicit width/height to prevent jank.
- **Efficient Rendering:** Filtering, sorting, and favorites functionality are memoized (`useMemo`, React.memo) to minimize expensive renders.
- **Lightweight:** No extra UI library or dependency bloat ensures fast startup and smooth navigation.

**Tip:** When adding new images, use compressed, web-optimized photos (e.g. JPEG, WebP, ~50–100KB), sized to ~300x500px for consistent appearance and fast load.

---

## Known Limitations and Future Enhancements

- **Static Only:** No backend or real-time content changes; data and images are static.
- **Image Handling:** All images must be placed manually in `/public/assets/`.
- **Sorting:** Only name-based sorting; no filter by brand, price, specs, etc.
- **Pagination:** Static (no infinite scroll or dynamic page size).
- **Testing:** No thorough unit or integration tests yet (basic test scaffold in place). PRs to improve coverage are welcome.
- **Not PWA:** No offline support/service workers.
- **Accessibility:** Continues to evolve—edge cases (like tooltip or error announcements) may need further ARIA work.

---

## Contributing

To add new phones, contribute styles, or implement a feature:

- Use the structure in `src/data/phones.json` for data and `public/assets/` for images.
- Follow the style set in `App.css` and components for consistency.
- Submit changes as pull requests for review; include details on what’s added or improved.
- For accessibility, test via keyboard and screen reader, and note any ARIA or navigation improvements in your PR.

---

## Further Resources

- [React documentation](https://reactjs.org/)
- [MDN: ARIA and accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)
- [Static site deployment (Netlify/Vercel/GitHub Pages)](https://docs.netlify.com/site-deploys/overview/)

---

Task completed: web_frontend container README now gives a full, current, and practical overview for developers and users.
