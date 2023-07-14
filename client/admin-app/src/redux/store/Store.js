import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../reducer/Index";

const store = configureStore({
  reducer: rootReducer,
});
export default store;
