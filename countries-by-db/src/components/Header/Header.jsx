// scss
import "./Header.scss";
//components
import Toggle from "../Toggle/Toggle";
//other
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <img
        className="header__logo"
        src="https://cdn-icons-png.flaticon.com/512/9985/9985768.png"
      />
      <nav className="header__nav">
        <ul className="header__ul">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Searchpage">Search</Link>
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
