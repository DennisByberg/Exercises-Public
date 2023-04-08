// scss
import "./Header.scss";
//components
import Toggle from "../Toggle/Toggle";
//other
import { Link } from "react-router-dom";
// context
import { useContext } from "react";
import { DarkModeContext } from "../../App";

const Header = () => {
  const isDarkMode = useContext(DarkModeContext);

  return (
    <header className="header">
      <img
        className="header__logo"
        src="https://cdn-icons-png.flaticon.com/512/9985/9985768.png"
      />
      <nav className="header__nav">
        <ul className="header__ul">
          <li>
            <Link
              className={`header__link ${isDarkMode ? "" : "link--lightMode"}`}
              to="/"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              className={`header__link ${isDarkMode ? "" : "link--lightMode"}`}
              to="/Searchpage"
            >
              SEARCH
            </Link>
          </li>
          <li>
            <Toggle />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
