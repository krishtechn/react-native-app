import { View, Text,Image, StatusBar,TouchableOpacity } from 'react-native'
import React,{ useRef } from 'react'
import Onboarding from 'react-native-onboarding-swiper';


const OnboardingLibrary = ({navigation}) => {
  return (
      <>
      <StatusBar hidden={true}/>
<Onboarding
onSkip={()=>navigation.navigate("Carosels")}
onDone={()=>navigation.navigate("Register")}
// bottomBarColor="white"
// bottomBarHighlight="blue"
// showPagination={true}
transitionAnimationDuration={2}
titleStyles={{fontSize:25,textTransform:"capitalize"}}
subTitleStyles={{fontSize:13,color:"#000"}}
pages={[
    {
      backgroundColor:"#a6e4d0",
      image: <Image style={{width:"100%",height:undefined,aspectRatio:1}} source={require("../assets/onboarding1.png")} />,
      title: 'Connect to the World',
      subtitle: 'A New Way To Connect With The World',
    },
    {
        backgroundColor:"#fdeb93",
        image: <Image style={{width:"100%",height:undefined,aspectRatio:1}} source={require("../assets/onboarding1.png")} />,
        title: 'Share Your Favorites',
        subtitle: 'Share Your Thoughts With Similar Kind of People',
      },
      {
        backgroundColor:"#e9bcbe",
        image: <Image style={{width:"100%",height:undefined,aspectRatio:1}} source={require("../assets/onboarding1.png")} />,
        title: 'Become The Star',
        subtitle: 'Let The Spot Light Capture You',
      },
  ]}
/>
</>
  )
  
}

export default OnboardingLibrary