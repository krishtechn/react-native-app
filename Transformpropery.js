import { View, Text,Button } from 'react-native'
import React,{useState} from 'react'

const Transformpropery = () => {
    
  const [animate,setanimate] = useState(-0);
  return (
  <View style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"}}>
        <View style={{marginVertical:60,backgroundColor:"red",width:"50%",height:"20%", translateY: animate, }}>
        {/* transform: [{skewX:animate+"deg"},{skewY:animate+"deg"}] */}
        <Text style={{translateY: animate,}}>Hello world</Text>
        </View>
        <Button title="animate Box" onPress={()=>setanimate(animate+10)}/>
        </View>
 
  )
}

export default Transformpropery