import React, { useState } from 'react';
import { useParams } from 'react-router-dom'
import data from '../../annonce.json' 
import "./logement.scss"
import List from '../../components/List/list';


function Logement() {

    const {id} = useParams()

    const findObject = data.find((item) => item.id === id)    
    
    const [photoIndex, setPhotoIndex] = useState(0);
    const pictures = findObject.pictures
    const numSlides = pictures.length;
    
    const testClicRight = () => {
        setPhotoIndex((photoIndex + 1) % numSlides);
    };

    const testClicLeft = () => {
        setPhotoIndex((photoIndex - 1 + numSlides) % numSlides) ;
    };

    const tags = findObject.tags
    const starIcons = [...Array(5)].map((_, index) => (
        <i 
            key={index}
            className={`fa-solid fa-star ${index < findObject.rating ? '' : ' fa-star-gray' }`}>
        </i>
    ));

    const equipmentsList = findObject.equipments
    
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
                <div className='logement-count'>
                    {photoIndex + 1 } / {numSlides}
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
                    <div className='profil'>
                        <div className='profil-mini'>
                            <p>{findObject.host.name}</p>
                            <img className='profil-img' src={findObject.host.picture} alt="profil" />
                        </div>
                        <div className='stars'>
                            {starIcons}
                        </div>
                    </div>
                </div>
                

                <div className='logement-lists'>
                    
                    <List label = "Description" smallList={"smallList"} content={findObject.description}/>
                    <List label = "Equipements" smallList={"smallList"} 
                        content={equipmentsList.map((equipement) =>
                            <li key={equipement}>{equipement}</li>
                    )}/> 

                </div>
            </div>
        </>
    )
}

export default Logement