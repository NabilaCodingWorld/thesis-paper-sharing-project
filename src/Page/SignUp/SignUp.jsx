import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaRegEye } from 'react-icons/fa';
import './SignUp.css'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const SignUp = () => {

    const { createUser, updateUserProfile } = useContext(AuthContext)

    // show password
    const [showPassword, setShowPassword] = useState(false);

    const passwordShow = () => {
        setShowPassword(!showPassword);
    };

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();


    const navigate = useNavigate();


    // 1
    // const onSubmit = data => {

    //     console.log(data)

    //     createUser(data.email, data.password)

    //         // 2
    //         .then(result => {
    //             const loggedUser = result.user;
    //             console.log(loggedUser)

    //             updateUserProfile(data.name, data.photoURL)

    //                 // 3
    //                 .then(() => {

    //                     const saveUser = { name: data.name, email: data.email }


    //                     // 5
    //                     fetch(' https://thesis-paper-sharing-project-server.vercel.app/user', {
    //                         method: 'POST',
    //                         // 6
    //                         headers: {
    //                             'content-type': 'application/json'

    //                             // 6
    //                         },
    //                         body: JSON.stringify(saveUser)

    //                         // 5
    //                     })
    //                         .then(res => res.json())
    //                         .then(data => {
    //                             if (data.inserted) {
    //                                 console.log('Sign In')
    //                                 reset();

    //                                 // 4
    //                                 Swal.fire({
    //                                     position: 'top-end',
    //                                     icon: 'success',
    //                                     title: 'Your work has been saved',
    //                                     showConfirmButton: false,
    //                                     timer: 1500

    //                                     // 4
    //                                 })
    //                                 navigate('/login');
    //                             }
    //                         })



    //                     // 3
    //                 })

    //                 .catch(error => console.log(error))

    //             // 2
    //         })


    //     // 1
    // }



    const onSubmit = data => {

        createUser(data.email, data.password)
            .then(result => {

                const loggedUser = result.user;
                console.log(loggedUser);

                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email };
                        fetch(' https://thesis-paper-sharing-project-server.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User created successfully.',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/login');
                                }
                            })



                    })
                    .catch(error => console.log(error))
            })
    };

    return (
        <div className='signUp-gradients-backgrounds'> <br /> <br />

            <div className="divider text-4xl text-white">Sign Up Please</div>  <br />


            <div className='flex justify-center items-center'> <br />
                <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-10 rounded-xl bg-opacity-10 animate-pulse">

                    {/* Name */}
                    <div className="mb-4">

                        <label className="block font-bold mt-4 text-white text-xl" htmlFor="message">
                            Name:
                        </label>

                        <input
                            id="name"
                            type="name"
                            {...register("name", { required: true })}
                            name="name"
                            className="input input-bordered mt-1 block w-[600px]"
                            placeholder="Enter your name"

                        />
                        {errors.name && <span className='text-red-500'>Name field is required</span>}
                    </div>

                    {/* Email */}

                    <div className="mb-4">

                        <label className="block font-bold mt-4 text-white text-xl" htmlFor="message">
                            Email:
                        </label>

                        <input
                            id="email"
                            type="email"
                            {...register("email", { required: true })}
                            name="email"
                            className="input input-bordered mt-1 block w-full"
                            placeholder="Enter your email"

                        />
                        {errors.email && <span className='text-red-500'>Email field is required</span>}
                    </div>

                    {/* password */}

                    <label className="block font-bold mt-4 text-white text-xl" htmlFor="message">
                        Password:
                    </label>

                    <div className="mb-4 text-black relative">
                        <input
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            {...register("password", {
                                required: true,
                                minLength: 6,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$%^&*])/
                            })}
                            name="password"
                            className="input input-bordered mt-1 block w-full"
                            placeholder="Enter your password"
                        />
                        {errors.password?.type === 'required' && <p className='text-red-500'>Password is required</p>}
                        {errors.password?.type === 'minLength' && <p className='text-red-500'>Password should be at least 6 characters</p>}
                        {errors.password?.type === 'pattern' && <p className='text-red-500'>Password should contain at least one capital letter and one special character</p>}

                        <div
                            className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                            onClick={passwordShow}
                        >
                            {showPassword ? (
                                <FaEye className='text-blue-400'></FaEye>
                            ) : (
                                <FaRegEye className='text-blue-400'></FaRegEye>
                            )}
                        </div>
                    </div>




                    {/* Photo URL */}
                    <div className="mb-4">

                        <label className="block font-bold mt-4 text-white text-xl" htmlFor="message">
                            Photo URL:
                        </label>

                        <input
                            id="text"
                            type="photoURL"
                            {...register("photoURL", { required: true })}
                            name="photoURL"
                            className="input input-bordered mt-1 block w-full"
                            placeholder="Enter your Photo Url"

                        />
                        {errors.photoURL?.type === 'required' && <p className='text-red-500'>Photo-Url is required</p>}
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
                            className="btn btn-primary w-full" type="submit" value="Sign Up" />
                    </div>
                </form> <br />

            </div> <br />

            <h1 className='text-center my-5 font-bold pb-5 text-white'>If you have account already? So <Link to="/login" className='text-yellow-700'>Log In</Link> </h1> <br />

        </div>
    );
};

export default SignUp;