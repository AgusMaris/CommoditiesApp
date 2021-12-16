import colors from '@assets/colors'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  topContainer: {
    justifyContent: 'space-between',
    flex: 4,
  },
  datesContainer: {
    flexDirection: 'row',
    flex: 2,
  },
  datesInputsContainer: {
    flex: 2,
    justifyContent: 'space-evenly',
  },

  searchButtonContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  midContainer: {
    flex: 5,
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.cornowerBlue,
  },
  errorText: {
    color: 'red',
  },
})
