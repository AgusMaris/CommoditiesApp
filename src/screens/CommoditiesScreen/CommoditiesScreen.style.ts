import colors from '@assets/colors'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
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
  midContainer: {
    flex: 5,
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.carrotOrange,
  },
  errorText: {
    color: 'red',
  },
})
