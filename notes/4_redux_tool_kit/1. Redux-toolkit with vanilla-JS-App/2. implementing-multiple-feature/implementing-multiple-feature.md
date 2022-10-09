# implementing single feature

- here we'll be implementing **cake and icecream** feature

1. project/features/cake/cakeSlice.js

```js
const createSlice = require("@reduxjs/toolkit").createSlice;

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

module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;
```

2. project/features/cake/icecreamSlice.js

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
});

module.exports = icecreamSlice.reducer;
module.exports.icecreamAction = icecreamSlice.actions;
```

3. project/app/store.js

```js
const {configureStore} = require("@reduxjs/toolkit");
const cakeReducer = require("../features/cake/cakeSlice");
const icecreamReducer = require("../features/icecream/icecreamSlice");

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
  },
});

module.exports = store;
```

4. project/index.js

```js
const store = require("./app/store");
const {cakeActions} = require("./features/cake/cakeSlice");
const {icecreamAction} = require("./features/icecream/icecreamSlice");

console.log("Initial state :", store.getState());
const unsubscribed = store.subscribe(() => {
  console.log("Updated state :", store.getState()); //Initial state : { cake: { numOfCakes: 10 }, icecream: { numOfIcecream: 10 } }
});

store.dispatch(cakeActions.ordered()); //Updated state : { cake: { numOfCakes: 9 }, icecream: { numOfIcecream: 10 } }
store.dispatch(icecreamAction.ordered()); //Updated state : { cake: { numOfCakes: 9 }, icecream: { numOfIcecream: 9 } }
store.dispatch(cakeActions.restocked(10)); //Updated state : { cake: { numOfCakes: 19 }, icecream: { numOfIcecream: 9 } }
store.dispatch(icecreamAction.restocked(10)); //Updated state : { cake: { numOfCakes: 19 }, icecream: { numOfIcecream: 19 } }

unsubscribed();
```
