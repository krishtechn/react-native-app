import { View, Text,StatusBar,TextInput,Image } from 'react-native'
import React,{useState} from 'react'

const LiveSearchImage = () => {
  const [image,setimage] = useState("");
  let url = `https://source.unsplash.com/400x300?${image}`;
  return (
    <View>
      <StatusBar backgroundColor='blue'/>
      <Text style={{color:"#000",fontSize:30,fontWeight:"bold",textAlign:"center",marginVertical:10,letterSpacing:3}}>Search Image</Text>
      <TextInput onChangeText={(e)=>setimage(e)} placeholder='Search image...' style={{borderColor:"#000",fontSize:20,fontWeight:"400",padding:10,borderRadius:10,borderWidth:1,marginHorizontal:30,}}/>
      
      {
        image == ""?<Text style={{color:"#000",fontSize:30,marginTop:30,alignItems:"center",fontWeight:"bold",textAlign:"center"}}>No image</Text>:<Image source={{uri:url}} style={{aspectRatio:1,width:"100%",height:undefined,marginVertical:20}}/>
      }
      
    </View>
  )
}

export default LiveSearchImage