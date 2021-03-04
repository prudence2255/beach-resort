import React from 'react';
import Header from 'components/Header';
import Banner from 'components/Banner';
import Services from 'components/Services';
import FeaturedRooms from 'components/FeaturedRooms';



export default function Home() {
    return (
        <>
        <div className="home page">
        <Header img="./assets/defaultImg.jpeg">
        <Banner title="Luxurious rooms" subtitle="deluxe rooms starting at $299"
        link="/rooms" linkText="our rooms"
        >
        </Banner> 
        </Header>
        <div className="container">
         <Services />
         <FeaturedRooms />
        </div>
        </div>
       </>
    )
}
