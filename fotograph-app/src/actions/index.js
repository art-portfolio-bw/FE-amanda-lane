import axios from 'axios';

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const register = creds => dispatch => {
  dispatch({ type: REGISTER_START });
  return axios
    .post("https://artportfoliobw.herokuapp.com/signup", creds)
    .then(res => {
      console.log(res)
      localStorage.setItem(
        "token",
        res.data.token
      );
      dispatch({ type: REGISTER_SUCCESS, payload: res.data })
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: REGISTER_FAILURE })
    });
};


export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    return axios
      .post("https://artportfoliobw.herokuapp.com/login", creds)
      .then(res => {
        console.log(res)
        localStorage.setItem(
          "token",
          res.data.token
        );
        dispatch({ type: LOGIN_SUCCESS, payload: res.data })
      })
      .catch(err => {
        console.log(err)
        dispatch({ type: LOGIN_FAILURE })
      });
  };