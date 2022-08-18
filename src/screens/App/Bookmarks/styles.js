import {StyleSheet} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {
  WP,
  colors,
  size,
  family,
  scrWidth,
  platformOrientedCode,
} from '../../../shared/exporter';

let hasNotch = DeviceInfo.hasNotch();

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: platformOrientedCode(WP('6'), 0),
  },
  headerTxtStyle: {
    color: colors.b1,
    alignSelf: 'center',
    fontSize: size.xsmall,
    paddingVertical: WP('2.5'),
    fontFamily: family.Gilroy_SemiBold,
  },
  titleTxtStyle: {
    color: colors.b1,
    fontSize: size.h6,
    paddingTop: WP('5'),
    paddingBottom: WP('3.6'),
    paddingHorizontal: WP('4'),
    fontFamily: family.Gilroy_Bold,
  },
  typeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: WP('5'),
    paddingHorizontal: WP('4'),
  },
  homeIconStyle: {
    width: 14,
    height: 14,
  },
  homeTxtStyle: {
    top: 1,
    marginLeft: 7,
    color: colors.g2,
    fontSize: size.xsmall,
    fontFamily: family.Gilroy_Medium,
  },
  menuContainer: {
    width: '100%',
    top: WP('-3'),
    paddingLeft: WP('5.2'),
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  menuStyle: {
    flex: 1,
    marginTop: 5,
    marginLeft: -5,
    borderRadius: 8,
    width: scrWidth / 2.2,
    height: platformOrientedCode(WP('33'), WP('31')),
  },
  menuItemStyle: {
    height: WP('10'),
  },
  menuItemRow: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: platformOrientedCode(WP('2'), WP('4.5')),
  },
  modelIconStyle: {
    width: 15,
    height: 14,
    marginTop: WP('2'),
    marginRight: WP('3'),
  },
  menuTxtStyle: {
    color: colors.b1,
    marginTop: WP('2'),
    fontSize: size.xsmall,
    fontFamily: family.Gilroy_Regular,
  },
  dividerView: {
    top: 5,
    height: 1,
    width: '100%',
    backgroundColor: colors.g24,
  },
  flStyle: {
    marginBottom: WP('13'),
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingBottom: platformOrientedCode(WP('16'), hasNotch ? 0 : WP('16')),
  },
  itemContainer: {
    flexDirection: 'row',
    paddingBottom: WP('4.2'),
    paddingHorizontal: WP('4'),
    backgroundColor: colors.white,
  },
  imgStyle: {
    borderRadius: 15,
    width: WP('26.3'),
    height: WP('24.1'),
    marginRight: WP('2.5'),
  },
  innerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nameTxtStyle: {
    color: colors.b1,
    fontSize: size.large,
    fontFamily: family.Gilroy_SemiBold,
  },
  txtContainer: {
    width: WP('9'),
    borderRadius: 5,
    height: WP('4.4'),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.r1,
  },
  newTxtStyle: {
    left: 0.5,
    color: colors.white,
    fontSize: size.xxtiny,
    fontFamily: family.Gilroy_Regular,
  },
  simpleRow: {
    paddingTop: 13,
    paddingBottom: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  smallTxtStyle: {
    color: colors.g23,
    fontSize: size.tiny,
    fontFamily: family.Gilroy_Medium,
  },
  bedIconStyle: {
    width: 14,
    height: 9,
    marginRight: 3,
  },
  bathIconStyle: {
    width: 11,
    height: 11,
    marginLeft: 8,
    marginRight: 4,
  },
  heartIconStyle: {
    width: 13,
    height: 11,
    marginRight: 5,
  },
  heartTxtStyle: {
    color: colors.r2,
    fontSize: size.tiny,
    fontFamily: family.Gilroy_Medium,
  },
  timeTxtStyle: {
    color: colors.g17,
    fontSize: size.tiny,
    fontFamily: family.Gilroy_Medium,
  },
  backBtnsContainer: {
    flex: 1,
    paddingLeft: 15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  delBtnStyle: {
    top: 1,
    right: 0,
    bottom: 0,
    width: WP('23'),
    height: WP('23'),
    borderRadius: 15,
    alignItems: 'center',
    position: 'absolute',
    borderTopEndRadius: 0,
    justifyContent: 'center',
    borderBottomEndRadius: 0,
    backgroundColor: colors.s1,
  },
  iconStyle: {
    width: 20,
    height: 20,
    tintColor: colors.g15,
  },
  delIconStyle: {
    width: 20,
    height: 20,
    tintColor: colors.white,
  },
  btnTxtStyle: {
    marginTop: 5,
    color: colors.white,
    fontSize: size.tiny,
    fontFamily: family.Gilroy_Medium,
  },
});

export default styles;
