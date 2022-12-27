import { FlatList, StyleSheet, TouchableOpacity } from 'react-native'

import { RootStackScreenProps } from '@types'
import { Avatar, Box, Button, Card, Heading, HStack, VStack, Text, Spacer, View, Icon, Fab } from 'native-base'
import { range } from 'lodash'
import { nanoid } from '@reduxjs/toolkit'
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native'

const data = range(20).map(() => ({
  id: nanoid(),
  fullName: 'Survey ',
  timeStamp: '12:47 PM',
  recentText: 'Good Day!',
  avatarUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
}))

const Example = () => {
  const navigator = useNavigation()

  return (
    <Box>
      <FlatList
        className="pt-2 px-4"
        data={data}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => navigator.navigate('Root')}>
            <Box borderBottomWidth='1' _dark={{
              borderColor: 'muted.50'
            }} borderColor='muted.800' pl={['0', '4']} pr={['0', '5']} py='2'>
              <HStack space={[2, 3]} justifyContent='space-between'>
                <Avatar size='48px' source={{
                  uri: item.avatarUrl
                }} />
                <VStack>
                  <Text _dark={{
                    color: 'warmGray.50'
                  }} color='coolGray.800' bold>
                    {item.fullName} {index+1}
                  </Text>
                  <Text color='coolGray.600' _dark={{
                    color: 'warmGray.200'
                  }}>
                    {item.recentText}
                  </Text>
                </VStack>
                <Spacer />
                <Text fontSize='xs' _dark={{
                  color: 'warmGray.50'
                }} color='coolGray.800' alignSelf='flex-start'>
                  {item.timeStamp}
                </Text>
              </HStack>
            </Box>
          </TouchableOpacity>

        )} keyExtractor={item => item.id} />
    </Box>
  )
}

function SurveyListScreen({ navigation }: RootStackScreenProps<'SurveyList'>) {
  const items = range(50)

  return (
    <View style={styles.container}>
      <Fab
        renderInPortal={false}
        shadow={2} size="sm"
        icon={<Icon color="white" as={AntDesign} name="plus" size="sm" />}
        onPress={() => navigation.navigate('SurveyForm')} />

      <Example />
      {/*{items.map((i, k) => (
        <TouchableOpacity key={k} onPress={() => navigation.navigate('SurveyDetail')}>
          <Card style={{}} m={2}>
            <Text>{k+1}. Hello World</Text>
          </Card>
        </TouchableOpacity>
      ))}*/}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // padding: 20
  }
})


export default SurveyListScreen
