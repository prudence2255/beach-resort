import React from 'react';
import {FaCocktail} from 'react-icons/fa';
import {FaHiking} from 'react-icons/fa';
import {FaShuttleVan} from 'react-icons/fa';
import {FaBeer} from 'react-icons/fa';


/**
 * services component
 * displays our list of services
 */
export default function Services() {
    return (
        <>
        <div className="services mx-3">
        <div className="row">
            <div className="col-md-8 text-center mx-auto">
                <h2>
                Services
                <div className="divider"></div>
                </h2>
                
            </div>
            <div className="row">
            <div className="col-md-3">
                <div>
                   <FaCocktail size="30" color="#046865"/>
                </div>
                <h5>free cocktails</h5>
                <p>
                Lorem Ipsum has been the industry's standard dummy 
                text ever since the 1500s, when an unknown 
              
                
                </p>
            </div>
            <div className="col-md-3">
                <div>
                    <FaHiking size="30" color="#046865"/>
                </div>
                <h5>endless hiking</h5>
                <p>
                Lorem Ipsum has been the industry's standard dummy 
                text ever since the 1500s, when an unknown 
                
                </p>
            </div>
            <div className="col-md-3">
                <div>
                    <FaShuttleVan size="30" color="#046865"/>
                </div>
                <h5>free shuttle</h5>
                <p>
                Lorem Ipsum has been the industry's standard dummy 
                text ever since the 1500s, when an unknown 
               
                </p>
            </div>
            <div className="col-md-3">
                <div>
                   <FaBeer size="30" color="#046865"/>
                </div>
                <h5>strongest beer</h5>
                <p>
                Lorem Ipsum has been the industry's standard dummy 
                text ever since the 1500s, when an unknown 
               
                </p>
            </div>
            </div>
        </div>
        </div>
        </>
    )
}
