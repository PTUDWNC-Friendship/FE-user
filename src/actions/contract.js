import fetch from 'cross-fetch';
import * as types from '../helpers/action-type';
import { SERVER_URL } from '../helpers/constant';

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





