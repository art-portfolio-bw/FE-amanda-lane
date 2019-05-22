//import actions
import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    FETCH_USER_POSTS_START,
    FETCH_USER_POSTS_SUCCESS,
    ADD_NEW_POST_START,
    ADD_NEW_POST_SUCCESSFUL,
    EDIT_DESCRIPTION_START,
    EDIT_DESCRIPTION_SUCCESS,
    LOGOUT,
    EDIT_DESCRIPTION_ABORT
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
    user: {},
    addingPost: false,
    description: '',
    editingDescription: false
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
            case LOGOUT:
               return {
                 ...state,
                 loggedIn: false
               }


            case FETCH_USER_POSTS_START:
              return {
                ...state,
                fetchingMyPosts: true,
                error: '',
                user: state.user, 
                loggedIn: true,
              }
            case FETCH_USER_POSTS_SUCCESS:
              return {
                ...state,
                fetchingMyPosts: false,
                error: '',
                user: state.user,
                loggedIn: true
              }



            case ADD_NEW_POST_START:
              return {
                ...state,
                addingPost: true,
                error: ''
              }
            case ADD_NEW_POST_SUCCESSFUL:
              return {
                ...state,
                addingPost: false,
              }

              case EDIT_DESCRIPTION_START:
                return {
                  ...state,
                  editingDescription: true
                }

              case EDIT_DESCRIPTION_ABORT: 
                return {
                  ...state,
                  editingDescription: false
                }

              case EDIT_DESCRIPTION_SUCCESS:
                return {
                  ...state,
                  description: action.payload,
                  editingDescription: false
                }


            default:
                return state;
    }
}

export default reducer;