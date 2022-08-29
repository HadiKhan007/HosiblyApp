import {StyleSheet} from 'react-native';
import {colors, family, size, WP} from '../../../shared/exporter';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    paddingHorizontal: WP('4'),
    backgroundColor: colors.white,
  },
  flStyle: {
    paddingVertical: WP('5.5'),
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: WP('2.5'),
    backgroundColor: colors.white,
  },
  imgStyle: {
    borderRadius: 16,
    width: WP('15.6'),
    height: WP('15.6'),
    marginRight: WP('4'),
  },
  innerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: WP('2'),
  },
  labelTxtStyle: {
    color: colors.b8,
    fontSize: size.xsmall,
    fontFamily: family.Gilroy_SemiBold,
  },
  countContainer: {
    width: WP('3.2'),
    height: WP('3.2'),
    marginLeft: WP('2'),
    alignItems: 'center',
    borderRadius: WP('3.2'),
    justifyContent: 'center',
    backgroundColor: colors.p1,
  },
  countTxtStyle: {
    top: 0.5,
    fontSize: 8,
    color: colors.white,
    fontFamily: family.Gilroy_SemiBold,
  },
  descTxtStyle: {
    color: colors.b8,
    fontSize: size.tiny,
    marginTop: WP('1.5'),
    marginBottom: WP('0.5'),
    fontFamily: family.Gilroy_Medium,
  },
  backBtnsContainer: {
    flex: 1,
    paddingLeft: 15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  delBtnStyle: {
    right: 0,
    bottom: 0,
    top: WP('1.8'),
    width: WP('14'),
    height: WP('17'),
    marginRight: 15,
    borderRadius: 15,
    alignItems: 'center',
    position: 'absolute',
    justifyContent: 'center',
    backgroundColor: colors.s1,
  },
  delBtnTxtStyle: {
    marginTop: WP('2'),
    color: colors.white,
    fontSize: size.xtiny,
    fontFamily: family.Gilroy_Medium,
  },
  delIconStyle: {
    width: 20,
    height: 20,
    tintColor: colors.white,
  },
  noRecordsView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noRecords: {
    marginRight: 17,
    color: colors.p1,
    fontSize: size.large,
    fontFamily: family.Gilroy_Bold,
  },
});

export default styles;
