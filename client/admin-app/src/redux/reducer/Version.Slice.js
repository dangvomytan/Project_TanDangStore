import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { VersionApi } from "../../api/Version.api";


// get  By Id product
export const handleGetByIdProduct = createAsyncThunk("GetByIdProduct", async (id) => {
  const responce = await VersionApi.getByIdProduct(id);
  return responce;
});

const VersionSlice = createSlice({
  name: "version",
  initialState: [],
  extraReducers: {
    [handleGetByIdProduct.fulfilled]: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});
const { reducer } = VersionSlice;

export default reducer;
