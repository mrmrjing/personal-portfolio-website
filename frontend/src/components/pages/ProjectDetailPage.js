import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import projectsData from './ProjectsData';
import PDFViewer from '../common/PDF.js';
import ViewPDFButton from '../common/ViewPDFButton.js';

const ProjectDetailPage = () => {
  const { projectId } = useParams();
  const project = projectsData.find(p => p.id.toString() === projectId);

  // State to manage PDF visibility
  const [showPDF, setShowPDF] = useState(false);

  if (!project) {
      return <div>Project not found</div>;
  }

  // Construct the PDF file URL
  const pdfUrl = `${process.env.PUBLIC_URL}/${project.pdf}`;

  // Function to toggle PDF visibility
  const togglePDFVisibility = () => {
      setShowPDF(!showPDF);
  };

  return (
      <div className="project-detail-container">
          <h1>{project.title}</h1>
          <img src={project.imageUrl} alt={project.title} />
          <p>{project.description}</p>
          {/* Conditionally render PDF Viewer */}
          {showPDF && <PDFViewer file={pdfUrl} />}
          {/* Button to toggle PDF visibility */}
          <ViewPDFButton onClick={togglePDFVisibility} />
      </div>
  );
};

export default ProjectDetailPage;
