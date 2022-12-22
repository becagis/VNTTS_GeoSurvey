import { StyleSheet, TextInput, TouchableOpacity } from 'react-native'

import { Text, View } from '@/components/Themed';
import { RootStackScreenProps } from '@types';
import { Button } from 'native-base';

export default function LoginScreen({ navigation }: RootStackScreenProps<'Login'>) {
  return (
    <View style={styles.container}>
      <Text>Login to your account</Text>

      <TextInput
        placeholder="Email"
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
      />

      <Button>Login</Button>

      <TouchableOpacity onPress={() => navigation.replace('Root')}>
        <Text>Go to home screen!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
