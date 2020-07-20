import React from 'react'
import {Button, TextInput, View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import * as HomeAction from './Action'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as styles from './Styles'

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
        <Text style={styles.Text}>
          Welcome to Login Screen
        </Text>
        <TextInput nativeID="txtEmail"
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        />
        <TextInput nativeID="txtPass"
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        />
        <Button 
        title = "SignIn"
        onPress = {this.props.LoginPress()}
        />
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
