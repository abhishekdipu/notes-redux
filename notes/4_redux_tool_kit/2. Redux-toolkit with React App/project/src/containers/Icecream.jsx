import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {ordered, restocked} from "../features/icecream/icecreamSlice";

const Icecream = () => {
  const [count, setCount] = useState(1);
  const {numOfIcecream} = useSelector((state) => state.icecream);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number Of Icecream : {numOfIcecream}</h2>
      <button onClick={() => dispatch(ordered())}>Order Icecream</button>
      <input
        type="Number"
        value={count}
        onChange={(e) => setCount(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(restocked(count))}>
        Restock Icecream
      </button>
    </div>
  );
};

export default Icecream;
