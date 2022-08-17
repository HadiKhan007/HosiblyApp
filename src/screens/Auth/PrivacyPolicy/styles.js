import {StyleSheet} from 'react-native';
import {WP, colors, size, family} from '../../../shared/exporter';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainer: {
    marginTop: WP('3'),
    paddingBottom: WP('1.5'),
    paddingHorizontal: WP('4'),
  },
  txtStyle: {
    color: colors.b2,
    fontSize: size.normal,
    fontFamily: family.Gilroy_SemiBold,
  },
});

export default styles;
