export const fetchAnnouncements = async () => {
    const response = await fetch('http://localhost:3000/api/announcements');
    if (!response.ok) {
        throw new Error('Failed to fetch announcements');
    }
    return await response.json();
};
