# Multiple Reducers

- cake and iceCream example

## how to use Multiple Reducers?

1. create actions constants seperately

```js
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";
```

2. create actions creators seperately

```js
const buyCake = () => {
  return {
    type: BUY_CAKE,
    info: "first action",
  };
};
const buyIcecream = () => {
  return {
    type: BUY_ICECREAM,
  };
};
```

3. initialize initial states for both seperatey

```js
const initialCakeState = {
  numOfCakes: 10,
};
const initialIcecreamState = {
  numOfIcecream: 20,
};
```

4. create reducers for both seperately

```js
const cakeReducer = (state = initialCakeState, action) => {
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
const icecreamReducer = (state = initialIcecreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIcecream: state.numOfIcecream - 1,
      };
    default:
      return state;
  }
};
```

5. combine all the reducers and create rootReducer

```js
const {combineReducers} = require("redux");

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
});
```

6. create the store using rootReducer

```js
const {createStore} = require("redux");

const store = createStore(rootReducer);
```

7. subscribe to store

```js
console.log("Initial state", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("current state", store.getState())
);
```

8. dispatch the actions to store

```js
store.dispatch(buyCake());
store.dispatch(buyCake());

store.dispatch(buyIcecream());
store.dispatch(buyIcecream());
```

9. unsubscribe from the store

```js
unsubscribe();
```

10. Output :

```zsh
❯ node index
Initial state { cake: { numOfCakes: 10 }, icecream: { numOfIcecream: 20 } }
current state { cake: { numOfCakes: 9 }, icecream: { numOfIcecream: 20 } }
current state { cake: { numOfCakes: 8 }, icecream: { numOfIcecream: 20 } }
current state { cake: { numOfCakes: 8 }, icecream: { numOfIcecream: 19 } }
current state { cake: { numOfCakes: 8 }, icecream: { numOfIcecream: 18 } }
```
