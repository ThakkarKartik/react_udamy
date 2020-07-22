import * as types from './ActionTypes'

const initiState = {
  title: 'Login',
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
            title: action.response,
        };
    default:
      return state;
  }
};
export default LoginReducer;