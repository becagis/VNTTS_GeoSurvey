import { StyleSheet } from 'react-native'

import { Text, View } from '@/components/Themed'
import { RootStackScreenProps } from '@types'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { TextField } from '@/@react-native-form/src'
import { Button } from 'native-base'
import * as yup from 'yup'

type FormValues = {
  email: string;
};

const validationSchema = yup.object({

})

export default function ResetPasswordScreen({
  navigation,
}: RootStackScreenProps<'ResetPassword'>) {
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

        <Button onPress={handleSubmit(onSubmit)}>
          Send reset link
        </Button>
      </FormProvider>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    padding: 10
  },
});
