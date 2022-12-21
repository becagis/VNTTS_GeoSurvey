import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { registerRootComponent } from 'expo'
import { NativeBaseProvider } from 'native-base'

import useCachedResources from '@/hooks/useCachedResources'
import useColorScheme from '@/hooks/useColorScheme'
import Navigation from '@/navigation'

function App() {
  const isLoadingComplete = useCachedResources()
  const colorScheme = useColorScheme()

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <SafeAreaProvider>
        <NativeBaseProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </NativeBaseProvider>
      </SafeAreaProvider>
    )
  }
}

registerRootComponent(App)
