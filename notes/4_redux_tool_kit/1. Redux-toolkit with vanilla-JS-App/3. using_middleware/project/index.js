const store = require("./app/store");
const {cakeActions} = require("./features/cake/cakeSlice");
const {icecreamAction} = require("./features/icecream/icecreamSlice");

console.log("Initial state :", store.getState());
const unsubscribed = store.subscribe(() => {});

store.dispatch(cakeActions.ordered());
store.dispatch(icecreamAction.ordered());
store.dispatch(cakeActions.restocked(10));
store.dispatch(icecreamAction.restocked(10));

unsubscribed();

/*
Initial state : { cake: { numOfCakes: 10 }, icecream: { numOfIcecream: 10 } }
 action cake/ordered @ 16:50:12.298
   prev state { cake: { numOfCakes: 10 }, icecream: { numOfIcecream: 10 } }
   action     { type: 'cake/ordered', payload: undefined }
   next state { cake: { numOfCakes: 9 }, icecream: { numOfIcecream: 10 } }
 action icecream/ordered @ 16:50:12.302
   prev state { cake: { numOfCakes: 9 }, icecream: { numOfIcecream: 10 } }
   action     { type: 'icecream/ordered', payload: undefined }
   next state { cake: { numOfCakes: 9 }, icecream: { numOfIcecream: 9 } }
 action cake/restocked @ 16:50:12.302
   prev state { cake: { numOfCakes: 9 }, icecream: { numOfIcecream: 9 } }
   action     { type: 'cake/restocked', payload: 10 }
   next state { cake: { numOfCakes: 19 }, icecream: { numOfIcecream: 9 } }
 action icecream/restocked @ 16:50:12.303
   prev state { cake: { numOfCakes: 19 }, icecream: { numOfIcecream: 9 } }
   action     { type: 'icecream/restocked', payload: 10 }
   next state { cake: { numOfCakes: 19 }, icecream: { numOfIcecream: 19 } }
*/
