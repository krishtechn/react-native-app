import { View, Text,ScrollView,StyleSheet,TouchableOpacity,TextInput,Alert,Button,StatusBar } from 'react-native'
import React, { useState } from 'react'
import CheckBox from 'react-native-check-box';

const Login = ({navigation}) => {
    const [name,setname] = useState("");
    const [email,setemail] = useState("");
    const [password,setpassword] = useState("");
    const [mobile,setmobile] = useState();
    const [message,setmessage] = useState("");
    const [ischeck,setischeck] = useState(false);


    // const handlesignup = ()=>{
    //     auth.createUserWithEmailAndPassword(email,password)
    //     .then(UserCredentials=>{
    //         const user = UserCredentials.user;
    //         console.log(user.email);
    //     })
    //     .catch(error=>alert(error.message))
    // }

    const submitform = ()=>{
          if(name == ""){
              alert("please Enter your name");
          }else if(email === ""){
              alert("please Enter your email");
          }else if(password === ""){
             alert("please Enter your password");
          }else if(!mobile){
             alert("please Enter your mobile number");
          }else if(message === ""){
             alert("please Enter your message");
          }
         if(!name && !email && !password && !mobile && !message){
            Alert.alert("Please field your details")
         }else{
              Alert.alert("Thank you",`${name}`)
              navigation.navigate("home");
              setemail("");
              setpassword("");
          }

    }

  return (
    <ScrollView>
        <StatusBar hidden={true}/>
      <View style={styled.maincontainer}>
        <View style={styled.centercontainer}>
           <View>
           <Text style={styled.text}>Level up your knowledge</Text>
        <Text style={styled.textdesc}>you can teach us anytime via krishkharal190@gmail.com</Text>
           </View>

           <View style={styled.inputfield}>
               <Text style={styled.inputtext}>Enter your name </Text>
                <TextInput style={styled.input} value={name} onChangeText={(value)=>{
                    setname(value)
                }} placeholder="Enter your name..."/>
           </View>

           <View style={styled.inputfield}>
               <Text style={styled.inputtext}>Enter your Email </Text>
                <TextInput style={styled.input} onChangeText={(email)=>setemail(email)} value={email} placeholder="Enter your Email..."/>
           </View>

           <View style={styled.inputfield}>
               <Text style={styled.inputtext}>Enter your Password</Text>
                <TextInput style={styled.input} onChangeText={(password)=>setpassword(password)} value={password} secureTextEntry={true} placeholder="Enter your Password..."/>
           </View>


           <View style={styled.inputfield}>
               <Text style={styled.inputtext}>Enter your mobile</Text>
                <TextInput style={styled.input} onChangeText={(mobile)=>setmobile(mobile)} value={mobile} placeholder="Enter your mobile number"/>
           </View>

           <View style={styled.inputfield}>
               <Text style={styled.inputtext}>How can we help you?</Text>
                <TextInput style={[styled.input,styled.messagefield]} onChangeText={(message)=>setmessage(message)} value={message} placeholder="How can we help you?"/>

           </View>


           {/* <CheckBox style={{marginBottom:20}} isChecked={ischeck} value={ischeck} rightText={"Check To Login"}/> */}
           <CheckBox
    style={{marginBottom:30}}
    onClick={()=>{
        setischeck(!ischeck);
    }}
    isChecked={ischeck}
    rightText={"Check To Enable Button"}
/>

<View>
    {/* <Button style={[styled.btn]} onPress={()=>submitform()} disabled={!ischeck} title="Login"/> */}

    <Button style={[styled.btn]} onPress={()=>submitform()} disabled={!ischeck} title="Login"/>

        {/* <Text style={[styled.text,{fontSize:15,textTransform:"capitalize",color:"white",textAlign:"center"}]}>Contact us</Text> */}
    
</View>


        </View>
      </View>
    </ScrollView>
  )
}

const styled = StyleSheet.create({
    maincontainer:{
        width:"100%",
    },
    centercontainer:{
        width:"90%",
        display:"flex",
        marginVertical:10,
        marginHorizontal:30,
        height:"100%",
    },
    text:{
        fontSize:20,
        textTransform:"capitalize",
        fontWeight:'100',
        color:"black",
        lineHeight:40,
    },
    textdesc:{
        fontSize:14,
        textTransform:"capitalize",
        fontWeight:'300',
        letterSpacing:1,
        marginBottom:30,
        color:"#7d7d7d",
    },
    inputfield:{
        marginVertical:14,
    },
    inputtext:{
        fontSize:16,
        fontWeight:"600",
        marginBottom:8,
        color:"#7d7d7d",
        letterSpacing:1,
        fontWeight:'100',
    },
    input:{
        borderColor:"gray",
        borderWidth:2,
        padding:10,
        fontSize:15,
        color:"black",
        fontWeight:"100",
    },
    messagefield:{
        height:90,
    },
    btn:{
        // backgroundColor:"blue",
    }

})

export default Login