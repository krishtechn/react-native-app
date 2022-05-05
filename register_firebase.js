import { View,Button, Text,TextInput,StatusBar,StyleSheet } from 'react-native'
import React,{useState} from 'react'
import { authentication } from './firebase/firebase-config'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";


const App = () => {
  const [isSigned,setisSigned] = useState(false);
  // const [Fname,setFname] = useState("");
  // const [Lname,setLname] = useState("");
  const [Email,setEmail] = useState("");
  const [Password,setPassword] = useState("");

  const RegisterUser = ()=>{
    createUserWithEmailAndPassword(authentication, Email, Password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      setisSigned(true);
      // ...
    }).catch((re)=>{
     console.log(re);
   })
  }

  // const signInUser = ()=>{
  //   signInWithEmailAndPassword(authentication, Email, Password)
  // .then((userCredential) => {
  //   // Signed in 
  //   console.log(userCredential)
  //   // ...
  // })
  // .catch((error) => {
  //   console.log(error);
  // });
  // }

  return (
    <View style={styled.container}>
      <StatusBar backgroundColor='red'/>
      {/* <TextInput value={Fname} onChangeText={(e)=>setFname(e)} placeholder='Enter your Fname' style={styled.inputfield}/> */}
      {/* <Text>{Fname}</Text> */}
      {/* <TextInput value={Lname} onChangeText={(e)=>setLname(e)} placeholder='Enter your Lname' style={styled.inputfield}/> */}
      {/* <Text>{Lname}</Text>  */}
      <TextInput value={Email} onChangeText={(e)=>setEmail(e)} placeholder='Enter your Email' style={styled.inputfield}/>
      <TextInput value={Password} secureTextEntry={true} onChangeText={(e)=>setPassword(e)} placeholder='Enter your password' style={styled.inputfield}/>
      
      <Button title="Register" onPress={RegisterUser}/>

      {/* <TextInput value={Email} onChangeText={(e)=>setEmail(e)} placeholder='Enter your Email' style={styled.inputfield}/> */}
      {/* <TextInput value={Password} secureTextEntry={true} onChangeText={(e)=>setPassword(e)} placeholder='Enter your password' style={styled.inputfield}/> */}
      
      {/* <Button title="Signup" onPress={signInUser}/> */}
    </View>
  )
}

const styled = StyleSheet.create({
  inputfield:{
    borderColor:"black",
    borderWidth:1,
    padding:10,
    marginVertical:30,
    borderRadius:10,
    width:"90%",
  },
  container:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    width:"100%",
    height:"100%",
  }

})

export default App