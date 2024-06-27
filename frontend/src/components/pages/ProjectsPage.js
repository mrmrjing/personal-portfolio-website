// Main page for listing all projects 
import React from 'react';
import ProjectCard from '../common/ProjectCard';

const projectsData = [
  {
    id: 1,
    title: 'Network Security Audit Tool',
    description: 'A comprehensive tool designed to audit and report network security vulnerabilities.',
    imageUrl: '/path/to/image1.jpg'
  },
  {
    id: 2,
    title: 'Encrypted Data Transmission Simulator',
    description: 'This project simulates the process of encrypting and transmitting data securely over the internet.',
    imageUrl: '/path/to/image2.jpg'
  },
  {
    id: 3,
    title: 'Web Application Firewall',
    description: 'A custom WAF designed to protect web applications from common security threats and attacks.',
    imageUrl: '/path/to/image3.jpg'
  }
];

const ProjectsPage = () => {
  return (
    <div style={{ backgroundColor: '#0A192F', color: '#8892B0' }}>
      <h1 style={{ textAlign: 'center', paddingTop: '20px' }}>My Cybersecurity Projects</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', padding: '20px' }}>
        {projectsData.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
