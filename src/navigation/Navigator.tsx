import colors from '@assets/colors'
import DrawerContent from '@navigation/DrawerContent'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import CommoditiesScreen from '@screens/CommoditiesScreen/CommoditiesScreen'
import HomeScreen from '@screens/HomeScreen/HomeScreen'
import React from 'react'

interface Props {}

export type DrawerParamList = {
  Home: undefined
  Commodities: undefined
}

const Drawer = createDrawerNavigator<DrawerParamList>()

const Navigator = (props: Props) => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={DrawerContent}
        screenOptions={{ headerStyle: { backgroundColor: colors.carrotOrange }, headerTintColor: '#fff' }}
      >
        <Drawer.Screen name="Home" component={HomeScreen} options={{ title: '' }} />
        <Drawer.Screen name="Commodities" component={CommoditiesScreen} options={{ title: '' }} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default Navigator
