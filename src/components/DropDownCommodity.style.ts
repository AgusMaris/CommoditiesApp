import colors from '@assets/colors'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  commodityContainer: {
    marginBottom: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  tableHeader: {
    borderBottomColor: colors.carolinaBlue,
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
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 5,

    alignItems: 'center',
  },
  enumCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.carrotOrange,
  },
})
