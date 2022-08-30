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
  topContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  reviewContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  reviewtext: {
    color: colors.b1,
    fontSize: size.medium,
    fontWeight: 'bold',
  },
  imageContainer: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  arrowcon: {
    flex: 0.01,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: WP('4'),
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
    paddingVertical: 10,
  },
  imagestyle: {
    width: WP('40'),
    height: 130,
    borderRadius: 20,
  },
  starRating: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  textInput: {
    backgroundColor: colors.g8,
    borderRadius: 20,
    padding: 10,
    margin: 10,
    paddingVertical: 10,
  },
});

export default styles;
