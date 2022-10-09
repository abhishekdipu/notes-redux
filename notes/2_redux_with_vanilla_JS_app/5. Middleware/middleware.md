# Middleware

- Is the suggested way to extend Redux with custom functionality
- It Provides a third-party extension point between dispatching an action, and the moment it reaches the reducer
- We can use middleware for logging, crash reporting, performing asynchronous tasks etc

## Some common/popular middleware.

1. redux-logger : logs all information related to redux in our application.

## how to use redux-logger middleware?

1. install

```zsh
npm i redux-logger
```

2. create logger

```js
const {createLogger} = require("redux-logger");
const logger = createLogger();
```

3. applyMiddleware to store

```js
const store = createStore(rootReducer, applyMiddleware(logger));
```
