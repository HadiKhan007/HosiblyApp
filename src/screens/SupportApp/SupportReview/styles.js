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
  modalContainer: {
    borderRadius: 8,
    paddingTop: WP('3.5'),
    backgroundColor: 'red',
    marginHorizontal: WP('30'),
    paddingBottom: WP('2'),
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
    marginVertical: 10,
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
    marginLeft: 1,
    padding: 1,
    width: 12,
    height: 12,
  },
  itemContainer: {
    justifyContent: 'space-between',
    padding: 10,
  },
  itemCon: {
    justifyContent: 'flex-end',
    paddingLeft: 10,
  },
  commenttext: {
    paddingRight: 15,
    fontSize: size.tiny,
    color: colors.g42,
    fontFamily: family.Gilroy_Regular,
  },
  commitContainer: {
    marginRight: 50,
    marginLeft: 2,
  },
  menuItem: {
    paddingTop: 7,
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
    padding: 5,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  ratingStar: {
    color: colors.b1,
    width: 12,
    height: 12,
  },
  nameText: {
    fontSize: size.normal,
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
  btnRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 1,
  },
});

export default styles;
