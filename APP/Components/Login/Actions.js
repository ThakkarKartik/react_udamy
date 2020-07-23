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
export const LoginPress = (email,pass) =>{
  
  response = CheckLogin(email, pass);
  Alert.alert("response","-> "+ response)
  return async dispatch =>{
    onPressDispatch(dispatch, email, pass);  
    }

  }
  const CheckLogin = (email, pass) =>
  {
    return fetch('https://reqres.in/api/login')
    .then((response) => response.json())
    .then((json)=>{
      return json;
    })
    .catch((error) => {
      console.error(error);
    });
  }
  const onPressDispatch = (dispatch,email,pass) =>
  {
    dispatch(
      NavigationActions.navigate({
        routeName:PROFILE,
      }),
    );
  }
  export const onTextChange = (input, type) => {
    console.log('onTextChange', input + '-' + type);
    switch (type) {
      case 'email':
        return {
          type: actionTypes.INPUT_USER_EMAIL,
          input: input,
        };
      case 'password':
        return {
          type: actionTypes.INPUT_USER_PASSWORD,
          input: input,
        };
      default:
        break;
    }
  };
  

  //return true;    

