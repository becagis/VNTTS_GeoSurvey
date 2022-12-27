import { StyleSheet } from 'react-native'

import { View } from '@/components/Themed'
import { RootStackScreenProps } from '@types'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import { TextField } from '@/@react-native-form/src'
import { Button } from 'native-base'
import * as yup from 'yup'

type FormValues = {
  email: string;
  password: string;
};

const validationSchema = yup.object({

})

function SurveyFormScreen({ navigation }: RootStackScreenProps<'SurveyForm'>) {
  const methods = useForm<FormValues>({
    resolver: yupResolver(validationSchema)
  })

  const { handleSubmit } = methods

  const onSubmit = (values: FormValues) => {

  }

  return (
    <View style={styles.container}>
      <FormProvider {...methods}>
        <TextField name='name' placeholder='Name' />
        <TextField name='description' placeholder='Description' />

        <Button onPress={handleSubmit(onSubmit)}>
          Save
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

export default SurveyFormScreen
