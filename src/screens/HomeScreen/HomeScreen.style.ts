import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: { flex: 8, alignItems: 'center', justifyContent: 'space-evenly' },
  textBold: {
    fontFamily: 'MontserratBold',
    fontSize: 25,
  },
  textMedium: {
    fontFamily: 'MontserratMedium',
    fontSize: 18,
  },
  textSemiBold: {
    fontFamily: 'MontserratSemiBold',
  },
  appText: {
    fontSize: 20,
  },
  imgContainer: {
    height: 200,
    width: 200,
  },
  emailText: {
    textDecorationColor: '#000',
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
  },
  textRegular: {
    fontFamily: 'MontserratRegular',
  },
})
