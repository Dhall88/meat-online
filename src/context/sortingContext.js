import React, { useReducer, createContext } from "react";
import Cookies from "universal-cookie"

export const SortingContext = createContext();

const cookies = new Cookies();

let initialCategory, initialSorting, initialSearch;

if(!!cookies.get("sortingState")) {
  initialCategory=cookies.get("sortingState").category
  initialSorting=cookies.get("sortingState").sorting
  initialSearch = cookies.get("sortingState").search
} else {
  initialCategory="steak"
  initialSorting=""
  initialSearch = ""
}

const initialState = {
    category: initialCategory,
  sorting: initialSorting,
  search: initialSearch,
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
          
        result =  {category: state.category,
                  sorting: action.payload.sorting,
                  search: ""
                  }
        }
        
        else {
          console.log('in else')
          result = {category: action.payload.category,
                  sorting: action.payload.sorting,
                  search: ""
                }
        }

cookies.set('sortingState', result, { path: '/' });
return result;
    case "SET_SEARCH":
      console.log("in set search")
        result = {
          category: state.category,
          sorting: state.sorting,
          search: action.payload
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