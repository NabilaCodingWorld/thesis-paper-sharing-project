import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const Dashboard = () => {

    // const isAdmin = true;

    const { user } = useContext(AuthContext);

    if (!user || !user.photoURL) {
        // Handle the case when user data is not available
        return <div>Loading...</div>; // or display a login prompt
    }

    const [isAdmin] = useAdmin();

    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-60  min-h-full bg-[#141F42] text-white text-xl font-bold">


                        {
                            isAdmin ?
                                <>

                                    <center>
                                        <div className="avatar">
                                            <div className="w-24 mt-10 rounded-full">
                                                <img src={user.photoURL} />
                                            </div>
                                        </div>
                                    </center>

                                    <p className='text-center text-xl mt-3 font-bold mb-10'>{user.displayName}</p>
                                    <Link to="/dashboard/approve"><li><a className=' hover:text-white' >Approve Papper</a></li></Link>

                                    <Link to="/dashboard/user"><li><a className=' hover:text-white'>All User</a></li></Link>
                                </>
                                :

                                <>

                                    <center>
                                        <div className="avatar">
                                            <div className="w-24 mt-10 rounded-full">
                                                <img src={user.photoURL} />
                                            </div>
                                        </div>
                                    </center>

                                    <p className='text-center text-xl mt-3 font-bold mb-10'>{user.displayName}</p>

                                    <Link to="/dashboard/pdf"><li><a></a>Paper</li></Link>
                                    <Link to="/dashboard/Managepdf"><li><a></a>Manage Paper</li></Link>

                                </>
                        }


                        <div className='border-t-4 border-indigo-500 mt-20'></div>
                        <Link to="/"><li><a></a>Home</li></Link>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;