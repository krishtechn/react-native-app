import { View, Text,Button,ActivityIndicator,TextInput } from 'react-native'
import React,{useState,useEffect} from 'react'
import { onAuthStateChanged,auth,ref,set,child, database,get,onValue } from '../firebase/firebase_config';
import { getDatabase, update } from 'firebase/database';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Bottombar from './Bottombar';
import ImagePicker from "./ImagePicker";

const Home = ({navigation}) => {
const [loginemail,setloginemail] = useState("");
const [loading,setloading] = useState(true);
const Tab = createBottomTabNavigator();
// const [search,setsearch] = useState(1);
const [data,setdata] = useState({
    title:'',
    desc:'',
});

useEffect(()=>{
    setTimeout(() => {
        setloading(false);
    }, 1000);
})


if(loading){
    return <ActivityIndicator size="large" color="#999999" />
}


onAuthStateChanged(auth,(user)=>{
          if(user){
              const email = user.email;
             setloginemail(email);
     }else{
              navigation.navigate("SignIn");
     }
 })


//     function writeData(userId,title,Desc){
//         const db = getDatabase();
//        update(ref(db,'users/'+userId),{
//            title:title,
//            desc:Desc
//        })
//     }
//    const id = auth.currentUser.uid;
   
//     writeData(id,"how to learn javascript 1","Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae veniam possimus necessitatibus reprehenderit recusandae. Obcaecati, eaque aut officia, et molestiae corrupti inventore repellendus id, minus praesentium placeat illo qui consequuntur.");

// fetch data 
// function showdata(userId){
//  const dbRef = ref(database);
//  get(child(dbRef,`users/${userId}`)).then((snapshot)=>{
//      if(snapshot.exists()){
//          const title = snapshot.val().title;
//          const desc = snapshot.val().desc;
//          setdata({title:title,desc:desc});
//      }else{
//          alert("No data");
//      }
//  })  
// }

// // const uid = auth.currentUser.uid;
// showdata(search);

// const userId = auth.currentUser.uid;
// return onValue(ref(database, '/users/' + userId), (snapshot) => {
//   const desc = (snapshot.val() && snapshot.val().desc) || 'Anonymous';
//   const title = (snapshot.val() && snapshot.val().title) || 'Anonymous';
//   console.log(desc);
//   console.log(title);
// }, {
//   onlyOnce: true
// });

  return (
      <>
    <View>
        <Text>you are login as email {loginemail}</Text>
        <Button title="Logout" onPress={()=>{
        }}/>
        {/* <TextInput placeholder="Search here" value={search} onChangeText={(e)=>setsearch(e)}/> */}
        {/* <Text>{data.title}</Text>
        <Text>{data.desc}</Text>
        <Text>{search}</Text> */}
        <ImagePicker />
    </View>
    <Bottombar />
     </>
  )
}

export default Home