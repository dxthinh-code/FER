import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api/productApi";

export const getProducts = createAsyncThunk("products/getProducts", api.fetchProducts);
export const getProduct = createAsyncThunk("products/getProduct", api.fetchProductById);
export const createProduct = createAsyncThunk("products/createProduct", api.addProduct);
export const removeProduct = createAsyncThunk("products/removeProduct", api.deleteProduct);
export const editProduct = createAsyncThunk("products/editProduct", ({ id, product }) => api.updateProduct(id, product));

const productSlice = createSlice({
  name: "products",
  initialState: {
    list: [],
    current: null,
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.fulfilled, (state, action) => {
        state.list = action.payload.data;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.current = action.payload.data;
      });
  },
});

export default productSlice.reducer;
