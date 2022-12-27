import WebView, { WebViewMessageEvent } from 'react-native-webview'
import { Platform, StyleSheet } from 'react-native'
import { useCallback, useEffect, useRef } from 'react'
import { View, Button, Text } from 'native-base'

// const LEAFLET_HTML_SOURCE = Platform.select({
//   ios: require('../../android/src/main/assets/leaflet.html'),
//   android: { uri: 'file:///android_asset/leaflet.html' },
// });

// const LEAFLET_HTML_SOURCE = require('@assets/leaflet/index.html')
const LEAFLET_HTML_SOURCE = require('./leaflet.html')

const runFirst = `
  true; // note: this is required, or you'll sometimes get silent failures
`

const runBeforeFirst = `
  window.isNativeApp = true;
  window.onerror = function(message, sourcefile, lineno, colno, error) {
    alert("Message: " + message + " - Source: " + sourcefile + " Line: " + lineno + ":" + colno);
    return true;
  };
  window.onerror = function(event, source, lineno, colno, error) {
    console.log(event, 'Message')
    console.log(source, 'Source')
    console.log(lineno, 'Line')
    console.log(colno, 'colno')
    console.log(error, 'error')
    alert(event)
  
    // if (window.XMLHttpRequest) {
    //   var xhr = new XMLHttpRequest();
    //   var scripturl = 'http://yourdomain.example.com/log';
    //   var log = linenumber + message + url;
    //   xhr.open('POST', scripturl);
    //   xhr.setRequestHeader('Content-Type', 'text/plain;charset=UTF-8');
    //   xhr.send(log);
    // }
    return true;
  }
  true; // note: this is required, or you'll sometimes get silent failures
`

function LeafletView() {
  const webviewRef = useRef<WebView>(null)

  useEffect(() => {
    webviewRef.current?.postMessage('goBack')
  }, [])

  const handleMessage = useCallback((event: WebViewMessageEvent) => {
    const { data } = event?.nativeEvent || {}
    if (!data) return

    // const message = JSON.parse(data);
    console.log(event?.nativeEvent)

  }, [])


  // const renderLoading = () => <View><Text>Loading...</Text></View>

  console.log(456)


  return (
    <View style={styles.container}>
      <Button onPress={() => {
        // const payload = { message: 'Hello World' }
        // console.log(`sending: sending: ${JSON.stringify(payload)}`)
        // webviewRef.current?.injectJavaScript(
        //   // `window.postMessage(${JSON.stringify(payload)}, '*');`
        //   `window.postMessage('Data from React Native App');`
        // )

        // webviewRef.current?.injectJavaScript('home()')
        webviewRef.current?.postMessage('Data from React Native App');
        console.log('click')
      }}>Send mobile to web</Button>
      <WebView
        //containerStyle={styles.container}
        ref={webviewRef}
        javaScriptEnabled={true}
        // onLoadEnd={onLoadEnd}
        //onLoadStart={onLoadStart}
        onMessage={handleMessage}
        domStorageEnabled={true}
        startInLoadingState={true}
        //onError={onError}
        originWhitelist={['*']}
        // renderLoading={renderLoading}
        // source={LEAFLET_HTML_SOURCE}
        // source={LEAFLET_HTML_SOURCE}
        source={{ uri: 'http://192.168.1.91:3000' }}
        allowFileAccess={true}
        allowUniversalAccessFromFileURLs={true}
        allowFileAccessFromFileURLs={true}
        injectedJavaScript={runFirst}
        injectedJavaScriptBeforeContentLoaded={runBeforeFirst}
        //androidHardwareAccelerationDisabled={androidHardwareAccelerationDisabled}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})


export default LeafletView
