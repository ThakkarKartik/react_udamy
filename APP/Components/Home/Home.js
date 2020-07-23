import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Button } from 'react-native'
import * as HomeAction from './Actions'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {styles} from './Styles'

class Home extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.moduleName = "home";
      }
    render() {
        return (
                <View style = {styles.View}>
                    <Text style = {styles.title}>
                        Welcome to Home Screen
                        </Text>
                        <TouchableOpacity 
                        style={styles.button}
                        onPress = {()=>{ this.props.onPress(this.props.state)}}>
                        <Text style={styles.text}>
                          Login Screen
                        </Text>
                        </TouchableOpacity>
      
                </View>
        )
    }
}
const mapStateToProps = state => {
    const currentState = state.home;
    return {
      currentState
    };
  };
  export default connect(
    mapStateToProps,
    dispatch => bindActionCreators(HomeAction, dispatch)
  )(Home);
  