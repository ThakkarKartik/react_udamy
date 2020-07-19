import * as types from './ActionTypes'
const initiState = {
    title: 'Home',
  };

const homeReducer = (state = initiState, action) => {
  switch (action.type) {
    case types.VIEW_LOGIN:
      return {
        ...state,
      };
      default:
          return state;
    }
};
export default homeReducer;