import React from 'react';

const Idea = ({ idea }) => {

    const { name, about } = idea;

    return (
        <div className='bg-white md:p-10 p-3 bg-opacity-10 text-white rounded-2xl'>

            <p className='text-center font-bold mb-5 md:text-3xl'>{name}</p>

            <p className='md:text-xl'>{about}</p>
            
        </div>
    );
};

export default Idea;