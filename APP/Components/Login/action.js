//import * as types from './ActionTypes'
//import Store from '../../Store'
import {NavigationActions, StackActions} from 'react-navigation';
//import { Home } from '../Home/Home'
import { HOME } from '../../Navigation/RoutePaths'

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
