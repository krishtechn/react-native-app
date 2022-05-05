import { View, Text,FlatList,Image,StyleSheet,ScrollView,Button } from 'react-native'
import React,{useState} from 'react'
import Data from "./apicourse";

const Couses = () => {
    const [data,setdata] = useState(Data);
    
  return (
    <ScrollView style={{width:"100%"}}>
      {data.map((items,key)=>{
        return <View key={key} style={[{marginVertical:30,margin:30},styled.shadows]}>
            <Image source={{uri:items.img}} style={{width:"100%",height:undefined,aspectRatio:2}}/>
            <View style={{marginVertical:20,paddingVertical:10,paddingHorizontal:10}}>
            <Text style={{fontSize:25,fontWeight:'300',color:"black",textTransform:"capitalize"}}>{items.title}</Text>
            <Text style={{fontSize:16,fontWeight:'400',color:"black",textTransform:"capitalize"}}>{items.desc}</Text>
            </View>
            <Button title="Learn more"/>
        </View>;
    })}
    </ScrollView>
  )
}

const styled = StyleSheet.create({
    shadows:{
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 1,
    }
})

export default Couses