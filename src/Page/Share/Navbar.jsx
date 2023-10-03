import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const navOption = <>
        <Link to="/"><li><a className='hover:text-white'>Home</a></li></Link>

        <Link to="/thesisPaper"><li><a className='hover:text-white'>Thesis Paper</a></li></Link>

        <Link to="/contact"><li className='hover:text-white'><a className='hover:text-white'>Contact</a></li></Link>

        
        <Link to="/submit"><li><a className='hover:text-white'>Submit Paper</a></li></Link>
        
        <Link to="/login"><li><a className='hover:text-white'>Login</a></li></Link>
    </>

    return (
        <div>
            <div className="navbar bg-[#141f42] text-white font-bold">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                            {navOption}

                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Share Thesis Paper</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOption}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;