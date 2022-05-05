import { View, Text,Image,ScrollView,ActivityIndicator,Linking,Button,StyleSheet } from 'react-native'
import React,{useEffect,useState} from 'react'


const Users = () => {
    const [data,setdata] = useState([]);
    const [isloading,setisloading] = useState(false);
    

    if(isloading){
        return <View style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"}}>
        <Text style={{fontSize:40,fontWeight:"bold",textAlign:"center"}}>Loading...</Text>
        <ActivityIndicator size="large" color="#0000ff" />
        </View>
    }

    const getdata = async()=>{
        let url = "https://api.github.com/users";
        let data = await fetch(url);
        let newdata = await data.json();
        setdata(newdata);
    }

    useEffect(()=>{
        setisloading(true);
        getdata();
        setisloading(false);
    },[data])

  return (
      <ScrollView>
    <View style={{width:"100%"}}>
        {data.map((items,key)=>{
            return <View key={key} style={[styled.shadows,styled.card]}>
                {/* https://avatars.githubusercontent.com/u/1?v=4 */}
                <Image style={{width:"40%",height:undefined,aspectRatio:1}} source={{uri:items.avatar_url}}/>
                
                <View style={{width:"60%",display:"flex",justifyContent:"space-between"}}>
                
                <View style={{paddingHorizontal:10,width:"100%",marginBottom:10,display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                <Text style={{fontSize:16,fontWeight:"200",color:"black",letterSpacing:1,textTransform:"capitalize"}}>{items.login}</Text>
                <Text style={{fontSize:16,fontWeight:"200",color:"black",letterSpacing:1,textTransform:"capitalize"}}>{items.type}</Text>
                </View>

              <Text style={{paddingLeft:10}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, laudantium!</Text>

                <View>
                <Button title="Visit profile" onPress={()=>Linking.openURL(items.followers_url)}/>
                    </View>
                </View>

                </View>;
        })}
      
    </View>
    </ScrollView>
  )
}

const styled = StyleSheet.create({
    shadows:{
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 1,
},
shadowOpacity: 0.20,
shadowRadius: 1.41,

elevation: 2,
    },
    card:{display:"flex",backgroundColor:"white",flexDirection:"row",marginVertical:20,marginHorizontal:"5%"}
})

export default Users