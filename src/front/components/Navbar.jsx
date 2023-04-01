import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [navLinks, setNavLinks] = useState([
    "people",
    "films",
    "starships",
    "vehicles",
    "species",
    "planets",
  ]);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {navLinks.map((link, index) => (
                <li key={index} className="nav-item">
                  <Link
                    to={"/" + link}
                    key={index}
                    className="nav-link active"
                    aria-current="page"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />{" "}
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};
