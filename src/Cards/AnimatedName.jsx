import React, { useState, useEffect } from 'react';

const AnimatedText = () => {
    const text = "I'm Purushothaman K";
    const [visibleLetters, setVisibleLetters] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setVisibleLetters((prev) => (prev < text.length ? prev + 1 : 0));
        }, 200);

        return () => clearInterval(timer);
    }, []);

    return (
        <span className="inline-block text-2xl md:text-3xl font-bold">
            {text.split('').map((letter, index) => (
                <span
                    key={index}
                    className={`inline-block transition-all duration-300 ${index < visibleLetters
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-2'
                        } ${index === 3 ? 'mr-3' : ''} ${index === text.length - 2 ? 'mr-2' : ''}`}
                >
                    {letter}
                </span>
            ))}
        </span>
    );
};

export default AnimatedText;