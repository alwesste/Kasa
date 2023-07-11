import "./cards.scss"
import { Link } from "react-router-dom";


const Cards = ({ title, cover, id }) => {
    

    return  (     
        <div> 
            <Link className="police-title" to={`/logement/${id}`}>
                <div className="card">
                    <img className="card-img" src={cover} alt="interieur de maison" />
                    <p className="card-title">
                        {title}
                    </p>
                </div>
            </Link>
        </div>
    )
};

export default Cards