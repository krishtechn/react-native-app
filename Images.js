import { View, Image,ScrollView } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

const Images = [
  "https://cdn.pixabay.com/photo/2017/09/16/19/21/salad-2756467__340.jpg",
  "https://cdn.pixabay.com/photo/2015/12/09/17/11/vegetables-1085063__340.jpg",
  "https://cdn.pixabay.com/photo/2017/10/09/19/29/eat-2834549__340.jpg",
]

const Imagess = ({navigation}) => {
  return (
    <ScrollView>
      <View style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
       {Images.map((items,index)=>{
         return <Image key={index} source={{uri:items}} style={{width:"90%",height:undefined,aspectRatio:1}}/>
       })}
       <Button icon="close" style={{backgroundColor:"red",marginBottom:30,marginTop:20}} onPress={()=>navigation.goBack("Carosels")}>Go back</Button>
       </View>
    </ScrollView>
  )
}

export default Imagess