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
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View>
          <Text style={[globalStyles.montserratBold, globalStyles.textXL, globalStyles.textAlignCenter]}>
            Commodity price
          </Text>
          <Text style={[globalStyles.montserratSemiBold, globalStyles.textL, globalStyles.textAlignCenter]}>
            Period
          </Text>
        </View>
        <View style={styles.datesContainer}>
          <View style={styles.datesInputsContainer}>
            <View style={styles.textInputContainer}>
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
            <View style={styles.textInputContainer}>
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
          <View style={styles.searchButtonContainer}>
            <TouchableOpacity onPress={handleSubmit}>
              <MaterialIcons name="arrow-forward-ios" size={30} color={colors.carrotOrange} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.textInputContainer, { flex: 1 }]}>
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
            overScrollMode="never"
            data={commodities}
            keyExtractor={(item: CommoditiesRender) => item.name}
            renderItem={({ item, index }) => <DropDownCommodity index={index} commodity={item} />}
          />
        ) : (
          <Text style={[globalStyles.montserratMedium, styles.errorText]}>{error}</Text>
        )}
      </View>
      <View style={styles.bottomContainer}>
        <Text style={[globalStyles.montserratMedium, globalStyles.textAlignCenter, globalStyles.textWhite]}>
          Agustin Mariscotti - 2021
        </Text>
      </View>
    </View>
  )
}

export default CommoditiesScreen
