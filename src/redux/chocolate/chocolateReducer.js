import {BUY_CHOCOLATE} from "./chocolateTypes";

const initialState = {
  numOfChoco: 50,
};

const chocolateReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CHOCOLATE:
      return {
        ...state,
        numOfChoco: state.numOfChoco - 1,
      };

    default:
      return {
        ...state,
      };
  }
};

export default chocolateReducer;
