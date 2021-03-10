import React from 'react';
import {Link} from 'react-router-dom';

/**
 * single room card component
 * 
 * @param {object} room 
 */
export default function Room({room}) {

    return (
        <>
        <div className="room mt-md-2">
        <div className="w3-card-4 single-room-card">
        <img src={room.images[0]} alt="room" className="img-fluid img"/>
        <p className="price">${room.price}</p>
        <p className="features-link">
            <Link to={`/rooms/${room.slug}`}>Features</Link>
        </p>
         <div className="w3-container w3-center">
         <h5>{room.name}</h5>
        </div>
        </div>
        </div>
        </>
    )
}
