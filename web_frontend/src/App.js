import React, { useState, useEffect, useMemo, useCallback, useRef } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import PhoneCard from "./components/PhoneCard";
import phonesData from "./data/phones.json";

// Helper for localStorage favorites
function getFavoritesFromStorage() {
  try {
    return JSON.parse(localStorage.getItem("favorites")) || [];
  } catch {
    return [];
  }
}

// PUBLIC_INTERFACE
function App() {
  // Detect user theme preference
  const getDefaultTheme = () =>
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

  const [theme, setTheme] = useState(() =>
    localStorage.getItem("theme") || getDefaultTheme()
  );
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("az"); // "az" or "za"
  const [page, setPage] = useState(1);
  const PHONES_PER_PAGE = 4;
  const [favorites, setFavorites] = useState(() => getFavoritesFromStorage());
  const [announce, setAnnounce] = useState("");
  const announceRef = useRef(null);

  // Accessibility: move focus to first card/result after filtering
  const firstCardRef = useRef(null);

  // Handle theme switching
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Update favorites in localStorage when changed
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Handler - search
  // PUBLIC_INTERFACE
  const handleSearch = (event) => {
    setSearch(event.target.value);
    setPage(1);
  };

  // Handler - sorting
  // PUBLIC_INTERFACE
  const handleSort = (event) => {
    setSortOrder(event.target.value);
    setPage(1);
  };

  // PUBLIC_INTERFACE
  const toggleFavorite = useCallback(
    (phoneId) => {
      setFavorites((prev) =>
        prev.includes(phoneId)
          ? prev.filter((id) => id !== phoneId)
          : [...prev, phoneId]
      );
    },
    [setFavorites]
  );

  // PUBLIC_INTERFACE
  const handleThemeToggle = () => {
    setTheme((t) => (t === "light" ? "dark" : "light"));
  };

  // Filter/search/sort phone data (memoized)
  const filteredPhones = useMemo(() => {
    let result = phonesData;
    if (search) {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (sortOrder === "az") {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    } else {
      result = [...result].sort((a, b) => b.name.localeCompare(a.name));
    }
    return result;
  }, [search, sortOrder]);

  // Pagination
  const numPages = Math.max(1, Math.ceil(filteredPhones.length / PHONES_PER_PAGE));
  const paginatedPhones = useMemo(() => {
    const start = (page - 1) * PHONES_PER_PAGE;
    return filteredPhones.slice(start, start + PHONES_PER_PAGE);
  }, [filteredPhones, page]);

  // Announce results/no-results for screen readers
  useEffect(() => {
    if (filteredPhones.length === 0) {
      setAnnounce("No phones found.");
    } else {
      setAnnounce(`${filteredPhones.length} phone${filteredPhones.length === 1 ? "" : "s"} found.`);
    }
    // Move focus to first card if results
    if (paginatedPhones.length > 0 && firstCardRef.current) {
      firstCardRef.current.focus();
    }
  }, [filteredPhones.length, paginatedPhones.length]);

  // Keyboard navigation in grid section (arrow keys)
  const handleGridKeyDown = (e) => {
    const index = Number(e.target.getAttribute("data-index"));
    if (!Number.isInteger(index)) return;
    // Find all focusable cards
    const cards = Array.from(
      document.querySelectorAll(".phone-card[tabindex='0']")
    );
    if (["ArrowRight", "ArrowLeft", "ArrowDown", "ArrowUp"].includes(e.key)) {
      e.preventDefault();
      let nextIndex = index;
      if (e.key === "ArrowRight") nextIndex = Math.min(cards.length - 1, index + 1);
      if (e.key === "ArrowLeft") nextIndex = Math.max(0, index - 1);
      if (e.key === "ArrowDown") nextIndex = Math.min(cards.length - 1, index + 2);
      if (e.key === "ArrowUp") nextIndex = Math.max(0, index - 2);
      cards[nextIndex]?.focus();
    }
  };

  // PUBLIC_INTERFACE
  return (
    <div className="App" style={{ background: "var(--bg-primary)", minHeight: "100vh" }}>
      <Navbar />
      <button
        className="theme-toggle"
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
        onClick={handleThemeToggle}
        type="button"
      >
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>
      <main className="main-content" role="main">
        <section className="search-section">
          <input
            className="search-input"
            type="text"
            placeholder="Search phones..."
            aria-label="Search phones"
            value={search}
            onChange={handleSearch}
            autoFocus
          />
        </section>
        <section className="grid-section" aria-labelledby="catalogue-heading">
          <div
            role="status"
            aria-live="polite"
            className="sr-only"
            ref={announceRef}
            style={{
              position: "absolute",
              width: "1px",
              height: "1px",
              margin: "-1px",
              border: 0,
              padding: 0,
              overflow: "hidden",
              clip: "rect(0 0 0 0)",
            }}
          >
            {announce}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1rem" }}>
            <h2 id="catalogue-heading" className="subtitle" style={{ margin: 0 }}>
              Phone Catalogue
            </h2>
            <div>
              <label htmlFor="sort" style={{ marginRight: "0.5em" }}>Sort:</label>
              <select
                id="sort"
                aria-label="Sort phones"
                value={sortOrder}
                onChange={handleSort}
                style={{ borderRadius: "6px", padding: "0.35em 0.9em", fontSize: "1rem" }}
              >
                <option value="az">A-Z</option>
                <option value="za">Z-A</option>
              </select>
            </div>
          </div>
          <div className="phone-grid" data-testid="phone-grid" role="list" aria-label="Phone list">
            {paginatedPhones.length === 0 ? (
              <div className="no-results" tabIndex={0} aria-live="polite">
                No phones found.
              </div>
            ) : (
              paginatedPhones.map((phone, idx) => (
                <PhoneCard
                  key={phone.id}
                  phone={phone}
                  tabIndex={0}
                  isFavorite={favorites.includes(phone.id)}
                  onFavoriteToggle={() => toggleFavorite(phone.id)}
                  onKeyDown={handleGridKeyDown}
                  dataIndex={idx}
                  ref={idx === 0 ? firstCardRef : null}
                />
              ))
            )}
          </div>
          {/* Pagination */}
          {numPages > 1 && (
            <nav
              className="pagination-nav"
              aria-label="Catalogue page navigation"
              style={{ display: "flex", justifyContent: "center", marginTop: "2rem", gap: "12px" }}
            >
              <button
                onClick={() => setPage(p => Math.max(1, p - 1))}
                disabled={page === 1}
                aria-label="Previous page"
                style={{ marginRight: "6px" }}
                className="btn"
                type="button"
              >
                &lt;
              </button>
              {Array.from({ length: numPages }, (_, i) => (
                <button
                  key={`page-${i + 1}`}
                  className={"btn" + (page === i + 1 ? " btn-active" : "")}
                  onClick={() => setPage(i + 1)}
                  aria-current={page === i + 1 ? "page" : undefined}
                  aria-label={`Go to page ${i + 1}`}
                  type="button"
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() => setPage(p => Math.min(numPages, p + 1))}
                disabled={page === numPages}
                aria-label="Next page"
                style={{ marginLeft: "6px" }}
                className="btn"
                type="button"
              >
                &gt;
              </button>
            </nav>
          )}
        </section>
        {/* Favorites section */}
        {favorites.length > 0 && (
          <section aria-labelledby="favorites-heading" style={{ marginTop: "2.5rem" }}>
            <h2 id="favorites-heading" className="subtitle">Favorites</h2>
            <div className="phone-grid" role="list" aria-label="Favorite phones">
              {phonesData
                .filter((p) => favorites.includes(p.id))
                .map((phone, idx) => (
                  <PhoneCard
                    key={phone.id}
                    phone={phone}
                    tabIndex={0}
                    isFavorite={true}
                    onFavoriteToggle={() => toggleFavorite(phone.id)}
                    dataIndex={idx}
                  />
                ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
