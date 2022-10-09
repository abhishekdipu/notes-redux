import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ordered, restocked} from "../features/cake/cakeSlice";

const Cake = () => {
  const [count, setCount] = useState(1);

  const {numOfCakes} = useSelector((state) => state.cake);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number Of cakes : {numOfCakes}</h2>
      <button onClick={() => dispatch(ordered())}>Order Cake</button>
      <input
        type="Number"
        value={count}
        onChange={(e) => setCount(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(restocked(count))}>Restock Cake</button>
    </div>
  );
};

export default Cake;
