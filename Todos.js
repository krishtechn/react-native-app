import { View, Text,ScrollView,TextInput,StatusBar,TouchableOpacity,Alert,StyleSheet } from 'react-native'
import React,{useState} from 'react'

const Todos = () => {
  const [items,setitems] = useState("");
  const [additems,setadditems] = useState([]);
  
  const handleadditems = ()=>{
  if(items != ""){
    setadditems([...additems,
      {
          items:items,
      }
  ])
  }else{
    Alert.alert("please ➕ add a items here","");
  }
  setitems("");
  }
  

const removeitems = (id)=>{
  Alert.alert("Delete item","are you sure you want to delete data",
  [
    {
      text:"cancle",
    },
    {
      text:"ok",
      onPress:()=>{
        const item = additems.filter((data,ids)=>{
          return ids != id; 
        })
        setadditems(item);        
      }
    }
  ]
  );
}


  return (
    <ScrollView>
      {/* <LiveSearchImage /> */}
      <StatusBar backgroundColor='blue'/>
      <Text style={{textAlign:"center",fontFamily:"Inter_600SemiBold",marginTop:40,fontSize:30,textTransform:"capitalize",letterSpacing:3,borderBottomColor:"red",borderWidth:1,borderColor:"white",margin:90}}>Add Items</Text>
      <View style={{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",marginTop:10}}>
      <TextInput value={items} onChangeText={(e)=>setitems(e)} placeholder='Add Items                    ➕' style={[{borderBottomColor:"red",padding:8,paddingLeft:20,width:"90%",borderWidth:3,borderTopColor:"blue",marginHorizontal:20,fontSize:20,fontWeight:"400",marginTop:30,color:"black",textTransform:"capitalize",letterSpacing:3,borderRadius:40,marginVertical:20,backgroundColor:"white",fontFamily:"Inter_300Light"},styled.shadows]}/>
      {
        additems.map((items,key)=>{
           return <View key={key} style={{borderRadius:30,backgroundColor:"red",width:"90%",display:"flex",flexDirection:"row",justifyContent:"space-between",marginHorizontal:20,padding:10,marginVertical:30}}>
               <Text style={{color:"white",width:"90%",fontFamily:"Inter_400Regular",fontSize:20,textTransform:"capitalize",letterSpacing:2,fontWeight:"400"}}>{items.items}</Text>
               <TouchableOpacity onPress={()=>removeitems(key)} style={{width:"90%"}}><Text style={{color:"white",fontSize:20,fontFamily:"Inter_800ExtraBold",fontWeight:"400"}}>-</Text></TouchableOpacity>
               </View>
        })
      }
     <View style={{display:"flex",justifyContent:"space-between",flexDirection:"row",width:"90%",marginVertical:20}}>
     <TouchableOpacity onPress={()=>handleadditems()} style={[{backgroundColor:"red",width:"40%",padding:10,borderRadius:5},styled.shadows]}><Text style={{textTransform:"uppercase",fontSize:17,color:"white",fontFamily:"Inter_800ExtraBold",letterSpacing:1}}>Add Items</Text></TouchableOpacity>
     <TouchableOpacity onPress={()=>setadditems([])} style={{backgroundColor:"blue",width:"40%",padding:10,borderRadius:5}}><Text style={{fontSize:17,color:"white",fontWeight:"bold",letterSpacing:1,textTransform:"uppercase",fontFamily:"Inter_800ExtraBold"}}>clear Items</Text></TouchableOpacity>
     </View>
      </View>
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

elevation: 5,
  }
})

export default Todos