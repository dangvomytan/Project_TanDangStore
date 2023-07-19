import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { VersionApi } from "../../api/Version.api";


// get  By Id product
export const handleGetByIdProduct = createAsyncThunk("GetByIdProduct", async (id) => {
  const responce = await VersionApi.getByIdProduct(id);
  return responce;
});
// create 
export const handleAddVersion = createAsyncThunk("handleAddVersion", async (data) => {
  const responce = await VersionApi.createVersion(data)
  return responce;
});
// update 
export const handleUpdateVersion = createAsyncThunk("handleUpdateVersion", async (data) => {
  const responce = await VersionApi.updateVersion(data);
  return responce;
});
// delete
export const handleDeleteVersion = createAsyncThunk("handleDeleteVersion", async (data) => {
  const responce = await VersionApi.deleteVersion(data);
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
    [handleAddVersion.fulfilled]: (state, action) => {
      state = action.payload;
      return state;
    },
    [handleUpdateVersion.fulfilled]: (state, action) => {
      state = action.payload;
      return state;
    },
    [handleDeleteVersion.fulfilled]: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});
const { reducer } = VersionSlice;

export default reducer;
