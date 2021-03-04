import React from 'react';


export default function Header({children, img}) {
    return (
        <div className={`header`}>
            <div className="header-img" style={{
             backgroundImage: `url(${img})`,
        }}> 
        {children}   
        </div>
        </div>
    )
}
