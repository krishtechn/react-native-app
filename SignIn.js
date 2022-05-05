import React,{useState} from 'react'
import {Text,TextInput,View,Button,Alert,TouchableOpacity,ActivityIndicator} from "react-native";
import { auth,signInWithEmailAndPassword } from '../firebase/firebase_config';
import Drawer from "react-native-paper";

function SignIn({navigation}) {
    const [data,setdata] = useState({
        name:"",
        email:"",
        password:"",
    })


    const SignIn = ()=>{
        signInWithEmailAndPassword(auth,data.email,data.password)
        .then((re)=>{
            const user = re.user;
            if(user.email){
                Alert.alert("you are Login");
                navigation.navigate("Filtercards",{
                   name:data.name,
                  });
            }else{
                Alert.alert("you can't Login");
            }
        })
        .catch((re)=>{
            Alert.alert("please Enter a correct Email and password");
        })
    }


  return (
      <View>
    <Text>SignIn</Text>
    <TextInput style={{marginBottom:30}} value={data.name} onChangeText={(e)=>setdata({...data,name:e})} placeholder='Enter your name'/>
    <TextInput style={{marginBottom:30}} value={data.email} onChangeText={(e)=>setdata({...data,email:e})} placeholder='Enter your email'/>
    <TextInput style={{marginBottom:30}} secureTextEntry={true} value={data.password} onChangeText={(e)=>setdata({...data,password:e})} placeholder='Enter your password'/>

<Button title="SignIn" onPress={SignIn}/>
<TouchableOpacity onPress={()=>navigation.navigate("Register")}>
    <Text>create an account?</Text>
</TouchableOpacity>
</View>
  )
}

export default SignIn

