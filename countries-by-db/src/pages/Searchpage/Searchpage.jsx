//scss
import "./Searchpage.scss";
//components
import Header from "../../components/Header/Header";
import SearchCountry from "../../components/SearchCountry/SearchCountry";

const Searchpage = () => {
  return (
    <section className="search-page">
      <Header />
      <SearchCountry />
    </section>
  );
};

export default Searchpage;
