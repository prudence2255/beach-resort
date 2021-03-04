import React from 'react';
import {Link} from 'react-router-dom';

export default function Banner({title, subtitle, linkText, link}) {
    return (
        <div className="banner">
         <h1>{title}</h1>
        <div className="divider"></div>
            <h5>{subtitle}</h5>
         <Link to={link}>{linkText}</Link>
        </div>
    )
}
