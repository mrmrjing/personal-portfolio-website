import React, { useEffect } from 'react';
import '../../assets/styles/StarsBackground.css'; 

const StarsBackground = () => {
    useEffect(() => {
        const container = document.getElementById('stars-container');
        const numberOfStars = 200; // Adjust the number of stars based on performance

        for (let i = 0; i < numberOfStars; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            const size = Math.random() * 2 + 1; // Random size from 1px to 3px
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.animationDelay = `${Math.random() * 5}s, ${Math.random() * 5}s`; // Different delays for twinkle and float
            star.style.animationDuration = `${Math.random() * 3 + 2}s, ${Math.random() * 15 + 5}s`; // Different durations for twinkle and float

            container.appendChild(star);
        }

        return () => {
            container.innerHTML = ''; // Clean up the stars when component unmounts
        };
    }, []);

    return <div id="stars-container"></div>;
};

export default StarsBackground;