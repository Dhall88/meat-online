import React, { useReducer, createContext } from "react";
import Cookies from 'universal-cookie'

export const CartContext = createContext();


const cookies = new Cookies();

const initialState = {
  products: cookies.get('cartState'),
  loading: false,
  error: null
};




console.log("in cart context")
let result;

const reducer = (state, action) => {
  console.log(action.payload)
  switch (action.type) {
    case "ADD_PRODUCT":

      
      result = [...state.products, action.payload]
      cookies.set('cartState', result, { path: '/' });
      return {
        products: result
      };

    case "DEL_PRODUCT":
      result = state.products.filter((product) => {
        return product._id !== action.payload._id
      }
      )
      cookies.set('cartState', result, { path: '/' });
      return {
        products: result
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