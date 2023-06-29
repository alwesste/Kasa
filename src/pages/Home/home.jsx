import Banner from "../../components/Banner/banner.jsx";
import Cards from "../../components/Cards/cards.jsx";
import "./home.scss";

function Home() {


  return (
    <div className="home">
      <Banner />
      <div className="home-support">
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
      </div>
    </div>
  );
}

export default Home;
