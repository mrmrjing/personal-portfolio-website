import React from 'react';

const ViewPDFButton = ({ onClick }) => {
    return (
        <button onClick={onClick} style={{ margin: '10px', padding: '8px 15px', fontSize: '16px', cursor: 'pointer' }}>
            View PDF
        </button>
    );
};

export default ViewPDFButton;