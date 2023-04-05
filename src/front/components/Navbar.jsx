import React, { useState } from "react";
import { Link } from "react-router-dom";
import starswarsLogo from "../styles/images/pngwing.com.png";

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
        <div className="container-fluid d-block">
          <div className="d-flex justify-content-around">
            <div className="left d-flex">
              <i className="bx bxl-facebook-circle"></i>
              <i className="bx bxl-instagram"></i>
              <i className="bx bxl-youtube"></i>
            </div>
            <div className="center">
              <Link to={"/"} className="navbar-brand">
                <img id="logo-nav" src={starswarsLogo} alt="" />
              </Link>
            </div>
            <div className="right">
              <i className="bx bx-search-alt-2"></i>
              <i className="bx bx-user"></i>
            </div>
          </div>
          <div>
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
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
        </div>
      </nav>
    </div>
  );
};
