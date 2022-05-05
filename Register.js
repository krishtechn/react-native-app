import React,{useState} from 'react'
import {Text,TextInput,View,Button,Alert,TouchableOpacity} from "react-native";
import { auth,createUserWithEmailAndPassword } from '../firebase/firebase_config';

function Register({navigation}) {
    const [data,setdata] = useState({
        email:"",
        password:"",
        name:"",
    })

    const Register = ()=>{
        createUserWithEmailAndPassword(auth,data.email,data.password)
        .then((re)=>{
            Alert.alert("Data submited success");
        })
        .catch((re)=>{
            Alert.alert("Data can't submited success");
        })
    }


  return (
      <View>
    <Text>Register</Text>

    <TextInput style={{marginBottom:30}} value={data.name} onChangeText={(e)=>setdata({...data,name:e})} placeholder='Enter your name'/>
    <TextInput style={{marginBottom:30}} value={data.email} onChangeText={(e)=>setdata({...data,email:e})} placeholder='Enter your email'/>
    <TextInput style={{marginBottom:30}} secureTextEntry={true} value={data.password} onChangeText={(e)=>setdata({...data,password:e})} placeholder='Enter your password'/>

<Button title="Register" onPress={Register}/>
<TouchableOpacity onPress={()=>navigation.navigate("SignIn")}>
    <Text>already have account?</Text>
</TouchableOpacity>
    </View>
  )
}

export default Register

