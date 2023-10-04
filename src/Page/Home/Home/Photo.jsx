import React from 'react';

const Photo = ({ photo }) => {

    const { img, writter } = photo;

    return (
        <div>

            <div className="group inline-block overflow-hidden relative">
                <img className="transition-transform transform group-hover:scale-110 " src={img} alt="" />
            </div>

            <p className='text-center text-white mt-2 text-xl'>{writter}</p>

        </div>
    );
};

export default Photo;