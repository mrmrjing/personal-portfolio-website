import React from 'react';

const Footer = () => {
    return (
        <footer style={{ padding: '20px', textAlign: 'center', backgroundColor: '#333', color: 'white' }}>
            <a href="https://github.com/mrmrjing" target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px' }}>
                <svg width="30" height="30" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#FFFFFF" d="M10,0.4c-5.5,0-10,4.5-10,10c0,4.4,2.9,8.1,6.8,9.4c0.5,0.1,0.7-0.2,0.7-0.5v-1.7c-2.8,0.6-3.4-1.3-3.4-1.3
                        c-0.5-1.1-1.1-1.4-1.1-1.4c-0.9-0.6,0.1-0.6,0.1-0.6c1,0.1,1.5,1,1.5,1c0.9,1.5,2.3,1.1,2.9,0.8c0.1-0.6,0.3-1.1,0.6-1.4
                        c-2.2-0.3-4.6-1.1-4.6-4.8c0-1.1,0.4-1.9,1-2.6c-0.1-0.2-0.4-1.3,0.1-2.7c0,0,0.8-0.3,2.8,1c0.8-0.2,1.7-0.3,2.5-0.3
                        c0.8,0,1.7,0.1,2.5,0.3c2-1.3,2.8-1,2.8-1c0.5,1.4,0.2,2.5,0.1,2.7c0.6,0.7,1,1.6,1,2.6c0,3.7-2.4,4.5-4.6,4.8
                        c0.3,0.3,0.6,0.8,0.6,1.7v2.5c0,0.3,0.2,0.6,0.7,0.5c3.9-1.3,6.8-5,6.8-9.4C20,4.9,15.5,0.4,10,0.4z"/>
                </svg>
            </a>
            <p>© 2024 My Cybersecurity Portfolio. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
