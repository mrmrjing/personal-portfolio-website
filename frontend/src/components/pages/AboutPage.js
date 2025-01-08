import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutPage = () => {
    return (
        <div className="container mt-5">
            <div className="row align-items-center">
                {/* Profile Image */}
                <div className="col-md-4 text-center mb-4 mb-md-0">
                    <img
                        src={`${process.env.PUBLIC_URL}/Personal Profile Pic.JPG`}
                        alt="Toh Hong Jing"
                        className="img-fluid rounded-circle shadow-lg"
                        style={{ maxWidth: '250px' }}
                    />
                </div>

                {/* About Text */}
                <div className="col-md-8">
                    <div
                        style={{
                            backgroundColor: '#f8f9fa', // Light grey background
                            padding: '10px',
                            borderRadius: '10px',
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                            color: '#000', // Set text color to black
                        }}
                    >
                        <p className="lead">
                            Hello! I'm <strong>Toh Hong Jing</strong>, an aspiring cybersecurity professional with basic experience in network security, data protection, and software security. I am currently pursuing my computer science degree and actively involved in several cybersecurity projects.
                        </p>
                        <p className="lead">
                            My goal is to help organizations secure their digital assets and protect their data from unauthorized access. I am passionate about cybersecurity and always eager to learn new things in this field.
                        </p>
                        <p className="lead">
                            If you wish to contact me for collaborations or consultancy, please reach out via email or connect with me on LinkedIn.
                        </p>
                        <p>
                            <strong>Email:</strong>{' '}
                            <a
                                href="mailto:hongjing123321@gmail.com"
                                className="text-primary font-weight-bold"
                            >
                                hongjing123321@gmail.com
                            </a>
                        </p>
                        <p>
                            <strong>LinkedIn:</strong>{' '}
                            <a
                                href="https://www.linkedin.com/in/toh-hong-jing-454ba417a"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary font-weight-bold"
                            >
                                Toh Hong Jing
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
