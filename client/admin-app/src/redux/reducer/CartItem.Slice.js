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
  return responce;
});

// add to cart
export const AddToCart = createAsyncThunk("AddToCart", async (data) => {
  const responce = await CartItemApi.AddCartItem(data);
  return responce;
});

// update quantity
export const handleUpdateQtyCartItem = createAsyncThunk("UpdateQtyCartItem", async (data) => {
  const responce = await CartItemApi.UpadateQuantity(data);
  return responce;
});
export const handleDeleteCartItem = createAsyncThunk("DeleteCartItem", async (id) => {
  const responce = await CartItemApi.DeleteCartItem(id);
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
    [handleUpdateQtyCartItem.fulfilled]: (state, action) => {
      state = action.payload;
      return state;
    },
    [handleDeleteCartItem.fulfilled]: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});
const { reducer } = CartItemSlice;


export default reducer;
