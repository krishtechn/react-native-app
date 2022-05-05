import { View,StyleSheet,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { Text } from '@rneui/themed'
import { Button } from 'react-native-paper'

const FirstPage = ({navigation}) => {
  return (
      <>
    <View style={styled.Container}>
      <Text h3 style={styled.text}>Gameon</Text>
      <Image source={require("../assets/logo.png")} style={{transform:[{rotate:"90deg"}]}}/>
      <TouchableOpacity style={styled.btn} onPress={()=>navigation.navigate("Carosels")}>
          <Text style={{fontSize:20,fontWeight:"bold",color:"white"}}>let's Begin</Text>
      </TouchableOpacity>
      </View>
    </>
  )
}


const styled = StyleSheet.create({
    Container:{
        backgroundColor:"#fff",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        width:"100%",
        height:"100%",
        flexDirection:"column",
    },
  text:{
      textAlign:"center",
      textTransform:"uppercase",
      letterSpacing:1,
      marginTop:40,
  },
  btn:{
      backgroundColor:"rgb(131, 44, 134)",
      width:"90%",
      padding:10,
      paddingLeft:20,
      marginBottom:30,
      borderRadius:20,
  }
})

export default FirstPage