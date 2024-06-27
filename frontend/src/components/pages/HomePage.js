import React from 'react';
import HeroSection from '../common/HeroSection';
import AboutSection from '../common/AboutSection';
import ProjectsPreview from '../common/ProjectsPreview';
import ContactCTA from '../common/Contact';
import Footer from '../common/Footer';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ProjectsPreview />
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default HomePage;
