//scss
import "./CountryCard.scss";
//other
import { useContext } from "react";
import { DarkModeContext } from "../../App";

const CountryCard = ({ name, imageURL }) => {
  const isDarkMode = useContext(DarkModeContext);

  return (
    <li
      className={`country-card ${isDarkMode ? "" : "country-card--lightMode"}`}
    >
      <p className="country-card__name">{name}</p>
      <img className="country-card__flag" src={imageURL} />
    </li>
  );
};

export default CountryCard;
