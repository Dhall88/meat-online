import React, { useReducer, createContext } from "react";

export const CartContext = createContext();

const initialState = {
  products: [],
  loading: false,
  error: null
};

console.log("in cart context")

const reducer = (state, action) => {
  console.log(action.payload)
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        products: [...state.products, action.payload]
      };
    case "DEL_PRODUCT":
      return {
        products: state.products.filter((product) => {
          return product._id !== action.payload
        }
        )
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

export const CartContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={[state, dispatch]}>
      {props.children}
    </CartContext.Provider>
  );
};