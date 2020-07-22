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
export const LoginPress = (props) =>{
  Alert.alert("Debug","->"+ props.uname + " - " + props.pass)
  return async dispatch =>{
    onPressDispatch(dispatch, id, pass);  
    }

  }
  const onPressDispatch = (dispatch,id,pass) =>
  {
    if(id=="kartik" && pass=="admin")
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
    else
    {
      Alert.alert("Wrong ..","=="+ id + " - " + pass);
    }
  }
  //return true;    

