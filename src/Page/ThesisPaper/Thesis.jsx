import React from 'react';
import { Link } from 'react-router-dom';


const Thesis = ({ paper }) => {

    const {picture, img, author, name, email, 
        message, category, _id } = paper;

   

    return (
        <div className='hover:translate-y-2 hover:shadow-2xl duration-300'>
            <div className='grid md:grid-cols-2 gap-5 justify-center items-center border-2 p-5  rounded-t-lg bg-white bg-opacity-30'>
                <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={picture} />
                    </div>
                </div>

                <div className='text-white'>
                    <p>{name}</p>

                    <p>{email}</p>
                </div>
            </div>

            <div className='border-2 p-5 text-center text-white rounded-b-lg'>
                <p className='text-3xl my-3 font-bold'>{author}</p>


                <Link to={`/thesisPaper/${_id}`}> <button className="btn btn-outline btn-primary btn-sm text-white mt-5 hover:w-36 duration-500">Read More</button> </Link>
            </div>


        </div>
    );
};

export default Thesis;