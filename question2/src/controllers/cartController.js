import products from "../models/product.js";
import cart from "../models/cart.js";

export const addToCart = (req, res) => {
    const product = products.find(p => p.id === req.body.productId);
    if (product) {
        cart.push(product);
        res.status(201).json({ message: 'Product added to cart', cart });
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
};

export const getCart = (req, res) => {
    res.json(cart);
};