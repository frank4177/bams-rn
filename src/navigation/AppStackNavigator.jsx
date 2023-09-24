import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import BottomTabNavigator from "./BottomTabNavigator"

const Stack = createNativeStackNavigator()

const AppStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}

export default AppStackNavigator