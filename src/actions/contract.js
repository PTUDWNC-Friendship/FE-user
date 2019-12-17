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
