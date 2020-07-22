import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import * as HomeAction from './Action'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {styles} from './Styles'
class Home extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.moduleName = "profile";
      }
    render() {
        return (
                <View style={styles.view}>
                    <Text style={styles.title}>
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
  