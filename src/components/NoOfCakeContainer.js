import React, {useState} from "react";
import {buyCake} from "../redux";
import {connect} from "react-redux";
import {getNumOfCakes} from "../redux/cake/cakeReducer";

const NoOfCakeContainer = (props) => {
  const [cakeCount, setCakeCount] = useState(1);
  return (
    <div>
      <h2>Number of cake : {props.numOfCakes}</h2>
      <input value={cakeCount} onChange={(e) => setCakeCount(e.target.value)} />
      <button onClick={() => props.buyCake(cakeCount)}>
        Buy {cakeCount} cake
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
    // numOfCakes: getNumOfCakes(state),
  };
};

const mapDispatchToProp = (dispatch) => {
  return {
    buyCake: (cakeCount) => dispatch(buyCake(cakeCount)),
  };
};

// export default NoOfCakeContainer;
export default connect(mapStateToProps, mapDispatchToProp)(NoOfCakeContainer);
