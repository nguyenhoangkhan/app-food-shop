import { useReducer } from "react";
import Context from "./Context";
import Reducer, { initialState } from "./Reducer";
const Provider = (props) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>
      {props.children}
    </Context.Provider>
  );
};

export default Provider;
