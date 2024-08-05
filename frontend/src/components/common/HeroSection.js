import React from 'react';
import { Link } from 'react-router-dom';  

const HeroSection = () => {
  return (
    <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '50px 20px' }}>
      <div style={{ maxWidth: '60%' }}>
        <h1>Welcome to My Personal Portfolio</h1>
        <p>I am an aspiring cybersecurity professional.</p>
        <Link to="/projects" className="button">View My Projects</Link>
      </div>
      <img src="/cyber-wallpaper.jpg" alt="Profile" style={{ width: '400px', height: '300px', borderRadius: '0%' }} />
    </div>
  );
};

export default HeroSection;
