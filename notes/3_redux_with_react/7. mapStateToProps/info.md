# mapStateToProps in detail :

- mapStateToProps(state, ownProps) accepts 2 arguments (state and ownProps), where ownProps is optional

1. "state" argument is used to access the state from rudux
2. "ownProps" argument is used to access the component own props passed from it's parent

## use of "state" argument

- here state have access for redux store and we can use state to return data from mapStateToProps method and then we can use it as props in component.

```js
const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};
```

## use of "ownProps" argument

- if we need to access state from redux based on props passed from parent component.
- scenario : create a component to display either "numOfCakes" of cake prop is passed from parent or numOfIceCream is cake prop is not passed

```js
const mapStateToProp = (state, ownProp) => {
  const itemCount = ownProp.cake
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCream;
  return {
    numOfItem: itemCount,
  };
};
```

## NB: common use case of "ownProp" argument of mapStateToProp() method

- it's commonly used in master detail pattern.
- master detail pattern : from list of item when u click on particular item. then we pass item-id as prop and then we fetch data from only that id from redux.
