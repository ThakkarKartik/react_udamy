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
  response = CheckLogin(email, pass);
  //console.log(response);
  Alert.alert("response", ""+response)
};
function CheckLogin(email, pass) 
{
  // try{
  //   fetch('https://reqres.in/api/login',{
  //     method:"POST",
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       email: 'eve.holt@reqres.in',
  //       password: 'cityslicka',
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((response) => {
  //       return response;
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }
  // catch(error)
  // {
  //     console.error(error);
  // }
  return "True";
};
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

