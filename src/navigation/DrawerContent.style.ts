import colors from '@assets/colors'
import fonts from '@assets/fonts/fonts'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: colors.carolinaBlue },
  topContainer: {
    height: '50%',
  },
  navLinkContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  backBtnContainer: {
    flex: 1,
    marginTop: '12.5%',
  },
  backBtn: { alignSelf: 'flex-end' },
  navBtnText: { color: '#fff', fontSize: 20, fontFamily: fonts.MontserratSemiBold },
})
