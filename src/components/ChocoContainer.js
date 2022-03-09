import {connect} from "react-redux";
import {buyChocolate} from "../redux";

const ChocoContainer = (props) => {
  return (
    <div>
      <h2>chocolate count : {props.numOfChoco}</h2>
      <button onClick={props.buyChoco}>buy chocolate</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfChoco: state.chocolate.numOfChoco,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyChoco: () => dispatch(buyChocolate()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChocoContainer);
