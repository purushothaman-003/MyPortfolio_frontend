import React from 'react';

const SkillTemplate = ({ imgSrc, name }) => {
    return (
        <section id="skills">
            <div className="flex flex-col items-center">
                <img src={imgSrc} alt={name} className="w-20 h-20 object-contain" />
                <p className="mt-2 text-lg font-bold">{name}</p>
            </div>
        </section>
    );
};

export default SkillTemplate;
