// Main page for listing all projects 
import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/ProjectPage.css';
import projectsData from './ProjectsData';



const ProjectsPage = () => {
  return (
    <div className="projects-container">
      {projectsData.map(project => (
        <div key={project.id} className="project-card">
          <img src={project.imageUrl} alt={project.title} className="project-image" />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <Link to={`/projects/${project.id}`} className="button">Read More</Link>
        </div>
      ))}
    </div>
  );
};

export default ProjectsPage;
