import { LOGIN_SUCCESS } from "../../actions";

export const setToken = store => next => action => {
  if (action.type === LOGIN_SUCCESS) {
    console.log(action);
    localStorage.setItem('token', action.payload.token)
  }
  next(action);
};
