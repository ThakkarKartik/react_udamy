import React from 'react'
//import { AppContainer } from './APP/Route/route'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator} from 'react-navigation-stack'
//import { createStackNavigator } from "react-navigation";
import {
  createReduxContainer,
  createNavigationReducer
} from "react-navigation-redux-helpers";
import { Provider, connect } from "react-redux";
import { Routes } from "./APP/Navigation/route";
import getStore from "./APP/Store";
const AppNavigator = createStackNavigator(Routes);

const navReducer = createNavigationReducer(AppNavigator);
const store = getStore(navReducer);
const App = createReduxContainer(AppNavigator);
const mapStateToProps = state => ({
  state: state.nav
});
const AppWithNavigationState = connect(mapStateToProps)(App);
//export default AppWithNavigationState;

class Root extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
   // const {nav,dispatch} = this.props;
    return (
      <Provider store={store}>
        <AppWithNavigationState
          navigation={{
            dispatch: this.props.dispatch,
            state: this.props.nav
          }}
        />
      </Provider>
    );
  }
}
export default Root;