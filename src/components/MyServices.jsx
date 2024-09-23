import React from 'react';
import { FaLaptopCode, FaPenNib, FaBriefcase } from 'react-icons/fa';
import CardTemplate from '../Cards/CartTemplate';

const MyServices = () => {
    const services = [
        {
            icon: <FaLaptopCode />,
            title: 'Full Stack Web Developer',
            description: 'I build high-performance, responsive websites and applications using modern frameworks like MERN. From front-end to back-end, I ensure every layer works seamlessly.',
        },
        {
            icon: <FaPenNib />,
            title: 'Logo Designer',
            description: 'Crafting unique, eye-catching logos that represent your brand identity. I combine creativity and strategy to create designs that leave a lasting impression.',
        },
        {
            icon: <FaBriefcase />,
            title: 'Freelancer',
            description: 'I offer reliable freelance services, delivering quality projects on time. Whether it’s web development or design, I bring expertise and professionalism to every job.',
        },
    ];

    return (
        <section id='myservices' className="bg-fuchsia-50 py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <CardTemplate
                            key={index}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MyServices;
