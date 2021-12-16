import colors from '@assets/colors'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  profileImage: {
    height: '100%',
    width: '100%',
    borderRadius: 100,
  },
  topContainer: {
    flex: 8,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
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
  bottomContainer: {
    flex: 1,
    backgroundColor: colors.carrotOrange,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
})
