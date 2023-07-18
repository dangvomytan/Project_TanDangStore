import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TypeApi } from "../../api/type.api";


// get all
export const getAllType = createAsyncThunk("getAllType", async () => {
  const responce = await TypeApi.getDataAll();
  return responce;
});



const typeSlice = createSlice({
  name: "type",
  initialState: [],
  extraReducers: {
    [getAllType.fulfilled]: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});
const { reducer } = typeSlice;


export default reducer;
