import { Pressable, Text } from 'react-native'

interface ButtonProps {
  children: string
}

function Button({children}: ButtonProps){
  return (
    <Pressable onPress={() => {
      console.log(123)
    }}>
      <Text>{children}</Text>
    </Pressable>
  )
}

export default Button
