import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProductApi } from "../../api/Product.api";



// get all
export const getAllProduct = createAsyncThunk("getAllProduct", async () => {
  const responce = await ProductApi.getDataAllProduct();
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
  },
});
const { reducer } = ProductSlice;


export default reducer;
