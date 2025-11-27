import React from "react";
import "./Navbar.css";

// PUBLIC_INTERFACE
function Navbar() {
  /** This component renders the top navigation bar displaying the project name. */
  return (
    <nav className="navbar">
      <span className="navbar__brand">Mobile Phone Catalogue</span>
    </nav>
  );
}

export default Navbar;
