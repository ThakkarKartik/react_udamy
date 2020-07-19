import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import * as HomeAction from './Action'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class Home extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.moduleName = "home";
      }
    render() {
        return (
                <View>
                    <Text>
                        Welcome to Home Screen
                        </Text>
                        <TouchableOpacity onPress = {()=>{ this.props.onPress() }} >
        <Text> 
          Login
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
  