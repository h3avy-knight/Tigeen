import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "addProducts",
  initialState: {
    value: [{ headerColor: "#ff0000" }],
  },
  reducers: {
    addColor: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addColor, deleteProduct } = appSlice.actions;

export default appSlice.reducer;
