import React, {useState} from 'react'
import {Button, View, SafeAreaView} from 'react-native'
import {WebView} from 'react-native-webview'

const Cubo = () => {
  const [showWebView, setShowWebView] = useState(false)

  const handleShowWebView = () => {
    setShowWebView(true)
  }

  const handleCloseShowWebView = () => {
    setShowWebView(false)
  }
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      {showWebView ? (
        <WebView
        source={{uri: 'https://jithutholoor.github.io/RubixCube/build/'}}
        style={{flex: 1}}
        onNavigationStateChange={navState => 
        navState.url !== 'https://jithutholoor.github.io/RubixCube/build/' && handleCloseShowWebView()}
        />
      ): (
        <Button title='Abrir página Web' onPress={handleShowWebView}/>
      )}
    </SafeAreaView>
  )
}
export default Cubo