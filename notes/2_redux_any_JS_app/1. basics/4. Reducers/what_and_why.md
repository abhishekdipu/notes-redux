# Reducers

- Specify how the app's state changes in response to actions sent to the store
- Function that accepts state and action as arguements, and returns the next state of the application

```js
(previousState, action) => newState;
```

## how to use reducer?

1. see the initialState/prevState

```js
const initialState = {
  numOfCakes: 10,
};
```

2. create a reducer funtion

```js
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state, //=> copy all store data
        numOfCakes: state.numOfCakes - 1, //modify only whats required
      };
    default:
      return state;
  }
};
```

## final look of reducer :

```js
const initialState = {
  numOfCakes: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};
```
