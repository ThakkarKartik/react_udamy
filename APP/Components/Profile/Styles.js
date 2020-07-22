import {StyleSheet} from 'react-native'

export const styles =  StyleSheet.create({
    title:{
        textAlign:"center",
        "fontFamily": "Segoe UI",
        "fontSize": 20,
        marginTop:20,
        "color": "rgba(33, 149, 20, 255)"
      },
      text:
      {
        textAlign:"center",
        "fontFamily": "Segoe UI",
        "fontSize": 20,
        marginTop:8,
        //textAlignVertical: "center",
        "color": "white",
      },
      button:{
         textAlign:"center",
        "alignItems": "center",
        "marginTop": 20,
        "width": 197,
        "height": 46,
        "borderRadius": 23,
        "borderWidth": 1,
        "borderColor": "rgba(112, 112, 112, 255)",
        "backgroundColor": "rgba(33, 149, 20, 255)"
      },
      view:{
        "alignItems": "center",
        textAlign:"center",
        "paddingTop": 31,
        "marginTop":10,
      },
    input:{
        "alignItems": "center",
        "marginTop": 20,
        "width": 280,
        padding: 10,
        "height": 50,
        "borderRadius": 20,
        "borderWidth": 1,
        "borderColor": "rgba(14, 77, 14, 255)",
        "backgroundColor": "rgba(255, 255, 255, 255)"
    }
});