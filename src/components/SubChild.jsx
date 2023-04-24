import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../features/counter/counterSlice";

const SubChild = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state.showing.value;
  });

  return (
    <>
      <h1>Sub Child - {data}</h1>
      <button onClick={() => dispatch(increment())}>Click Me</button>
    </>
  );
};

export default SubChild;
