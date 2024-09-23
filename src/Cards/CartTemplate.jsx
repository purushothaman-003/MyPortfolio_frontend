import React from 'react';

const CardTemplate = ({ icon, title, description }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 relative transition-transform duration-300 hover:scale-105 hover:shadow-xl"  data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom" data-aos-duration="1000">
            {/* Border only in the right-bottom corner */}
            <div className="absolute right-0 bottom-0 w-1/5 h-2/6 border-r-4 border-b-4 border-fuchsia-300"></div>

            <div className="text-4xl text-blue-500 mb-4">
                {icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};

export default CardTemplate;
