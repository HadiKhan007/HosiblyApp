import {StyleSheet} from 'react-native';
import {colors, family, size, WP} from '../../../shared/exporter';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: colors.w2,
  },
  contentContainer: {
    paddingHorizontal: WP('3.85'),
    flex: 1,
  },
});

export default styles;
