import React from 'react';

import "./Button.scss";

export const ButtonDefault = props => {
  return (
    <div>
      <button 
        className={props.type === "submit" ? "submit" : "btn"}
        onClick={()=>{props.onClick ? props.onClick() : null}}
        type={props.type} 
      >
        {props.children}
      </button>    
    </div>      
  );
};