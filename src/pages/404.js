import React from 'react';
import Banner from 'components/Banner';
import Header from 'components/Header';

export default function NotFound() {
    return (
        <div className="not-found">
        <Header img="./assets/defaultImg.jpeg">
        <Banner title="404" subtitle="page not found"
        link="/" linkText="return home"
        >
        </Banner> 
        </Header> 
        </div>
    )
}
