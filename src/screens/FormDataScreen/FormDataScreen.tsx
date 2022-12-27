import { StyleSheet } from 'react-native'

import { Text, View } from '@/components/Themed'
import { RootStackScreenProps } from '@types'

function FormDataScreen({ navigation }: RootStackScreenProps<'FormData'>) {
  const items = [
    {label: 'Name', name: 'name'},
    {label: 'Info', name: 'info'},
    {label: 'Date', name: 'date'},
    {label: 'Note', name: 'note'},
  ]

  return (
    <View style={styles.container}>
      <Text className="mb-2">Point/Polygon/Polyline</Text>

      {items.map((i, k) => (
        <View key={k} className="border-b py-4">
          <Text>
            {i.label}
          </Text>
        </View>
      ))}

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 10
  }
})

export default FormDataScreen
