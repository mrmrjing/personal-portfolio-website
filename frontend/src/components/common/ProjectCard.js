import React from 'react';

const ProjectCard = ({ project }) => {
    return (
        <div style={{
            width: '300px', 
            margin: '20px',
            backgroundColor: '#1E2A47', 
            borderRadius: '10px',
            overflow: 'hidden',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)', 
            color: '#FFFFFF' 
        }}>
            <img src={project.imageUrl} alt={project.title} style={{
                width: '100%', 
                height: '200px', 
                objectFit: 'cover' 
            }} />
            <div style={{ padding: '10px' }}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" style={{
                    color: '#61DAFB', 
                    textDecoration: 'none', 
                    fontWeight: 'bold'
                }}>View on GitHub</a>
            </div>
        </div>
    );
};

export default ProjectCard;
