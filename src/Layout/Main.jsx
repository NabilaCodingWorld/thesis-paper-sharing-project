import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Page/Share/Navbar';
import Footer from '../Page/Share/Footer';
import './Main.css'

const Main = () => {
    return (
        <div className='main-gradients-backgrounds'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;