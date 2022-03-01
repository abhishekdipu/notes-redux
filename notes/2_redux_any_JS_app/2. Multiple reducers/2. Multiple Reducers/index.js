const {createStore, combineReducers} = require("redux");

// action
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

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

// const initialState = {
//   numOfCakes: 10,
//   numOfIcecream: 20,
// };

//reducer
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_CAKE:
//       return {
//         ...state,
//         numOfCakes: state.numOfCakes - 1,
//       };
//     case BUY_ICECREAM:
//       return {
//         ...state,
//         numOfIcecream: state.numOfIcecream - 1,
//       };
//     default:
//       return state;
//   }
// };

const initialCakeState = {
  numOfCakes: 10,
};
const initialIcecreamState = {
  numOfIcecream: 20,
};

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

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
});

// store
const store = createStore(rootReducer); //store created, now it's ready to be subscribed
console.log("Initial state", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("current state", store.getState())
);
store.dispatch(buyCake());
store.dispatch(buyCake());

store.dispatch(buyIcecream());
store.dispatch(buyIcecream());

unsubscribe();
