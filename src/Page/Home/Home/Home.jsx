import React from 'react';
import Banner from './Banner/Banner';

import './Home.css'
import AboutThesis from './AboutThesis';
import Gallery from './Gallery';
import ThesisIdea from './ThesisIdea/ThesisIdea';

const Home = () => {
    return (
        <div className='gradient-background'>
            <Banner></Banner>
            <AboutThesis></AboutThesis>
            <ThesisIdea></ThesisIdea>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;