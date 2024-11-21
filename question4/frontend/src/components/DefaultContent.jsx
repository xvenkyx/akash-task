import React from 'react';

const DefaultContent = () => {
    const defaultContent = [
        {
            title: 'New Products',
            description: 'Stay tuned for more details of our latest product!',
        },
        {
            title: 'Deals',
            description: 'Dont miss out our latest offers and discounts on a variety of products!',
        },
        {
            title: 'Promotions',
            description: 'Join us in celebrating our company milestones.',
        },
        {
            title: 'Major Strides',
            description: 'Recent advancements and innovations.',
        },
    ];

    return (
        <div>
            <h1>Highlights</h1>
            {defaultContent.map((item, index) => (
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
