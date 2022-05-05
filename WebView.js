import { View, Text } from 'react-native'
import React from 'react'
import {WebView} from "react-native-webview";

const WebViews = () => {
  return (
     <WebView
          automaticallyAdjustContentInsets={false}
          source={{uri: 'https://technicalkrish.000webhostapp.com/index.php'}}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          startInLoadingState={true}
          style={{marginTop: 25}}
        />
  )
}

export default WebViews