import axios from "axios";
const API_URL = "http://localhost:3001/products";

export const fetchProducts = () => axios.get(API_URL);
export const fetchProductById = (id) => axios.get(`${API_URL}/${id}`);
export const addProduct = (product) => axios.post(API_URL, product);
export const deleteProduct = (id) => axios.delete(`${API_URL}/${id}`);
export const updateProduct = (id, product) => axios.put(`${API_URL}/${id}`, product);
