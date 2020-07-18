import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

export default class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
                <View>
                    <Text>
                        Welcome to Home Screen
                        </Text>
                        <TouchableOpacity onPress = {()=>{ this.props.navigation.navigate('Login') }} >
        <Text> 
          Login
        </Text> 
        </TouchableOpacity>
      
                </View>
        )
    }
}