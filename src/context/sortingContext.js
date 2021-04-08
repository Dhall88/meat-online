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
  console.log(!action.payload.category)
  switch (action.type) {
    case "SET_CATEGORY":
      console.log('in set category')
        if(!action.payload.category){
          console.log('in if')
        result =  {category: state.category,
                  sorting: action.payload.sorting
                  }
        }
        
        else {
          console.log('in else')
          result = {category: action.payload.category,
                  sorting: action.payload.sorting}
        }

cookies.set('sortingState', result, { path: '/' });
return result
      
    case "START":
      return {
        loading: true
      };
    case "COMPLETE":
      return {
        loading: false
      };
    default:
      console.log(new Error());
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