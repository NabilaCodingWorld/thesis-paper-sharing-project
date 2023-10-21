import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ManageData from './ManageData';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const ManagePdf = () => {

    const { user } = useContext(AuthContext);

    const [pdf, setPdf] = useState([]);

    const url = `https://thesis-paper-sharing-project-server.vercel.app/thesisPaper?email=${user?.email}`;


    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setPdf(data))
    }, [])


    const handleDelete = (_id) => {
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
    
            fetch(`https://thesis-paper-sharing-project-server.vercel.app/thesisPaper/${_id}`, {
              method: 'DELETE'
            })
              .then(res => res.json())
              .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                  const updatedPdf = pdf.filter(item => item._id !==_id);
                  setPdf(updatedPdf);
    
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
          
          <Helmet> <title> Thesis Paper | Manage Paper </title> </Helmet>
            <div>
                <center> <Link to="/dashboard/myCart"><button className='my-20 btn btn-warning'>Back To Home</button></Link>
                    <div className='divider md:text-3xl mx-5 md:mx-20 text-[#E9B64B] mb-20'>Manage Your Data</div>
                </center>

                <div>
                    {
                        pdf.map(p => <ManageData key={p._id} p={p} handleDelete={handleDelete} ></ManageData> )
                    }
                </div>

            </div>
        </div>
    );
};

export default ManagePdf;