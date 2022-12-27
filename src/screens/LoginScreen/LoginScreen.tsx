import { StyleSheet, TouchableOpacity } from 'react-native'

import { View } from '@/components/Themed'
import { RootStackScreenProps } from '@types'
import { Box, Button, Heading, HStack, Text } from 'native-base'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { TextField } from '@ttungbmt/react-native-form'

import { FormProvider, useForm } from 'react-hook-form'
import { Link } from '@react-navigation/native'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '@/configs/firebaseConfig'
import { useEffect, useLayoutEffect, useState } from 'react'
import { User } from '@firebase/auth'

type FormValues = {
  email: string;
  password: string;
};

const validationSchema = yup.object({
  // email: yup.string().required("Required"),
})

interface IUser {
  name: string;
}

export default function LoginScreen({ navigation }: RootStackScreenProps<'Login'>) {
  const [user, setUser] = useState<User>()

  const methods = useForm<FormValues>({
    defaultValues: {
      email: 'ttungbmt@gmail.com',
      // password: '1166089@Tung'
    },
    resolver: yupResolver(validationSchema)
  })

  const { handleSubmit } = methods

  useLayoutEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log(user)
        setUser(user)
      } else {
        // User is signed out
        // ...
        console.log(`User is signed out`)
      }
    })
  }, [])

  const onSubmit = (data: FormValues) => {
    console.log('submited with ', data)

    const { email, password } = data

    // createUserWithEmailAndPassword(auth, email, password)
    //   .then((userCredentials) => {
    //     const user = userCredentials.user
    //     console.log(user)
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })

    signInWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {
        const user = userCredentials.user
        console.log('Logged in with:', user)

        navigation.navigate('Root')

      })
      .catch(error => {
        console.log(error)
      })
  }



  return (
    <View style={styles.container}>
      <Heading>Login to your account</Heading>
      <Text>User: {user?.email}</Text>

      <FormProvider {...methods}>
        <TextField name='email' placeholder='Email' />
        <TextField name='password' type="password" placeholder='Password' />

        <HStack className='w-full justify-between'>
          <View style={{ backgroundColor: 'green' }}>
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



      <HStack className='bg-red-50 justify-center' space={1}>
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
