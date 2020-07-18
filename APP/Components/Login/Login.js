import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

export default class Login extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View>
                <Text>
                    Welcome to Home Screen
                        </Text>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('Home') }} >
                    <Text>
                        Home
        </Text>
                </TouchableOpacity>

            </View>
        )
    }
}