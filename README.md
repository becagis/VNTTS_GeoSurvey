# GeoSurvey Native

- https://github.com/pavel-corsaghin/react-native-leaflet
- https://yelotofu.com/react-native-load-local-static-site-inside-webview-2b93eb1c4225

## Run

```shell
yarn start --reset-cache
npm start -- --reset-cache
npx expo start -c
```

Change port React Native Debugger => 19000

## Setup monorepo

Pó tay, setup mãi vẫn bị lỗi => quá tốn time, run truyển thống 

- https://ecklf.com/blog/rn-monorepo
- https://www.thefarrelly.com/react-react-native-monorepo-with-yarn/
- https://www.callstack.com/blog/setting-up-react-native-monorepo-with-yarn-workspaces

- https://github.com/byCedric/expo-monorepo-example
- https://github.com/axeldelafosse/expo-next-monorepo-example

## Other setup
### Icon
- https://blog.openreplay.com/working-with-svgs-in-react-native/

### Build APK
- https://dev.to/chinmaymhatre/how-to-generate-apk-using-react-native-expo-kae



## Case
### Signout
- Expired time
- Inactivity

## Communication Web, Native
- https://github.com/react-native-webview/react-native-webview/blob/master/docs/Guide.md#communicating-between-js-and-native
```js
// Native to Web
webviewRef.current?.postMessage('');

this.webviewref.injectJavaScript(`
  document.body.style.backgroundColor = 'blue';
  true;
`)

window.addEventListener("message", message => {
  
});

// Web To Native
window.ReactNativeWebView?.postMessage('');


const handleMessage = (event: WebViewMessageEvent) => {
  console.log(event?.nativeEvent)
}
```
