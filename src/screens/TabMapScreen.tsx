import { StyleSheet } from 'react-native'

import EditScreenInfo from '../components/EditScreenInfo'
import { Text, View } from '../components/Themed'
import { RootTabScreenProps } from '@types'
import Message from '@/components/Message'
import { Button, Fab, Icon, useTheme } from 'native-base'
import { Link } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons'
import LeafletView from '@/components/LeafletView'

function TabMapScreen({
  navigation,
}: RootTabScreenProps<'TabMap'>) {
  const {
    colors
  } = useTheme();
  return (
    <View style={styles.container}>
      {/*<Message />*/}
      {/*<Text style={styles.title}>Home</Text>*/}

      <LeafletView />


      <Fab
        renderInPortal={false}
        shadow={2} size="sm"
        icon={<Icon color="white" as={AntDesign} name="plus" size="sm" />}
        onPress={() => navigation.navigate('FeatureForm')} />

      {/*<EditScreenInfo path="/screens/TabMapScreen.tsx" />*/}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
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
