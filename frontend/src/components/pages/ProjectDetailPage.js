import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import projectsData from './ProjectsData';
import PDFViewer from '../common/PDF.js';
import ViewPDFButton from '../common/ViewPDFButton.js';
import 'react-image-gallery/styles/css/image-gallery.css';
import '../../assets/styles/ProjectDetailPage.css';
import ImageGallery from 'react-image-gallery';
import '../../assets/styles/PDFViewer.css';

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

  // Function to handle YouTube link redirection
    const redirectToYouTube = () => {
        window.location.href = project.youtubeUrl;
    };

  return (
    <div className="project-detail-container">
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        {/* Conditionally render PDF Viewer with a specific style or class */}
        {showPDF && <PDFViewer file={pdfUrl} className="pdfViewer" />}
        {project.images && project.images.length > 0 && (
        <ImageGallery items={project.images} />
      )}
        {/* Button to toggle PDF visibility */}
        <ViewPDFButton onClick={togglePDFVisibility} />
        {/* Conditionally render GitHub link button if the URL exists */}
        {project.githubUrl && (
          <a href={project.githubUrl} 
            style={{ margin: '10px', padding: '8px 15px', fontSize: '16px', cursor: 'pointer', textDecoration: 'none', color: 'white', background: '#007bff', borderRadius: '5px' }} 
            target="_blank" 
            rel="noopener noreferrer">
            View on GitHub
          </a>
        )}
         {project.youtubeUrl && (
        <button onClick={redirectToYouTube} style={{ margin: '10px', padding: '8px 15px', fontSize: '16px', cursor: 'pointer' }}>View on YouTube</button>
        )}
        {project.pdf && (
          <a href={`${process.env.PUBLIC_URL}/${project.pdf}`} 
            style={{ margin: '10px', padding: '8px 15px', fontSize: '16px', cursor: 'pointer', textDecoration: 'none', color: 'white', background: '#007bff', borderRadius: '5px' }} 
            target="_blank" 
            rel="noopener noreferrer">
            View Report
          </a>
        )}
        
    </div>
);
};

export default ProjectDetailPage;
