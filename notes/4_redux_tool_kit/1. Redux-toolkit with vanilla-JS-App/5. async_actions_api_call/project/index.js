const store = require("./app/store");
const {cakeActions} = require("./features/cake/cakeSlice");
const {icecreamAction} = require("./features/icecream/icecreamSlice");
const {fetchUsers} = require("./features/user/userSlice");

console.log("Initial state :", store.getState());
const unsubscribed = store.subscribe(() => {
  console.log("Updated store :", store.getState());
});

// store.dispatch(cakeActions.ordered());
// store.dispatch(icecreamAction.ordered());
// store.dispatch(cakeActions.restocked(10));
// store.dispatch(icecreamAction.restocked(10));

store.dispatch(fetchUsers());

// unsubscribed();
