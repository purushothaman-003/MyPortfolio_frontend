import React from "react";

const Card = ({name,title,description}) => {
    return (
        <div className="w-72 bg-white rounded-b-lg border-t-2 px-4 py-2 flex flex-col justify-around shadow-md">
            <p className="text-lg font-bold font-sans">{name}</p>
            <div className="py-2">
                <p className="text-gray-400 text-sm pl-4">
                    {title}<br />
                    <span className="font-bold">{description}</span>
                </p>
            </div>
        </div>
    );
};

export default Card;
