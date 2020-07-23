import { NavigationActions, StackActions } from 'react-navigation';
import { HOME, PROFILE } from '../../Navigation/RoutePaths'
import * as actionTypes from './ActionTypes'
import { Alert } from 'react-native';

export const onPress = () => {
  return dispatch => {
    dispatch(
      NavigationActions.navigate({
        routeName: HOME,
        // params: {
        //   passValue: value,
        // },
      }),
    );
  };
};
export const LoginPress = (email, pass) => {
  if (email == "Kt" && pass == "Kt") {
    return async dispatch => {
      onPressDispatch(dispatch, email, pass);
    }
  }
  else {
    Alert.alert("response", "Wrong Email or Password")
  }
  //  response = CheckLogin(email, pass);
  // Alert.alert("response","-> "+ response)

}
const CheckLogin = (email, pass) => {
  return fetch('https://reqres.in/api/login')
    .then((response) => response.json())
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error(error);
    });
}
const onPressDispatch = (dispatch, email, pass) => {
  dispatch(
    NavigationActions.navigate({
      routeName: PROFILE,
      
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

