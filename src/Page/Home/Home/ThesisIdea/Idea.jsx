import React from 'react';

const Idea = ({ idea }) => {

    const { name, about } = idea;

    return (
        <div>

            
            <div className="collapse bg-white bg-opacity-10 text-white animate-pulse">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-2xl font-medium">
                    {name}
                </div>
                <div className="collapse-content text-xl">
                    <p>{about}</p>
                </div>
            </div> <br />
        </div>
    );
};

export default Idea;