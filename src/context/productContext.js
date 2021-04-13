import React, { useReducer, createContext } from "react";

export const ProductContext = createContext();

const initialState = {
  products: [],
  filteredProducts: [],
  loading: false,
  error: null
};


const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCTS":
      console.log(action.payload)
      return {
        products: action.payload
      };
    case "FILTER_PRODUCTS":
        return {
            filteredProducts: action.payload.products.filter(product => {
                if(product.price >= action.payload.priceRange[0] && product.price <= action.payload.priceRange[1]) {
                    return product
                }
            }).then(productArr => {
                if (action.payload.sort === "asc") {
                    productArr.sort((a,b) => {
                        return a.price-b.price;
                    })
                } else if(action.payload.sort ==="desc") {
                    productArr.sort((a,b) => {
                        return b.price-a.price;
                    })
                }
            })
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

export const ProductContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ProductContext.Provider value={[state, dispatch]}>
      {props.children}
    </ProductContext.Provider>
  );
};