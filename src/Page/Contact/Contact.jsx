import React from 'react';
import './Contact.css'
import Marquee from "react-fast-marquee";
import { FaFacebook, FaLinkedin, FaGithub, FaWhatsapp, FaTelegram, FaTwitter, FaPortrait, FaMailBulk, FaInstagram } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className='contact-gradients-backgrounds'> <br /><br />

            <div className="divider text-4xl text-white">Contact Us</div> <br />

            <form>
                <div className="md:max-w-md md:w-[1000px] bg-white p-10 bg-opacity-10 rounded-lg animate-pulse text-black mx-auto">
                    <label className="block font-bold mb-2 text-white text-xl" htmlFor="to_name">
                        Name
                    </label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="to_name"
                        type="text"
                        name="to_name"
                        placeholder="Enter your name"

                    />

                    <label className="block font-bold mt-4 text-white text-xl" htmlFor="from_name">
                        Email
                    </label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="from_name"
                        type="email"
                        name="from_name"
                        placeholder="Enter your email"

                    />

                    <label className="block font-bold mt-4 text-white text-xl" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="message"
                        name="message"
                        placeholder="Enter your message"
                        rows="5"

                    />

                    <input
                        style={{
                            background: 'linear-gradient(260deg, rgba(239, 13, 121, 1) 0%, rgba(174, 8, 140, 1) 71%)',
                            color: '#fff',
                            border: 'none',
                            padding: '10px 20px',
                            borderRadius: '5px',
                            cursor: 'pointer',
                        }}
                        type="submit"
                        value="Send"
                        className='w-full mt-2'
                    />
                </div>
            </form> <br /> <br />


            <Marquee>
                <div className='flex gap-10 my-10 ml-10'>
                    <FaFacebook className='w-10 h-10' style={{ color: '#1877f2' }}></FaFacebook>
                    <FaLinkedin className='w-10 h-10' style={{ color: '#0077b5' }}></FaLinkedin>
                    <FaGithub className='w-10 h-10' style={{ color: '#333' }}></FaGithub>
                    <FaWhatsapp className='w-10 h-10' style={{ color: '#25D366' }}></FaWhatsapp>
                    <FaTelegram className='w-10 h-10' style={{ color: '#0088cc' }}></FaTelegram>
                    <FaTwitter className='w-10 h-10' style={{ color: '#1da1f2' }}></FaTwitter>
                    <FaPortrait className='w-10 h-10' style={{ color: '#000' }}></FaPortrait>
                    <FaMailBulk className='w-10 h-10' style={{ color: '#ff4500' }}></FaMailBulk>
                    <FaInstagram className='w-10 h-10' style={{ color: '#bc2a8d' }}></FaInstagram>

                </div>
            </Marquee>

        </div>
    );
};

export default Contact;