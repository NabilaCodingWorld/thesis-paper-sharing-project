import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ManageData = ({p, handleDelete}) => {

    const {date, author, message, category, _id} = p;

    return (
        <div className='border-2 md:p-10 p-2 md:mx-20 mx-5 text-center my-20' >
            <p className='md:text-2xl mb-5 font-bold'>{author}</p>
            <p className='mb-5 text-xl text-gray-500'>{message}</p>
            <div className='divider'></div>
            <div className='flex md:gap-5 gap-2 md:justify-evenly text-xl text-gray-500'>
                <p>{category}</p>
                <p>{date}</p>
            </div>

            <div className='flex md:justify-evenly mt-10'>

                <Link to={`update/${_id}`}><FaEdit className='h-8 w-8 text-blue-700'></FaEdit></Link>

                <button onClick={() => handleDelete(_id)}><FaTrashAlt className='h-6 w-6 text-red-700'></FaTrashAlt></button>
            </div>
        </div>
    );
};

export default ManageData;