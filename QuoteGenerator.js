import { View, Text,StatusBar,StyleSheet, Clipboard,TouchableOpacity, Share,Alert,Linking } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import { Button } from 'react-native-paper';

const QuoteGenerator = () => {

    const [content,setcontent] = useState("Loading...");
    const [author,setauthor] = useState("Loading...");
    const [isloading,setisloading] = useState(false);

    const randomquote=()=>{
        setisloading(true);
        fetch("https://api.quotable.io/random").then((response)=>{
            return response.json();
        }).then((data)=>{
            setcontent(data.content);
            setauthor(data.author);
            setisloading(false);
        })
    }


useEffect(()=>{
    randomquote();
},[])


const ShareQuote = async()=>{
        try{
            const result = await Share.share({
                message:content,
            })
        }catch(error){
        alert(error.message);
        }
}
const [copiedText, setCopiedText] = useState('')

const copyToClipboard = () => {
    Alert.alert("Copy Quotes","Quote Has Been Copy");
  Clipboard.setString(content);
}


const ShareFacebook = ()=>{
    const url = "https://www.facebook.com/krish.kharal.14"+content;
    Linking.openURL(url);
}



  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"rgb(75, 102, 240)"}}>
      <StatusBar hidden={true}/>
      <View style={[{width:"90%",backgroundColor:"white",borderRadius:10,padding:30},styled.shadows]}>
      <Text style={{fontSize:25,fontWeight:"800",color:"#000",color:"#333",textAlign:"center",textTransform:"capitalize"}}>quote of the Day</Text>
      
      <Text style={{fontSize:50,color:"black",fontWeight:"normal",fontStyle:"italic"}}>""</Text>
      <Text style={{fontSize:15,color:"#000",fontWeight:"400",marginTop:-40,lineHeight:26,letterSpacing:0.5}}>{content}</Text>
      <Text style={{fontSize:50,color:"black",fontWeight:"normal",textAlign:"right",marginTop:-30,fontStyle:"italic"}}>""</Text>
     <Text style={{color:"#000",textAlign:"right",fontWeight:"300",fontSize:16,fontStyle:"italic"}}>---- {author}</Text>
      <TouchableOpacity onPress={()=>{
              randomquote();
      }} style={{marginTop:20,backgroundColor:"#5372f0",padding:20,borderRadius:50}}>
          <Text style={{color:"#fff",fontSize:18,textAlign:"center",textTransform:"capitalize"}}>{isloading?"Loading....":"New Quote"}</Text>
      </TouchableOpacity>
      <View style={{marginTop:30,display:"flex",justifyContent:"space-evenly",width:"100%",flexDirection:"row",alignItems:"center"}}>
      <Button icon={'share'} onPress={ShareQuote} style={{borderWidth:2,borderColor:"#5372f0",width:"10%",borderRadius:100,padding:7}}></Button>
      <Button icon={'share'} onPress={copyToClipboard} style={{borderWidth:2,borderColor:"#5372f0",width:"10%",borderRadius:100,padding:7}}></Button>
      <Button icon={'facebook'} onPress={ShareFacebook} style={{borderWidth:2,borderColor:"#5372f0",width:"10%",borderRadius:100,padding:7}}></Button>
      </View>
      </View>

    </View>
  )
}

const styled = StyleSheet.create({
 shadows:{
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    
    elevation: 14,
 }
})

export default QuoteGenerator