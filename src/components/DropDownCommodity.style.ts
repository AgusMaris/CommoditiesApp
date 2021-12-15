import colors from '@assets/colors'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  tableHeader: {
    borderBottomColor: colors.cornowerBlue,
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableColumn: {
    flex: 1,
    alignItems: 'center',
  },
  commodityNameContainer: {
    backgroundColor: colors.carrotOrange,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: '10%',
    alignItems: 'center',
  },
})
