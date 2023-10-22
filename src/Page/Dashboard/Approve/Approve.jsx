import React, { useEffect, useState } from 'react';
import SharePaper from './SharePaper';
import Pagination from '../../ThesisPaper/Pagination';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';

const Approve = () => {

    const [approves, setApproves] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(2);

    useEffect(() => {
        fetch(' https://thesis-paper-sharing-project-server.vercel.app/thesisPaperAll')
            .then(res => res.json())
            .then(data => setApproves(data))
    }, [])

    const lastPageIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPageIndex - postsPerPage;
    const currentPosts = approves.slice(firstPostIndex, lastPageIndex);


    const handleConfirm = _id => {
        fetch(` https://thesis-paper-sharing-project-server.vercel.app/thesisPaperAll/${_id}`, {
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



    const handleDeleteApprove = (_id) => {
        console.log(_id)
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
    
            fetch(` https://thesis-paper-sharing-project-server.vercel.app/thesisPaper/${_id}`, {
              method: 'DELETE'
            })
              .then(res => res.json())
              .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                  const updatedApprove = approves.filter(item => item._id !==_id);
                  setApproves(updatedApprove);
    
                  Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
                }
              })
          }
        })
    
      }


    return (
        <div>
            
            <Helmet> <title> Thesis Paper | Approve </title> </Helmet>
            <div>
                {
                    currentPosts.map(approve => <SharePaper key={approve._id} approve={approve} handleConfirm={handleConfirm} handleDeleteApprove={handleDeleteApprove} ></SharePaper>)
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