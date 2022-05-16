
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import LoginScreen from './screen/LoginScreen'
import HomeScreen from './screen/HomeScreen'
import AuthUser from './hooks/AuthUser'


const Stack = createNativeStackNavigator()

const StackNavigation = () => {


    const {user}=AuthUser()
  return (
    <NavigationContainer>
        <Stack.Navigator>
            {user ?
               ( <Stack.Screen name='home' component={HomeScreen}/>):
               ( <Stack.Screen name='login' component={LoginScreen}/>)
            }
        </Stack.Navigator>
     
      </NavigationContainer>
    
  )
}

export default StackNavigation