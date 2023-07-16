import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CartItemApi } from "../../api/CartItem.api";


// get all
export const getAllCartItem = createAsyncThunk("getAllCartItem", async () => {
  const responce = await CartItemApi.getCartItem();
  return responce;
});


// get  By Id
export const getAllCartItemById = createAsyncThunk("getAllCartItem", async (data) => {
  const responce = await CartItemApi.getCartItemById(data);
  console.log(responce);
  return responce;
});

// add to cart
export const AddToCart = createAsyncThunk("AddToCart", async (data) => {
  const responce = await CartItemApi.AddCartItem(data);
     console.log("res",responce);
  return responce;
});



const CartItemSlice = createSlice({
  name: "cartItem",
  initialState: [],
  extraReducers: {
    [AddToCart.fulfilled]: (state, action) => {
      state = action.payload;
      return state;
    },
    [getAllCartItem.fulfilled]: (state, action) => {
      state = action.payload;
      return state;
    },
    [getAllCartItemById.fulfilled]: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});
const { reducer } = CartItemSlice;


export default reducer;
