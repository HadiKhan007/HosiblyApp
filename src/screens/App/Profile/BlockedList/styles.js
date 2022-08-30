import {StyleSheet} from 'react-native';
import {colors, family, size, WP} from '../../../../shared/exporter';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  headerTxtStyle: {
    color: colors.b8,
    marginTop: WP('2'),
    alignSelf: 'center',
    fontSize: size.xsmall,
    fontFamily: family.Gilroy_SemiBold,
  },
  flStyle: {
    paddingVertical: WP('4'),
    paddingHorizontal: WP('4'),
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
    marginRight: WP('2.5'),
  },
  labelTxtStyle: {
    color: colors.b8,
    fontSize: size.xsmall,
    fontFamily: family.Gilroy_SemiBold,
  },
  buttonStyle: {
    width: WP('25'),
    borderRadius: 15,
    height: WP('7.7'),
    marginTop: WP('2.5'),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.p2,
  },
  btnTxtStyle: {
    color: colors.white,
    fontSize: size.xsmall,
    fontFamily: family.Gilroy_SemiBold,
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
