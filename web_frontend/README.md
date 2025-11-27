# Lightweight Mobile Phone Catalogue – React, Modern UI

A static catalogue of mobile phones built with React, featuring a modern UI, accessibility, and user-friendly enhancements.

## Features

- **Responsive Catalogue UI**: Grid of phone cards (image, name, description).
- **Live Search**: Filter phones by name instantly.
- **Sorting**: Sort phones by name (A-Z/Z-A).
- **Simple Pagination**: Next/previous buttons, page numbers. Default: 4 per page for demo.
- **Favorites**: Mark/unmark phones as favorite ("★"), with persistent storage (localStorage). Dedicated favorites grid.
- **Theme Toggle**: Switch between light and dark modes (top right).
- **Accessibility**:
  - All controls and cards reachable by keyboard (Tab/arrow keys).
  - Proper ARIA roles, aria-labels, and aria-live regions for dynamic results.
  - Visible focus states/high contrast.
- **Optimized Images**: All photos use `loading="lazy"` and have explicit sizes set.
- **Performance**: List rendering is memoized and avoids unnecessary re-renders.
- **Mobile-First**: Fully responsive for phones/tablets.
- **Vanilla CSS**: No UI frameworks; all styles in `src/App.css`.
- **Minimal Dependencies**: Pure React and CSS for fast load times.

## Getting Started

In the project directory, you can run:

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It optimizes the build for performance.

## Customization

#### Colors & Theme

Theme CSS variables are defined in `src/App.css`. The default light palette adheres to the project style guide and can be adjusted easily.

- Change any color in `:root` or `[data-theme="dark"]` for your brand.

#### Components

Common custom classes:
- `.btn`, `.btn-active` – Buttons/paging
- `.phone-card`, `.fav-btn` – Card/favorite controls
- `.main-content`, `.navbar` – Layout/navigation

## Accessibility Notes

- Search box announces results live (screen readers).
- Use Tab/arrow keys to navigate cards; favorite/unfavorite with star buttons (Enter/Space).
- All pagination/controls have accessible labels.

## Known Limitations

- No backend/API: All data is static from `src/data/phones.json`.
- Images must be placed in `/public/assets/`.
- Not a PWA; no offline support.
- No advanced filters/sorting (only by name).
- Pagination is static (no infinite scroll).

## Learn More

Check the [React documentation](https://reactjs.org/) for further customization tips.

