import React, { useState } from 'react';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';

const App = () => {
    const [products, setProducts] = useState([]);

    const handleProductAdded = (newProduct) => {
        setProducts([...products, newProduct]);
    };

    return (
        <div>
            <h1>LALITA</h1>
            <ProductForm onProductAdded={handleProductAdded} />
            <ProductList products={products} />
        </div>
    );
};

export default App;
