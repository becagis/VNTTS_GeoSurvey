import React, { memo, useCallback, useRef } from 'react'
import { ILeafletViewProps, WebviewLeafletMessage } from './types'
import { Text, useThemeProps, View } from 'native-base'
import WebView, { WebViewMessageEvent } from 'react-native-webview'
import { StyleSheet } from 'react-native'

const LEAFLET_HTML_SOURCE = {
  uri: 'https://github.com/facebook/react-native/'
  // html: '<h1>Hello world</h1>'
}

const runFirst = `
  true; // note: this is required, or you'll sometimes get silent failures
`

const runBeforeFirst = `
  window.isNativeApp = true;
  window.onerror = function(event, source, lineno, colno, error) {
    window.ReactNativeWebView?.postMessage(JSON.stringify({
      event: 'error',
      data: { event, source, lineno, colno, error }
    }));

    if (window.XMLHttpRequest) {
      // Send Server Error
    }
    return true;
  };
  true; // note: this is required, or you'll sometimes get silent failures
`


const LeafletView: React.FC<ILeafletViewProps> = (inProps, ref) => {
  const {
    children,
    onLoadStart,
    onLoadEnd,
    onError,
    renderLoading,
    androidHardwareAccelerationDisabled,
    ...other
  } = useThemeProps('LeafletView', inProps)


  const webviewRef = useRef<WebView>(null)

  const handleMessage = useCallback((event: WebViewMessageEvent) => {
    const data = event?.nativeEvent?.data
    if (!data) return

    try {
      const message: WebviewLeafletMessage = JSON.parse(data);
      console.log(message)
    } catch (error){
      console.error('Invalid JSON Format')
    }
  }, [])

  return (
    <View
      style={styles.root}
    >
      <View>{children}</View>

      <WebView
        containerStyle={styles.map}
        ref={webviewRef}
        javaScriptEnabled={true}
        onLoadStart={onLoadStart}
        onLoadEnd={onLoadEnd}
        onMessage={handleMessage}
        domStorageEnabled={true}
        startInLoadingState={true}
        onError={onError}
        originWhitelist={['*']}
        renderLoading={renderLoading}
        source={LEAFLET_HTML_SOURCE}
        allowFileAccess={true}
        allowUniversalAccessFromFileURLs={true}
        allowFileAccessFromFileURLs={true}
        androidHardwareAccelerationDisabled={androidHardwareAccelerationDisabled}
        injectedJavaScript={runFirst}
        injectedJavaScriptBeforeContentLoaded={runBeforeFirst}
        {...other}
      />
    </View>
  )
}

LeafletView.defaultProps = {
  renderLoading: () => <View><Text>Loading...</Text></View>,
  debug: __DEV__
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  map: {
    flex: 1,
    ...StyleSheet.absoluteFillObject
  }
})

export default memo(LeafletView)
