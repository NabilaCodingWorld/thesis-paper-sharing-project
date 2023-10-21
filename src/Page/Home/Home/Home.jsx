import React from 'react';
import Banner from './Banner/Banner';

// import './Home.css'
import AboutThesis from './AboutThesis';
import Gallery from './Gallery';
import ThesisIdea from './ThesisIdea/ThesisIdea';
import Aim from '../Aim/Aim';
import ThesisPaper from '../../ThesisPaper/ThesisPaper';
import ChatBot from '../ChatBot/ChatBot';
import Contact from '../../Contact/Contact';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div className='gradient-background'>

            <Helmet> <title>Thesis Paper | Home</title> </Helmet>

            <Banner></Banner>
            <AboutThesis></AboutThesis>
            <Aim></Aim>
            <ThesisPaper></ThesisPaper>
            <ThesisIdea></ThesisIdea>
            <Gallery></Gallery>
            <ChatBot></ChatBot>
            <Contact></Contact>
        </div>
    );
};

export default Home;