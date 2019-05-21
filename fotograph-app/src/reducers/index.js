//import actions



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
              isLoggingIn: true,
              error: ""
            };
          case LOGIN_SUCCESS:
            return {
              ...state,
              isLoggingIn: false
            };
            default:
                return state;
    }
}

export default reducer;