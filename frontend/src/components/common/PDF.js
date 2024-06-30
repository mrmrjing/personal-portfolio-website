import React from 'react';
// Import the main component and styles
import { Worker, Viewer } from '@react-pdf-viewer/core';
// Import the default layout plugin
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Import styles needed for the default layout
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';


const PDFViewer = ({ file }) => {
    // Create new instance of the default layout plugin
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    return (
        <div>
            {/* Check if the file is provided */}
            {file ? (
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.10.377/build/pdf.worker.min.js">
                    <div style={{ height: '750px' }}>
                        <Viewer
                            fileUrl={file}
                            plugins={[defaultLayoutPluginInstance]}
                        />
                    </div>
                </Worker>
            ) : (
                <div>No PDF file provided.</div>
            )}
        </div>
    );
};

export default PDFViewer;
