import React, { useState } from 'react';
import { FiUser, FiMail, FiMessageSquare } from 'react-icons/fi';
import axios from 'axios';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://purushothaman-portfolio.onrender.com/api/contact/submit', formData);
            console.log(response.data);
            alert('Message sent successfully');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error(error);
            alert('Error sending message');
        }
    };

    return (
        <div className="flex justify-center items-center my-8 bg-fuchsia-50" id='contact' data-aos="zoom-in" data-aos-duration="1000">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl w-full relative">

                <h2 className="text-3xl text-center text-gray-800 mb-8 font-bold">Contact Me</h2>

                <form onSubmit={handleSubmit} className="space-y-6 relative">
                    {/* Name Input */}
                    <div className="relative">
                        <label className="sr-only" htmlFor="name">Name</label>
                        <div className="flex items-center border-b-2 border-gray-300 focus-within:border-fuchsia-500 transition">
                            <FiUser className="text-gray-400 mx-2" size={24} />
                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="w-full py-2 px-4 text-gray-700 bg-transparent focus:outline-none"
                            />
                        </div>
                    </div>

                    {/* Email Input */}
                    <div className="relative">
                        <label className="sr-only" htmlFor="email">Email</label>
                        <div className="flex items-center border-b-2 border-gray-300 focus-within:border-fuchsia-500 transition">
                            <FiMail className="text-gray-400 mx-2" size={24} />
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full py-2 px-4 text-gray-700 bg-transparent focus:outline-none"
                            />
                        </div>
                    </div>

                    {/* Message Input */}
                    <div className="relative">
                        <label className="sr-only" htmlFor="message">Message</label>
                        <div className="flex items-start border-b-2 border-gray-300 focus-within:border-fuchsia-500 transition">
                            <FiMessageSquare className="text-gray-400 mx-2 mt-2" size={24} />
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleInputChange}
                                className="w-full py-2 px-4 text-gray-700 bg-transparent focus:outline-none"
                                rows="4"
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="px-6 py-2 bg-fuchsia-500 text-white font-semibold rounded-md hover:bg-fuchsia-600 transition">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
