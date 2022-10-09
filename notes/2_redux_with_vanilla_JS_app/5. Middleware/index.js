const {createStore, combineReducers, applyMiddleware} = require("redux");
const {createLogger} = require("redux-logger");

const logger = createLogger();

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
const store = createStore(rootReducer, applyMiddleware(logger));
//store created, now it's ready to be subscribed
// console.log("Initial state", store.getState());
const unsubscribe = store.subscribe(() => {});
store.dispatch(buyCake());
store.dispatch(buyIcecream());

unsubscribe();

/*
 action BUY_CAKE @ 00:29:27.249
   prev state { cake: { numOfCakes: 10 }, icecream: { numOfIcecream: 20 } }
   action     { type: 'BUY_CAKE', info: 'first action' }
   next state { cake: { numOfCakes: 9 }, icecream: { numOfIcecream: 20 } }
 action BUY_ICECREAM @ 00:29:27.256
   prev state { cake: { numOfCakes: 9 }, icecream: { numOfIcecream: 20 } }
   action     { type: 'BUY_ICECREAM' }
   next state { cake: { numOfCakes: 9 }, icecream: { numOfIcecream: 19 } }
*/
