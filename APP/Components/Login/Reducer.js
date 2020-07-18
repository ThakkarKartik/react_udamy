import * as types from './actionTypes'

const initiState = {
  title: 'Login',
};

const LoginReducer = (state = initiState, action) => {
  switch (action.type) {
    case types.VIEW_HOME:
      return {
        ...state,
      };
    default:
      return state;
  }
};
export default LoginReducer;