import { View, Text, FlatList,Image,useWindowDimensions,Animated, StatusBar } from 'react-native'
import React, { useState,useRef } from 'react'
import { Button } from 'react-native-paper';
import Paginator from './Paginator';

const Slides = [
   {
       id:'1',
       title:'quick & easy payments',
       desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, fuga! Quis modi dolore ratione quae error unde dolor ipsum, eaque velit eos quas sequi mollitia pariatur iusto eum vero placeat.",
       image:"../assets/onboarding1.png",
       btn:"Next",
   },
   {
    id:'2',
    title:'quick & easy payments',
    desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, fuga! Quis modi dolore ratione quae error unde dolor ipsum, eaque velit eos quas sequi mollitia pariatur iusto eum vero placeat.",
    image:"../assets/onboarding2.jpg",
    btn:"",
  },
  {
    id:'3',
    title:'quick & easy payments',
    desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, fuga! Quis modi dolore ratione quae error unde dolor ipsum, eaque velit eos quas sequi mollitia pariatur iusto eum vero placeat.",
    image:"../assets/onboarding3.jpg",
    btn:"Done",
},
];


const Onboarding = ({navigation}) => {   
    const scrollX = useRef(new Animated.Value(0)).current;
    const [currentIndex,setcurrentIndex] = useState(0);

    const viewableItemsChanged = useRef(({ViewableItems})=>{
        setcurrentIndex(ViewableItems[0].index);
    }).current;

    const viewConfig = useRef({viewAreaCoveragePercentThreshold:50}).current;


  return (
      <View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"#fff"}}>
          <StatusBar barStyle='dark-content' backgroundColor={'white'}/>
         <FlatList data={Slides} onScroll={
             Animated.event([{nativeEvent:{
                 contentOffset:{x:scrollX}
             }}],{
                 useNativeDriver:false,
             })}
             scrollEventThrottle={32}
             viewabilityConfig={viewConfig}
            // onViewableItemsChanged={viewableItemsChanged}
             bounces={false} pagingEnabled showsHorizontalScrollIndicator={false} horizontal renderItem={(items)=><OnboardingItem move={navigation} item={items.item}/>}/>
      <Paginator item={Slides} scrollX={scrollX}/>
      </View>
      )
}


const OnboardingItem = ({item,move})=>{
    const {width} = useWindowDimensions();
    const {title,desc,image,btn} = item;
    let img = "../assets/onboarding1.png";
    
    return (
        <View style={{width:width,height:"100%",flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"#fff"}}>
            <Image source={require(`${img}`)} style={{width:"100%",height:undefined,aspectRatio:1,resizeMode:"contain"}}/>
          <View style={{marginHorizontal:20}}>
          <Text style={{fontSize:25,color:"black",fontWeight:"bold",textTransform:"capitalize",textAlign:"center",marginBottom:20,letterSpacing:1}}>{title}</Text>
           <Text style={{fontSize:15,color:"#333",fontWeight:"600",textAlign:"center"}}>{desc}</Text>
          </View>
            <View style={{position:"absolute",bottom:10,right:30}}>
           {btn == ""?<Text></Text>:<Button style={{backgroundColor:"rgb(75, 102, 240)",paddingLeft:20,paddingRight:20}} onPress={()=>{
               move.navigate("Carosels");
           }}>{btn}</Button>}
           </View>
        </View>
    )
}


export default Onboarding