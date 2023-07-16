import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CustomerApi } from "../../api/Customer.api";

// get all
export const getAllCustomer = createAsyncThunk("getAllCustomer", async () => {
  const responce = await CustomerApi.getDataAll();
  return responce;
});

// get  By Id
export const getById = createAsyncThunk("getByIdCustomer", async () => {
  const responce = await CustomerApi.getById();
  return responce;
});

//register customer
export const registerCustomer = createAsyncThunk(
  "registerCustomer",
  async (payload) => {
    const responce = await CustomerApi.registerCustomer(payload);
    return responce;
  }
);
export const loginCustomer = createAsyncThunk(
  "loginCustomer",
  async (payload) => {
    const responce = await CustomerApi.loginCustomer(payload);
    // console.log(">>>>",responce.data.firstName);
    const user ={name:responce.data.firstName,id:responce.data.id}
    responce &&
      localStorage.setItem("Users", JSON.stringify(user));
    responce &&
      localStorage.setItem("AccessToken", JSON.stringify(responce.accessToken));
    return responce;
  }
);


const CustomerSlice = createSlice({
  name: "customer",
  initialState: [],
  reducers:{
     logoutCustomer:(state)=>{
       localStorage.removeItem("Users");
       localStorage.removeItem("AccessToken");
       return state=[];
     }
   },
  extraReducers: {
    [getAllCustomer.fulfilled]: (state, action) => {
      state = action.payload;
      return state;
    },
    [getById.fulfilled]: (state, action) => {
      state = action.payload;
      return state;
    },
    [registerCustomer.fulfilled]: (state, action) => {
      state = action.payload;
      return state;
    },
    [loginCustomer.fulfilled]: (state, action) => {
      console.log(action.payload);
      state = action.payload;
      return state;
    },
  },
});
const { actions, reducer } = CustomerSlice;

export const { logoutCustomer } = actions;

export default reducer;
