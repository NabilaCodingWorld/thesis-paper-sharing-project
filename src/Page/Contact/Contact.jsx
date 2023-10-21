import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Marquee from 'react-fast-marquee';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaMailBulk, FaPortrait, FaTelegram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {

    const form = useRef();
    const [formData, setFormData] = useState({
        to_name: '',
        from_name: '',
        message: '',
    });
    const [message, setMessage] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_raf1dne', 'template_zyx9yps', form.current, 'kZ-0wIXZ_sZUqSWeV')
            .then((result) => {
                console.log(result.text);
                setMessage('Message sent successfully.');
                setFormData({
                    to_name: '',
                    from_name: '',
                    message: '',
                });
            })
            .catch((error) => {
                console.error(error.text);
                setMessage('An error occurred while sending the message.');
            });
    };

    return (
        <div>
            <div className='text-center mt-20'>
                <p className='text-4xl font-bold mb-3 text-white'>Contact</p> <br />
                
            </div>


            <div className="hero-content  text-neutral-content">

                <form ref={form} onSubmit={sendEmail}>
                    <div className="md:max-w-md md:w-[1000px] bg-black p-10 bg-opacity-50 text-black mx-auto rounded-xl">
                        <label className="block font-bold mb-2 text-white text-xl" htmlFor="to_name">
                            Name
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="to_name"
                            type="text"
                            name="to_name"
                            placeholder="Enter your name"
                            value={formData.to_name}
                            onChange={handleChange}

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
                            value={formData.from_name}
                            onChange={handleChange}

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
                            value={formData.message}
                            onChange={handleChange}

                        />

                        <input
                            type="submit"
                            value="Send"
                            className='w-full btn btn-warning my-2'
                        />
                    </div>
                </form>

                {message && <p className="text-white text-center text-xl mt-4">{message}</p>}
            </div>
            <br /> <br />


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