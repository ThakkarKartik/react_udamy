import React from 'react'
import {Button, TextInput, View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import * as LoginAction from './Action'
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
    this.props.uname = "none";
    this.props.pass = "none";
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
          onChangeText={(text) => {this.props.uname= text}}
          //value = {this.setState(state.uname)}
        />
        <TextInput 
          style={styles.input}
          placeholder = "Enter Password"
          onChangeText={(text) => {this.props.pass= text}}
        />
        </View>
        <View style={styles.view}>
        <TouchableOpacity 
        style = {styles.button}
        onPress = {() => this.props.LoginPress(this.props)}
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