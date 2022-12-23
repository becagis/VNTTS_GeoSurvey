import { useController, useFormContext } from 'react-hook-form'
import { FormControl, Input } from 'native-base'
import { get } from 'lodash'

interface ITextFieldProps {
  name: string;
  label?: string;
  placeholder?: string;
  rules?: object
}

const {Label, ErrorMessage} = FormControl

function TextField(props: ITextFieldProps) {
  const {name, label, placeholder, rules} = props
  const { control } = useFormContext()

  const {
    field: {value, onBlur, onChange},
    fieldState: { invalid, isTouched, isDirty },
    formState: { touchedFields, dirtyFields, errors }
  } = useController({
    name,
    control,
    rules
  })

  const errorMessage = get(errors, `${name}.message`, '')

  return (
    <FormControl isRequired isInvalid={invalid}>

      {label && <Label>{label}</Label>}

      <Input
        defaultValue=''
        placeholder={placeholder}
        value={value}
        onChangeText={(val) => onChange(val)}
        onBlur={onBlur}
      />

      {errorMessage && (
        <ErrorMessage>
          {errors.email?.message}
        </ErrorMessage>
      )}
    </FormControl>
  )
}

export default TextField
