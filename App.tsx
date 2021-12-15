import React from 'react'
import Navigator from '@navigation/Navigator'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'
import { Provider } from 'react-redux'
import { store } from '@store/store'
import { SearchContextProvider } from '@context/searchContext'

export default function App() {
  const [fontsLoaded] = useFonts({
    MontserratRegular: require('./src/assets/fonts/Montserrat-Regular.ttf'),
    MontserratBold: require('./src/assets/fonts/Montserrat-Bold.ttf'),
    MontserratSemiBold: require('./src/assets/fonts/Montserrat-SemiBold.ttf'),
    MontserratMedium: require('./src/assets/fonts/Montserrat-Medium.ttf'),
  })
  return (
    <Provider store={store}>
      <SearchContextProvider>{fontsLoaded ? <Navigator /> : <AppLoading />}</SearchContextProvider>
    </Provider>
  )
}
