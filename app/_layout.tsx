import { View, Text } from 'react-native'
import React from 'react'
import { Slot } from 'expo-router'

const RootLayout = () => {
  return (
    <View>
      <Text>Header App</Text>

      <Slot />
      <Text>Footer App</Text>
    </View>
  )
}

export default RootLayout