# Mobile Phone Catalog – Developer Usage Guide

## Overview

Welcome to the Mobile Phone Catalog! This is a **static React application** designed to showcase a list of mobile phones—each with a name, image, and short description—using a modern, responsive interface. The app is fully client-side, requiring no backend, APIs, or database, making it ideal for static web hosting.

## Features

- **Grid/List Layout**: Phones are displayed as visually consistent cards in a responsive grid, adapting smoothly to any device.
- **Responsive UI**: Mobile-first styles and layout ensure accessibility on all screens.
- **Lightweight & Static**: All content is served statically; there are no backend dependencies.
- **Simple Theming**: Built-in light theme following the project style guide.
- **Quick Search & Sort**: Filter and sort features can be easily added (if included in your copy).

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended, v14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Quick Start

1. **Install dependencies**  
   Open a terminal in the `web_frontend` folder and run:
   ```bash
   npm install
   ```

2. **Start the development server**
   ```bash
   npm start
   ```
   This will launch the app in development mode and open [http://localhost:3000](http://localhost:3000) in your browser for preview.  
   - If port 3000 is occupied, you may be prompted to run on another port.
   - All code/text changes will trigger automatic page refresh.

## Production Build

To create an optimized production build (output to `build/`), run:
```bash
npm run build
```
The production bundle is minified and suitable for any static file server or platform (such as Netlify, Vercel, GitHub Pages, etc.).

## Project Structure

Below is a high-level view of the core directories and files:

```
web_frontend/
  ├── src/
  │    ├── components/        # React UI components (e.g., PhoneCard, Navbar)
  │    ├── data/              # Static content (e.g., phones.json)
  │    ├── App.js, App.css    # Main React app logic & global styles
  │    ├── index.js, index.css# React app entry point & global styles
  ├── public/
  │    └── assets/            # Static images for phone cards
  ├── package.json            # Project config and scripts
```

- **Add/Modify content:**  
  - Phone data is typically found in `src/data/phones.json`.
  - Images referenced in data go in `public/assets/`.
  - UI/layout logic resides in `src/components/` and `src/App.js`.
- **Note:** Paths are generic; adapt based on any custom setup.

## Styling & Theme (Style Guide)

The app uses a **light, modern theme**. Core palette values:
- **Primary:** `#3b82f6`
- **Secondary:** `#64748b`
- **Success (accent):** `#06b6d4`
- **Background:** `#f9fafb`
- **Surface (card/panel):** `#ffffff`
- **Text:** `#111827`

These colors are defined as CSS variables (see `App.css`).  
**Tip:** Use existing classes and variables for styling new components to keep the UI consistent.

## Environment Variables

A set of typical React `.env` variables may be present. For this static catalog, **these are optional and unused by default**:

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

You do **not** need to set or edit these unless extending the app to use APIs.

## Updating Content

- **Add or Edit Phones:**  
  Update the phone list (e.g., `src/data/phones.json`) with new objects using:
  ```json
  {
    "id": "unique-id",
    "name": "Phone Name",
    "image": "/assets/image-file.jpg",
    "shortDescription": "Brief description here."
  }
  ```
- **Images:**  
  Place corresponding image files (e.g., `image-file.jpg`) into `public/assets/`.

- **Descriptions:**  
  Edit the `shortDescription` field for each entry as needed.

- **Adding Components or Features:**  
  Add new React components to `src/components/`, CSS to the same directory or in `App.css`.

## Troubleshooting

- **Port Already in Use:**  
  - Either stop the process using port 3000 or start the app on another suggested port.

- **`npm install` Errors:**  
  - Ensure Node.js and npm are installed and up to date.
  - Delete `node_modules` and `package-lock.json`, then try again:
    ```bash
    rm -rf node_modules package-lock.json
    npm install
    ```

- **App Doesn't Load:**  
  - Check the browser console for errors.
  - Make sure all static assets and referenced images/files exist.
  - Restart the development server.

- **Styling Looks Off:**  
  - Confirm you're editing the correct CSS file.
  - Refresh browser cache (Ctrl+Shift+R).

## License / Attribution

*(To be inserted if known. Otherwise, assume default or proprietary terms.)*

## Contributing

We welcome contributions! To propose changes or improvements:
1. Fork the repository.
2. Create a feature branch and commit your changes.
3. Ensure your code and content are clearly structured and styled consistently.
4. Open a Pull Request (PR) describing your changes and test cases.
5. For UI changes, confirm styles and accessibility are preserved.
6. The team will review and merge approved contributions.

---

Thank you for using and improving the Mobile Phone Catalog!
