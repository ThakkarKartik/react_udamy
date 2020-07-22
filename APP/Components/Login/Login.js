import React from 'react'
import {Button, TextInput, View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import * as LoginAction from './Action'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as styles from './Styles'
//  const [username, setUsername] = useState('');
//  const [password, setPassword] = useState('');

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
        <TextInput 
          style={styles.TextInput}
          placeholder = "Enter Email"
          onChangeText={(text) => {this.props.uname= text}}
          //value = {this.setState(state.uname)}
        />
        <TextInput 
          style={styles.TextInput}
          placeholder = "Enter Password"
          onChangeText={(text) => {this.props.pass= text}}
        />
        <Button 
        title = "SignIn"
        onPress = {() => this.props.LoginPress(this.props)}
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
  dispatch => bindActionCreators(LoginAction, dispatch)
)(Login);