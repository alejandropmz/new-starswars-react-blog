import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

/* logo starswars */
import starWarsLogo from "../styles/images/pngwing.com.png";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store } = useContext(Context);

  const [showSearch, setShowSearch] = useState(false);
  const [searchData, setsearchData] = useState("");

  const handleSearchData = (e) => {
    console.log(filterItems);
    setsearchData(e.target.value);
  };

  const filterItems = store.planets.filter((planet) =>
    planet.name.toLowerCase().includes(searchData.toLowerCase())
  );

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
                <div id="input-span">
                  <input
                    id="input-search"
                    onChange={handleSearchData}
                    className={showSearch ? "form-control me-2" : "d-none"}
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <Link
                    className={
                      !showSearch ? "d-none" : "d-flex justify-content-center"
                    }
                    id="span"
                  >
                    <span className={searchData == "" ? "d-none" : ""}>
                      hola
                    </span>
                  </Link>
                  {/* <Link className="d-flex justify-content-center" id="span" to={"planets/" + filterItems[0].uid}>
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${filterItems[0].uid}.jpg`} alt="" />
                    <span>{filterItems[0].name}</span>
                  </Link> */}
                </div>
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

/*   const [searchData, setSearchData] = useState(""); */

/*   const handleSearchData = async (e) => {
    console.log(e.target.value);
    await store
    for (let item in store){
      console.log(item)
    }
  }; */

/* console.log(store.species[0].name) */
