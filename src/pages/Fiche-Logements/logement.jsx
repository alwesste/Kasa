import backgroundPhoto from '../../assets/photos/Background.png'
import React, { useEffect, useState } from 'react';
// import data from '../../annonce.json' 
import "./logement.scss"

function Logement() {
    const [rotate, setRotate] = useState(false);
    const [rotate1, setRotate1] = useState(false);
    // const [jsonDdata, setJsonData] = useState(null);
  
    console.log('ok');
  
    const handleClic = () => {
      setRotate(!rotate);
    };
  
    const handleClic1 = () => {
      setRotate1(!rotate1);
    };
  
    useEffect(() => {
      fetch('../../annonce.json')
        .then(response => response.json())
        .then(data => {
        //   setJsonData(data);
          console.log(data);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);
      

    return ( 
        <>
            <div className='logement'>
                <div className="chevron-left">
                    <i class="fa-solid fa-chevron-left"></i>
                </div>
                <img className='logement-img' src={backgroundPhoto} alt="salon avec une table, une commode et un canape" />
                <div className="chevron-right">
                    <i class="fa-solid fa-chevron-right"></i>
                </div>
            </div>

            
            <div className='flat'>

                <div className='flat-mix'>
                    <div>
                        <h1 className="flat-title">Coozy loft on the canal Saint-Martin</h1>
                        <p className='flat-location'>Paris, Ile-de-France</p>
                        <div className='flat-tag'>
                            <p>Cozy</p>
                            <p>Canal</p>
                            <p>Paris 10</p>
                        </div>
                    </div>
                    <div className='profil-mini'>
                        <div className='profil'>
                            <p>Alexandre <br/> Dumas</p>
                            <i class="fa-solid fa-circle"></i>
                        </div>
                        <div className='stars'>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star fa-star-grey"></i>
                            <i class="fa-solid fa-star fa-star-grey"></i>
                        </div>
                    </div>
                </div>
                

                <div className='logement-lists'>
                    <div className='logement-list'>           
                        <i onClick={handleClic} className={`fa-solid fa-chevron-up ${rotate ? "rotate-180" : "rotate-0"}`}></i>
                        <p>Description</p> 
                    </div>
                    <div className='logement-list'>                        
                        <i onClick={handleClic1} className={`fa-solid fa-chevron-up ${rotate1 ? "rotate-180" : "rotate-0"}`}></i>
                        <p>Equipements</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Logement