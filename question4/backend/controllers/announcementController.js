export const getAnnouncements = (req, res) => {
    const announcements = [
        { title: 'Sales Update', content: 'We need more sales' },
        { title: 'Finance Update', content: 'Quarterly finance reports sent' },
        { title: 'HR Update', content: 'Team dinner today' },
    ];

    res.json(announcements);
};
