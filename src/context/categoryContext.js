import React, { useReducer, createContext } from "react";

export const CategoryContext = createContext();

const initialState = {
  category: '',
  loading: false,
  error: null
};


const reducer = (state, action) => {
  console.log(action.payload)
  switch (action.type) {
    case "SET_CATAGORY":
      return {
        category: action.payload
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

export const CategoryContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CategoryContext.Provider value={[state, dispatch]}>
      {props.children}
    </CategoryContext.Provider>
  );
};