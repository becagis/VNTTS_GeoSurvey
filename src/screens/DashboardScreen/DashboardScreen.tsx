import { StyleSheet } from 'react-native'

import { Text, View } from '@/components/Themed'
import { RootStackScreenProps } from '@types'

export default function DashboardScreen({
  navigation,
}: RootStackScreenProps<'Dashboard'>) {
  return (
    <View style={styles.container}>
      <Text>DashboardScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
