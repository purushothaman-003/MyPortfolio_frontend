import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import resume from "../document/resume.pdf"

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

    return (
        <header className="bg-fuchsia-100 text-black p-4 fixed w-full z-50" id="header">
            <nav className="flex justify-between items-center">
                <h1 className="font-bold md:text-2xl tracking-widest">𝕡𝕦𝕣𝕦𝕤𝕙𝕠𝕥𝕙𝕒𝕞𝕒𝕟 <span className='text-pink-600'>𝕂</span></h1>

                {/* Hamburger Icon for Mobile */}
                <div className="md:hidden" onClick={toggleNav}>
                    <FaBars className="text-3xl cursor-pointer" />
                </div>

                {/* Desktop Nav Links */}
                <ul className="hidden md:flex space-x-8 font-medium">
                    <li><a href="#" className="hover:text-pink-600">Home</a></li>
                    <li><a href="#about" className="hover:text-pink-600">About Us</a></li>
                    <li><a href="#myservices" className="hover:text-pink-600">My Services</a></li>
                    <li><a href="#projects" className="hover:text-pink-600">Projects</a></li>
                    <li><a href="#contact" className="hover:text-pink-600">Contact</a></li>
                </ul>

                {/* button download cv */}

                <div className='hidden md:block'>
                <a href={resume} download="Purushothaman_Resume.pdf" class="relative px-5 py-3 overflow-hidden font-medium text-black bg-fuchsia-100 border border-fuchsia-100 rounded-lg shadow-inner group">
                    <span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-pink-600 group-hover:w-full ease"></span>
                    <span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-pink-600 group-hover:w-full ease"></span>
                    <span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-pink-600 group-hover:h-full ease"></span>
                    <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-pink-600 group-hover:h-full ease"></span>
                    <span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-pink-600 opacity-0 group-hover:opacity-100"></span>
                    <span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Download CV</span>
                </a>
                </div>
                

                {/* Mobile Navbar (Sliding in from the left) */}
                <div className={`fixed top-0 left-0 h-full bg-fuchsia-100 text-black z-50 p-8 transition-transform duration-2000 ease-in-out ${navOpen ? 'translate-x-0' : '-translate-x-full'} w-3/5 md:hidden`}>
                    <div className="flex justify-end">
                        <FaTimes className="text-3xl cursor-pointer" onClick={toggleNav} />
                    </div>

                    {/* Mobile Nav Links */}
                    <ul className="flex flex-col space-y-6 mt-10">
                        <li><a href="#" className="hover:text-pink-600" onClick={toggleNav}>Home</a></li>
                        <li><a href="#about" className="hover:text-pink-600" onClick={toggleNav}>About Us</a></li>
                        <li><a href="#myservices" className="hover:text-pink-600" onClick={toggleNav}>My Services</a></li>
                        <li><a href="#projects" className="hover:text-pink-600" onClick={toggleNav}>Projects</a></li>
                        <li><a href="#contact" className="hover:text-pink-600" onClick={toggleNav}>Contact</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
