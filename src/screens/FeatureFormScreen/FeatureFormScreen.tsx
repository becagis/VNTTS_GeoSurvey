import { StyleSheet, TouchableOpacity } from 'react-native'

import { Text, View } from '@/components/Themed'
import { RootStackScreenProps } from '@types'
import { TextField } from '@/@react-native-form/src'
import { useForm, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Button } from 'native-base'

type FormValues = {
  email: string;
  password: string;
};

const validationSchema = yup.object({

})

function FeatureFormScreen({ navigation }: RootStackScreenProps<'FeatureForm'>) {
  const methods = useForm<FormValues>({
    resolver: yupResolver(validationSchema)
  })

  const { handleSubmit } = methods

  const onSubmit = (values: FormValues) => {

  }

  return (
    <View style={styles.container}>
      <FormProvider {...methods}>
        <TextField name='point_name' placeholder='Point name (*)' />
        <TextField name='name' placeholder='Name' />
        <TextField name='info' placeholder='info' />
        <TextField name='date' placeholder='Date' />
        <TextField name='note' placeholder='Note' />

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

export default FeatureFormScreen
