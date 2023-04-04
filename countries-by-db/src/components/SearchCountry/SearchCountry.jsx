//components
import CountryCard from "../CountryCard/CountryCard";
//other
import { useEffect, useState } from "react";

const SearchCountry = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function getCountries() {
      const allCountiesURL = "https://restcountries.com/v3.1/all";
      const response = await fetch(allCountiesURL);
      const data = await response.json();
      setCountries(data);
    }
    getCountries();
  }, []);

  const countryComponents = countries.map((country) => {
    return <CountryCard key={country.name.common} name={country.name.common} />;
  });

  return (
    <section>
      <input type="text" />
      <ul>{countryComponents}</ul>
    </section>
  );
};

export default SearchCountry;
