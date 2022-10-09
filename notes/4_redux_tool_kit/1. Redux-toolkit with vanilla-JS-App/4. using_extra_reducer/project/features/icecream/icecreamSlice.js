const {createSlice} = require("@reduxjs/toolkit");
const {cakeActions} = require("../cake/cakeSlice");

const initialState = {
  numOfIcecream: 10,
};
const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIcecream--;
    },
    restocked: (state, action) => {
      state.numOfIcecream += action.payload;
    },
  },
  // extraReducers: {
  //   ["cake/ordered"]: (state, action) => {
  //     state.numOfIcecream--;
  //   },
  // },
  extraReducers: (builder) => {
    builder.addCase(cakeActions.ordered, (state, action) => {
      state.numOfIcecream--;
    });
  },
});

module.exports = icecreamSlice.reducer;
module.exports.icecreamAction = icecreamSlice.actions;
