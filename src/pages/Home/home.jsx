import Banner from "../../components/Banner/banner.jsx";
import Cards from "../../components/Cards/cards.jsx";
import bannerPhoto from '../../assets/photos/photo1.png';
import data from "../../annonce.json"


import "./home.scss";

function Home() {

const listOLogement = data.slice(14, 20)

  return (
    <div className="home">
    <Banner src={bannerPhoto} title="Chez vous, partout et ailleurs"/>
        
          <div className="home-support">
          {listOLogement.map((logement) => 
          <Cards title={logement.title} cover={logement.cover} id={logement.id} key={logement.id}/>
          )}
          </div>     
    </div>
  );
}

export default Home;
