import React from 'react'
import { View, Text, Image } from 'react-native'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { DrawerParamList } from '@navigation/Navigator'
import styles from './HomeScreen.style'

type Props = DrawerScreenProps<DrawerParamList, 'Home'>

const HomeScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          source={require('@assets/images/profile.jpeg')}
          style={{ height: '100%', width: '100%', borderRadius: 100 }}
        />
      </View>
      <Text style={[styles.textBold]}>Agustin Mariscotti</Text>
      <Text style={[styles.textSemiBold, styles.appText]}>&apos;AgusMaris&apos;</Text>
      <Text style={[styles.textMedium]}>Based in La Plata, AR</Text>
      <Text style={[styles.textRegular, styles.emailText]}>agustinm06@gmail.com</Text>
    </View>
  )
}

export default HomeScreen
