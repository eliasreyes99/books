import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  const location = useLocation(); // Hook para obtener la ubicación actual

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/search"
            className={location.pathname === "/search" ? "active" : ""}
          >
            Search
          </Link>
        </li>
        <li>
          <Link
            to="/favorites"
            className={location.pathname === "/favorites" ? "active" : ""}
          >
            Favorites
          </Link>
        </li>
      </ul>
    </nav>
  );
}
