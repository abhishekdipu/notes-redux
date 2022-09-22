const {createStore, applyMiddleware} = require("redux");
const thunkMiddleware = require("redux-thunk").default;
const axios = require("axios");

//initialState
const initialState = {
  loading: false,
  data: [],
  error: "",
};

//ACTION TYPES
const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS ";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

//actionCreator
const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

//reducers
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: "", //set error message to empty string onSuccess
      };
    case FETCH_USERS_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

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

//store
const store = createStore(reducer, applyMiddleware(thunkMiddleware));
//subscribe
store.subscribe(() => console.log(store.getState()));

//dispatch actions
store.dispatch(fetchUsers());
//unsubscribe
