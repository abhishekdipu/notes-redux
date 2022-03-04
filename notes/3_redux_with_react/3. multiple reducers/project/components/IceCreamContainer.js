import React from "react";
import {connect} from "react-redux";
import {buyIceCream} from "../redux";

const IceCreamContainer = (props) => {
  console.log("props", props);
  return (
    <div>
      <h2>IceCream Count : {props.numOfIceCream}</h2>
      <button onClick={props.buyIceCream}> Buy IceCream</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfIceCream: state.iceCream.numOfIceCream,
  };
};

const mapDispatchToProp = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProp)(IceCreamContainer);
