import {StyleSheet} from 'react-native';
import {
  HP,
  WP,
  colors,
  platformOrientedCode,
  size,
  family,
} from '../../../../shared/exporter';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: colors.app_color,
  },
  iconStyle: {
    width: WP('5'),
    height: WP('5'),
    tintColor: colors.b1,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: WP('3.85'),
    justifyContent: 'space-between',
  },
  inputCon: {
    flex: 1,
    paddingVertical: WP('5'),
  },
  spacRow: {
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header: {
    color: colors.b1,
    fontSize: size.large,
    fontFamily: family.Gilroy_Bold,
  },
  desc: {
    fontFamily: family.Gilroy_Medium,
    fontSize: size.xsmall,
    color: colors.g22,
    marginVertical: 15,
    lineHeight: 15,
  },
  descBox: {
    backgroundColor: colors.g30,
    marginHorizontal: -WP('3.85'),
    paddingHorizontal: WP('3.85'),
    paddingVertical: 20,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtStyle: {
    color: colors.g22,
    marginTop: WP('3'),
    marginRight: WP('7'),
    fontSize: size.xsmall,
    fontFamily: family.Gilroy_Medium,
  },
  descTxtStyle: {
    lineHeight: 18,
    color: colors.g22,
    marginTop: WP('3'),
    fontSize: size.xsmall,
    fontFamily: family.Gilroy_Medium,
  },
  readTxtStyle: {
    lineHeight: 18,
    color: colors.p2,
    marginTop: WP('2'),
    fontSize: size.xsmall,
    fontFamily: family.Gilroy_Medium,
  },
  itemContainer: {
    flex: 1,
    marginTop: WP('4'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleTxtStyle: {
    flex: 0.5,
    color: colors.b1,
    fontSize: size.xsmall,
    fontFamily: family.Gilroy_Medium,
  },
  valueTxtStyle: {
    flex: 0.5,
    lineHeight: 16,
    color: colors.g19,
    textAlign: 'right',
    fontSize: size.xsmall,
    fontFamily: family.Gilroy_Medium,
  },
  linkValueTxtStyle: {
    flex: 0.5,
    lineHeight: 16,
    color: colors.p1,
    textAlign: 'right',
    fontSize: size.xsmall,
    textDecorationLine: 'underline',
    fontFamily: family.Gilroy_Medium,
  },
});

export default styles;
