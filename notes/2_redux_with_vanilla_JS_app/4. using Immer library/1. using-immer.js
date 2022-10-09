const {produce} = require("immer");

const state = {
  name: "Abhishek",
  address: {
    street: "1st cross road",
    city: "Bengaluru",
    state: "Karnataka",
  },
};

//here our required is update street but not mutate(change) initial state

//1st way : using JS spread operator to copy objects
const updatedState = {
  ...state,
  address: {...state.address, street: "2nd cross road"},
};

//2nd way : using immer package
const updatedState2 = produce(state, (draft) => {
  draft.address.street = "2nd cross road";
});

console.log(state); // { name: 'Abhishek', address: { street: '1st cross road', city: 'Bengaluru', state: 'Karnataka' }}
console.log(updatedState); // { name: 'Abhishek', address: { street: '2nd cross road', city: 'Bengaluru', state: 'Karnataka' }}
console.log(updatedState2); // { name: 'Abhishek', address: { street: '2nd cross road', city: 'Bengaluru', state: 'Karnataka' }}
