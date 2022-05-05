const {createStore} = require("redux");

// action
const BUY_CAKE = "BUY_CAKE";

const buyCake = () => {
  return {
    type: BUY_CAKE,
    // info: "first action",
    count: 2,
  };
};
const initialState = {
  numOfCakes: 10,
};

//reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.count,
      };
    default:
      return state;
  }
};

// store
const store = createStore(reducer); //store created, now it's ready to be subscribed
console.log("Initial state", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("current state", store.getState())
);
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
unsubscribe();
