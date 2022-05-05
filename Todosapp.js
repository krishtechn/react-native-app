import { View, Text,StatusBar,TouchableOpacity,StyleSheet,TextInput } from 'react-native'
import React from 'react'

const Todosapp = () => {
  return (
    <View style={{display:"flex",width:"100%",height:"70%",justifyContent:"space-around"}}>
        <StatusBar backgroundColor='red'/>
        <Text style={[styled.text,styled.commonstyle]}>Add Items</Text>
        <TextInput style={styled.inputfield} placeholder='  Add items                  ➕'/>
        <View style={styled.additems}>
            <Text style={[styled.commonstyle,{color:"white"}]}>Hello world</Text>
            <TouchableOpacity style={{backgroundColor:"white",width:30,borderRadius:100}}>
                <Text style={{textAlign:"center",alignItems:"center"}}>➖</Text>
            </TouchableOpacity>
        </View>

<View style={{display:"flex",justifyContent:"space-around",alignItems:"center",flexDirection:"row",width:"100%"}}>
        <TouchableOpacity style={{backgroundColor:"blue",padding:10,}}>
                <Text style={[styled.commonstyle,{color:"white",textTransform:"capitalize"}]}>add items</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:"red",padding:10}}>
                <Text style={[styled.commonstyle,{color:"white",textTransform:"capitalize"}]}>clear items</Text>
            </TouchableOpacity>
    </View>
    </View>
  )
}

const styled = StyleSheet.create({
    text:{
        borderBottomColor:"blue",
        borderWidth:2,
        borderTopColor:"white",
        borderRightColor:"white",
        borderLeftColor:"white",
        marginHorizontal:100,
        marginVertical:30,
      
    },
    commonstyle:{
        textAlign:"center",
        fontWeight:"300",
        fontSize:20,
        letterSpacing:3,
    },
    inputfield:{
        borderBottomColor:"blue",
        borderWidth:3,
        padding:10,
        fontSize:20,
        fontWeight:"bold",
        letterSpacing:3,
        marginHorizontal:30,
        borderRadius:30,
        borderLeftColor:"red",
        borderTopColor:"green",
        color:"black",
        borderRightColor:"red",
    },
    additems:{
        display:"flex",
        flexDirection:"row",
        marginHorizontal:30,
        marginVertical:30,
        justifyContent:"space-between",
        backgroundColor:"red",
        padding:10,
        borderRadius:30,
    }
})

export default Todosapp