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
        this.props.moduleName = "profile";
      }
    render() {
        return (
                <View>
                    <Text>
                        Welcome to Profile
                        </Text>
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
  