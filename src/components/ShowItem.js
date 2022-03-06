import React from "react";
import {connect} from "react-redux";
import {buyCake, buyIceCream} from "../redux";

const ShowItem = (props) => {
  console.log(props);
  return (
    <div>
      <h2>Item Count (cake/icecream) : {props.numOfItem}</h2>
      <button onClick={props.buyItem}>BuyItem</button>
    </div>
  );
};

const mapStateToProp = (state, ownProp) => {
  const itemCount = ownProp.cake
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCream;
  return {
    numOfItem: itemCount,
  };
};

const mapDispatchToProp = (dispatch, ownProp) => {
  const dispatchFunction = ownProp.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());

  return {
    buyItem: dispatchFunction,
  };
};

export default connect(mapStateToProp, mapDispatchToProp)(ShowItem);
