import React, { useReducer, createContext } from "react";

export const SortingContext = createContext();

const initialState = {
  sorting: 'default',
  loading: false,
  error: null
};


const reducer = (state, action) => {
  console.log(action.payload)
  switch (action.type) {
    case "SET_SORTING":
      return {
        sorting: action.payload
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

export const SortingContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <SortingContext.Provider value={[state, dispatch]}>
      {props.children}
    </SortingContext.Provider>
  );
};