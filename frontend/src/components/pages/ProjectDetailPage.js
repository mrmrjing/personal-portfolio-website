import React from 'react';
import { useParams } from 'react-router-dom';
import projectsData from './ProjectsData';
import PDFViewer from '../common/PDF.js';
import ViewPDFButton from '../common/ViewPDFButton.js';

const ProjectDetailPage = () => {
  const { projectId } = useParams();
  const project = projectsData.find(p => p.id.toString() === projectId);

  if (!project) {
      return <div>Project not found</div>;
  }

  // Construct the PDF file URL
  const pdfUrl = `${process.env.PUBLIC_URL}/${project.pdf}`;

  return (
      <div className="project-detail-container">
          <h1>{project.title}</h1>
          <img src={project.imageUrl} alt={project.title} />
          <p>{project.description}</p>
          {/* PDF Viewer can still be used to display the PDF on the page if needed */}
          <PDFViewer file={pdfUrl} />
          {/* Button to open PDF in a new tab */}
          <ViewPDFButton pdfUrl={pdfUrl} />
      </div>
  );
};

export default ProjectDetailPage;