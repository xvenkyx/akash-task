// import React from 'react';

// const AnnouncementSection = ({ title, content }) => {
//     return (
//         <div style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ddd' }}>
//             <h2>{title}</h2>
//             <p>{content}</p>
//         </div>
//     );
// };

// export default AnnouncementSection;

import React from "react";

const AnnouncementSection = ({ section }) => {
  const { title, content } = section;

  return (
    <div
      style={{
        marginBottom: "20px",
        padding: "10px",
        border: "1px solid #ddd",
      }}
    >
      <h2>{title}</h2>
      {content.type === "text" && <p>{content.description}</p>}
      {content.type === "banner" && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={content.image} alt={title} style={{ maxWidth: "100%" }} />
          {content.links &&
            content.links.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                style={{
                  display: "inline-block",
                  margin: "10px 5px",
                  padding: "8px 12px",
                  backgroundColor: "#007bff",
                  color: "#fff",
                  textDecoration: "none",
                  borderRadius: "4px",
                }}
              >
                {link.text}
              </a>
            ))}
        </div>
      )}
    </div>
  );
};

export default AnnouncementSection;
