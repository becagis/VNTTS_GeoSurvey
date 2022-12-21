import { StyleSheet } from 'react-native'

import { Text, View } from '@/components/Themed'
import { RootStackScreenProps } from '@types'

export default function ResetPasswordScreen({
  navigation,
}: RootStackScreenProps<'ResetPassword'>) {
  return (
    <View style={styles.container}>
      <Text>ResetPasswordScreen.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

});
