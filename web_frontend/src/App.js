import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import PhoneCard from "./components/PhoneCard";
import phonesData from "./data/phones.json";

// PUBLIC_INTERFACE
function App() {
  // Theme support retained for future, though not used in this static light theme
  const [theme, setTheme] = useState("light");
  const [search, setSearch] = useState("");
  const [phones] = useState(phonesData);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  // PUBLIC_INTERFACE
  const filterPhones = (query) => {
    if (!query) return phones;
    return phones.filter((p) =>
      p.name.toLowerCase().includes(query.toLowerCase())
    );
  };

  const filteredPhones = filterPhones(search);

  return (
    <div className="App" style={{ background: "#f9fafb", minHeight: "100vh" }}>
      <Navbar />
      <main className="main-content">
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
        <section className="grid-section">
          <div className="phone-grid" data-testid="phone-grid">
            {filteredPhones.length === 0 ? (
              <div className="no-results">No phones found.</div>
            ) : (
              filteredPhones.map((phone) => (
                <PhoneCard key={phone.id} phone={phone} />
              ))
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
