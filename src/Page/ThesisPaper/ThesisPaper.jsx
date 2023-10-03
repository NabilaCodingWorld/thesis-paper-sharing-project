import React, { useEffect, useState } from 'react';
import Thesis from './Thesis';
import './Thesis.css'
import Pagination from './Pagination';


const ThesisPaper = () => {

    const [papers, setPapers] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(6);

    useEffect(() => {
        fetch('thesisPaper.json')
            .then(res => res.json())
            .then(data => setPapers(data))
    }, [])

    const lastPageIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPageIndex - postsPerPage;
    const currentPosts = papers.slice(firstPostIndex, lastPageIndex);



    return (
        <div className='gradients-backgrounds'>

            <div className="hero h-80" style={{ backgroundImage: 'url(https://img.freepik.com/premium-photo/robotic-hand-pressing-keyboard-laptop_117023-903.jpg?w=826)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-3xl font-bold">Share Your Thesis Paper</h1>

                        <form className="w-full max-w-sm mx-auto">
                            <div className="flex items-center rounded-xl  border-2 border-black border-opacity-30 py-2">
                                <input
                                    className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
                                    type="text"
                                    placeholder="Search..."
                                    aria-label="Search"
                                />
                                    <button
                                        className="flex-shrink-0 bg-indigo-500 hover:bg-indigo-700 border-indigo-500 hover:border-indigo-700 text-sm border-4 text-white py-1 px-2  rounded"
                                        type="button"
                                    >
                                        Search
                                    </button>
                            </div>
                        </form>

                    </div>
                </div>
            </div> <br /> <br />

            <div className="divider text-4xl text-white my-20">Shared Thesis Paper</div>

            <div className='grid md:grid-cols-3 gap-5 mx-10 '>
                {
                    currentPosts.map(paper => <Thesis key={paper._id} paper={paper}></Thesis>)
                }
            </div> <br />

            <Pagination
                totalPosts={papers.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}

            ></Pagination>
        </div>
    );
};

export default ThesisPaper;