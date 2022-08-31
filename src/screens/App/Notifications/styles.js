import {StyleSheet} from 'react-native';
import {colors, family, size, WP} from '../../../shared/exporter';

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
    paddingVertical: WP('8'),
    paddingHorizontal: WP('4'),
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: WP('5'),
  },
  imgStyle: {
    borderRadius: 16,
    width: WP('15.6'),
    height: WP('15.6'),
    marginRight: WP('4'),
  },
  labelTxtStyle: {
    color: colors.b8,
    fontSize: size.xsmall,
    fontFamily: family.Gilroy_SemiBold,
  },
  descTxtStyle: {
    color: colors.b8,
    fontSize: size.tiny,
    marginTop: WP('1.5'),
    marginBottom: WP('0.5'),
    fontFamily: family.Gilroy_Medium,
  },
  timeTxtStyle: {
    color: colors.b8,
    fontSize: size.tiny,
    fontFamily: family.Gilroy_Regular,
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
