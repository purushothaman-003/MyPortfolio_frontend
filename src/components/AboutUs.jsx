import React from 'react';
import Card from '../Cards/Card'


const AboutUs = () => {
    return (
        <section id="about" className="p-10 bg-white text-gray-800">
            <h2 className="text-4xl text-center font-bold mb-6">About Me</h2>
            <p className="text-center  mx-auto text-lg w-full" data-aos="fade-up" data-aos-duration="1500">
                I'm Purushothaman, a fresher Full Stack Developer with expertise in the MERN stack. I specialize in building responsive, dynamic web applications that solve real-world problems. My strengths include problem-solving, leadership, and effective communication, and I'm always eager to explore new technologies. Currently, I’m focused on developing full-stack solutions that enhance user experience and streamline business processes.
            </p>
            <div className='w-[80%] flex flex-wrap justify-between m-auto my-8 gap-4' data-aos="fade-right" data-aos-duration="1500">
                <Card name={'Specialized'} title={'Front-end Developer, Back-end Developer, MERN-Stack Developer'} />
                <Card name={'Education'} title={'Bachelore of Computer Application'} description={'Thiruvalluvar University'} />
                <Card name={'Certification'} title={'Sucessfully completed Full Stact development course at'} description={'Error Makes Clevar Acadamy'} />
                <Card name={'Skill'} title={'ReactJs, NodeJs, ExpressJs, MongoDB'} />
                <Card name={'Languvage'} title={'English, Tamil'} />
                <Card name={'Contact'} title={'Email: purushothaman17dev@gmail.com Phone_no: +91 9361533364'} />
            </div>
        </section>
    );
};

export default AboutUs;
