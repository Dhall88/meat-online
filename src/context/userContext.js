import React, { useReducer, createContext } from "react";
import Cookies from "universal-cookie"

export const UserContext = createContext();

const cookies = new Cookies();

let initialLoggedIn, initialAdmin;

if(!!cookies.get("userState")) {
  initialLoggedIn=cookies.get("userState").loggedIn
  initialAdmin=cookies.get("userState").admin
} else {
  initialLoggedIn=false
  initialAdmin=false
}

const initialState = {
    loggedIn: initialLoggedIn,
    admin: initialAdmin,
  loading: false,
  error: null
};

let result;


const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
    
    result = {loggedIn: action.payload.loggedIn,
            admin: action.payload.admin}

cookies.set('userState', result, { path: '/' });
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

export const UserContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={[state, dispatch]}>
      {props.children}
    </UserContext.Provider>
  );
};