//scss
import "./Homepage.scss";
//components
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Homepage = () => {
  return (
    <section className="homepage">
      <Header />
      <h1 className="homepage__title">
        COUNTRIES <span className="homepage__title-api">API</span>
      </h1>
      <Footer />
    </section>
  );
};

export default Homepage;
