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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header: {
    fontSize: size.large,
    fontFamily: family.Gilroy_Bold,
    color: colors.b1,
    marginVertical: 10,
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
});

export default styles;
