import Home from '../Components/Home/Home'
import Login from '../Components/Login/Login'

export const Routes = {

    home: {
      screen: Home,
      navigationOptions: {
        title: 'Home',
        //headerStyle: { backgroundColor: colorCodes.NAVIGATION_HEADER },
        //headerTintColor: colorCodes.BLACK,
      },
    },
    login: {
      screen: Login,
      navigationOptions: {
        title: 'Login',
        //headerStyle: { backgroundColor: colorCodes.NAVIGATION_HEADER },
        //headerTintColor: colorCodes.BLACK,
      },
    },
  
  };