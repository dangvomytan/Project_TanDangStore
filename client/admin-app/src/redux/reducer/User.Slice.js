import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserApi } from "../../api/User.api";

// get all
export const handleGetAllUser = createAsyncThunk("GetAllUser", async () => {
  const responce = await UserApi.getDataAllUser();
  return responce;
});

//register 
export const handleRegisterUser = createAsyncThunk(
  "registerUser",
  async (payload) => {
    const responce = await UserApi.registerUser(payload);
    return responce;
  }
);
//login
export const handleLoginUser = createAsyncThunk(
  "loginUser",
  async (payload) => {
    const responce = await UserApi.loginUser(payload);
    const user ={name:responce.data.fullName, r:responce.data.role, s:responce.data.status}
    responce &&
      localStorage.setItem("User", JSON.stringify(user));
    responce &&
      localStorage.setItem("AccessToken", JSON.stringify(responce.accessToken));
    return responce;
  }
);
//update
export const handleUpdateUser = createAsyncThunk(
  "updateuser",
  async (payload) => {
    const responce = await UserApi.updateUser(payload);
    return responce;
  }
);
//delete
export const handleDeleteUser = createAsyncThunk(
  "deleterUser",
  async (payload) => {
    const responce = await UserApi.deleteUser(payload);
    return responce;
  }
);

const UserSlice = createSlice({
  name: "user",
  initialState: [],
  reducers:{
     handelLogoutUser:(state)=>{
       localStorage.removeItem("Users");
       localStorage.removeItem("AccessToken");
       return state=[];
     }
   },
  extraReducers: {
    [handleGetAllUser.fulfilled]: (state, action) => {
      state = action.payload;
      return state;
    },

    [handleRegisterUser.fulfilled]: (state, action) => {
      state = action.payload;
      return state;
    },
    [handleUpdateUser.fulfilled]: (state, action) => {
      state = action.payload;
      return state;
    },
    [handleDeleteUser.fulfilled]: (state, action) => {
      console.log(action.payload);
      state = action.payload;
      return state;
    },
  },
});
const { actions, reducer } = UserSlice;

export const { handelLogoutUser } = actions;

export default reducer;
