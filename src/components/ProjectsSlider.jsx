import React, { useState } from 'react';
import bulkmail from "../Assets/Bulkmail.png"
import actodo from "../Assets/Actodo.png"
import Greenden from "../Assets/Greenden.png"
import Image_Gallary from "../Assets/Image-gallary.png"
import loginpage from "../Assets/Loginpage.png"
import nostra from "../Assets/Nostra.png"
import tripadvisor from "../Assets/Tripadvisor.png"
import udemyclone from "../Assets/Udemyclone.png"
import weatherapp from "../Assets/Weather-app.png"


const projects = [
    { id: 1, title: 'Nostra', description: 'Using HTML, CSS and Javascript', image: nostra, github: 'https://github.com/purushothaman-003/Nostra-Ecommerce-project', live: 'https://purushothaman-003.github.io/Nostra-Ecommerce-project/' },
    { id: 2, title: 'Trip advisor - Clone', description: 'Using HTML and CSS', image: tripadvisor , github: 'https://github.com/purushothaman-003/Tripadvisor-clone', live: 'https://purushothaman-003.github.io/Tripadvisor-clone/' },
    { id: 3, title: 'Login Functionality', description: 'Using React and NodeJs', image: loginpage, github: 'https://github.com/purushothaman-003/Login-app-Frontend-Backend-'},
    { id: 4, title: 'Greenden', description: 'Using HTML, Tailwindcss and Javascript', image: Greenden, github: 'https://github.com/purushothaman-003/Greenden-tailwindCSS', live: 'https://purushothaman-003.github.io/Greenden-tailwindCSS/' },
    { id: 5, title: 'Bulk Mail', description: 'Sending multiple emails at same time Using Frontend and Backend', image: bulkmail , github: 'https://github.com/purushothaman-003/Bulkmail-backend'},
    { id: 6, title: 'Actodo', description: 'Full functionality app Using React and Tailwindcss', image: actodo, github: 'https://github.com/purushothaman-003/Actodo-project-React/', live: 'https://actodo-project-react.vercel.app/' },
    { id: 7, title: 'Weather app', description: 'Create with API and React and Tailwindscss', image: weatherapp, github: 'https://github.com/purushothaman-003/Weather-app-React', live: 'https://weather-app-react-xi-dun.vercel.app/' },
    { id: 8, title: 'Udemy clone', description: 'Create with HTML and CSS', image: udemyclone , github: 'https://github.com/purushothaman-003/Udemy-clone', live: 'https://purushothaman-003.github.io/Udemy-clone/' },
    { id: 9, title: 'Image Gallary', description: 'Create with ReactJs', image: Image_Gallary , github: 'https://github.com/purushothaman-003/React-ImageGallery/', live: 'https://react-image-gallery-iota.vercel.app/' },
];

const ProjectSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    };

    return (
        <section id="projects" className='bg-fuchsia-50 py-4' data-aos="fade-right" data-aos-duration="1500">
            <h1 className="text-4xl font-bold text-center my-12">Projects</h1>
            <div className="relative w-full overflow-hidden">
                <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {projects.map((project) => (
                        <div key={project.id} className="w-full sm:w-1/3 lg:w-1/4 flex-shrink-0 p-4">
                            <div className="relative group overflow-hidden rounded-lg shadow-lg">
                                <img src={project.image} alt={project.title} className="w-full h-48 object-cover transition-transform duration-2000 ease-in-out group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-all duration-2000 ease-in-out">
                                    <h3 className="text-2xl font-bold mb-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-2000 ease-in-out">{project.title}</h3>
                                    <p className="text-xl mb-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-2000 ease-in-out delay-100 text-center">{project.description}</p>
                                    <div className="flex space-x-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-2000 ease-in-out delay-200">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors duration-300">
                                            <span className="sr-only">GitHub</span>
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                            </svg>
                                        </a>
                                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors duration-300">
                                            <span className="sr-only">Live Demo</span>
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg">
                    <span className="sr-only">Previous</span>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                </button>
                <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg">
                    <span className="sr-only">Next</span>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
        </section>
    );
};

export default ProjectSlider;