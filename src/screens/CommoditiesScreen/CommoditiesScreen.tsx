import React, { useEffect, useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { DrawerParamList } from '@navigation/Navigator'
import globalStyles from 'globalStyles'
import styles from './CommoditiesScreen.style'

type Props = DrawerScreenProps<DrawerParamList, 'Commodities'>

const initialState = {
  start: '',
  end: '',
}

const CommoditiesScreen = ({ navigation }: Props) => {
  const [inputs, setInputs] = useState<typeof initialState>(initialState)
  useEffect(() => {
    console.log(inputs)
  }, [inputs])

  const handleNumericChange = (key: string, value: string) => {
    if (isNaN(+value) || value.indexOf('.') !== -1 || value.indexOf(' ') !== -1) {
      return
    }
    setInputs((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <View style={styles.topContainer}>
        <View>
          <Text style={[globalStyles.montserratBold, globalStyles.textXL, { textAlign: 'center' }]}>
            Commodity price
          </Text>
          <Text style={[globalStyles.montserratSemiBold, globalStyles.textL, { textAlign: 'center' }]}>Period</Text>
        </View>
        <View style={{ paddingHorizontal: 30, flexDirection: 'row', alignItems: 'center' }}>
          <Text style={[globalStyles.montserratMedium, globalStyles.textM]}>Start: </Text>
          <TextInput
            style={[styles.textInput, globalStyles.montserratMedium]}
            keyboardType="number-pad"
            onChangeText={(e) => handleNumericChange('start', e)}
            value={inputs.start}
          />
        </View>
        <View style={{ paddingHorizontal: 30, flexDirection: 'row', alignItems: 'center' }}>
          <Text style={[globalStyles.montserratMedium, globalStyles.textM]}>End: </Text>
          <TextInput
            style={[styles.textInput, globalStyles.montserratMedium]}
            keyboardType="number-pad"
            onChangeText={(e) => handleNumericChange('end', e)}
            value={inputs.end}
          />
        </View>
      </View>
      <View style={styles.midContainer}></View>
      <View style={styles.bottomContainer}></View>
    </View>
  )
}

export default CommoditiesScreen
