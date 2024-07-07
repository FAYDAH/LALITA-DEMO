import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const ProductForm = ({ onProductAdded }) => {
  const [product, setProduct] = useState({
    name: '',
    price: 0,
    quantity: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/products', product);
      onProductAdded(response.data);
      setProduct({ name: '', price: 0, quantity: 0 });
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={product.name} onChange={handleChange} />
      </div>
      <div>
        <label>Price:</label>
        <input type="number" name="price" value={product.price} onChange={handleChange} />
      </div>
      <div>
        <label>Quantity:</label>
        <input type="number" name="quantity" value={product.quantity} onChange={handleChange} />
      </div>
      <button type="submit">Add Product</button>
    </form>
  );
};

// Adding PropTypes validation
ProductForm.propTypes = {
  onProductAdded: PropTypes.func.isRequired,
};

export default ProductForm;
