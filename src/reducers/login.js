import * as types from '../helpers/index';

const stateLogin = {
    isFetching: true,
    didInvalidate: false,
    userAuth: null,
    user: null,
    isLogin: false,
  };



function GetInitialState() {


    const user = JSON.parse(localStorage.getItem('user'));
    if (user !== null) {
        return {
            ...stateLogin,
            user,
        };
    }
        return stateLogin;
}

const getUserState =  GetInitialState(stateLogin);

const loginReducer = (state = getUserState, action) =>{
    switch (action.type) {
        case types.REQUEST_LOGIN:

            return {...state,
                isFetching: true,
                didInvalidate: false,

            };
        case types.RECEIVE_LOGIN:
            return {...state,
                isFetching: false,
                didInvalidate: false,
                userAuth: action.stateLogin

        };
        case types.GET_CURRENT_USER:
            return { ...state,
                user: action.user,
                isLogin: true
            };
        default: return state;
    }
};
export default loginReducer;
