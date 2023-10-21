import React from 'react';

const SharePaper = ({ approve, handleConfirm }) => {
    const { picture, photo, email, name, date, author, message, category, _id, status } = approve;

    return (
        <div className='md:mx-20 mx-5 my-20'>
            <div className='grid md:grid-cols-3 gap-10 justify-center items-center border-2 p-5 bg-gray-200 rounded-t-xl'>
                <div className="avatar placeholder">
                    <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                        <img src={picture} alt="" />
                    </div>
                </div>

                <div>
                    <p> <span>{name}</span>, {email}</p>
                    <p>{date}</p>
                </div>
            </div>

            <div className='border-2 p-5'>
                <center className='flex md:justify-between items-center'>
                    <p className='text-xl'>{author}, {category}</p>
                    <img className='w-40 rounded-xl' src={photo} alt="" />
                </center>

                <p className='my-10'>{message}</p>

                <div className='flex justify-evenly'>
                    {status === 'confirm' ? (
                        <span className="font-bold text-primary">Confirmed</span>
                    ) : (
                        <button onClick={() => handleConfirm(_id)} className="btn btn-warning btn-xs">Please Confirm</button>
                    )}

                    <button className='btn btn-error btn-sm text-white'>Delete</button>
                </div>
            </div> 
        </div>
    );
};

export default SharePaper;
