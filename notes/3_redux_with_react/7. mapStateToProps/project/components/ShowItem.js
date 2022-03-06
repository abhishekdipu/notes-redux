import React from "react";
import {connect} from "react-redux";

const ShowItem = (props) => {
  console.log(props);
  return (
    <div>
      <h2>Item Count (cake/icecream) : {props.numOfItem}</h2>
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

export default connect(mapStateToProp)(ShowItem);
