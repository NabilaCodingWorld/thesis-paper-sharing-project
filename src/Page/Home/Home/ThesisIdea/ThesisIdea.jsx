import React, { useEffect, useState } from 'react';
import Idea from './Idea';

const ThesisIdea = () => {

    const [ideas, setIdeas] = useState([]);

    useEffect(() => {
        fetch(' https://thesis-paper-sharing-project-server.vercel.app/thesisIdea')
            .then(res => res.json())
            .then(data => setIdeas(data))
    }, [])

    return (


        <div>

            <p className='text-pink-700 md:text-2xl font-bold text-center mt-10'>Thesis Paper</p>
            <p className='md:text-3xl text-white text-center  font-bold mb-10'>Share Thesis Idea </p>



            <div className='md:mx-20 mx-5 grid md:grid-cols-2 md:gap-10 gap-5'>
                {
                    ideas.map(idea => <Idea key={idea._id} idea={idea}></Idea>)
                }
            </div>

        </div>


    );
};

export default ThesisIdea;