# Extra Reducer

- Consider cake shop and ice-cream example, here if someone buys a cakes then we want to give a free ice-cream

## how to implement : there are 2 ways implement Extra-Reducer

1. add 4th property **extraReducers** in createSlice method to handle **cake/ordered** action type

- file-path : project/features/icecream/icecreamSlice.js

```js
const {createSlice} = require("@reduxjs/toolkit");

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
  extraReducers: {
    ["cake/ordered"]: (state, action) => {
      state.numOfIcecream--;
    },
  },
});

module.exports = icecreamSlice.reducer;
module.exports.icecreamAction = icecreamSlice.actions;
```

2. 2nd way : it's the recommended way

```js
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
  extraReducers: (builder) => {
    builder.addCase(cakeActions.ordered, (state, action) => {
      state.numOfIcecream--;
    });
  },
});

module.exports = icecreamSlice.reducer;
module.exports.icecreamAction = icecreamSlice.actions;
```
