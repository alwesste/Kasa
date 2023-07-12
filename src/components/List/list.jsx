import './list.scss'
import React, { useState } from 'react';

function List( {label, content, smallList, onMarginChange } ) {

    const [rotate, setRotate] = useState(false)
    const [translate, setTranslate] = useState(false)
    const [expandMargin, setExpandMargin] = useState(false);

    const handleClick = () => {
        setRotate(!rotate)
        setTranslate(!translate)
        setExpandMargin(!expandMargin)
    }   


    return (
        <div className={`${expandMargin ? 'expand-margin' : 'unexpand-margin'} ${smallList ? 'smallList' : 'listConteiner' } `}>
            
            <div className= 'list'>
                <i onClick={handleClick} className={`fa-solid fa-chevron-up ${rotate ? 'rotate-180' : 'rotate-0'}`}></i>
                    {label} 
            </div>
                
                <div className={`list-paragraph ${translate ? 'translate-en-bas' : 'translate-en-haut' }`}>
                    <p>{content}</p>
                </div> 
         </div> 
    )  
}

export default List