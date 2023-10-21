import React, { useEffect, useState } from 'react';
import SharePaper from './SharePaper';
import Pagination from '../../ThesisPaper/Pagination';
import { Helmet } from 'react-helmet-async';

const Approve = () => {

    const [approves, setApproves] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(2);

    useEffect(() => {
        fetch('https://thesis-paper-sharing-project-server.vercel.app/thesisPaperAll')
            .then(res => res.json())
            .then(data => setApproves(data))
    }, [])

    const lastPageIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPageIndex - postsPerPage;
    const currentPosts = approves.slice(firstPostIndex, lastPageIndex);


    const handleConfirm = _id => {
        fetch(`https://thesis-paper-sharing-project-server.vercel.app/thesisPaperAll/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ status: 'confirm' }),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    // update state
                    const remaining = approves.filter(approve => approve._id !== _id);
                    const updated = approves.find(approve => approve._id === _id);
                    updated.status = 'confirm'
                    const newApprove = [updated, ...remaining];
                    setApproves(newApprove);
                }
            });
    };


    return (
        <div>
            
            <Helmet> <title> Thesis Paper | Approve </title> </Helmet>
            <div>
                {
                    currentPosts.map(approve => <SharePaper key={approve._id} approve={approve} handleConfirm={handleConfirm} ></SharePaper>)
                }
            </div>

            <Pagination
                totalPosts={approves.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />

        </div>

    );
};

export default Approve;