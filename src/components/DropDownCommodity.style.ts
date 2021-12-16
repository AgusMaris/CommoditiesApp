import colors from '@assets/colors'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  commodityContainer: {
    marginBottom: 1,
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
    backgroundColor: colors.carolinaBlue,
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 5,

    alignItems: 'center',
  },
})
