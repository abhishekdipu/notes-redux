# dispatching async actions or making an api call

- redux-toolkit provides **createAsyncThunk** function for creation and dispatching of async actions

## Scenario :

- we want make an api call to get all the users (https://jsonplaceholder.typicode.com/users)

## Steps to use createAsyncThunk function

1. in features folder : create "user/userSlice.js"
2. use

```js
const {createSlice, createAsyncThunk} = require("@reduxjs/toolkit");
const axios = require("axios");

const initialState = {
  loading: false,
  users: [],
  error: "",
};

/*
createAsyncThunk : it accepts 2 arguments 
1st argument : action type('user/fetchUsers'), here we don't have to add 'fetchUsers' to reducer in createSlice method
2nd argument : callback function, here we can make api calls, and we don't have to handle failed(rejected) api calls explicitly as createAsyncThunk handles on it own 

createAsyncThunk : dispatch promise lifecycle actions (promise can either be pending or fulfilled or rejected )
- so createAsyncThunk also dispatches these 3 actions pending, fulfilled, rejected based on returned promise 
- these actions need to be used in extraReducers property of userSlice
*/
const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.data.map((user) => user.id));
});

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = "";
    });

    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message;
    });
  },
});

module.exports = userSlice.reducer;
module.exports.fetchUsers = fetchUsers;
```
