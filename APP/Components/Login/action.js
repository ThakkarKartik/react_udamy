//import * as types from './ActionTypes'
//import Store from '../../Store'
import React from 'react'
import {NavigationActions, StackActions} from 'react-navigation';
//import { Home } from '../Home/Home'
import { HOME,PROFILE } from '../../Navigation/RoutePaths'
import * as actionTypes from './ActionTypes'
import { Alert } from 'react-native';

export const onPress = () => {
    return dispatch => {
        dispatch(
          NavigationActions.navigate({
            routeName:HOME,
            // params: {
            //   passValue: value,
            // },
          }),
        );
      };
};
export const LoginPress = (id,pass) =>{
  return async dispatch =>{
    onPressDispatch(dispatch, id);  
    }

  }
  const onPressDispatch = (dispatch,id) =>
  {
    dispatch(
      NavigationActions.navigate({
        routeName:PROFILE,
        // params: {
        //   passValue: value,
        // },
      }),
    );
  }
  //return true;    

