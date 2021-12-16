import colors from '@assets/colors'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  tableHeader: {
    borderBottomColor: '#279AF1',
    borderBottomWidth: 2,
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
    backgroundColor: '#279AF1',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 5,

    alignItems: 'center',
  },
})
