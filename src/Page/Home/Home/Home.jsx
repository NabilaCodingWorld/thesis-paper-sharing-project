import React from 'react';
import Banner from './Banner/Banner';

import './Home.css'
import AboutThesis from './AboutThesis';
import Gallery from './Gallery';

const Home = () => {
    return (
        <div className='gradient-background'>
            <Banner></Banner>
            <AboutThesis></AboutThesis>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;