import { combineReducers } from 'redux';
import userState from './user';
import contractState from './contract'

const myReducer = combineReducers ({
    userState,
    contractState
});
export default myReducer;