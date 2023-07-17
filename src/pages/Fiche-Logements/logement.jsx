import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom'
import data from '../../annonce.json' 
import "./logement.scss"
import List from '../../components/List/list';


function Logement() {
    const [photoIndex, setPhotoIndex] = useState(0);

    const {id} = useParams()

    const findObject = data.find((item) => item.id === id)    

    if (!findObject) {
        return <Navigate to = "/404" replace/>
    }
    
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
            <img className='logement-img' src={pictures[photoIndex]} alt="salon avec une table, une commode et un canape" />

                {numSlides > 1 && ( 
                    <div>
                        <div className="chevron-left">
                        <i onClick = {testClicLeft} className="fa-solid fa-chevron-left"></i>
                    </div>
                
               
                    <div className="chevron-right">
                        <i onClick = {testClicRight} className="fa-solid fa-chevron-right"></i>
                    </div>
                
                    <div className='logement-count'>
                        {photoIndex + 1 } / {numSlides}
                    </div>
                    </div>               
                )}
            </div>


            <div className='flat'>

                <div className='flat-mix'>
                    <div>
                        <h1 className="flat-title">Coozy loft on the canal Saint-Martin</h1>
                        <p className='flat-location'>{findObject.location}</p>
                        <div className='flat-tag'>
                            {tags.map((tag, index) => <p key={index}>{tag}</p>)}                   
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
                    <div className='logement-lists-description'>
                        <List
                        label='Description'
                        smallList={'smallList'}
                        content={findObject.description}
                        />
                    </div>
                    <div className='logement-lists-equipements'>
                        <List
                        label='Equipements'
                        smallList={'smallList'}
                        content={equipmentsList.map((equipement, index) => <li key={index}>{equipement}</li>)}
                        />
                    </div>
                    </div>
                </div>
        </>
    )
}

export default Logement