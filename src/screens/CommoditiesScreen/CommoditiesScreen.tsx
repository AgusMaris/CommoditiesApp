import React, { useContext, useRef } from 'react'
import { View, Text, TextInput, ActivityIndicator } from 'react-native'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { DrawerParamList } from '@navigation/Navigator'
import globalStyles from 'globalStyles'
import styles from './CommoditiesScreen.style'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { MaterialIcons } from '@expo/vector-icons'
import colors from '@assets/colors'
import DropDownCommodity from '@components/DropDownCommodity'
import SearchContext, { CommoditiesRender } from '@context/searchContext'

type Props = DrawerScreenProps<DrawerParamList, 'Commodities'>

const CommoditiesScreen = ({ navigation }: Props) => {
  const startInputRef = useRef<TextInput>(null)
  const endInputRef = useRef<TextInput>(null)
  const { start, end, error, commodities, handleDateChange, handleSubmit, isLoading, filterInput, handleFilterChange } =
    useContext(SearchContext)

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.topContainer}>
        <View>
          <Text style={[globalStyles.montserratBold, globalStyles.textXL, { textAlign: 'center' }]}>
            Commodity price
          </Text>
          <Text style={[globalStyles.montserratSemiBold, globalStyles.textL, { textAlign: 'center' }]}>Period</Text>
        </View>
        {error !== '' && <Text style={[globalStyles.montserratMedium, styles.errorText]}>{error}</Text>}
        <View style={{ flexDirection: 'row', flex: 2 }}>
          <View style={{ flex: 2, justifyContent: 'space-evenly' }}>
            <View style={{ paddingHorizontal: 30, flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ flex: 2 }}>
                <Text style={[globalStyles.montserratMedium, globalStyles.textM]}>Start:</Text>
              </View>
              <TextInput
                style={[styles.textInput, globalStyles.montserratMedium]}
                keyboardType="number-pad"
                onChangeText={(e) => handleDateChange('start', e)}
                value={start}
                ref={startInputRef}
                onSubmitEditing={() => endInputRef.current?.focus()}
                blurOnSubmit={false}
                returnKeyType="next"
              />
            </View>
            <View style={{ paddingHorizontal: 30, flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ flex: 2 }}>
                <Text style={[globalStyles.montserratMedium, globalStyles.textM]}>End:</Text>
              </View>
              <TextInput
                style={[styles.textInput, globalStyles.montserratMedium]}
                keyboardType="number-pad"
                onChangeText={(e) => handleDateChange('end', e)}
                value={end}
                ref={endInputRef}
              />
            </View>
          </View>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <TouchableOpacity onPress={handleSubmit}>
              <MaterialIcons name="arrow-forward-ios" size={30} color={colors.carrotOrange} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ paddingHorizontal: 30, flexDirection: 'row', alignItems: 'center', flex: 1 }}>
          <View style={{ flex: 2 }}>
            <Text style={[globalStyles.montserratMedium, globalStyles.textM]}>Commodity:</Text>
          </View>
          <TextInput
            style={[styles.textInput, globalStyles.montserratMedium]}
            onChangeText={(e) => handleFilterChange(e)}
            value={filterInput}
            editable={!isLoading}
          />
        </View>
      </View>
      <View style={styles.midContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={colors.carrotOrange} style={{ flex: 1, alignSelf: 'center' }} />
        ) : error === '' ? (
          <FlatList
            data={commodities}
            keyExtractor={(item: CommoditiesRender) => item.name}
            renderItem={({ item, index }) => <DropDownCommodity index={index} commodity={item} />}
          />
        ) : (
          <Text>Error: {error}</Text>
        )}
      </View>
      <View style={styles.bottomContainer}>
        <Text style={[globalStyles.montserratMedium, { textAlign: 'center', color: '#fff' }]}>
          Agustin Mariscotti - 2021
        </Text>
      </View>
    </View>
  )
}

export default CommoditiesScreen
