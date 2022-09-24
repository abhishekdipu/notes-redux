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
console.log("Initial state", store.getState()); // Initial state { cake: { numOfCakes: 10 }, icecream: { numOfIcecream: 20 } }
const unsubscribe = store.subscribe(() =>
  console.log("current state", store.getState())
);
store.dispatch(buyCake()); // current state { cake: { numOfCakes: 9 }, icecream: { numOfIcecream: 20 } }
store.dispatch(buyCake()); // current state { cake: { numOfCakes: 8 }, icecream: { numOfIcecream: 20 } }
store.dispatch(buyIcecream()); // current state { cake: { numOfCakes: 8 }, icecream: { numOfIcecream: 19 } }
store.dispatch(buyIcecream()); // current state { cake: { numOfCakes: 8 }, icecream: { numOfIcecream: 18 } }

unsubscribe();
