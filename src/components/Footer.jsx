import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter, FaWhatsapp} from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-fuchsia-200 text-white py-8">
            <div className="container mx-auto px-6 md:px-12">
                {/* Top Section */}
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Contact Information */}
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-lg font-semibold text-black">Contact Me</h3>
                        <p className="mt-2 text-black">Email: purushothaman17dev@gmail.com</p>
                        <p className="mt-2 text-black">Phone no:  +91 9361533364</p>
                    </div>

                    {/* Social Media Links */}
                    <div className="flex justify-center space-x-4 mt-4">
                            <a href="https://wa.me/919361533364?text=Hi dude! 🙌" target="_blank" rel="noopener noreferrer" className="text-green-500 text-3xl duration-300 hover:scale-150">
                                <FaWhatsapp />
                            </a>
                            <a href="https://www.instagram.com/003__purushoth?igsh=ZG4xdXoyY3hqdjVm" target="_blank" rel="noopener noreferrer" className="text-pink-500 text-3xl  duration-300 hover:scale-150">
                                <FaInstagram />
                            </a>
                            <a href="https://www.linkedin.com/in/purushothaman17/" target="_blank" rel="noopener noreferrer" className="text-blue-500 text-3xl  duration-300 hover:scale-150">
                                <FaLinkedin />
                            </a>
                            <a href="https://github.com/purushothaman-003/" target="_blank" rel="noopener noreferrer" className="text-gray-800 text-3xl  duration-300 hover:scale-150">
                                <FaGithub />
                            </a>
                            <a href="https://x.com/Purushoth__003?t=vhRQ7Vs_IHM_Bf5OfWfrXg&s=09" target="_blank" rel="noopener noreferrer" className="text-blue-400 text-3xl  duration-300 hover:scale-150">
                                <FaTwitter />
                            </a>
                        </div>
                </div>

                {/* Divider */}
                <hr className="my-6 border-gray-900" />

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Navigation Links */}
                    <nav className="flex space-x-6 text-black text-sm">
                        <a href="#" className="hover:text-pink-500 transition">Home</a>
                        <a href="#about" className="hover:text-pink-500 transition">About</a>
                        <a href="#myservices" className="hover:text-pink-500 transition">Services</a>
                        <a href="#projects" className="hover:text-pink-500 transition">Projects</a>
                        <a href="#contact" className="hover:text-pink-500 transition">Contact</a>
                    </nav>

                    {/* Copyright */}
                    <p className="text-black text-sm mt-4 md:mt-0">
                        &copy; {new Date().getFullYear()} Purushothaman. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
