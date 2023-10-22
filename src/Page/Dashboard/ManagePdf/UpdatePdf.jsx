import React from 'react';
import { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdatePdf = () => {

    const update = useLoaderData();

    const formRef = useRef(null);

    const { photo, date,  author, category, message, _id} = update;

    const handleUpdatePaper = event => {

        event.preventDefault();
        const form = event.target;

        const photo = form.photo.value;
        const date = form.date.value;
        const author = form.author.value;
        const category = form.category.value;
        const message = form.message.value;

        const submitData = {  photo, date,  author, category, message, _id: _id }
        console.log(submitData);

        fetch(` https://thesis-paper-sharing-project-server.vercel.app/thesisPaper/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(submitData)
        })
            .then(res => res.json())
            .then(data => {
                console.log('inserted data')
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                    })

                    // Reset the form
                    form.reset();
                }
            })

    }



    return (
        <div>
            
            <Helmet> <title> Thesis Paper | UpdatePdf </title> </Helmet>
            <form ref={formRef} onSubmit={handleUpdatePaper} className="mt-8 space-y-6">


                <div className='md:w-[500px]'>

                    <label className="block mt-5 text-gray-700 text-sm font-bold">
                        Photo:
                    </label>
                    <input
                        type="photoURL"
                        id="photo"
                        name="photo"
                        className="w-full p-3 mt-2 border rounded-md"
                        placeholder="Photo"
                        defaultValue={photo}

                    /> <br />

                   </div>


                <div className='w-full'>
                    <label className="block text-gray-700 text-sm font-bold">
                        Date:
                    </label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        className="w-full p-3 mt-2 border rounded-md"
                        placeholder="John Doe"
                        defaultValue={date}
                    />
                </div>

                <div className='w-full'>
                    <label className="block text-gray-700 text-sm font-bold">
                        Subject:
                    </label>
                    <input
                        type="text"
                        id="author"
                        name="author"
                        className="w-full p-3 mt-2 border rounded-md"
                        placeholder="John Doe"
                        defaultValue={author}
                    />
                </div>


                <div>
                    <label className="block text-gray-700 text-sm font-bold">
                        Message
                    </label>
                    <textarea
                        className="w-full p-3 mt-2 border rounded-md"
                        rows="4"
                        id='message'
                        name='message'
                        defaultValue={message}
                        placeholder="Your message here..."
                    ></textarea>
                </div>


                <div>
                    <select
                        id="category"
                        name="category"
                        className="w-full p-3 mt-2 border rounded-md"
                        defaultValue={category}
                    >
                        <option value="">Select a category</option>
                        <option value="Networking">Networking</option>
                        <option value="Machine Learning">Machine Learning</option>
                        <option value="Data Base Management Systen<">Data Base Management Systen</option>
                        <option value="Data Warehouse">Data Warehouse</option>
                    </select>
                </div>



                <div>
                    <button
                        type="submit"
                        className="w-full py-2.5 text-white bg-blue-500 rounded-md hover:bg-blue-700"
                    >
                        Submit
                    </button>
                </div>
            </form> <br />
        </div>
    );
};

export default UpdatePdf;