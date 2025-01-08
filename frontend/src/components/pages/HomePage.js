import React from 'react';
import HeroSection from '../common/HeroSection';
import FeaturedProjects from '../common/FeaturedProjects';
import projectsData from './ProjectsData';

const HomePage = () => {
  return (
    <div className="container">
      <header className="text-center my-4">
        <h1>Welcome to My Portfolio</h1>
      </header>
      <HeroSection />
      <section className="mt-5">
        <FeaturedProjects projects={projectsData} />
      </section>
    </div>
  );
};

export default HomePage;
