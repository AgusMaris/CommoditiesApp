import globalStyles from 'globalStyles'
import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import styles from './DropDownCommodity.style'
import { MaterialIcons } from '@expo/vector-icons'
import { CommoditiesRender } from '@context/searchContext'

interface Props {
  commodity: CommoditiesRender
  index: number
}

const DropDownCommodity = ({ commodity, index }: Props) => {
  const [isSelected, toggleSelected] = useState(false)
  return (
    <View style={{ marginBottom: 1 }}>
      <TouchableOpacity style={[styles.commodityNameContainer]} onPress={() => toggleSelected(!isSelected)}>
        <View style={{ flex: 9 }}>
          <Text style={[globalStyles.montserratSemiBold, globalStyles.textM, { color: '#fff' }]}>{commodity.name}</Text>
        </View>
        <View style={{ flex: 1 }}>
          {isSelected ? (
            <MaterialIcons name="keyboard-arrow-up" color={'#fff'} size={30} />
          ) : (
            <MaterialIcons name="keyboard-arrow-down" color={'#fff'} size={30} />
          )}
        </View>
      </TouchableOpacity>
      {isSelected && (
        <>
          <View style={styles.tableHeader}>
            <View style={styles.tableColumn}>
              <Text style={[globalStyles.montserratRegular, globalStyles.textM]}>Year</Text>
            </View>
            <View style={styles.tableColumn}>
              <Text style={[globalStyles.montserratRegular, globalStyles.textM]}>Price</Text>
            </View>
          </View>
          <FlatList
            data={commodity.values}
            keyExtractor={(item) => item.year}
            renderItem={({ item }) => (
              <View style={styles.tableRow}>
                <View style={styles.tableColumn}>
                  <Text style={globalStyles.montserratRegular}>{item.year}</Text>
                </View>
                <View style={styles.tableColumn}>
                  <Text style={globalStyles.montserratRegular}>{item.value ? `USD ${item.value}` : 'No Data'}</Text>
                </View>
              </View>
            )}
          />
        </>
      )}
    </View>
  )
}

export default DropDownCommodity
