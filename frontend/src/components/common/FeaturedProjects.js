import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedProjects = ({ projects }) => {
    const featuredProjects = projects.filter(project => project.featured);

    return (
        <div className="featured-projects-container">
            <h2>Featured Projects</h2>
            <div className="projects-grid">
                {featuredProjects.map(project => (
                    <div key={project.id} className="project-card">
                        <img src={project.imageUrl} alt={project.title} className="project-image" />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <Link to={`/projects/${project.id}`} className="button">Read More</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedProjects;
