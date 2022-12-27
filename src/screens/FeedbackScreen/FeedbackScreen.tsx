import { StyleSheet, TouchableOpacity } from 'react-native'

import { Text, View } from '@/components/Themed'
import { RootStackScreenProps } from '@types'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { TextField } from '@/@react-native-form/src'
import { Button } from 'native-base'
import * as yup from 'yup'

type FormValues = {
  email: string;
  fullname: string;
  note: string;
};

const validationSchema = yup.object({

})

function FeedbackScreen({ navigation }: RootStackScreenProps<'Feedback'>) {
  const methods = useForm<FormValues>({
    resolver: yupResolver(validationSchema)
  })

  const { handleSubmit } = methods

  const onSubmit = (values: FormValues) => {

  }

  return (
    <View style={styles.container}>
      <FormProvider {...methods}>
        <TextField name='email' placeholder='Email' />
        <TextField name='fullname' placeholder='Fullname' />
        <TextField name='note' placeholder='Note' />

        <Button onPress={handleSubmit(onSubmit)}>
          Send
        </Button>
      </FormProvider>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  }
})

export default FeedbackScreen
