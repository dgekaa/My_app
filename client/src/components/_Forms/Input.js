import React from 'react';

import "./Input.scss";

export const InputDefault = ({ input, meta, ...props }) => {
    return (
        <div className="inputDefaultWrap">
            <input className="inputDefault"
                {...input} 
                {...props}
            />            
            {
                meta.error && 
                meta.touched &&
                    <span className="errorField">
                        {meta.error}
                    </span>
            }            
        </div>       
        
    );
};