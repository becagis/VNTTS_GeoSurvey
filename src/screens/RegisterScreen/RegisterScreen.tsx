import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from '@/components/Themed';
import { RootStackScreenProps } from '@types';
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { TextField } from '@/@react-native-form/src'
import { Button } from 'native-base'
import * as yup from 'yup'

type FormValues = {
  email: string;
  password: string;
  confirm_password: string;
};

const validationSchema = yup.object({

})

export default function RegisterScreen({ navigation }: RootStackScreenProps<'Register'>) {
  const methods = useForm<FormValues>({
    resolver: yupResolver(validationSchema)
  })

  const { handleSubmit } = methods

  const onSubmit = (values: FormValues) => {
    console.log(values)
  }

  return (
    <View style={styles.container}>
      <FormProvider {...methods}>
        <TextField name='email' placeholder='Email' />
        <TextField name='password' placeholder='Password' />
        <TextField name='confirm_password' placeholder='Confirm password' />

        <Button onPress={handleSubmit(onSubmit)}>
          Create
        </Button>
      </FormProvider>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    padding: 10,
  },
});
