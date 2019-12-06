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
      return fetch(`https://uberfortutor-server-user.herokuapp.com/user/login`, {
        method: 'POST',
        body: JSON.stringify({
          username,
          password
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
        .then(response => response.json()
        )
        .then(json => {
          if (json.user !== false) {
               localStorage.setItem('authToken', json.token);
               localStorage.setItem('user', JSON.stringify(json));

               dispatch(getCurrentUser(json));
              dispatch(receiveLogin(json));
          } else {
            dispatch(getCurrentUser(null));
            dispatch(receiveLogin(json));
          }
        }).catch(err=>{
          dispatch(getCurrentUser(null));
        });
    };
  }

  export function fetchCurrentUser() {
    if (localStorage.getItem('authToken') != null) {
      return function(dispatch) {
        return fetch(`https://uberfortutor-server-user.herokuapp.com/me`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('authToken')}`
          }
        })
          .then(response => response.json())
          .then(user => {
            localStorage.setItem('user', JSON.stringify(user));
            dispatch(getCurrentUser(user));
          })
          .catch(err => {
            dispatch(getCurrentUser(null));
            localStorage.removeItem('user');
            console.log(err);
          });
      };
    }
    return function(dispatch) {
      dispatch(getCurrentUser(null));
    };
  }

  export function logOut() {
    localStorage.removeItem('user');
    localStorage.removeItem('authToken');

    return function(dispatch) {
      dispatch(getCurrentUser(null));
    };
  }
