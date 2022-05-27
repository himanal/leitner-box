import { View, Text } from 'react-native'
import React from 'react'
import {useTailwind} from 'tailwind-rn';

const LoginScreen = () => {
    const tw = useTailwind()
  return (
    <View>
      <Text style={tw('text-2xl ')}>LoginScreen</Text>
    </View>
  )
}

export default LoginScreen