//import * as types from './ActionTypes'
//import Store from '../../Store'
import {NavigationActions, StackActions} from 'react-navigation';
//import { Home } from '../Home/Home'
import { HOME } from '../../Navigation/RoutePaths'
import { types } from '@babel/core';
import * as actionTypes from './ActionTypes'
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
export const LoginPress = (id, pass) =>{
  //return true;
}
