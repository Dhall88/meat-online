import React, { useReducer, createContext } from "react";
import Cookies from "universal-cookie"

export const SortingContext = createContext();

const cookies = new Cookies();

let initialCategory, initialSorting;

if(!!cookies.get("sortingState")) {
  initialCategory=cookies.get("sortingState").category
  initialSorting=cookies.get("sortingState").sorting
} else {
  initialCategory="steak"
  initialSorting=""
}

const initialState = {
    category: initialCategory,
  sorting: initialSorting,
  loading: false,
  error: null
};

let result;

console.log(initialState)


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