# Logger Middleware

## steps

1. install

```zsh
npm i redux-logger
```

2. in store.js

```js
import {applyMiddleware, createStore} from "redux";
import logger from "redux-logger";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
```
