import { StyleSheet, TouchableOpacity } from 'react-native'

import { View } from '@/components/Themed'
import { RootStackScreenProps } from '@types'
import { Box, Button, Heading, HStack, Text } from 'native-base'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { TextField } from '@ttungbmt/react-native-form'

import { FormProvider, useForm } from 'react-hook-form'
import { Link } from '@react-navigation/native'

type FormValues = {
  email: string;
  password: string;
};

const validationSchema = yup.object({
  email: yup.string().required("Required"),
});

export default function LoginScreen({ navigation }: RootStackScreenProps<'Login'>) {
  const methods = useForm<FormValues>({
    resolver: yupResolver(validationSchema)
  })

  const { handleSubmit } = methods

  const onSubmit = (data: FormValues) => {
    console.log('submited with ', data)
  }

  return (
    <View style={styles.container}>
      <Heading>Login to your account</Heading>

      <FormProvider {...methods}>
        <TextField name="email" placeholder="Email"/>
        <TextField name="password" placeholder="Password"/>

        <HStack className="w-full justify-between">
          <View style={{backgroundColor: 'green'}}>
            <Text>Remember me</Text>
          </View>
          <Link to={{ screen: 'ResetPassword' }}>
            Forgot Password?
          </Link>
        </HStack>

      </FormProvider>

      <Button onPress={handleSubmit(onSubmit)}>
        Login
      </Button>

      <HStack className="bg-red-50 justify-center" space={1}>
        <Text>Don't have an account?</Text>
        <Link to={{ screen: 'Register' }}>
          Register here
        </Link>
      </HStack>
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
