import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProductApi } from "../../api/Product.api";



// get all
export const getAllProduct = createAsyncThunk("getAllProduct", async () => {
  const responce = await ProductApi.getDataAllProduct();
  return responce;
});
// create 
export const handleAddProduct = createAsyncThunk("handleAddProduct", async (data) => {
  const responce = await ProductApi.createProduct(data);
  return responce;
});
// update
export const handleUpdateProduct = createAsyncThunk("handleUpdateProduct", async (data) => {
  const responce = await ProductApi.updateProduct(data);
  return responce;
});
// delete
export const handleDeleteProduct = createAsyncThunk("handleDeleteProduct", async (data) => {
  const responce = await ProductApi.deleteProduct(data);
  return responce;
});


const ProductSlice = createSlice({
  name: "product",
  initialState: [],
  extraReducers: {
    [getAllProduct.fulfilled]: (state, action) => {
      state = action.payload;
      return state;
    },
    [handleAddProduct.fulfilled]: (state, action) => {
      state = action.payload;
      return state;
    },
    [handleUpdateProduct.fulfilled]: (state, action) => {
      state = action.payload;
      return state;
    },
    [handleDeleteProduct.fulfilled]: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});
const { reducer } = ProductSlice;


export default reducer;
