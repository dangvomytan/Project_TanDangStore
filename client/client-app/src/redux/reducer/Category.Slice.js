import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CategoryApi } from "../../api/Category.api";


// get all
export const getAllCategory = createAsyncThunk("getAllCategory", async () => {
  const responce = await CategoryApi.getDataAll();
  return responce;
});



const categorySlice = createSlice({
  name: "category",
  initialState: [],
  extraReducers: {
    [getAllCategory.fulfilled]: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});
const { actions, reducer } = categorySlice;

// export const { logout } = actions;

export default reducer;
