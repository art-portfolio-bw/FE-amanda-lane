//import actions
import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    FETCH_USER_POSTS_START,
    FETCH_USER_POSTS_SUCCESS
  } from "../actions";

//set initial State

const initialState = {
    isRegistering: false,
    isRegistered: false,
    registationError: '',
    loggingIn: false,
    loggedIn: false,
    loginWelcome: "",
    loginError: '',
    fetchingMyPosts: false,
    user: {}
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
            registationError: "",
            user: action.payload
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
              loginError: "",
              user: action.payload
            };
           case LOGIN_FAILURE:
               return {
                   ...state,
                   loginError: "Invalid Username/Password"
               }
            case FETCH_USER_POSTS_START:
              return {
                ...state,
                fetchingMyPosts: true,
                error: '',
                user: state.user
              }
            case FETCH_USER_POSTS_SUCCESS:
              return {
                ...state,
                fetchingMyPosts: false,
                error: '',
                myPosts: action.payload,
                user: state.user
              }
            default:
                return state;
    }
}

export default reducer;