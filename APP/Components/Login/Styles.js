import {StyleSheet} from 'react-native'
import { TextInput } from 'react-native-gesture-handler';

export default StyleSheet.create({
    Text:{
        flex:1,
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    TextInput:{
            margin:5,
            padding:5,
            height: 40, 
            borderColor: 'gray', 
            borderWidth: 1
    }
});