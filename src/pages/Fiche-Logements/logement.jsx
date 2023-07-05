// import backgroundPhoto from '../../assets/photos/Background.png'
import React, { useState } from 'react';
import {useParams} from 'react-router-dom'
import data from '../../annonce.json' 
import "./logement.scss"

function Logement() {

    const {id} = useParams()

    const findObject = data.find((item) => item.id === id )

    const [rotate, setRotate] = useState(false);
    const [rotate1, setRotate1] = useState(false);

    const [photoIndex, setPhotoIndex] = useState(0);
    const pictures = findObject.pictures
    
    const handleClic = () => {
        setRotate(!rotate);
    };
  
    const handleClic1 = () => {
        setRotate1(!rotate1);
    };
  
    const numSlides = pictures.length;
    
    const testClicRight = () => {
        setPhotoIndex((photoIndex + 1) % numSlides);
        
    };

    const testClicLeft = () => {
        setPhotoIndex((photoIndex - 1 + numSlides) % numSlides) ; 
    };

    const tags = findObject.tags
    const starIcons = [...Array(5)].fill().map((_, index) => (
        <i className={`fa-solid fa-star ${index < findObject.rating ? '' : ' fa-star-gray' }`}></i>
    ));


    return ( 
        <>
            <div className='logement'>
                <div className="chevron-left">
                    <i onClick = {testClicLeft} className="fa-solid fa-chevron-left"></i>
                </div>
                <img className='logement-img' src={pictures[photoIndex]} alt="salon avec une table, une commode et un canape" />
                <div className="chevron-right">
                    <i onClick = {testClicRight} className="fa-solid fa-chevron-right"></i>
                </div>
            </div>


            <div className='flat'>

                <div className='flat-mix'>
                    <div>
                        <h1 className="flat-title">Coozy loft on the canal Saint-Martin</h1>
                        <p className='flat-location'>{findObject.location}</p>
                        <div className='flat-tag'>
                            {tags.map((tag) => <p key={tag}>{tag}</p>)}                            <p>Canal</p>
                        </div>
                    </div>
                    <div className='profil-mini'>
                        <div className='profil'>
                            <p>{findObject.host.name}</p>
                            <i className="fa-solid fa-circle"></i>
                        </div>
                        <div className='stars'>
                        {starIcons}
                            {/* <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star fa-star-gray"></i>
                            <i className="fa-solid fa-star fa-star-gray"></i> */}
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