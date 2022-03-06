## Action payload

## Secnario:

- earlier Scenario : on click of a button "buycake" we were dispatching action to buyCake
- current Scenario : we also want to pass the quantity(noOfCake) to buy.

## Steps : how to send cakeCount payload from UI to reducer?

1. modify container component

- add input html,
- add local state cakeCount.
- modify onClick handler of button to accept parameter
- modify mapDispatchToProp method to accept parameter

- src/components/NoOfCakeContainer.js

```js
import {useState} from "react";
import {buyCake} from "../redux";
import {connect} from "react-redux";

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
  };
};

const mapDispatchToProp = (dispatch) => {
  return {
    buyCake: (cakeCount) => dispatch(buyCake(cakeCount)),
  };
};

export default connect(mapStateToProps, mapDispatchToProp)(NoOfCakeContainer);
```

2. In Redux : modify actionCreator and add payload

- src/redux/cake/cakeActions.js

```js
import {BUY_CAKE} from "./cakeTypes";

export const buyCake = (cakeCount = 1) => {
  return {
    type: BUY_CAKE,
    payload: cakeCount,
  };
};
```

3. In Redux : modify reducer :

- src/redux/cake/cakeReducer.js

```js
import {BUY_CAKE} from "./cakeTypes";

const initialState = {
  numOfCakes: 10,
};

//reducer
const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.payload,
      };
    default:
      return state;
  }
};

//selector
export const getNumOfCakes = (state) => {
  return state.numOfCakes;
};
export default cakeReducer;
```
