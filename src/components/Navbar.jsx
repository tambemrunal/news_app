import { useRef } from "react";
import countries from "../data/country.js";
import languages from "../data/languages.js";
import logoImg from "../assets/news_logo.png";
import '../App.css';


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

  return (
    <>
      <nav>
        <div className="upper-navbar">
          <div className="logo-div">
              <img src={logoImg} alt="Logo" />
              <p className="logo-name">NewsWave</p>
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
              <button onClick={
                  handleQueryChange
                }
              >
                Search
              </button>
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
                  onClick={() => setCategory("business")}>
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
                <div className="nav-link underline-hover" onClick={() => setCategory("sports")}>
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
    </>
  );
};

export default Navbar;
