# Actions

- actions can be of 2 types Synchronous and Asynchronous

## Synchronous Actions

- As soon as an action was dispatched, the state was immediately updated.
- If you dispatch the BUY_CAKE action, the numOfCakes was right away decremented by 1.
- Same with BUY_ICECREAM action as well.

## Async Actions

- Asynchronous API calls to fetch data from an end point and use that data in your application.

## Our Application

- Fetches a list of users from an API end point and stores it in the redux store.

## things to look for

- State ?
- Actions ?
- Reducer ?

### 1. how to use State

```js
state = {
  loading: true,
  data: [],
  error: "",
};
// loading - Display a loading spinner in your component
// data - List of users
// error – Display error to the user
```

### 2. how to use Actions

```js
FETCH_USERS_REQUEST; // Fetch list of users
FETCH_USERS_SUCCESS; // Fetched successfully
FETCH_USERS_FAILURE; //Error fetching the data
```

### 3. how to use Reducers

```js
case: FETCH_USERS_REQUEST
  loading: true
case: FETCH_USERS_SUCCESS
  loading: false
  users: data ( from API )
case: FETCH_USERS_FAILURE
  loading: false
  error: error ( from API )
```
