import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }


    const renderAvatar = () => {
        if (user) {
            return (
                <div className="avatar">
                    <div className="w-12 md:ml-40 ml-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={user.photoURL} title={user.displayName} alt={user.displayName} />
                    </div>
                </div>
            );
        }

    }

    const navOption = <>
        <Link to="/"><li><a className='hover:text-white'>Home</a></li></Link>

        {/* <Link to="/thesisPaper"><li><a className='hover:text-white'>PDF Paper</a></li></Link> */}

        <Link to="/blog"><li className='hover:text-white'><a className='hover:text-white'>Blog</a></li></Link>


        {/* <Link to="/submit"><li><a className='hover:text-white'>Submit Paper</a></li></Link> */}

        {
            user ?

                <>

                    <Link to="/dashboard/myCart"><li><a className='md:hover:text-white md:text-neutral-content text-black'>Dashboard</a></li></Link>

                    <button onClick={handleLogOut} className='btn btn-warning btn-xs'>Logout</button>

                </>

                :
                <><Link to="/login"><li><a className='hover:text-white'>LogIn</a></li></Link></>
        }


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

                <div className="navbar-end mr-10">
                    {user && (
                        <div >
                            {renderAvatar()}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;