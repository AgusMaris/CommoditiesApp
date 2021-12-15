import React from 'react'
import { View, Text } from 'react-native'
import { DrawerContentComponentProps } from '@react-navigation/drawer'
import styles from './DrawerContent.style'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { MaterialIcons } from '@expo/vector-icons'

const DrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.backBtnContainer}>
          <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
            <MaterialIcons name="arrow-back-ios" size={23} color="#fff" style={styles.backBtn} />
          </TouchableOpacity>
        </View>
        <View style={styles.navLinkContainer}>
          <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
            <Text style={styles.navBtnText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.navigation.navigate('Commodities')}>
            <Text style={styles.navBtnText}>Cotizacion periodos</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default DrawerContent
