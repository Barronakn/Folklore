import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Support from "../components/Support";
import Subscribe from "../components/Subscribe";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <Support />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Home;
