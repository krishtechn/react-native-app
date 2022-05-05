import { View, Text,StyleSheet } from 'react-native'
import React,{ useState } from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { BottomNavigation,Divider,Drawer,Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import FilterMenu from '../../../app/AwesomeProject/Components/FilterMenu';


const Bottombar = () => {
  const [active, setActive] = React.useState('');

  const Imagepicker = ()=>{
    return (
      <>
      <Drawer.Item
      style={{ backgroundColor: '#64ffda' }}
      icon="menu"
      label="First Item"
      onPress={()=>{
        <Drawer.Section title="Some title">
    <Drawer.Item
      label="First Item"
      active={active === 'first'}
      onPress={() => setActive('first')}
    />
    <Drawer.Item
      label="Second Item"
      active={active === 'second'}
      onPress={() => setActive('second')}
    />
  </Drawer.Section>
      }}
    />
</>
    )
  }
  const Signup = ()=><Text>Signup</Text>
  const SignIn = ()=><Text>SignIn</Text>
  const [index,setIndex] = useState(0);

  const [routes] = React.useState([
    { key: 'music', title: 'Music', icon: 'album' },
    { key: 'albums', title: 'Albums', icon: 'album' },
    { key: 'recents', title: 'Recents', icon: 'history' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: FilterMenu,
    albums: Signup,
    recents: SignIn,
  });

  return (
<BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  )
}


const styles = StyleSheet.create({
    
})

export default Bottombar