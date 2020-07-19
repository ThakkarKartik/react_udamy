import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import * as HomeAction from './Action'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class Login extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.moduleName = "login";
      }
    render() {
        return (
                <View>
                    <Text>
                        Welcome to Home Screen
                        </Text>
                        <TouchableOpacity onPress = {()=>{ this.props.onPress() }} >
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
      currentState
    };
  };
  export default connect(
    mapStateToProps,
    dispatch => bindActionCreators(HomeAction, dispatch)
  )(Login);
  