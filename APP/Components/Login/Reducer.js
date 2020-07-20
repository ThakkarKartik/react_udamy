import * as types from './ActionTypes'

const initiState = {
  title: 'Login',
  userid: '',
  token: '',
  
};

const LoginReducer = (state = initiState, action) => {
  switch (action.type) {
    case types.VIEW_HOME:
      return {
        ...state,
      };
      case types.SET_LOGIN_STATE:
        return{
            ...state,
            ...action.payloads,
            isLoggedIn: true,
        };
    default:
      return state;
  }
};
export default LoginReducer;