import React, { useEffect, useState } from 'react';
import Idea from './Idea';

const ThesisIdea = () => {

    const [ideas, setIdeas] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/thesisIdea')
            .then(res => res.json())
            .then(data => setIdeas(data))
    }, [])

    return (


        <div>

            <div className="divider mt-20 md:text-4xl text-white">Latest Thesis Idea</div> <br /> <br />



            <div className='mx-20'>
                {
                    ideas.map(idea => <Idea key={idea._id} idea={idea}></Idea>)
                }
            </div>

        </div>


    );
};

export default ThesisIdea;