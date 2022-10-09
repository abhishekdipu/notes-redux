import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  numOfCakes: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfCakes--; //here we don't have copy state and then modify it, we can mutate state directly in redux-toolkit as it uses immer-library under the hood
    },
    restocked: (state, action) => {
      state.numOfCakes += action.payload;
    },
  },
});

export default cakeSlice.reducer;
export const {ordered, restocked} = cakeSlice.actions;
