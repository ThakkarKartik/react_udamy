import * as types from './actionTypes'
import Store from '../../Store'
import {NavigationActions, StackActions} from 'react-navigation';
import { Login } from '../Login/Login'

export const onPress = () => {
    return dispatch => {
        dispatch(
          NavigationActions.navigate({
            routeName:Login,
            // params: {
            //   passValue: value,
            // },
          }),
        );
      };
};
