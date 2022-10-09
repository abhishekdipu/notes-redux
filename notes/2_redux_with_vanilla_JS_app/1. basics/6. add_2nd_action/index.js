const {createStore} = require("redux");

// action
const BUY_CAKE = "BUY_CAKE";
const RESTOCK_CAKE = "RESTOCK_CAKE";

const buyCake = (quantity = 1) => {
  return {
    type: BUY_CAKE,
    payload: quantity,
  };
};

const restockCake = (quantity = 1) => {
  return {
    type: RESTOCK_CAKE,
    payload: quantity,
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
        numOfCakes: state.numOfCakes - action.payload,
      };
    case RESTOCK_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };
    default:
      return state;
  }
};

// store
const store = createStore(reducer); //store created, now it's ready to be subscribed
console.log("Initial state", store.getState());
console.log("-----------------------------------");

const unsubscribe = store.subscribe(() =>
  console.log("current state", store.getState())
);
store.dispatch(buyCake(2)); //current state { numOfCakes: 8 }
store.dispatch(restockCake(10)); //current state { numOfCakes: 18 }

unsubscribe();
