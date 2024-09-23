import React from 'react';
import { FaWhatsapp, FaInstagram, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import profile_img from "../Assets/Me.jpg"
import AnimatedName from '../Cards/AnimatedName';
import resume from "../document/resume.pdf"

const HeroSection = () => {

    return (
        <section className="flex flex-col items-center justify-center h-screen bg-fuchsia-50 py-24 p-8 md:py-16" id='hero_section' data-aos="fade-down" data-aos-duration="1500">
            {/* Image */}
            <div className="mb-8 md:mt-16">
                <img
                    src={profile_img}
                    alt="Profile"
                    className="rounded-full w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 object-cover"
                />
            </div>

            {/* Hero Content */}
            <div className="text-center">
                <h1 className="text-xl font-bold text-gray-800 mb-4 md:text-xl lg:text-xl">
                    Hi There!
                </h1>
                <h1 className="text-3xl font-bold text-gray-800 mb-4 md:text-5xl lg:text-5xl">
                    <AnimatedName />
                </h1>

                <p className=" text-gray-600 mb-4 md:text-2xl lg:text-2xl tracking-wide">
                    Full Stack Developer with expertise in MERN technologies
                </p>

                <div className='md:flex md:justify-around md:items-center flex-wrap'>
                    <div className='flex justify-center gap-4'>
                        <button class="bg-sky-950 text-sky-400 border border-sky-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                            <span class="bg-sky-400 shadow-sky-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                            <a href="#contact">
                                Hire Me !
                            </a>
                        </button>
                        <button class="bg-green-950 text-green-400 border border-green-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                            <a href={resume} download="Purushothaman_Resume.pdf">
                                <span class="bg-green-400 shadow-green-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                                Download CV
                            </a>
                        </button>
                    </div>
                    <div>
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
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
