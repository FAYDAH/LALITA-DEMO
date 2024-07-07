import axios from 'axios';

const API_URL = 'http://localhost:5000/products';

export const getProducts = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const addProduct = async (product) => {
    const response = await axios.post(`${API_URL}/add`, product);
    return response.data;
};
