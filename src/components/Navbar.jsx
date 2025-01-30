import { useRef } from "react";
import countries from "../data/country.js";
import languages from "../data/languages.js";
import logoImg from "../assets/news_logo.png";
import menu_icon from "../assets/menu_icon.png";
import close_icon from "../assets/close_icon.png";
import "./Navbar.css";
import { useState } from "react";

const Navbar = ({
  setSelectedCountry,
  setSelectedLanguage,
  setCategory,
  setSelectedQuery,
}) => {
  let searchText = useRef();

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };
  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  const handleQueryChange = (e) => {
    setSelectedQuery(searchText.current.value);
    console.log("Query works and its value is :" + searchText.current.value);
  };

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <nav>
        <div className="upper-navbar">
          <div className="logo-div">
            <img src={logoImg} alt="Logo" />
            <p className="logo-name">NewsWave</p>
          </div>
          <div className="menu" onClick={() => setMenuOpen(true)}>
            <img src={menu_icon} alt="" />
            {/* <img src={close_icon} alt="" /> */}
          </div>
          <div className="both-select-search">
            <div className="select-items">
              <select
                /* value={selectedCountry}*/ onChange={handleCountryChange}
              >
                {countries.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.name}
                  </option>
                ))}
              </select>
              <select
                /* value={selectedCountry}*/ onChange={handleLanguageChange}
              >
                {languages.map((l) => (
                  <option key={l.code} value={l.code}>
                    {l.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="d-flex search-div" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                ref={searchText}
              />
              <button onClick={handleQueryChange}>Search</button>
            </div>
          </div>
        </div>
      </nav>
      <nav>
        <div class="lower-navbar">
          <div class="category-elements">
            <ul>
              <li className="nav-item">
                <div
                  className="nav-link underline-hover"
                  onClick={() => setCategory("top")}
                >
                  All
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link underline-hover"
                  onClick={() => setCategory("business")}
                >
                  Buisness
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link underline-hover"
                  onClick={() => setCategory("education")}
                >
                  Education
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link underline-hover"
                  onClick={() => setCategory("entertainment")}
                >
                  Entertainment
                </div>
              </li>
              <li className="nav-item ">
                <div
                  className="nav-link underline-hover"
                  onClick={() => setCategory("sports")}
                >
                  Sports
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link underline-hover"
                  onClick={() => setCategory("politics")}
                >
                  Politics
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link underline-hover"
                  onClick={() => setCategory("health")}
                >
                  health
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link underline-hover"
                  onClick={() => setCategory("technology")}
                >
                  technology
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link underline-hover"
                  onClick={() => setCategory("science")}
                >
                  Science
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link underline-hover"
                  onClick={() => setCategory("tourism")}
                >
                  Tourism
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link underline-hover"
                  onClick={() => setCategory("crime")}
                >
                  Crime
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav>
        <div className={`expanded-navbar ${menuOpen ? "active" : ""}`}>
          {/* upper navbar */}
          <div className="above">
            <div className="logo-div">
              <img src={logoImg} alt="Logo" />
              <p className="logo-name">NewsWave</p>
            </div>
            <div className="menu-close" onClick={() => setMenuOpen(false)}>
              {/* <img src={menu_icon} alt="" /> */}
              <img src={close_icon} alt="" />
            </div>
            <div className="both-select-search2">
              <div className="select-items">
                <select
                  /* value={selectedCountry}*/ onChange={handleCountryChange}
                >
                  {countries.map((c) => (
                    <option key={c.code} value={c.code}>
                      {c.name}
                    </option>
                  ))}
                </select>
                <select
                  /* value={selectedCountry}*/ onChange={handleLanguageChange}
                >
                  {languages.map((l) => (
                    <option key={l.code} value={l.code}>
                      {l.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="d-flex search-div" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  ref={searchText}
                />
                <button
                  onClick={() => {
                    handleQueryChange(); // Call the function properly
                    setMenuOpen(false);
                  }}
                >
                  Search
                </button>
                {/* <button onClick={() => { {handleQueryChange}; setMenuOpen(false)}}>Search</button> */}
                {/* <button onClick={handleQueryChange}>Search</button> */}
              </div>
            </div>
          </div>
          {/* lower navbar */}
          {/* <div className="category-elements2"> */}
          <div className={`category-elements ${menuOpen ? "active" : ""}`}>
            <ul>
              <li className="nav-item">
                <div
                  className="nav-link underline-hover"
                  onClick={() => {
                    setCategory("top");
                    setMenuOpen(false);
                  }}
                >
                  All
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link underline-hover"
                  onClick={() => {
                    setCategory("business");
                    setMenuOpen(false);
                  }}
                >
                  Buisness
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link underline-hover"
                  onClick={() => {
                    setCategory("education");
                    setMenuOpen(false);
                  }}
                >
                  Education
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link underline-hover"
                  onClick={() => {
                    setCategory("entertainment");
                    setMenuOpen(false);
                  }}
                >
                  Entertainment
                </div>
              </li>
              <li className="nav-item ">
                <div
                  className="nav-link underline-hover"
                  onClick={() => {
                    setCategory("sports");
                    setMenuOpen(false);
                  }}
                >
                  Sports
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link underline-hover"
                  onClick={() => {
                    setCategory("politics");
                    setMenuOpen(false);
                  }}
                >
                  Politics
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link underline-hover"
                  onClick={() => {
                    setCategory("health");
                    setMenuOpen(false);
                  }}
                >
                  health
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link underline-hover"
                  onClick={() => {
                    setCategory("technology");
                    setMenuOpen(false);
                  }}
                >
                  technology
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link underline-hover"
                  onClick={() => {
                    setCategory("science");
                    setMenuOpen(false);
                  }}
                >
                  Science
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link underline-hover"
                  onClick={() => {
                    setCategory("tourism");
                    setMenuOpen(false);
                  }}
                >
                  Tourism
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link underline-hover"
                  onClick={() => {
                    setCategory("crime");
                    setMenuOpen(false);
                  }}
                >
                  Crime
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
