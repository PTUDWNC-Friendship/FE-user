import fetch from "cross-fetch";
import * as types from "../helpers/action-type";
import { SERVER_URL } from "../helpers/constant";

function getAllSubject(allSubjects) {
  return {
    type: types.GET_ALL_SUBJECTS,
    allSubjects
  };
}

function insertSubject(subject) {
  return {
    type: types.INSERT_TUTOR_SUBJECT,
    subject
  };
}

function editSubject() {
  return {
    type: types.EDIT_TUTOR_SUBJECT
  };
}

function deleteSubject() {
  return {
    type: types.DELETE_TUTOR_SUBJECT
  };
}



export function fetchAllSubjects() {
  return function(dispatch) {
    return fetch(`${SERVER_URL}/subject/api`)
      .then(response => response.json())
      .then(tags => {
        dispatch(getAllSubject(tags));
      })
      .catch(error => {
        dispatch(getAllSubject(null));
      });
  };
}


export function insertTutorSubject(name, category, description) {
  return function(dispatch) {
    // window.alert(name);
    return fetch(`${SERVER_URL}/subject/insert`, {
      method: 'POST',
      body: JSON.stringify({
        name,
        category,
        description
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
      .then(response => response.json() )
      .then(data => {
        window.alert("thanh cong");

        dispatch(insertSubject(data));
      })
      .catch((error) => {
        window.alert(error);
        dispatch(insertSubject(null));
      });
  };
}

export function editTutorSubject(name, category, description) {
  return function(dispatch) {
    console.log(name);
    console.log(category);
    console.log(description);
    // dispatch(requestLogin());
    // return fetch(`${SERVER_URL}/user/update`, {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     ...user
    //   }),
    //   headers: {
    //     'Content-type': 'application/json; charset=UTF-8'
    //   }
    // })
    //   .then(response => response.json() )
    //   .then(data => {
    //     dispatch(getCurrentUser(data));
    //     dispatch(receiveLogin());
    //   })
    //   .catch((error) => {
    //     dispatch(getCurrentUser(null));
    //   });
  };
}

export function deleteTutorSubject(name, category, description) {
  return function(dispatch) {
    console.log(name);
    console.log(category);
    console.log(description);
    // dispatch(requestLogin());
    // return fetch(`${SERVER_URL}/user/update`, {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     ...user
    //   }),
    //   headers: {
    //     'Content-type': 'application/json; charset=UTF-8'
    //   }
    // })
    //   .then(response => response.json() )
    //   .then(data => {
    //     dispatch(getCurrentUser(data));
    //     dispatch(receiveLogin());
    //   })
    //   .catch((error) => {
    //     dispatch(getCurrentUser(null));
    //   });
  };
}
