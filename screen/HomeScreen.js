import { View, Text } from 'react-native'
import React from 'react'
import {useTailwind} from 'tailwind-rn';
const HomeScreen = () => {
    const tw = useTailwind()
  return (
    <View>
      <Text style={tw('text-2xl text-blue-400')}>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen