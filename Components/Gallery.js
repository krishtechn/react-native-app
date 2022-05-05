import { View, Image,} from 'react-native'
import React,{useEffect,useState} from 'react'
import { configureFonts, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { TextInput,Text,Button,Headline,Caption,Paragraph,Subheading } from 'react-native-paper';


const fontConfig = {
    web: {
      regular: {
        fontFamily: 'sans-serif',
        fontWeight: 'normal',
      },
      medium: {
        fontFamily: 'sans-serif-medium',
        fontWeight: 'normal',
      },
      light: {
        fontFamily: 'sans-serif-light',
        fontWeight: 'normal',
      },
      thin: {
        fontFamily: 'sans-serif-thin',
        fontWeight: 'normal',
      },
    },
    ios: {
      regular: {
        fontFamily: 'sans-serif',
        fontWeight: 'normal',
      },
      medium: {
        fontFamily: 'sans-serif-medium',
        fontWeight: 'normal',
      },
      light: {
        fontFamily: 'sans-serif-light',
        fontWeight: 'normal',
      },
      thin: {
        fontFamily: 'sans-serif-thin',
        fontWeight: 'normal',
      },
    },
    android: {
      regular: {
        fontFamily: 'sans-serif',
        fontWeight: 'normal',
      },
      medium: {
        fontFamily: 'sans-serif-medium',
        fontWeight: 'normal',
      },
      light: {
        fontFamily: 'sans-serif-light',
        fontWeight: 'normal',
      },
      thin: {
        fontFamily: 'sans-serif-thin',
        fontWeight: 'normal',
      },
    }
  };
  
  const theme = {
    ...DefaultTheme,
    fonts: configureFonts(fontConfig),
  };
  

const Gallery = () => {
    const[usertype,setusertype] = useState("");
    
    let url = `https://source.unsplash.com/400x300?${usertype}`;
    const searchdata = async()=>{
      let data = await fetch(url);
      let getdata = await data.json();
      return getdata;
    }
   
    useEffect(()=>{
      searchdata();
    })

  return (
    <PaperProvider theme={theme}>
    <View style={{display:"flex",justifyContent:"center",width:"100%"}}>
        <TextInput placeholder='Seach Image here' right={<TextInput.Icon name="search" />} onChangeText={(e)=>{
            setusertype(e);
        }}/>
         <TextInput
      mode="outlined"
      label="Outlined input"
      placeholder="Type something"
      right={<TextInput.Affix text="/100" />}
    />
        <View>{usertype == ""?<Text style={{fontFamily:theme.fonts.light.fontFamily,fontWeight:theme.fonts.light.fontWeight}}>Search Image</Text>:<Image source={{uri:url}} style={{width:"100%",height:undefined,aspectRatio:1}}/>}</View>
       <Button icon='camera'>click</Button>
        <Headline>search Image here</Headline>
        <Caption>this is caption</Caption>
        <Paragraph>this is para</Paragraph>
        <Subheading>this is subheading</Subheading>
        </View>
        </PaperProvider>
  )
}

export default Gallery