import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import * as LoginAction from './action'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class Login extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
                <View>
                    <Text>
                        Welcome to Login Screen
                        </Text>
                        <TouchableOpacity onPress = {()=>{ this.props.navigation.navigate('Home') }} >
        <Text> 
          Home
        </Text> 
        </TouchableOpacity>
      
                </View>
        )
    }
}
const mapStateToProps = state => {
    const currentState = state.login;
    return {
      currentState,
    };
  };
  export default connect(
    mapStateToProps,
    dispatch => bindActionCreators(LoginAction, dispatch),
  )(Login);
  