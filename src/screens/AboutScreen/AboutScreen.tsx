import { StyleSheet, TouchableOpacity } from 'react-native'

import { Text, View } from '@/components/Themed'
import { RootStackScreenProps } from '@types'

function AboutScreen({ navigation }: RootStackScreenProps<'About'>) {
  return (
    <View style={styles.container}>
      <Text>AboutScreen</Text>
      <TouchableOpacity onPress={() => navigation.replace('Root')}>
        <Text>Go to home screen!</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  }
})

export default AboutScreen
