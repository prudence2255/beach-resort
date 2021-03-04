import React from 'react';
import {Link} from 'react-router-dom';
import {AiOutlineAlignRight} from 'react-icons/ai';
import useShow from 'helpers/useShow';

export default function Navbar() {

  const { show, target, toggleShow} = useShow();

    return (
        <div>
          <nav className="bg-light w3-card-4 resort-navbar">
           <div className="container">
           <div className="d-flex">
           <div>
           <Link to="/">
             <img  src="/assets/logo.svg" alt="beach-resort"/>
           </Link>
           </div>
           <div className={`nav-items ${show && 'nav-1' === target ? 'show-nav' : ''}`}>
           <div>
           <Link to="/">Home</Link>
            </div>
              <div>
              <Link to="/rooms">Rooms</Link>
            </div>
           </div>
           <div className={`navar-toggle ml-auto `} onClick={() => toggleShow('nav-1')}>
            <AiOutlineAlignRight size="25" color="#046865"/> 
           </div>
           </div>
           </div>
          </nav>  
        </div>
    )
}
