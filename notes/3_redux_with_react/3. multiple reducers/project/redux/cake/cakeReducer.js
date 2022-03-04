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
        numOfCakes: state.numOfCakes - 1,
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
