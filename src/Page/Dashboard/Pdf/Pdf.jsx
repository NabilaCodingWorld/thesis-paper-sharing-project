import React, { useContext, useRef } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const Pdf = () => {

    const formRef = useRef(null);

    const { user } = useContext(AuthContext);

    const handleSubmitPaper = event => {

        event.preventDefault();
        const form = event.target;
        
        const picture = form.picture.value;
        const photo = form.photo.value;
        const name = user?.displayName;
        const email = user?.email;
        const date = form.date.value;
        const author = form.author.value;
        const message = form.message.value;
        const category = form.category.value;

        const submitData = {picture, photo, name, email, date, author, message, category }
        console.log(submitData);

        fetch('https://thesis-paper-sharing-project-server.vercel.app/thesisPaper', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(submitData)
        })
            .then(res => res.json())
            .then(data => {
                console.log('inserted data')
                if (data.insertedId) {
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
            
            <Helmet> <title> Thesis Paper | Paper </title> </Helmet>
            <form  ref={formRef} onSubmit={handleSubmitPaper} className="mt-8 space-y-6">


                <div className='md:w-[500px]'>

                    <label className="block text-gray-700 text-sm font-bold">
                      User  Photo:
                    </label>
                    <input
                        type="photoURL"
                        id="picture"
                        name="picture"
                        className="w-full p-3 mt-2 border rounded-md"
                        placeholder="Photo"
                        defaultValue={user?.photoURL}

                    /> <br />

                    <label className="block mt-5 text-gray-700 text-sm font-bold">
                        Photo:
                    </label>
                    <input
                        type="photoURL"
                        id="photo"
                        name="photo"
                        className="w-full p-3 mt-2 border rounded-md"
                        placeholder="Photo"

                    /> <br />

                    <label className="block text-gray-700 text-sm font-bold"> <br />
                        Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full p-3 mt-2 border rounded-md"
                        placeholder="John Doe"
                        defaultValue={user?.displayName}

                    />


                    <div> <br />
                        <label className="block text-gray-700 text-sm font-bold">
                            Email:
                        </label>
                        <input
                            type="email"
                            id='email'
                            name='email'
                            className="w-full p-3 mt-2 border rounded-md"
                            placeholder="Enter Number of People"
                            defaultValue={user?.email}

                        />
                    </div>



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
                        placeholder="Your message here..."
                    ></textarea>
                </div>


                <div>
                    <select
                        id="category"
                        name="category"
                        className="w-full p-3 mt-2 border rounded-md"
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

export default Pdf;