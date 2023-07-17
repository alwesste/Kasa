import './list.scss';
import React, { useState } from 'react';

function List({ label, content, smallList }) {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);  };


  

  return (
    <div className={` ${smallList ? 'smallList' : 'listConteiner' }`}>
      
      <div className="list">

      <i onClick={handleClick} className={`fa-solid fa-chevron-up ${expanded ? 'rotate-180' : 'rotate-0'}`}></i>
      {label}
      </div>

      <div
        className={`list-paragraph ${expanded ? 'translate-en-bas' : 'translate-en-haut'} ` }>
      
        <p>{content}</p>
      </div>
    </div>
  );
}

export default List;
