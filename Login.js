import { View,Alert,TouchableWithoutFeedback ,Keyboard} from 'react-native'
import React from 'react'
import { Text } from "@rneui/themed"
import { Button, Divider, TextInput } from 'react-native-paper'
import { useState } from 'react'
import {auth, signInWithEmailAndPassword } from "../Firebase/firebase_config";

const Login = ({navigation}) => {
    const [data,setdata] = useState({
        username:"",
        Email:"",
        Password:"",
    });

    const Logins = ()=>{
      if(data.username == ""){
          Alert.alert("Error Message","username can't be blank");
      }else if(data.Email == ""){
        Alert.alert("Error Message","Email can't be blank");
      }else if(data.Password == ""){
        Alert.alert("Error Message","password can't be blank");
      }else if(data.Password.length < 6){
        Alert.alert("Error Message","password most be greater then 6 char");
      }else{
        signInWithEmailAndPassword(auth,data.Email,data.Password)
        .then((re)=>{
            Alert.alert("Success Message","you are login");
            navigation.navigate("Carosels",{name:"krish"});
        })
        .catch((re)=>{
            Alert.alert("Error Message","your are not Login");
        })
      }
    }
  return (
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
    }} >
    <View style={{display:"flex",justifyContent:"space-between",alignItems:"center",flexDirection:"column",width:"100%",height:"50%"}}>
      <Text h4>Login</Text>
     <TextInput onChangeText={(e)=>setdata({...data,username:e})} value={data.username} label='username' placeholder='Enter your Name' mode='outlined' style={{width:"90%"}}/>
     <TextInput onChangeText={(e)=>setdata({...data,Email:e})} value={data.Email} label='Email' placeholder='Enter your Email' mode='outlined' style={{width:"90%"}}/>
     <TextInput onChangeText={(e)=>setdata({...data,Password:e})} value={data.Password} label='Password' placeholder='Enter your Password' mode='outlined' style={{width:"90%"}}/>
     <Button style={{backgroundColor:"rgb(131, 44, 134)"}} onPress={Logins}>Login</Button>
     </View>
     </TouchableWithoutFeedback>
  )
}

export default Login