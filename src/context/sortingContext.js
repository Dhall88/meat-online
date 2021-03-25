import React, { useReducer, createContext } from "react";
import Cookies from "universal-cookie"

export const SortingContext = createContext();

const cookies = new Cookies();

const initialState = {
    category: cookies.get("sortingState").category,
  sorting: cookies.get("sortingState").sorting,
  loading: false,
  error: null
};

let result;


const reducer = (state, action) => {
  switch (action.type) {
    case "SET_SORTING":
        result = {category: state.category,
                    sorting: action.payload
        }
        cookies.set('sortingState', result, { path: '/' });
      return {
          result

      };
    case "SET_CATEGORY":
        
        result = {category: action.payload,
                sorting: state.sorting
}

cookies.set('sortingState', result, { path: '/' });
return (
    result
);
      
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