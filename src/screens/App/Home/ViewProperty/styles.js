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
  iconStyle: isBookMark => {
    return {
      width: WP('6.2'),
      height: WP('6.2'),
      tintColor: isBookMark ? colors?.p1 : colors.b1,
    };
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
    fontSize: size.large,
    fontFamily: family.Gilroy_Bold,
    color: colors.b1,
    marginBottom: 10,
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
    marginTop: WP('4'),
    marginBottom: WP('2'),
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
});

export default styles;
