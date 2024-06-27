import React from 'react';
import { Link } from 'react-router-dom';  

const HeroSection = () => {
  return (
    <div className="container" style={{ textAlign: 'center', padding: '50px 20px' }}>
      <h1>Welcome to My Personal Portfolio</h1>
      <p>I am an aspiring cybersecurity professional.</p>
      <Link to="/projects" className="button">View My Projects</Link>
    </div>
  );
};

export default HeroSection;