import React from 'react';

const DefaultContent = () => {
    const placeholderContent = [
        {
            title: 'New Product Launch',
            description: 'We are excited to announce the release of our latest product! Stay tuned for more details.',
        },
        {
            title: 'Exclusive Deals',
            description: 'Check out our latest offers and discounts on a variety of products. Don’t miss out!',
        },
        {
            title: 'Company Promotions',
            description: 'Join us in celebrating our employees’ achievements and company milestones.',
        },
        {
            title: 'Major Strides',
            description: 'We’re making progress! Read about our recent advancements and innovations.',
        },
    ];

    return (
        <div>
            <h1>Highlights</h1>
            {placeholderContent.map((item, index) => (
                <div
                    key={index}
                    style={{
                        marginBottom: '20px',
                        padding: '10px',
                        border: '1px solid #ddd',
                    }}
                >
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    );
};

export default DefaultContent;
