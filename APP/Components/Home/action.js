import * as types from './ActionTypes'
import Store from '../../Store'
import {NavigationActions, StackActions} from 'react-navigation';
import { Login } from '../Login/Login'
import { LOGIN } from '../../Navigation/RoutePaths'

export const onPress = () => {
    return dispatch => {
        dispatch(
          NavigationActions.navigate({
            routeName:LOGIN,
            // params: {
            //   passValue: value,
            // },
          }),
        );
      };
};
