import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { DrawerParamList } from '@navigation/Navigator'
import globalStyles from 'globalStyles'
import styles from './CommoditiesScreen.style'
import { useAppDispatch } from '@hooks/appHooks'
import { fetchAsyncCommodities } from '@store/commoditiesSlice'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { MaterialIcons } from '@expo/vector-icons'
import colors from '@assets/colors'

type Props = DrawerScreenProps<DrawerParamList, 'Commodities'>

const initialState = {
  start: '',
  end: '',
  error: '',
}

const CommoditiesScreen = ({ navigation }: Props) => {
  const [state, setState] = useState<typeof initialState>(initialState)
  const dispatch = useAppDispatch()
  useEffect(() => {
    console.log(state)
  }, [state])

  const handleNumericChange = (key: string, value: string) => {
    if (isNaN(+value) || value.indexOf('.') !== -1 || value.indexOf(' ') !== -1) {
      return
    }
    setState((prev) => ({ ...prev, [key]: value, error: '' }))
  }

  const fetchCommodities = () => {
    if (+state.start > +state.end) {
      setState((prev) => ({ ...prev, error: 'End date must be greater than start date' }))
      return
    }
    dispatch(fetchAsyncCommodities({ start: state.start, end: state.end }))
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
        {state.error !== '' && <Text style={[globalStyles.montserratMedium, styles.errorText]}>{state.error}</Text>}
        <View style={{ flexDirection: 'row', flex: 1 }}>
          <View style={{ flex: 2, justifyContent: 'space-evenly' }}>
            <View style={{ paddingHorizontal: 30, flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ flex: 2 }}>
                <Text style={[globalStyles.montserratMedium, globalStyles.textM]}>Start:</Text>
              </View>
              <TextInput
                style={[styles.textInput, globalStyles.montserratMedium]}
                keyboardType="number-pad"
                onChangeText={(e) => handleNumericChange('start', e)}
                value={state.start}
              />
            </View>
            <View style={{ paddingHorizontal: 30, flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ flex: 2 }}>
                <Text style={[globalStyles.montserratMedium, globalStyles.textM]}>End:</Text>
              </View>
              <TextInput
                style={[styles.textInput, globalStyles.montserratMedium]}
                keyboardType="number-pad"
                onChangeText={(e) => handleNumericChange('end', e)}
                value={state.end}
              />
            </View>
          </View>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <TouchableOpacity onPress={fetchCommodities}>
              <MaterialIcons name="arrow-forward-ios" size={30} color={colors.cornowerBlue} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.midContainer}></View>
      <View style={styles.bottomContainer}></View>
    </View>
  )
}

export default CommoditiesScreen
