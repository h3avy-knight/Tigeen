import { configureStore } from "@reduxjs/toolkit";
// import appSliceReducer from "../features/appProduct/appSlice";
import appSliceReducer from "../features/addData/appSlice";

export const store = configureStore({
  reducer: {
    appSliceReducer,
  },
});
