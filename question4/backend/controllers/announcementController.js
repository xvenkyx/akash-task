export const getAnnouncements = (req, res) => {
    const announcements = [
        {
            department: 'Marketing',
            title: 'Exclusive Holiday Deals',
            content: {
                type: 'banner',
                image: 'https://picsum.photos/200',
                links: [
                    { text: 'Shop Now', url: 'https://example.com/shop' },
                ],
            },
        },
        {
            department: 'HR',
            title: 'Team Dinner',
            content: {
                type: 'text',
                description: 'Join us for the team dinner on Christmas.',
            },
        },
        {
            department: 'Finance',
            title: 'Quarterly reports are ready',
            content: {
                type: 'text',
                description: 'Check the updates for the 3rd quarter. Contact Finance dept for any queries',
            },
        },
    ];

    res.json(announcements);
};
