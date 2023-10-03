import React from 'react';
import { Link } from 'react-router-dom';


const Thesis = ({paper}) => {

    const {img, author, description, category, _id} = paper;

    // Define a maximum character limit for the description
    const maxDescriptionLength = 200;

    // Truncate the description if it exceeds the maximum length
    const truncatedDescription = description.length > maxDescriptionLength
        ? description.slice(0, maxDescriptionLength) + '...' // Add ellipsis
        : description;

    return (
        <div className='bg-white p-10 bg-opacity-5 rounded-lg text-white'>

            <div className="group inline-block overflow-hidden relative">
                <img className="h-80 transition-transform transform group-hover:scale-110" src={img} alt="" />
            </div>

            <p className='text-center mt-2 text-2xl'>{author}</p>
            <p className='my-5 md:text-xl text-sm'>{truncatedDescription} <span className='text-blue-600'> <Link to={`/novel/${_id}`}> See More </Link> </span> </p>
            <p className='text-xl'>Thesis Title: <span className='font-bold'>{category}</span> </p>

            <button className='btn btn-warning mt-5'>Download Paper</button>
        </div>
    );
};

export default Thesis;