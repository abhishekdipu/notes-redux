# React Redux + Hooks

## Using Redux before hooks : React Redux pattern

1. Action creators, reducers, provide the store and connect the components.
2. Components can access state and dispatch actions
   React Hooks

## Using Redux with hooks

- Hooks are part of React-Redux from v7.1
- so now we can Subscribe to store and dispatch actions using 2 redux hooks useSelector, useDispatch and we don't need use connect(HOC) method

### useSelector

- it's the replacement for mapStateToProps
- useSelector accepts selector function as argument( and selector function receives state as an argument and return the required state) and returns what returned from selector function

```js
const numOfCakes = useSelector((state) => state.numOfCakes);
```

### useSelector

- it's the replacement for mapDispatchToProps
- return reference for the dispatch function from the redux store.

```js
const dispatch = useDispatch();
```
