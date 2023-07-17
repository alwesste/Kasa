import './list.scss';
import React, { useState, useRef } from 'react';

function List({ label, content, smallList }) {
  const [expanded, setExpanded] = useState(false);

  const contentRef = useRef();

  const handleClick = () => {
    setExpanded(!expanded);  };

  // useEffect(() => {
  //   if (expanded && smallList) {
  //     const contentHeight = contentRef.current.offsetHeight;
  //     document.documentElement.style.setProperty('--content-height', `${contentHeight}px`);
  //     console.log(contentHeight);
  //   }
  //   else {
  //     document.documentElement.style.setProperty('--content-height', '0');
  //   }
  // }, [content, expanded, smallList]);
  

  return (
    <div className={` ${smallList ? 'smallList' : 'listConteiner' } ${expanded ? 'expand-margin' : 'unexpand-margin'} `}>
      
      <div className="list">

      <i onClick={handleClick} className={`fa-solid fa-chevron-up ${expanded ? 'rotate-180' : 'rotate-0'}`}></i>
      {label}
      </div>

      <div
        ref={contentRef}
        className={`list-paragraph ${expanded ? 'translate-en-bas' : 'translate-en-haut'} ` }>
      
        <p>{content}</p>
      </div>
    </div>
  );
}

export default List;
