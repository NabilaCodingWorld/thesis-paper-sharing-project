import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './ThesisPaperDetail.css'

const ThesisPaperDetail = () => {

    const thesisPaper = useLoaderData();

    const { img, author, description, category } = thesisPaper;

    return (
        <div className='thesis-detail-gradients-backgrounds'> <br />
            <div className="divider text-4xl text-white">{category}</div> <br />

            <center>
                <div className="group inline-block overflow-hidden relative">
                    <img className="h-80 transition-transform transform group-hover:scale-110" src={img} alt="" />
                </div>
                <p className='text-gray-300'>{author}</p> <br />

                <div className='bg-white mx-20 p-10 bg-opacity-10 rounded-xl text-white animate-pulse text-xl'>{description} <br /> <br />
                
                <button
                    style={{
                        background: 'linear-gradient(260deg, rgba(239, 13, 121, 1) 0%, rgba(174, 8, 140, 1) 71%)',
                        color: '#fff',
                        border: 'none',
                        padding: '10px 20px',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}
                    className='btn mt-3'>Download Paper</button>
                </div> <br />

              

                <Link to="/thesisPaper">
                    <button
                        style={{
                            background: 'linear-gradient(260deg, rgba(239, 13, 121, 1) 0%, rgba(174, 8, 140, 1) 71%)',
                            color: '#fff',
                            border: 'none',
                            padding: '10px 20px',
                            borderRadius: '5px',
                            cursor: 'pointer',
                        }}
                        className='btn mt-3 ml-10'>Back</button>
                </Link>


            </center> <br />
        </div>
    );
};

export default ThesisPaperDetail;