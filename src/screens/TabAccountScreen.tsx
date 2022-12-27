import { StyleSheet } from 'react-native'

import EditScreenInfo from '../components/EditScreenInfo'
import { Text, View } from '../components/Themed'
import { Button } from 'native-base'
import { signOut } from 'firebase/auth'
import { auth } from '@/configs/firebaseConfig'
import { useNavigation } from '@react-navigation/native'
import { Link } from '@react-navigation/native';

function TabAccountScreen() {
  const navigation = useNavigation()

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigation.navigate('Login')
    })
  }

  const items = [
    {label: 'Account'},
    {label: 'Login & security'},
    {label: 'Settings', to: {screen: 'Setting'}},
    {label: 'Feedback', to: {screen: 'Feedback'}},
  ]

  return (
    <View style={styles.container}>
      {items.map((i: any, k: number) => (
        <View key={k} className="p-4">
          {i.to ? (
            <Link key={k} to={i.to}>
              {i.label}
            </Link>
          ): (
            <Text>{i.label}</Text>
          )}
        </View>
      ))}

      <Button onPress={handleSignOut}>Sign Out</Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%'
  }
})

export default TabAccountScreen
