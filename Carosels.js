import { View, Text,ScrollView,Image,StyleSheet,FlatList,StatusBar } from 'react-native'
import React,{ useRef,useState } from 'react'
import { Avatar,Appbar, TextInput, Button,Menu, Provider,Divider,Modal } from 'react-native-paper';
import RBSheet from "react-native-raw-bottom-sheet";
import BottomNavigations from './BottomNavigation';


const Images = [
    {
        key:1,
        image:"https://cdn.pixabay.com/photo/2017/09/16/19/21/salad-2756467__340.jpg",
        title:"food category",
        desc:"Lorem ipsum dolor.",
    },
    {
        key:2,
        image:"https://cdn.pixabay.com/photo/2015/12/09/17/11/vegetables-1085063__340.jpg",
        title:"food category",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        key:3,
        image:"https://cdn.pixabay.com/photo/2017/10/09/19/29/eat-2834549__340.jpg",
        title:"food category",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        key:4,
        image:"https://cdn.pixabay.com/photo/2017/10/09/19/29/eat-2834549__340.jpg",
        title:"food category",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        key:5,
        image:"https://cdn.pixabay.com/photo/2017/10/09/19/29/eat-2834549__340.jpg",
        title:"food category",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        key:6,
        image:"https://cdn.pixabay.com/photo/2017/10/09/19/29/eat-2834549__340.jpg",
        title:"food category",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        key:7,
        image:"https://cdn.pixabay.com/photo/2017/10/09/19/29/eat-2834549__340.jpg",
        title:"food category",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    }
  ];
  
//   const _goBack = (e) => e.navigate("FirstPage");


  

  
  const Carosels = ({navigation}) => {
    // const {name} = route.params;
    
    const refRBSheet = useRef();
    const [visible,setvisible] = useState(false);

    const [isregister,setisregister] = useState(false);

    const openMenu = ()=>setvisible(true);

    const closeMenu = ()=>setvisible(false);

    const _handleMore = () => {
        setvisible(true);
   };

  return (
      <Provider>
      <Appbar.Header style={{backgroundColor:"rgb(131, 44, 134)"}}>
      <Appbar.BackAction onPress={()=>navigation.goBack("FirstPage")} />
      {/* <Appbar.Content title={`welcome ${name}`}/> */}
      <Appbar.Content title="Home"/>
      
       {/* {isregister ? <Button onPress={()=>{
        navigation.navigate("Login");
      }}>Login</Button>
      :
      <Text>Please Login</Text>}
       */}
       <Button onPress={()=>{
         navigation.navigate("QuoteGenerator");
       }}>Quotes</Button> 


      <Appbar.Action icon="magnify" onPress={()=>{
           refRBSheet.current.open();
      }} />
       <Appbar.Action icon="" onPress={()=>{}} />
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>
      <StatusBar barStyle='light' backgroundColor="rgb(106, 28, 109)"/>
    <View>
      <TopProfile />
    </View>
    <CenterProfile />
    <Bottomsheet refRBSheet={refRBSheet}/>
    <Menu
          visible={visible}
          onDismiss={closeMenu}
          style={{position:"absolute",top:-10,left:0,width:"30%"}}
          anchor={<Button onPress={openMenu}>Show menu</Button>}>
          <Menu.Item onPress={() => navigation.navigate("Images")} title="Gallery" />
          <Menu.Item onPress={() => {}} title="Item 2" />
          <Divider />
          <Menu.Item onPress={() => {}} title="Item 3" />
        </Menu>
        <BottomNavigations />
      </Provider>
  )
}

const TopProfile = ()=>{
    return (
           <FlatList data={Images} horizontal showsHorizontalScrollIndicator={false} renderItem={(items,key)=>{
               return (
                   <View style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                   <Image source={{uri:items.item.image}} style={{width:100,marginLeft:10,marginRight:13,borderRadius:100,height:undefined,aspectRatio:1}}/>
                   <Text style={{fontSize:13,color:"#000",fontWeight:"bold",textTransform:"capitalize"}}>{items.item.title}</Text>
                   </View>
               )
           }}/>
        )
}

const CenterProfile = ()=>{
    return (
        <FlatList data={Images} showsVerticalScrollIndicator={false} keyExtractor={item => item.key} renderItem={(items)=>{
              return <View style={[styles.Boxshadows,{marginBottom:10,padding:10}]}>
                    <Image style={[styles.Boxshadows,styles.image]} source={{uri:items.item.image}}/>
                    <Text style={styles.title}>{items.item.title}</Text>
                    <Text style={[styles.desc]}>{items.item.desc}</Text>
                  </View>
          }}/>
    )
}

const Bottomsheet = ({refRBSheet}) => {
  return (
      <>
    <RBSheet
    ref={refRBSheet}
    closeOnDragDown={true}
    closeOnPressMask={false}
    customStyles={{
      wrapper: {
        backgroundColor: "transparent"
      },
      draggableIcon: {
        backgroundColor: "#000"
      }
    }}
  >
    <Buttomsheet/>
  </RBSheet>
  </>
  )
}

const Buttomsheet = ()=>{
    const refRBSheet = useRef();
    return (
        <View style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"}}>
        <TextInput 
        style={{width:"90%"}}
        label="Search here"
        placeholder='Search here'
        right={<TextInput.Icon name="eye" />}
        />

        <Button icon='close' uppercase={true}color="#fff" dark={true} onPress={()=>refRBSheet.close()} style={{backgroundColor:"blue",marginTop:30,}}>Close</Button>
        </View>
    )
}


const styles = StyleSheet.create({
    images:{
        height:undefined,
        aspectRatio:2,
        paddingRight:40,
        width:100,
      },
    image:{
        width:"100%",
        height:undefined,
        aspectRatio:2,
        paddingRight:40,
        marginVertical:15,
    },
    title:{
        fontSize:30,
        fontWeight:"bold",
        textTransform:"capitalize",
        color:"#000",
    },
    desc:{
        fontSize:15,
        fontWeight:"100",
        textTransform:"capitalize",
        color:"#000",
    },
    Boxshadows:{
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

export default Carosels