import React from 'react';

const ViewPDFButton = ({ pdfUrl }) => {
    const handleViewPDF = () => {
        window.open(pdfUrl, '_blank');
    };

    return (
        <button onClick={handleViewPDF} style={{ margin: '10px', padding: '8px 15px', fontSize: '16px', cursor: 'pointer' }}>
            View PDF
        </button>
    );
};
export default ViewPDFButton;  