# implementing single feature

- here we'll be implementing cake feature

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

2. project/app/store.js

```js
const {configureStore} = require("@reduxjs/toolkit");
const cakeReducer = require("../features/cake/cakeSlice");

const store = configureStore({
  reducer: {
    cake: cakeReducer,
  },
});

module.exports = store;
```

3. project/index.js

```js
const store = require("./app/store");
const {cakeActions} = require("./features/cake/cakeSlice");

console.log("Initial state :", store.getState()); // Initial state : { cake: { numOfCakes: 10 } }
const unsubscribed = store.subscribe(() => {
  console.log("Updated state :", store.getState());
});

store.dispatch(cakeActions.ordered()); //Updated state : { cake: { numOfCakes: 9 } }
store.dispatch(cakeActions.restocked(10)); //Updated state : { cake: { numOfCakes: 19 } }

unsubscribed();
```
