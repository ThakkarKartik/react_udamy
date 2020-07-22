import * as types from './ActionTypes'
const initiState = {
    title: 'Profile',
  };

const profileReducer = (state = initiState, action) => {
  switch (action.type) {
    case types.VIEW_PROFILE:
      return {
        ...state,
      };
      default:
          return state;
    }
};
export default profileReducer;