import React from 'react';
import { useParams } from 'react-router-dom';
import projectsData from './ProjectsData';
import PDFViewer from '../common/PDF.js';

const ProjectDetailPage = () => {
    const { projectId } = useParams();
    const project = projectsData.find(p => p.id.toString() === projectId);

    return (
      <div className="project-detail-container">
        <h1>{project.title}</h1>
        <img src={project.imageUrl} alt={project.title} />
        <p>{project.description}</p>
        {/* <PDFViewer file={process.env.PUBLIC_URL + project.pdf} /> */}

      </div>
    );
};

export default ProjectDetailPage;
