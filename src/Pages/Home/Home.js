import React from 'react';
import Banner from '../Components/Banner/Banner';
import Reviews from '../Components/Reviews/Reviews';
import Services from '../Components/Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;