import products from '../models/product.js';

const getProducts = (req, res) => {
    res.json(products);
};

export default getProducts;