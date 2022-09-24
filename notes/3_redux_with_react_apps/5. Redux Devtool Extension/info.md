# Redux Devtool Extension

## steps

1. install redux devtool in chrome
2. install "redux-devtools-extension" npm dependency in project

```zsh
npm i redux-devtools-extension
```

3. modify src/redux/store.js

- wrap 2nd param for createStore() in composeWithDevTools() method

```js
import {applyMiddleware, createStore} from "redux";
import logger from "redux-logger";
import rootReducer from "./rootReducer";
import {composeWithDevTools} from "redux-devtools-extension";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger))
);

export default store;
```
