
import React from 'react'
import { NavigationContainer } from "@react-navigation/native"
import AppStackNavigator from './AppStackNavigator'

export default function Navigation() {
  return (
    <NavigationContainer>
      <AppStackNavigator/>
    </NavigationContainer>
  )
}