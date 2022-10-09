# using middleware

- middleware adds extra functionality to our redux

## how to use middleware

- configureStore function takes object as an argument
- by convention we pass reducer as 1st property of this object and middleware as 2nd property

## Example : here we'll make use of redux-logger middleware

```zsh
npm i npm i redux-logger
```

- project/app/store.js

```js
const {configureStore} = require("@reduxjs/toolkit");
const cakeReducer = require("../features/cake/cakeSlice");
const icecreamReducer = require("../features/icecream/icecreamSlice");
const reduxLogger = require("redux-logger");

const logger = reduxLogger.createLogger();

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

module.exports = store;
```
