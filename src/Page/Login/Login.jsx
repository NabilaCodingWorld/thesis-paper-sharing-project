import React, { useContext, useState } from 'react';
import { FaEye, FaRegEye } from 'react-icons/fa';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {


    // show password
    const [showPassword, setShowPassword] = useState(false);

    const passwordShow = () => {
        setShowPassword(!showPassword);
    };

    const { loggIn } = useContext(AuthContext)

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loggIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Logged In Done',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true })
            })
    }

    return (
        <div className='login-gradients-backgrounds'> <br /><br />

            <div className="divider text-4xl text-white">Log In Please</div>  <br />

            <div className="flex justify-center items-center">

                <form onSubmit={handleLogin} className='bg-white bg-opacity-10 p-10 rounded-xl animate-pulse'>
                    {/* email */}
                    <div className="mb-4">

                        <label className="block font-bold mt-4 text-white text-xl" htmlFor="message">
                            Message
                        </label>

                        <input
                            id="email"
                            type="email"
                            name="email"
                            className="input input-bordered mt-1 block w-[600px]"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    {/* password */}
                    <div className="mb-4">

                        <label className="block font-bold mt-4 text-white text-xl" htmlFor="message">
                            Message
                        </label>

                        <div className="relative">
                            <input
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                className="input input-bordered mt-1 block w-full pr-12 text-black"
                                placeholder="Enter your password"
                                required
                            />

                            <div
                                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                                onClick={passwordShow}
                            >

                                {showPassword ? (
                                    <FaEye></FaEye>
                                ) : (
                                    <FaRegEye className='text-blue-400'></FaRegEye>
                                )}
                            </div>

                        </div>
                    </div>

                    <div className="mt-6">
                        <input
                            style={{
                                background: 'linear-gradient(260deg, rgba(239, 13, 121, 1) 0%, rgba(174, 8, 140, 1) 71%)',
                                color: '#fff',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer',
                            }}
                            className="btn btn-primary w-full" type="submit" value="Log In" />
                    </div>
                </form>
            </div> <br />

            <h1 className='text-center  font-bold text-white'>Are You New Here? First <Link className='text-blue-500' to='/signUp'>Sign Up</Link> </h1> <br /> <br />
        </div>
    );
};

export default Login;