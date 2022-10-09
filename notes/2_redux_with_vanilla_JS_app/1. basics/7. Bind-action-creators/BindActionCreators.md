# Bind Action Creators

- it's a method exported by redux library to bind the action creators.
- now a days with modern ways to redux implementation this method is not necessary

## without bindActionCreators

```js
//dispatching action
store.dispatch(buyCake(2)); //current state { numOfCakes: 8 }
store.dispatch(restockCake(10)); //current state { numOfCakes: 18 }
```

## with bindActionCreators

```js
const {bindActionCreators} = require("redux");

const action = bindActionCreators({buyCake, restockCake}, store.dispatch);
action.buyCake(2); //current state { numOfCakes: 8 }
action.restockCake(10); //current state { numOfCakes: 8 }

unsubscribe();
```
