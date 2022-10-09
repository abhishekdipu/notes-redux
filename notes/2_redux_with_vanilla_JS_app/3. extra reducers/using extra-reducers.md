# Extra Reducer

- Consider cake shop and ice-cream example, here if someone buys a cakes then we want to give a free ice-cream

## how to implement :

- every steps will same as creating multiple-reducers except one
- here in icecreamReducer we need to add case for BUY_CAKE action too.

```js
const icecreamReducer = (state = initialIcecreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIcecream: state.numOfIcecream - 1,
      };
    case BUY_CAKE: //adding condition for BUY_CAKE too
      return {
        ...state,
        numOfIcecream: state.numOfIcecream - 1,
      };
    default:
      return state;
  }
};
```
