import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DemoApi } from "../../api/Demo.api";

// get all
export const getAll = createAsyncThunk("getAllUser", async () => {
  const responce = await DemoApi.getDataAll();
  return responce;
});

// get  By Id
// export const getById = createAsyncThunk("getAllUser", async () => {
//   const responce = await DemoApi.getById();
//   return responce;
// });

const demoSlice = createSlice({
  name: "demo",
  initialState: [],
  // khong su dung bat dong bo
  // reducers:{
  //     logout:(state)=>{
  //       localStorage.removeItem("Users");
  //       localStorage.removeItem("AccessToken");
  //     }
  //   },
  extraReducers: {
    [getAll.fulfilled]: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});
const { actions, reducer } = demoSlice;

export const { logout } = actions;

export default reducer;
