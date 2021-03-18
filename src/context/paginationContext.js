import React, { useReducer, createContext } from "react";

export const PaginationContext = createContext();

const initialState = {
  pagination: 1,
  loading: false,
  error: null
};


const reducer = (state, action) => {
  console.log(action.payload)
  switch (action.type) {
    case "SET_PAGINATION":
      return {
        products: action.payload
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

export const PaginationContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <PaginationContext.Provider value={[state, dispatch]}>
      {props.children}
    </PaginationContext.Provider>
  );
};