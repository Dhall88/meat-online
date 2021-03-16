import React, { useReducer, createContext } from "react";

export const CartContext = createContext();

const initialState = {
  products: [],
  loading: false,
  error: null
};

const reducer = (state, action) => {
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