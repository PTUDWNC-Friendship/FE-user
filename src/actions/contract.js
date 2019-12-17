import fetch from "cross-fetch";
import * as types from "../helpers/action-type";
import { SERVER_URL } from "../helpers/constant";

function getAllContract(allContracts) {
  return {
    type: types.GET_ALL_CONTRACTS,
    allContracts
  };
}

export function fetchAllContracts() {
  return function(dispatch) {
    return fetch(`${SERVER_URL}/contract/api`)
      .then(response => response.json())
      .then(tags => {
        dispatch(getAllContract(tags));
      })
      .catch(error => {
        dispatch(getAllContract(null));
      });
  };
}

export function setTutor(tutor) {
  return {
    type: types.SET_TUTOR_CONTRACT,
    tutor
  };
}

export function setStudent(student) {
  return {
    type: types.SET_STUDENT_CONTRACT,
    student
  };
}





