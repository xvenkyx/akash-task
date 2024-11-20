const discountCodes = {
    SAVE10: 10, // $10 discount
    SAVE20: 20, // $20 discount
    PERCENT15: 0.15, // 15% discount
};

export const applyDiscount = (req, res) => {
    const { originalTotal, discountCode } = req.body;

    if (!discountCode || !discountCodes[discountCode]) {
        return res.status(400).json({ success: false, message: 'Invalid discount code.' });
    }

    const discountValue = discountCodes[discountCode];
    let discount = 0;

    if (discountValue < 1) {
        // Percentage discount
        discount = originalTotal * discountValue;
    } else {
        // Fixed discount
        discount = discountValue;
    }

    const finalTotal = originalTotal - discount;
    res.json({ success: true, discount, finalTotal });
};
