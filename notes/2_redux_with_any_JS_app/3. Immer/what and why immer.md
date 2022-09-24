## why to use immer

- helps in copy the state and change only required field in one step

```zsh
npm i immer
```

## Uses

```js
const {produce} = require("immer");

const initialState = {
  name: "Abhishek ",
  address: {
    street: "1st cross road",
    city: "Bengaluru",
    state: "Karnataka",
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATED:
      //   return {
      //     ...state,
      //     address: {
      //       ...state.address,
      //       street: action.payload,
      //     },
      //   };

      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });
    default:
      return state;
  }
};
```
