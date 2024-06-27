import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div style={{ width: '300px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', margin: '10px', padding: '10px', backgroundColor: '#172A45', color: '#E6F1FF', borderRadius: '5px' }}>
      <img src={project.imageUrl} alt={project.title} style={{ width: '100%', borderRadius: '5px' }} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectCard;
