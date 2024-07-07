import React, { useEffect, useState } from 'react';
import { getProducts } from '../services/productService';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            const products = await getProducts();
            setProducts(products);
        }
        fetchProducts();
    }, []);

    return (
        <div>
            <h2>Product List</h2>
            <ul>
                {products.map((product) => (
                    <li key={product._id}>
                        {product.name} - Selling Price: ₦{product.sellingPrice} - Cost Price: ₦{product.costPrice}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
