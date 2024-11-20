import React from 'react';

const AnnouncementSection = ({ title, content }) => {
    return (
        <div style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ddd' }}>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    );
};

export default AnnouncementSection;
