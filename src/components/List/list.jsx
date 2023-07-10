import './list.scss'
import React, { useState } from 'react';



function List( {label, content, smallList} ) {

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
                
                <p className={`list-paragraph ${translate ? 'translate-en-bas' : 'translate-en-haut' }`}>
                    {content}
                </p> 
         </div> 
    )  
}

export default List