import React, { useState } from "react";

const ProductList = () => {
  const [products] = useState([
    { id: 1, name: "Iphone 14", price: 100, category: "iOS" },
    { id: 2, name: "Samsung S24", price: 200, category: "Android" },
    { id: 3, name: "Iphone 15", price: 150, category: "iOS" },
  ]);
  const [cart, setCart] = useState([]);
  const [filter, setFilter] = useState({
    category: "",
    min: 0,
    max: Infinity,
  });

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleFilterChange = (event) => {
    setFilter({ ...filter, [event.target.name]: event.target.value });
  };

  const filteredProducts = products.filter((product) => {
    const minPrice = filter.min === "" ? 0 : Number(filter.min);
    const maxPrice =
      filter.max === "" ? Infinity : Number(filter.max);

    return (
      (!filter.category || product.category === filter.category) &&
      product.price >= minPrice &&
      product.price <= maxPrice
    );
  });

  // const filteredProducts = products.filter((product) => {
  //   return (!filter.category || product.category === filter.category) &&
  //     product.price >= filter.min &&
  //     product.price <= filter.max;
  // });

  return (
    <div>
      <h2>Products</h2>
      <div>
        <label>Category:</label>
        <input type="text" name="category" onChange={handleFilterChange} />
        <label>Min Price:</label>
        <input type="number" name="min" onChange={handleFilterChange} />
        <label>Max Price:</label>
        <input type="number" name="max" onChange={handleFilterChange} />
      </div>
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => addToCart(product)}>Buy Now</button>
          </li>
        ))}
      </ul>
      <h3>Shopping Cart</h3>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
