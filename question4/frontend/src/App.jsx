import React, { useState } from 'react';
import AnnouncementBoard from './components/AnnouncementBoard';
import './App.css'

const App = () => {
    const [isVisible, setIsVisible] = useState(true);

    return (
        <div>
            <button onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? 'Hide Announcements' : 'Show Announcements'}
            </button>
            {isVisible && <AnnouncementBoard />}
        </div>
    );
};

export default App;
