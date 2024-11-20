// import React, { useState, useEffect } from 'react';
// import AnnouncementSection from './AnnouncementSection';
// import { fetchAnnouncements } from '../services/announcementService';

// const AnnouncementBoard = () => {
//     const [sections, setSections] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(''); // State for error messages

//     useEffect(() => {
//         const loadData = async () => {
//             try {
//                 const data = await fetchAnnouncements();
//                 setSections(data);
//                 setError(''); // Clear any previous errors if data loads successfully
//             } catch (err) {
//                 setError('Failed to load announcements. Please try again later.');
//             } finally {
//                 setLoading(false);
//             }
//         };

//         loadData();
//     }, []);

//     if (loading) return <p>Loading announcements...</p>;

//     return (
//         <div>
//             <h1>Company Announcements</h1>
            
//             {/* Display error message if there is an error */}
//             {error && <p style={{ color: 'red', fontWeight: 'bold' }}>{error}</p>}

//             {/* Render announcement sections if no error */}
//             {!error && sections.map((section, index) => (
//                 <AnnouncementSection
//                     key={index}
//                     title={section.title}
//                     content={section.content}
//                 />
//             ))}
//         </div>
//     );
// };

// export default AnnouncementBoard;

import React, { useState, useEffect } from 'react';
import AnnouncementSection from './AnnouncementSection';
import { fetchAnnouncements } from '../services/announcementService';

const AnnouncementBoard = () => {
    const [sections, setSections] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const loadAnnouncements = async () => {
            try {
                const data = await fetchAnnouncements();
                setSections(data);
                setError('');
            } catch (err) {
                setError('Failed to load announcements. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        loadAnnouncements();
    }, []);

    if (loading) return <p>Loading announcements...</p>;

    return (
        <div>
            <h1>Company Announcements</h1>
            {error && <p style={{ color: 'red', fontWeight: 'bold' }}>{error}</p>}
            {sections.map((section, index) => (
                <AnnouncementSection key={index} section={section} />
            ))}
        </div>
    );
};

export default AnnouncementBoard;

