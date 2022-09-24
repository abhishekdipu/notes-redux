import React from "react";
import {buyCake} from "../redux";
import {connect} from "react-redux";
import {getNumOfCakes} from "../redux/cake/cakeReducer";

const CakeContainer = (props) => {
  console.log(props);
  return (
    <div>
      <h2>Number of cake : {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy cake</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
    // numOfCakes: getNumOfCakes(state),
  };
};

const mapDispatchToProp = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

// export default CakeContainer;
export default connect(mapStateToProps, mapDispatchToProp)(CakeContainer);
