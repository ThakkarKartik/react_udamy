import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator} from 'react-navigation-stack'
import Home from '../Components/Home/Home'
import Login from '../Components/Login/Login'
//import Root from '../../App'

const AppNavigator = createStackNavigator(  
    {  
        Home: Home,  
        Login: Login
    },  
    {  
        initialRouteName: "Home"  
    }  
  );  
  export const AppContainer = createAppContainer(AppNavigator);