import React, { useReducer, createContext } from "react";

export const ActiveProductContext = createContext();

const initialState = {
  activeProduct: {},
  loading: false,
  error: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCT":
      return {
        activeProduct: action.payload
      };
    case "START":
      return {
        loading: true
      };
    case "COMPLETE":
      return {
        loading: false
      };
    default:
      throw new Error();
  }
};

export const ActiveProductContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ActiveProductContext.Provider value={[state, dispatch]}>
      {props.children}
    </ActiveProductContext.Provider>
  );
};