import React, { useEffect, useState } from 'react';
import './ManagePaper.css'
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import Swal from 'sweetalert2';

const ManagePaper = () => {


    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/thesisPaper')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    const [axiosSecure] = useAxiosSecure();


    const handleDelete = item => {
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

                axiosSecure.delete(`/thesisPaper/${item._id}`)
                    .then(res => {
                        console.log('deleted res', res.data);
                        if (res.data.deletedCount > 0) {
                            refetch();
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
        <div className='manage-gradients-backgrounds overflow-hidden'> <br />


            <div className="divider text-4xl text-white">Manage Your Data</div>  <br />

            <div className="w-full text-white">
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr className='text-white'>
                                <th>#</th>
                                <th>Image</th>
                                <th>Author</th>
                                <th>Description</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                blogs.map((item, index) => <tr key={item._id}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.img} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td >
                                        {item.author}
                                    </td>

                                    <td className='bg-white bg-opacity-10 p-3 w-[600px]'>
                                        {item.description}
                                    </td>

                                    <td>
                                        <button className="btn btn-ghost btn-xs"> <FaEdit className='h-8 w-8'></FaEdit> </button>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button>
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div> <br />

        </div>
    );
};

export default ManagePaper;