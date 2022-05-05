import { View, Text, TouchableOpacity, useWindowDimensions,Animated } from 'react-native'
import React from 'react'
const Paginator = ({item,scrollX}) => {
    const {width} = useWindowDimensions();
  return (
    <View style={{display:"flex",flexDirection:"row",width:"100%",justifyContent:"center",alignItems:"center",marginBottom:50}}>
        {item.map((items,i)=>{
         const inputRange = [(i - 1) * width,i * width, (i + 1) * width];
           let color="rgb(69, 59, 132)";
        //    if(i == 0){
        //        color = "rgb(69, 59, 132)";
        //    }else if(i == 1){
        //        color = "blue";
        //    }else{
        //        color = "black";
        //    }

           const dotwidth = scrollX.interpolate({
               inputRange,
               outputRange :[20,40,20],
            //    extrapolate:'clamp',
           })

           const opacity = scrollX.interpolate({
               inputRange,
               outputRange:[0.3,1,0.3],
            //    extrapolate:'clamp',
           })

            return <Animated.View key={i.toString()} style={{backgroundColor:color,width:dotwidth,height:12,borderRadius:100,margin:8,opacity}}/>
        })}
    </View>
  )
}

export default Paginator