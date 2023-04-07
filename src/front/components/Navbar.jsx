import React, { useState } from "react";
import { Link } from "react-router-dom";

/* logo starswars */
import starWarsLogo from "../styles/images/pngwing.com.png";

export const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const handleSearch = () => {
    setShowSearch(!showSearch);
  };
  const navItems = [
    "New+",
    "People",
    "Films",
    "Starships",
    "Vehicles",
    "Species",
    "Planets",
    "Interactive",
    "Community",
  ];

  return (
    <div>
      <nav
        id="all-nav"
        className="d-block navbar navbar-expand-lg navbar-light bg-light"
      >
        {/* navtop */}
        <div className="top-nav d-flex">
          {/* nav left */}
          <div className="nav-top-left d-flex justify-content-center">
            <i className="bx bxl-facebook-circle"></i>
            <i className="bx bxl-instagram"></i>
            <i className="bx bxl-youtube"></i>
          </div>
          {/* nav center */}
          <div className="nav-top-center d-flex justify-content-center">
            <Link to={"/"}>
              <img src={starWarsLogo} alt="" />
            </Link>
          </div>
          {/* nav right */}
          <div className="nav-top-right d-flex">
            <div className="search d-flex">
              <i
                onClick={handleSearch}
                className={!showSearch ? "bx bx-search d-flex" : "d-none"}
              >
                <p className={showSearch ? "d-none" : ""} id="icons-text">
                  SEARCH
                </p>
              </i>
              <form className="d-flex">
                <i
                  onClick={handleSearch}
                  className={showSearch ? "bx bx-x" : ""}
                ></i>
                <input
                  id="input-search"
                  className={showSearch ? "form-control me-2" : "d-none"}
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
            </div>
            <Link to={"/signin"} className="login d-flex">
              <i className="bx bx-user d-flex">
                <p id="icons-text">SIGN IN</p>
              </i>
            </Link>
          </div>
        </div>
        <div id="item-menu-container" className="container-fluid">
          <button
            id="button-collapse"
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
              {navItems.map((item, index) => (
                <li key={index} className="nav-item">
                  <Link
                    to={"/" + item.toLowerCase()}
                    className="nav-link menu-item active"
                    aria-current="page"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
