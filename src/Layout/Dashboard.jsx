import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {

    // const isAdmin = true;

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
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">


                        {
                            isAdmin ?
                                <>
                                    <Link to="/dashboard/myCart"><li><a>Sidebar Item 1</a></li></Link>

                                    <Link to="/dashboard/user"><li><a>All User</a></li></Link>
                                </>
                                :

                                <>
                                   
                                    <Link to="/dashboard/myCart"><li><a>Sidebar Item 1</a></li></Link>
                                    <li><a>Sidebar Item 2</a></li>
                                </>
                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;