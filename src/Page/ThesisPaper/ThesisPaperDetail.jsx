import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ThesisPaperDetail = () => {

    const thesis = useLoaderData();

    const {photo, author, category, message} = thesis;

    return (
        <div>
            <p className='text-center text-white text-xl font-bold my-10'>{author}</p>

            <p className='text-center text-white text-4xl font-bold my-10'>{category}</p>
            
            <center><img className='h-[400px] w-[80%] mb-10' src={photo} alt="" /></center>

            <p className='text-center text-white text-4xl font-bold my-10'>Description:</p>

            <p className='text-center text-white text-xl mb-10 md:mx-20 mx-5'>{message}</p>

            <center> <button className='btn btn-warning'> <Link to='/'>Back to Home</Link> </button> </center> <br />
        </div>
    );
};

export default ThesisPaperDetail;