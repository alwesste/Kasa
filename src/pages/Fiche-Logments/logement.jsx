import backgroundPhoto from '../../assets/photos/Background.png'
import "./logements.scss"

function Logement() {
    return ( 
        <>
            <div className='logement'>
                <img className='logement-img' src={backgroundPhoto} alt="salon avec une table, une commode et un canape" />
            </div>
            
            <div className='flat'>

                <div className='flat-mix'>
                    <div>
                        <h1 className="flat-title">Coozy loft on the canal Saint-Martin</h1>
                        <p className='flat-location'>Paris, Ile-de-France</p>
                        <div className='filter'>
                            <p>Cozy</p>
                            <p>Canal</p>
                            <p>Paris 10</p>
                        </div>
                    </div>
                    <div>
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
                        <i class="fa-solid fa-chevron-up"></i>
                        <p>Description</p> 
                    </div>
                    <div className='logement-list'>                        
                        <i class="fa-solid fa-chevron-up"></i>
                        <p>Equipements</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Logement