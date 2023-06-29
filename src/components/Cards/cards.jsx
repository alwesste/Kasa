import "./cards.scss"
import { Link } from "react-router-dom";


const Cards = () => {

    return  (     
        <div> 
            <Link to="/logement">
                <div className="card">
                    <p className="card-title">
                        Titre de la <br /> location
                    </p>
                </div>
            </Link>
        </div>
    )
};

export default Cards