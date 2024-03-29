// scss
import "./SearchCountry.scss";
//components
import CountryCard from "../CountryCard/CountryCard";
//other
import { useEffect, useState, useContext } from "react";
import { DarkModeContext } from "../../App";

const SearchCountry = () => {
  const isDarkMode = useContext(DarkModeContext);
  const [countries, setCountries] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [countryComponents, setCountryComponents] = useState([]);

  useEffect(() => {
    if (searchInput) {
      async function getCountries() {
        const allCountiesURL = `https://restcountries.com/v3.1/name/${searchInput}`;
        const response = await fetch(allCountiesURL);
        const data = await response.json();
        setCountries(data);
      }
      getCountries();
    } else {
      setCountryComponents([]);
    }
  }, [searchInput]);

  function handleSearchInput(event) {
    setSearchInput(event.target.value);
  }

  useEffect(() => {
    if (countries.length > 0) {
      const searchedCountries = countries.map((country) => {
        return (
          <CountryCard
            key={country.name.common}
            name={country.name.common}
            imageURL={country.flags.png}
          />
        );
      });
      setCountryComponents(searchedCountries);
    }
  }, [countries]);

  return (
    <section className="search-country">
      <input
        className={`search-country__input ${
          isDarkMode ? "" : "input--lightMode"
        }`}
        type="text"
        placeholder="ENTER COUNTRY..."
        onChange={handleSearchInput}
      />
      <ul className="search-country__ul">{countryComponents}</ul>
    </section>
  );
};

export default SearchCountry;
