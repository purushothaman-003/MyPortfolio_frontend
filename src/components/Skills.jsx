import React from 'react';
import SkillTemplate from '../Cards/SkillTemplate';
import html from '../Assets/html.png'
import css from '../Assets/css.png'
import tailwindcss from '../Assets/tailwind-css.png'
import bootstrap from '../Assets/bootstrap.png'
import javascript from '../Assets/javascript.png'
import react from '../Assets/react.png'
import nodejs from '../Assets/nodejs.png'
import express from '../Assets/express.png'
import mongodb from '../Assets/mongodb.png'
import firebase from '../Assets/firebase.png'
import git from '../Assets/git.png'
import github from '../Assets/github.png'
import vscode from '../Assets/visual-studio.png'


function Skill() {
    const imageData = [
        { imgSrc: html, name: 'HTML' },
        { imgSrc: css, name: 'CSS' },
        { imgSrc: tailwindcss, name: 'TailwindCSS' },
        { imgSrc: bootstrap, name: 'Bootstrap' },
        { imgSrc: javascript, name: 'Javascript' },
        { imgSrc: react, name: 'React' },
        { imgSrc: nodejs, name: 'NodeJS' },
        { imgSrc: express, name: 'ExpressJS' },
        { imgSrc: mongodb, name: 'MongoDB' },
        { imgSrc: firebase, name: 'Firebase' },
        { imgSrc: git, name: 'Git' },
        { imgSrc: github, name: 'Github' },
        { imgSrc: vscode, name: 'VS Code' },
    ];

    return (
        <section id="skills">
            <h1 className="text-4xl font-bold text-center my-12">Skills</h1>
            <marquee behavior="" direction="" >
                <div className="flex gap-20 mb-16">
                    {imageData.map((image, index) => (
                        <SkillTemplate key={index} imgSrc={image.imgSrc} name={image.name} />
                    ))}
                </div>
            </marquee>
        </section>
    );
}

export default Skill;

