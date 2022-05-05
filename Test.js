import { View, Text,StyleSheet, StatusBar,Image } from 'react-native'
import React,{useState} from 'react'
import { Appbar, Avatar, Banner, TextInput,BottomNavigation } from 'react-native-paper'
import * as Animatable from 'react-native-animatable';

const Test = () => {
    const [showsearch,setshowsearch] = useState(false);
  return (
      <>
      <StatusBar hidden={true}/>
    <Appbar style={styles.bottom}>
    <Appbar.BackAction onPress={() => {}} />
    <Appbar.Content title="Title" />
    <Appbar.Action icon="magnify" onPress={() =>  showsearch?setshowsearch(false):setshowsearch(true)}/>
  </Appbar>
      <Banners />
  <View>
    {showsearch?<TextInput />:<Text>hello world</Text>}</View>
        <Avatar.Image size={100} source={{uri:"data:image/png;base64,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"}}/>
        <Avatar.Text label='this is text'/>

   <BottomNavigations />
    </>
  )
}

const Banners = ()=>{
    const [visible, setVisible] = React.useState(true);

    return (
      <Banner
        visible={visible}
        actions={[
          {
            label: 'Fix it',
            onPress: () => setVisible(false),
          },
          {
            label: 'Learn more',
            onPress: () => setVisible(false),
          },
        ]}
        icon={({size}) => (
          <Image
            source={{
              uri: 'https://avatars3.githubusercontent.com/u/17571969?s=400&v=4',
            }}
            style={{
              width: size,
              height: size,
            }}
          />
        )}>
        There was a problem processing a transaction on your credit card.
      </Banner>
    );
}

const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;


const BottomNavigations = ()=>{
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'music', title: 'Music', icon: 'music' },
      { key: 'albums', title: 'Albums', icon: 'album' },
      { key: 'recents', title: 'Recents', icon: 'history' },
    ]);
  
    const renderScene = BottomNavigation.SceneMap({
      music: MusicRoute,
      albums: AlbumsRoute,
      recents: RecentsRoute,
    });
  
    return (
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    );
  
}

const styles = StyleSheet.create({

})

export default Test