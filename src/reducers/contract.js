import * as types from "../helpers/action-type";

const initialState = {
  allContracts: []
};

const contractState = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_CONTRACTS:
      return { ...state, allContracts: action.allContracts };
    default:
      return state;
  }
};

export default contractState;
