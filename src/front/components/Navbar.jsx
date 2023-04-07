import React, { useState } from "react";
import { Link } from "react-router-dom";
import starswarsLogo from "../styles/images/pngwing.com.png";

export const Navbar = () => {
  const [showInput, setShowInput] = useState(false);
  const [navLinks, setNavLinks] = useState([
    "new+",
    "people",
    "films",
    "starships",
    "vehicles",
    "species",
    "planets",
    "interactive",
    "community",
  ]);

  const handleInput = () => {
    setShowInput(!showInput);
  };

  return (
    <div>
      {/* navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid d-block">
          {/* navbar top, logo y redes */}
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
            <div className="right d-flex">
              <div className="search d-flex">
                <form id="search-input" className="d-flex">
                  <div className="d-flex">
                    <i onClick={handleInput} className="bx bx-search-alt-2"></i>
                    {!showInput ? <h5 id="login">Search</h5> : ""}
                    <input
                      className={
                        showInput
                          ? "form-control me-2"
                          : "form-control me-2 display"
                      }
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                  </div>
                </form>
              </div>
              <Link to={"/signin"} id="nav-logo" className="d-flex">
                <i className="bx bx-user"></i>
                <h5 id="login">Sign in</h5>
              </Link>
            </div>
          </div>
          <div className="d-flex">
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
              className="collapse navbar-collapse d-flex align-items-center"
              id="navbarSupportedContent"
            >
              <ul id="nav-items" className="navbar-nav me-auto mb-2 mb-lg-0">
                {navLinks.map((link, index) => (
                  <li key={index} className="nav-item">
                    <Link
                      id="link"
                      to={"/" + link}
                      key={index}
                      className="nav-link active"
                      aria-current="page"
                    >
                      {link.toUpperCase()}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
