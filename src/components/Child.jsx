import React from "react";
import SubChild from "./SubChild";
import { useDispatch, useSelector } from "react-redux";
import { incrementByCount } from "../features/counter/counterSlice";

const Child = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.showing.value;
  });

  return (
    <>
      <h1>Child - {data}</h1>  
      <button onClick={() => dispatch(incrementByCount(10))}>Click Me</button>
      <h1>================</h1>
      <SubChild />
    </>
  );
};

export default Child;
