import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CartApi } from "../../api/Cart.api";

// get all
export const getAllCart = createAsyncThunk("getCart", async () => {
  const responce = await CartApi.getDataCart();
  return responce;
});
// get by id
export const getCartById = createAsyncThunk("getCart", async (data) => {
  const responce = await CartApi.getDataCartById(data);
  return responce;
});

const CartSlice = createSlice({
  name: "cart",
  initialState: [],
  extraReducers: {
     [getAllCart.fulfilled]: (state, action) => {
      state = action.payload;
      return state;
    },
    [getCartById.fulfilled]: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});
const { reducer } = CartSlice;


export default reducer;
