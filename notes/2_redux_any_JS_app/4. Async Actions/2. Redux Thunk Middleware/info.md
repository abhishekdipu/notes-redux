# Async action creators : how to make API calls when working with redux?

- to create async actions (like api calling) in redux, we need 2 middleware

1. axios

- Requests to an API end point

2. redux-thunk

- Define async action creators
- acts as a Middleware

## Steps to use

1. install

```zsh
npm i axios redux-thunk
```

2. apply redux-thunk middleware to redux store

```ts
const {createStore, applyMiddleware} = require("redux");
const thunkMiddleware = require("redux-thunk").default;

//store
const store = createStore(reducer, applyMiddleware(thunkMiddleware));
```

3. define async actionCreator

- async actionCreator function : with help of redux-thunk middleware we can make action creator to return function insead of action Object.
- and inside this actionCreator function we can have side-effects like calling api.
- and inside this function we can also dispatch actions as inner function accepts "dispatch" as argument.

```js
const axios = require("axios");

const fetchUsers = () => {
  return function (dispatch) {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        //response.data is the array of users
      })
      .catch((err) => {
        //err.message is error description
      });
  };
};
```

4. write logic for onSuccess and onFailure in fetchUsers function

```js
const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest()); //it'll set loading to true
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        //response.data is the array of users
        const users = response.data.map((user) => user.id);
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        //error.message is error description
        dispatch(fetchUsersFailure(error.message));
      });
  };
};
```

5. subscribe and dispatch action

```js
//store
const store = createStore(reducer, applyMiddleware(thunkMiddleware));
//subscribe
store.subscribe(() => console.log(store.getState()));

//dispatch actions
store.dispatch(fetchUsers());
//unsubscribe
```
