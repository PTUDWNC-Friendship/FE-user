import fetch from 'cross-fetch';
import * as types from '../helpers/index';


function requestLogin() {
    return {
      type: types.REQUEST_LOGIN
    };
  }

  function receiveLogin(stateLogin) {
    return {
      type: types.RECEIVE_LOGIN,
      stateLogin
    };
  }

  function getCurrentUser(user) {
    return {
      type: types.GET_CURRENT_USER,
      user
    };
  }

  export function fetchPostsLogin(username, password) {
    return function(dispatch) {
      dispatch(requestLogin());
      return fetch(`https://jwtduyhau.herokuapp.com/user/login`, {
        method: 'POST',
        body: JSON.stringify({
          username: username,
          password: password
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
        .then(response => {
          console.log(response);
        })
        .then(json => {
          if (json != null) {
            if (json.user != null) {
              localStorage.setItem('authToken', json.token);
              dispatch(getCurrentUser(json));
            }
            dispatch(receiveLogin(json));
          }
        });
    };
  }

  export function fetchCurrentUser() {
    if (localStorage.getItem('authToken') != null) {
      return function(dispatch) {
        return fetch(`https://jwtduyhau.herokuapp.com/me`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('authToken')}`
          }
        })
          .then(response => response.json())
          .then(json => {
            dispatch(getCurrentUser(json));
          })
          .catch(err => {
            console.log(err);
          });
      };
    }
    return function(dispatch) {
      dispatch(getCurrentUser(null));
    };
  }

  export function logOut() {
    localStorage.removeItem('authToken');
    console.log(localStorage.getItem('authToken'));
    return function(dispatch) {
      dispatch(getCurrentUser(null));
    };
  }
