import axios from 'axios';
import { axiosWithAuth } from '../components/Authentication/axiosWithAuth';

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const register = creds => dispatch => {
  dispatch({ type: REGISTER_START });
  return axios
    .post("https://artportfoliobw.herokuapp.com/signup", creds)
    .then(res => {
      localStorage.setItem(
        "token",
        res.data.token
      );
      dispatch({ type: REGISTER_SUCCESS, payload: res.data })
      localStorage.setItem('user', res.data.artistId)
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
        localStorage.setItem(
          "token",
          res.data.token
        );
        dispatch({ type: LOGIN_SUCCESS, payload: res.data })
        localStorage.setItem('user', res.data.artistId)
      })
      .catch(err => {
        console.log(err)
        dispatch({ type: LOGIN_FAILURE })
      });
  };

  export const LOGOUT = "LOGOUT";

  export const logout = () => dispatch => {
    localStorage.clear();
    localStorage.setItem('item', 'something')
    dispatch({ type: LOGOUT })
  }



  export const FETCH_USER_POSTS_START = "FETCH_USER_POSTS_START";
  export const FETCH_USER_POSTS_SUCCESS = "FETCH_USER_POSTS_SUCCESS";
  export const FETCH_USER_POSTS_FAILURE = "FETCH_USER_POSTS_FAILURE";

  export const fetchMyPosts = () => dispatch => {
    dispatch({ type: FETCH_USER_POSTS_START });
    axiosWithAuth()
    .get(`https://artportfoliobw.herokuapp.com/`)
    .then( res => {
      // console.log("fetch", res)
      dispatch({ type: FETCH_USER_POSTS_SUCCESS })
    })
    .catch( err => {
      console.log(err)
    })
  }

  export const ADD_NEW_POST_START = "ADD_NEW_POST_START";
  export const ADD_NEW_POST_SUCCESSFUL = "ADD_NEW_POST_SUCCESSFUL";
  export const ADD_NEW_POST_FAILURE = "ADD_NEW_POST_FAILURE";

  export const addNewPost = (post) => dispatch => {
    dispatch({ type: ADD_NEW_POST_START });
    axiosWithAuth()
    .post(`https://artportfoliobw.herokuapp.com/`, post)
    .then( res => {
      console.log("add post", res)
      dispatch({ type: ADD_NEW_POST_SUCCESSFUL, payload: res.data })
    })
    .catch( err => {
      console.log(err)
    })
  }

  
  export const EDIT_DESCRIPTION_SUCCESS = 'EDIT_DESCRIPTION_SUCCESS';

  export const editDescription = (newDescription, id) => dispatch => {
    axiosWithAuth()
    .put(`https://artportfoliobw.herokuapp.com/${id}`, newDescription)
    .then( res => {
      console.log(res)
      dispatch({ type: EDIT_DESCRIPTION_SUCCESS, payload: res.data })
    })
    .catch( err => {
      console.log(err)
    })
  }



