import React from 'react';
import { useForm } from 'react-hook-form';
import './SubmitPaper.css'

const SubmitPaper = () => {

    const { register, handleSubmit, reset } = useForm();

    return (
        <div className='submit-gradient-background'> <br /> <br />
            
                <div className="divider text-4xl text-white">Share Your Documents</div>
                <div className="w-full p-10 flex justify-center items-center ">

                    <form className='bg-white p-10 bg-opacity-10 rounded-xl animate-pulse'>

                        {/* Name */}
                        <div className="form-control w-[800px] mb-4">

                            <label className="label">
                                <span className="label-text font-semibold text-white ">Thesis Paper Name*</span>
                            </label>
                            <input type="text" placeholder="Place Name"
                                {...register("author", { required: true, maxLength: 120 })}
                                className="input input-bordered w-full " />
                        </div>


                        {/*Description */}
                        <div className="form-control w-[800px]">
                            <label className="label">
                                <span className="label-text text-white ">Short Description</span>
                            </label>
                            <textarea {...register("text", { required: true })} className="textarea textarea-bordered h-24" placeholder="Write Something"></textarea>
                        </div>

                        {/* Image */}
                        <div className="form-control w-[800px] my-4">
                            <label className="label">
                                <span className="label-text text-white ">Add a Image*</span>
                            </label>
                            <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                        </div>

                        {/* Category */}
                        <div className="flex my-4 w-[800px]">
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text text-white ">Category*</span>
                                </label>
                                <select defaultValue="Pick One" {...register("category", { required: true })} className="select select-bordered">
                                    <option disabled>Pick One</option>
                                    <option>Web Development</option>
                                    <option>Networking</option>
                                    <option>Machine Learning</option>
                                    <option>Image Processing</option>
                                    <option>Medical</option>
                                    <option>Cryptography</option>
                                    <option>Android Application</option>
                                </select>
                            </div>
                        </div>


                        <input className="btn btn-warning text-white mt-4" type="submit" value="Add Item" /> <br /><br />
                    </form>
                </div> <br />
            </div>
        
    );
};

export default SubmitPaper;