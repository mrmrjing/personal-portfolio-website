import React from 'react';
import '../../assets/styles/AboutPage.css';  

const AboutPage = () => {
    return (
        <div className="about-container">
            <h1>About Me</h1>
            <div className="about-content">
                <img src="/Personal Profile Pic.JPG" alt="Toh Hong Jing" className="profile-image" />
                <div className="about-text">
                    <p>Hello! I'm <strong>Toh Hong Jing</strong>, an aspiring cybersecurity professional with basic experience in network security, data protection, and software security. I am currently pursuing my computer science degree and actively involved in several cybersecurity projects.</p>
                    <p>My goal is to help organizations secure their digital assets and protect their data from unauthorized access. I am passionate about cybersecurity and always eager to learn new things in this field.</p>
                    <p>If you wish to contact me for collaborations or consultancy, please reach out via email or connect with me on LinkedIn.</p>
                    <p>Email: <a href="hongjing123321@gmail.com">hongjing123312@gmail.com</a></p>
                    <p>LinkedIn: <a href="https://www.linkedin.com/in/hong-jing-toh-454ba417a/" target="_blank" rel="noopener noreferrer">Toh Hong Jing</a></p>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
