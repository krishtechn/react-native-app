import { View, Text,Button,Image,FlatList,StatusBar,Share,Linking } from 'react-native'
import React from 'react'
import { Link, NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import About from './Components/About';
import image from "./assets/profile.jpg";
import Login from './Components/Login';
import Users from './Components/Users';
import Couses from './Components/Couses';
import apidata from "./Components/apicourse";
import Gallery from './Components/Gallery';
import Tabbar from './Components/Tabbar';
import ImagePicker from "./Components/ImagePicker";

const App = () => {
  const stack = createNativeStackNavigator();
  return (
    // <View>
    //   <ImagePicker />
    // </View>
     <NavigationContainer>
       {/* <Tabbar /> */}
       <StatusBar backgroundColor="rgb(33, 150, 243)"/>
       {/* <Bottomsheet /> */}
       <stack.Navigator initialRouteName='Login'>

         <stack.Screen name="home">
          {(props)=><Homescreen {...props} title="welcome"/>}  
         </stack.Screen>  

          <stack.Screen name="Login" component={Login}/>

           <stack.Screen name="User" component={Users}/>

           <stack.Screen name="Course" component={Couses}/>

           <stack.Screen name="about">
           {(props)=><About {...props} title="Technical krish" desc="Hello I am krish kharal full stack developer" url={image} />}  
           </stack.Screen>

          <stack.Screen name="Gallery" component={Gallery}/>

          
        </stack.Navigator>

     </NavigationContainer>
  )
}

const Homescreen = ({title})=>{
  const navigation = useNavigation();
  return (
    <View style={{width:"100%",height:"100%",display:"flex",justifyContent:"space-between",flexDirection:"column"}}>
     <FlatList data={apidata} horizontal showsHorizontalScrollIndicator={false} style={{backgroundColor:"rgb(92, 108, 124)",}} renderItem={(items)=>{
       return <View style={{backgroundColor:"orange",height:"20%",padding:10,margin:10,display:"flex",justifyContent:"center",alignItems:"center"}}>
           <Text>{items.item.title}</Text>
           </View>
     }}/>
   <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",marginHorizontal:30}}>
   <Button title="About us" onPress={()=>{
        navigation.navigate("about");
      }}/>

 <Button title="User Data" onPress={()=>{
         navigation.navigate("User");
       }}/>
  <Button title="Share" onPress={()=>{
     const result = Share.share({
       message:"Hello world",
     })
   //  Linking.openSettings();
   // Linking.openURL("https://www.youtube.com/results?search_query=react+native+bottom+sheet");
       }}/>
 <Button title="Course" onPress={()=>{
         navigation.navigate("Course");
      }}/>

 <Button title="Gallery" onPress={()=>{
         navigation.navigate("Gallery");
       }}/>

      
    </View>
 </View>
   )
 }



export default App