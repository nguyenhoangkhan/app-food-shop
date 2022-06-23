import { useReducer, useEffect } from "react";
import Context from "./Context";
import Reducer, { initialState } from "./Reducer";
const Provider = (props) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  // useEffect(() => {
  //   localStorage.setItem("cart", JSON.stringify(state.cart));
  // }, [state.cart]);
  return (
    <Context.Provider value={[state, dispatch]}>
      {props.children}
    </Context.Provider>
  );
};

export default Provider;
