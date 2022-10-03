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
    backgroundColor: colors.white,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: WP('3.85'),
    paddingVertical: 10,
  },
  h1: {
    fontSize: size.large,
    color: colors.b1,
    fontFamily: family.Gilroy_Bold,
  },
  noFoundText: {
    fontSize: size.large,
    color: colors.p1,
    fontFamily: family.Gilroy_SemiBold,
    textAlign: 'center',
    paddingTop: HP('15'),
  },
});

export default styles;
