import React from 'react';
import HeroSection from '../common/HeroSection';
import FeaturedProjects from '../common/FeaturedProjects';
import projectsData from './ProjectsData';


const HomePage = () => {
  return (
    <div>
      <header>
        {/* Header content */} 
      </header>
      <HeroSection />
      <FeaturedProjects projects={projectsData} />
    </div>
  );
};


export default HomePage;
