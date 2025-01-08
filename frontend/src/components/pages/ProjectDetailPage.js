import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import projectsData from './ProjectsData';
import PDFViewer from '../common/PDF.js';
import ViewPDFButton from '../common/ViewPDFButton.js';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';

const ProjectDetailPage = () => {
  const { projectId } = useParams();
  const project = projectsData.find((p) => p.id.toString() === projectId);

  // State to manage PDF visibility
  const [showPDF, setShowPDF] = useState(false);

  if (!project) {
    return <div className="container text-center mt-5">Project not found</div>;
  }

  // Construct the PDF file URL
  const pdfUrl = project.pdf ? `${process.env.PUBLIC_URL}/${project.pdf}` : null;

  // Function to toggle PDF visibility
  const togglePDFVisibility = () => {
    setShowPDF(!showPDF);
  };

  // Function to handle YouTube link redirection
  const redirectToYouTube = () => {
    window.location.href = project.youtubeUrl;
  };

  // Inline styles
  const containerStyle = {
    color: 'white',
    backgroundColor: '#333',
    padding: '20px',
    borderRadius: '8px',
    margin: '20px auto',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '1200px',
    width: '100%',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
  };

  const titleStyle = {
    marginBottom: '20px',
    textAlign: 'center',
    fontSize: '2rem',
  };

  const paragraphStyle = {
    marginBottom: '15px',
    lineHeight: '1.6',
    fontSize: '1rem',
    textAlign: 'justify',
  };

  const buttonStyle = {
    margin: '10px',
    padding: '10px 20px',
    fontSize: '1rem',
    color: 'white',
    borderRadius: '5px',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
  };

  const pdfViewerStyle = {
    background: '#fff',
    padding: '15px',
    borderRadius: '8px',
    marginTop: '20px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
  };

  return (
    <div style={containerStyle}>
      {/* Project Title */}
      <div>
        <h1 style={titleStyle}>{project.title}</h1>
        <p style={paragraphStyle}>{project.description}</p>
      </div>

      {/* Image Gallery */}
      {project.images && project.images.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <ImageGallery items={project.images} />
        </div>
      )}

      {/* PDF Viewer */}
      {showPDF && pdfUrl && (
        <div style={{ marginTop: '20px' }}>
          <PDFViewer file={pdfUrl} style={pdfViewerStyle} />
        </div>
      )}

      {/* Buttons */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <ViewPDFButton
          onClick={togglePDFVisibility}
          style={{
            ...buttonStyle,
            backgroundColor: '#007bff',
            border: 'none',
          }}
        />

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            style={{
              ...buttonStyle,
              backgroundColor: '#343a40',
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        )}

        {project.youtubeUrl && (
          <button
            onClick={redirectToYouTube}
            style={{
              ...buttonStyle,
              backgroundColor: '#dc3545',
              border: 'none',
            }}
          >
            View on YouTube
          </button>
        )}

        {project.pdf && (
          <a
            href={pdfUrl}
            style={{
              ...buttonStyle,
              backgroundColor: '#17a2b8',
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Report
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectDetailPage;
