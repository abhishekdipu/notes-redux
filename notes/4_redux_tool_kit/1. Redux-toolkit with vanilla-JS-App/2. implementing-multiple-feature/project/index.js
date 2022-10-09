const store = require("./app/store");
const {cakeActions} = require("./features/cake/cakeSlice");
const {icecreamAction} = require("./features/icecream/icecreamSlice");

console.log("Initial state :", store.getState());
const unsubscribed = store.subscribe(() => {
  console.log("Updated state :", store.getState());
});

store.dispatch(cakeActions.ordered());
store.dispatch(icecreamAction.ordered());
store.dispatch(cakeActions.restocked(10));
store.dispatch(icecreamAction.restocked(10));

unsubscribed();

/*
Initial state : { cake: { numOfCakes: 10 }, icecream: { numOfIcecream: 10 } }
Updated state : { cake: { numOfCakes: 9 }, icecream: { numOfIcecream: 10 } }
Updated state : { cake: { numOfCakes: 9 }, icecream: { numOfIcecream: 9 } }
Updated state : { cake: { numOfCakes: 19 }, icecream: { numOfIcecream: 9 } }
Updated state : { cake: { numOfCakes: 19 }, icecream: { numOfIcecream: 19 } }
*/
