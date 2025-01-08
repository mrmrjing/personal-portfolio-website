import React from 'react';
import { Link } from 'react-router-dom'; 

const HeroSection = () => {
  return (
    <div className="text-center py-5 bg-dark text-white">
      <h1>I am an aspiring cybersecurity professional</h1>
      <p>Check out my latest projects below.</p>
      <Link to="/projects" className="btn btn-primary mt-3">
        View My Projects
      </Link>
    </div>
  );
};

export default HeroSection;
