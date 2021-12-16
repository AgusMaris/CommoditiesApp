import colors from '@assets/colors'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    borderColor: '#aaa',
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    flex: 3,
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
  textInputContainer: {
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
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
