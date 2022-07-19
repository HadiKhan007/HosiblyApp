import {StyleSheet, Dimensions} from 'react-native';
import {WP, size, family, colors} from '../../../shared/exporter';

export const commonStyles = StyleSheet.create({
  aiCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  aiEnd: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  aiRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
