const store = require("./app/store");
const {cakeActions} = require("./features/cake/cakeSlice");

console.log("Initial state :", store.getState());
const unsubscribed = store.subscribe(() => {
  console.log("Updated state :", store.getState());
});

store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(10));

unsubscribed();

/*
Initial state : { cake: { numOfCakes: 10 } }
Updated state : { cake: { numOfCakes: 9 } }
Updated state : { cake: { numOfCakes: 8 } }
Updated state : { cake: { numOfCakes: 7 } }
Updated state : { cake: { numOfCakes: 17 } }
*/
