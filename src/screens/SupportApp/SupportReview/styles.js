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
  starContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: WP('3'),
  },
  topView: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    padding: 10,
  },
  innerView: {
    marginLeft: 10,
    paddingVertical: 5,
  },
  centerView: {
    flexDirection: 'row',
  },
  starRating: {
    flexDirection: 'row',
    marginLeft: 15,
    padding: 3,
    width: 12,
    height: 22,
  },
  commenttext: {
    paddingRight: 15,
  },
  commitContainer: {
    marginRight: 50,
    marginLeft: 2,
  },
  imagestyle: {
    width: WP('15'),
    height: 61,
    borderRadius: 20,
  },
  starstyle: {
    width: WP('4'),
    height: 15,
    margin: 2,
  },
  dropdownstyle: {
    padding: 10,
  },
  ratingStar: {
    color: colors.b1,
    width: 12,
    height: 12,
  },
  nameText: {
    fontSize: size.medium,
    color: colors.b1,
    fontFamily: family.Gilroy_SemiBold,
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
});

export default styles;
