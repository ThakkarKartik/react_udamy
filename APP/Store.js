//#region ' Framework Dependencies '

import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { createReactNavigationReduxMiddleware } from "react-navigation-redux-helpers";
import thunk from "redux-thunk";
//#endregion ' Framework Dependencies '

//#region ' Project Dependencies '
import homeReducer from "./Components/Home/Reducer.js"
import LoginReducer from "./Components/Login/Reducer"
//#endregion

const appReducer = navReducer => {
  return combineReducers({
    nav: navReducer,
    home: homeReducer,
    login: LoginReducer,
  });
};

// Note: createReactNavigationReduxMiddleware must be run before reduxifyNavigator
const middleware = createReactNavigationReduxMiddleware(
    // 'root',
  state => state.nav
);

export default function getStore(navReducer) {
  const enhancer = compose(applyMiddleware(middleware, thunk));
  return createStore(appReducer(navReducer), undefined,enhancer);
}
