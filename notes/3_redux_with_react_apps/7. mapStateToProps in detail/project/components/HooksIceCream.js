import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {buyIceCream} from "../redux";

const HooksIceCream = () => {
  const numOfIceCream = useSelector((state) => state.iceCream.numOfIceCream);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>icecream : {numOfIceCream}</h2>
      <button onClick={() => dispatch(buyIceCream())}>buy</button>
    </div>
  );
};

export default HooksIceCream;
