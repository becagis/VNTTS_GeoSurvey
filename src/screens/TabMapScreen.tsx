import { StyleSheet } from 'react-native'

import EditScreenInfo from '../components/EditScreenInfo'
import { Text, View } from '../components/Themed'
import { RootTabScreenProps } from '@types'
import Message from '@/components/Message'
import { Button, useTheme } from 'native-base'

function TabMapScreen({
  navigation,
}: RootTabScreenProps<'TabMap'>) {
  const {
    colors
  } = useTheme();

  console.log(colors)

  return (
    <View style={styles.container}>
      <Button>Hello World!</Button>

      <Message />
      <Text style={styles.title}>Home</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="/screens/TabMapScreen.tsx" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

export default TabMapScreen
