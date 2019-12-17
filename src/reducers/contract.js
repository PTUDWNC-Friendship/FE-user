import * as types from '../helpers/action-type';

const initialState = {
    tutor: null,
    student: null,

};

const contractState = (state = initialState, action) =>{
    switch (action.type) {
        case types.SET_STUDENT_CONTRACT:
            return {...state,
                tutor: action.tutor,
            };
        case types.SET_STUDENT_CONTRACT:
            return {...state,
                student: action.student
            };

        default: return state;
    }
};

export default contractState;
