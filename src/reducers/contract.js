import * as types from '../helpers/action-type';

const initialState = {
  allContracts: [],
  tutor: null,
  student: null
};

const contractState = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_CONTRACTS:
      return { ...state, allContracts: action.allContracts };
    case types.SET_TUTOR_CONTRACT:
      return { ...state, tutor: action.tutor };
    case types.SET_STUDENT_CONTRACT:
      return { ...state, student: action.student };
    default:
      return state;
  }
};

export default contractState;