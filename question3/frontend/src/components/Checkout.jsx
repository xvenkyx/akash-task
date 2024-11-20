import React, { useState } from 'react';

const Checkout = () => {
    const [originalTotal] = useState(200); // Example total amount
    const [discountCode, setDiscountCode] = useState('');
    const [discount, setDiscount] = useState(0);
    const [finalTotal, setFinalTotal] = useState(originalTotal);
    const [message, setMessage] = useState(''); // State for UI messages
    const [messageType, setMessageType] = useState(''); // success or error

    const handleApplyDiscount = async () => {
        try {
            const response = await fetch('http://localhost:3000/apply-discount', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ originalTotal, discountCode }),
            });
            const data = await response.json();

            if (data.success) {
                setDiscount(data.discount);
                setFinalTotal(data.finalTotal);
                setMessage('Discount applied successfully!');
                setMessageType('success');
            } else {
                setMessage(data.message); // Invalid discount code message
                setMessageType('error');
            }
        } catch (error) {
            setMessage('Error applying discount. Please try again later.');
            setMessageType('error');
        }
    };

    return (
        <div>
            <h2>Checkout</h2>
            <p>Original Total: ${originalTotal}</p>
            <input
                type="text"
                placeholder="Enter Discount Code"
                value={discountCode}
                onChange={(e) => setDiscountCode(e.target.value)}
            />
            <button onClick={handleApplyDiscount}>Apply Discount</button>

            {/* message */}
            {message && (
                <p
                    style={{
                        color: messageType === 'success' ? 'green' : 'red',
                        marginTop: '10px',
                    }}
                >
                    {message}
                </p>
            )}

            <p>Discount: ${discount}</p>
            <p>Final Total: ${finalTotal}</p>
        </div>
    );
};

export default Checkout;
