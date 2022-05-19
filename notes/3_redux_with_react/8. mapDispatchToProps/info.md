# mapDispatchToProps

- mapDispatchToProps(dispatch, ownProps) accepts 2 arguments (dispatch and ownProps), where ownProps is optional

1. "dispatch" method is used to access dispatch function of redux
2. "ownProps" argument is used to access the component own props passed from it's parent

## use of "dispatch" argument

- we can use "dispatch" to return function from mapDispatchToProp method and then we can use it as props in component.

```js
const mapDispatchToProp = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};
```

## use of "ownProps" argument

- if we need to return dispatch function from mapDispatchToProp method based on props passed from parent component.
- scenario : create a component to display either "numOfCakes" of cake prop is passed from parent or numOfIceCream is cake prop is not passed and also corresponding action to buyCake or buyIceCream should be there.

```js
const mapDispatchToProp = (dispatch, ownProp) => {
  const dispatchFunction = ownProp.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());

  return {
    buyItem: dispatchFunction,
  };
};
```

## NB:

- some we want to pass only mapDispatchToProp but not mapStateToProp in connect methods then we do like this

```js
export default connect(null, mapDispatchToProp)(ShowItem);
```
