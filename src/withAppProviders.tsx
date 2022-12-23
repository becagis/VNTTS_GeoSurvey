import Provider from 'react-redux/es/components/Provider'
import store from '@/store/redux'
import AppContext from '@/store/context/AppContext'
import { NativeBaseProvider } from 'native-base'
import theme from '@/configs/themeConfig'
// import routes from 'app/configs/routesConfig';

const withAppProviders = (Component: any) => (props?: any) => {
  const WrapperComponent = () => (
    <AppContext.Provider
      value={{
        // routes
      }}
    >
      <Provider store={store}>
        <NativeBaseProvider theme={theme}>
          <Component {...props} />
        </NativeBaseProvider>
      </Provider>
    </AppContext.Provider>
  )

  return WrapperComponent
}

export default withAppProviders
