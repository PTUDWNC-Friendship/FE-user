import * as types from "../helpers/action-type";

const initialState = {
  allSubjects: [],
  subject: null
};

const subjectState = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_SUBJECTS:
      return { ...state, allSubjects: action.allSubjects };
    case types.INSERT_TUTOR_SUBJECT:
      return { ...state, subject: action.subject };
    case types.EDIT_TUTOR_SUBJECT:
      return state;
    case types.DELETE_TUTOR_SUBJECT:
      return state;
    default:
      return state;
  }
};

export default subjectState;
