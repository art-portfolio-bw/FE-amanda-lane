//import actions
import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE
  } from "../actions";

//set initial State

const initialState = {
    isRegistering: false,
    isRegistered: false,
    loggingIn: false,
    loggedIn: false,
    posts: [],
    registationError: '',
    loginError: ''
}

//reducer

const reducer = ( state = initialState, action ) => {
    switch(action.type) {
        case REGISTER_START:
          return {
            ...state, 
            isRegistering: true,
            registationError: "",
            loginError: ""
          } 
        case REGISTER_SUCCESS:
          return {
            ...state,
            isRegistering: false,
            isRegistered: true,
            registationError: ""
          } 
        case REGISTER_FAILURE: 
          return {
            ...state,
            registationError: "There was an error processing your request."
          }
        case LOGIN_START:
            return {
              ...state,
              loggingIn: true,
              loginError: ""
            };
          case LOGIN_SUCCESS:
            return {
              ...state,
              loggingIn: false,
              loggedIn: true,
              loginError: ""
            };
           case LOGIN_FAILURE:
               return {
                   ...state,
                   loginError: "Invalid Username/Password"
               }
            default:
                return state;
    }
}

export default reducer;