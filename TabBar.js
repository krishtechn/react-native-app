import { StatusBar, View } from 'react-native'
import React, { useState } from 'react'
import { Tab, Text, TabView } from '@rneui/themed';
import Filtercards from './filtercards';

const TabBar = () => {
    const [index,setindex] = useState(0);
  return (
      <>
      <StatusBar barStyle='light-content'backgroundColor='rgb(3, 155, 229)'/>
      <Tab onChange={(e)=>setindex(e)} indicatorStyle={{
        backgroundColor: 'white',
        height: 3,
      }}
      variant="primary"
      >
          <Tab.Item title="Home" titleStyle={{ fontSize: 12 }} icon={{ name: 'home', type: 'ionicon', color: 'white' }}/>
          <Tab.Item title="About" titleStyle={{ fontSize: 12 }}
        icon={{ name: 'person', type: 'ionicon', color: 'white' }}/>
          <Tab.Item title="Services"         titleStyle={{ fontSize: 12 }}
        icon={{ name: 'image', type: 'ionicon', color: 'white' }}/>
      </Tab>
      <TabView value={index} onChange={setindex}>
      <TabView.Item style={{ backgroundColor: 'red', width: '100%' }}>
        <Filtercards />
      </TabView.Item>

      <TabView.Item style={{ backgroundColor: 'red', width: '100%' }}>
        <Text h1>Recent</Text>
      </TabView.Item>

      
      <TabView.Item style={{ backgroundColor: 'green', width: '100%' }}>
        <Text h1>Cart</Text>
      </TabView.Item>

      </TabView>
      </>
  )
}

export default TabBar