import React from 'react'
import { Text, View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { Headline } from 'react-native-paper';

const FirstRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#ff4081' }}>
        <Headline style={{textAlign:"center"}}>Hello world</Headline>
    </View>
  );
  
  const SecondRoute = () => (
    // <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
    <View>
<Text>Hello world</Text>
<Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima esse eius molestiae temporibus, et voluptas cum vero odio aspernatur doloremque. Ea, commodi eius. In minima, nostrum aliquid esse repudiandae temporibus?</Text>
    </View>
    )


    const ThirdRoute = () => (
        // <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
        <View>
    <Text>Hello world</Text>
    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima esse eius molestiae temporibus, et voluptas cum vero odio aspernatur doloremque. Ea, commodi eius. In minima, nostrum aliquid esse repudiandae temporibus?</Text>
        </View>
        )
    

  
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third:ThirdRoute,
  });

const Tabbar = () => {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'first',icon:"about", title: 'First' },
      { key: 'second', title: 'Second' },
      { key: 'third', title: 'Third' },
    ]);

  return (
   <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  )
}

export default Tabbar