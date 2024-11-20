import React, { useState } from 'react';
import AnnouncementBoard from './components/AnnouncementBoard';
import DefaultContent from './components/DefaultContent'; // New component for default content
import './App.css'

const App = () => {
    const [isVisible, setIsVisible] = useState(true);

    return (
        <div>
            <button onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? 'Hide Announcements' : 'Show Announcements'}
            </button>
            {isVisible ? <AnnouncementBoard /> : <DefaultContent />}
        </div>
    );
};

export default App;