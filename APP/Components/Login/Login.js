import React from 'react'
import {Button, TextInput, View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native'
import * as LoginAction from './Actions'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {styles} from './Styles'
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
      <View styles={styles.view}>
        <Text style={styles.title}>
          Welcome to Login Screen
        </Text>
        <View style={styles.view}>
        <TextInput 
          style={styles.input}
          placeholder = "Enter Email"
          onChangeText={input =>
            this.props.onTextChange(input, 'email')
          }
          value={this.props.currentState.email}
        />
        <TextInput 
          style={styles.input}
          placeholder = "Enter Password"
          onChangeText={input =>
            this.props.onTextChange(input, 'password')
          }
          value={this.props.currentState.password}
        />
        </View>
        <View style={styles.view}>
        <TouchableOpacity 
        style = {styles.button}
        onPress = {() => this.props.LoginPress(this.props.currentState.email,this.props.currentState.password )}
        //onPress = {() => alert("Email is: " + this.props.currentState.email + " & " + "Password is: " + this.props.currentState.password)}
        >
            <Text style={styles.text}> Sign-in</Text>
        </TouchableOpacity>
        </View>
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