import * as types from "../helpers/action-type";

const initialState = {
  allSubjects: []
};

const subjectState = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_SUBJECTS:
      return { ...state, allSubjects: action.allSubjects };
    default:
      return state;
  }
};

export default subjectState;
