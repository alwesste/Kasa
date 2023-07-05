import './list.scss'
import React, { useState } from 'react';



function List( {label, content} ) {

    const [rotate, setRotate] = useState(false)
    const [translate, setTranslate] = useState(false)
    const [expandMargin, setExpandMargin] = useState(false);

    const handleClick = () => {
        setRotate(!rotate)
        setTranslate(!translate)
        setExpandMargin(!expandMargin)
    }   

   
    return (
        <div className={`listConteiner ${expandMargin ? 'expand-margin' : 'unexpand-margin'}`}>
            <div className='list'>
                <i onClick={handleClick} className={`fa-solid fa-chevron-up ${rotate ? 'rotate-180' : 'rotate-0'}`}></i>
                <p>
                    {label}
                </p> 
            </div>
                <p className={`list-paragraph ${translate ? 'translate-en-bas' : 'translate-en-haut' }`}>
                    {content}
                </p> 
        </div> 
    )  
}

export default List