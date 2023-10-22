import React, { useEffect, useState } from 'react';
import Photo from './Photo';

const Gallery = () => {
    const [photos, setPhotos] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const initialDisplayCount = 6;

    useEffect(() => {
        fetch(' https://thesis-paper-sharing-project-server.vercel.app/confirmThesisPaperAll')
            .then(res => res.json())
            .then(data => setPhotos(data))
    }, [])

    const toggleShowAll = () => {
        setShowAll(!showAll);
    }

    return (
        <div>
            <div className="divider mt-20 md:text-4xl text-white">Gallery</div> <br /> <br />

            <div className='grid md:grid-cols-3 gap-10 mx-20'>
                {
                    showAll
                        ? photos.map(myPhoto => <Photo key={myPhoto._id} myPhoto={myPhoto} />)
                        : photos.slice(0, initialDisplayCount).map(myPhoto => <Photo key={myPhoto._id} myPhoto={myPhoto} />)
                }
            </div>

            {!showAll && (
                <button

                    style={{
                        background: 'linear-gradient(260deg, rgba(239, 13, 121, 1) 0%, rgba(174, 8, 140, 1) 71%)',
                        color: '#fff',
                        border: 'none',
                        padding: '10px 20px',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}
                    className="block mx-auto mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={toggleShowAll}
                >
                    See All
                </button>
            )}

            <br />
        </div>
    );
};

export default Gallery;
