import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Navigator from '@navigation/Navigator'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'

export default function App() {
  const [fontsLoaded] = useFonts({
    MontserratRegular: require('./src/assets/fonts/Montserrat-Regular.ttf'),
    MontserratBold: require('./src/assets/fonts/Montserrat-Bold.ttf'),
    MontserratSemiBold: require('./src/assets/fonts/Montserrat-SemiBold.ttf'),
    MontserratMedium: require('./src/assets/fonts/Montserrat-Medium.ttf'),
  })
  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return <Navigator />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
