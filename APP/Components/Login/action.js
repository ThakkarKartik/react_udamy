//#region Imports
import {Alert} from 'react-native';
//#region React native dependencies
import * as types from './actionTypes.js';
//#endregion
//#region Navigation
import {NavigationActions, StackActions} from 'react-navigation';
//#endregion
//#endregion

//SELECT ACTION
export const onPress = data => {
  return dispatch => {
    onPressDispatch(dispatch, data);
  };
};

const onPressDispatch = (dispatch, data) => {
  dispatch({
    type: types.VIEW_HOME,
    title: data,
  });
};