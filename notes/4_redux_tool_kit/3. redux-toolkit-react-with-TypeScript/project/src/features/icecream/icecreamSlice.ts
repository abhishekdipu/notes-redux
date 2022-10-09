import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ordered as cakeOrdered} from "../cake/cakeSlice";

type InitialState = {
  numOfIcecream: number;
};

const initialState: InitialState = {
  numOfIcecream: 10,
};
const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIcecream--;
    },
    restocked: (state, action: PayloadAction<number>) => {
      state.numOfIcecream += action.payload;
    },
  },
  // extraReducers: {
  //   ["cake/ordered"]: (state, action) => {
  //     state.numOfIcecream--;
  //   },
  // },
  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state, action) => {
      state.numOfIcecream--;
    });
  },
});

export default icecreamSlice.reducer;
export const {ordered, restocked} = icecreamSlice.actions;
