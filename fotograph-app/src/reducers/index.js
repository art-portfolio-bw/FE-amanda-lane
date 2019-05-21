//import actions
import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
  } from "../actions";

//set initial State

const initialState = {
    loggingIn: false,
    loggedIn: false,
    error: ''
}

//reducer

const reducer = ( state = initialState, action ) => {
    switch(action.type) {
        case LOGIN_START:
            return {
              ...state,
              loggingIn: true,
              error: ""
            };
          case LOGIN_SUCCESS:
            return {
              ...state,
              loggingIn: false,
              loggedIn: true,
              error: ""
            };
           case LOGIN_FAILURE:
               return {
                   ...state,
                   error: "Invalid Username/Password"
               }
            default:
                return state;
    }
}

export default reducer;