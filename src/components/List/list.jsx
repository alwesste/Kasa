import './list.scss'
import React, { useState } from 'react';



function List(props) {

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
                <p>{props.label}</p> 
            </div>
                <p className={`list-paragraph ${translate ? 'translate-en-bas' : 'translate-en-haut' }`}>
                    {props.content}
                    {props.content2}
                    {props.content3}
                    {props.content4}
                </p> 
        </div> 
    )  
}

export default List