import {StyleSheet} from 'react-native';
import {
  colors,
  family,
  platformOrientedCode,
  size,
  WP,
} from '../../../shared/exporter';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: WP('3.85'),
  },
  imageContainer: {
    marginVertical: 20,
    height: 97,
    width: 97,
    alignSelf: 'center',
  },

  imgIcon: {
    width: WP('7'),
    height: 20,
  },
  nametext: {
    textAlign: 'center',
    color: colors.b1,
    fontSize: 22,
    lineHeight: 25,
    fontFamily: family.Gilroy_SemiBold,
  },
  imagestyle: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  starRating: {
    alignItems: 'center',
    margin: 10,
    height: 31,
    width: 31,
  },
});

export default styles;
