import * as types from './ActionTypes'

const initiState = {
  title: 'Login',
  email: '',
  password: '',

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
        case types.INPUT_USER_EMAIL:
          return {
            ...state,
            email: action.input,
          };
          case types.INPUT_USER_PASSWORD:
            return {
              ...state,
              password: action.input,
            };
    default:
      return state;
  }
};
export default LoginReducer;