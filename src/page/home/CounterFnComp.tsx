import React from "react";
import { useConcent } from "concent";

export const CounterFnComp = () => {
  const { state, setState, dispatch } = useConcent("counter");
  return (
    <div>
      count: {state.count}
      <button onClick={() => setState({ count: state.count + 1 })}>inc</button>
      <button onClick={() => dispatch("inc")}>inc2</button>
      <button onClick={() => setState({ count: state.count - 1 })}>dec</button>
    </div>
  );
};
