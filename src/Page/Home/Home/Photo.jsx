import React from 'react';

const Photo = ({ myPhoto }) => {

    const { photo, writter } = myPhoto ;

    return (
        <div>

            <div className="group inline-block overflow-hidden relative">
                <img className="transition-transform transform group-hover:scale-110 h-80 " src={photo} alt="" />
            </div>

            <p className='text-center text-white mt-2 text-xl'>{writter}</p>

        </div>
    );
};

export default Photo;