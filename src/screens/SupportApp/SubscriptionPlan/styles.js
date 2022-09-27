import {StyleSheet} from 'react-native';
import {WP, colors, size, family, scrWidth, HP} from '../../../shared/exporter';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },

  imgIcon: {
    width: WP('7'),
    height: 20,
  },
  contentContainer: {
    flex: 1,
    paddingVertical: WP('3.86'),
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  newtext: {
    marginVertical: WP('3'),
    paddingHorizontal: WP('10'),
    color: colors.b1,
    textAlign: 'center',
    fontSize: size.xsmall,
    fontFamily: family.Gilroy_Regular,
    lineHeight: 20,
  },
  textStyle: {
    fontfamily: family.Gilroy_SemiBold,
    fontSize: size.h6,
    lineheight: 26,
    textAlign: 'center',
    color: colors.b1,
  },
  linearGradient: {
    height: '100%',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  touchOpac: {
    width: WP('80'),
    height: 65,
    borderRadius: 6,
    marginVertical: 5,
  },
  touch2Opac: {
    width: WP('80'),
    height: 65,
    borderRadius: 6,
    marginVertical: 5,
  },
  btntext: {
    color: colors.b1,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: size.medium,
    fontfamily: family.Gilroy_Medium,
  },
  btn2text: {
    color: colors.p6,
    fontSize: size.medium,
    fontWeight: 'bold',
    fontfamily: family.Gilroy_Medium,
    paddingVertical: WP('5'),
    textAlign: 'center',
  },
  btn3text: {
    color: colors.p6,
    fontSize: size.medium,
    fontWeight: 'bold',
    fontfamily: family.Gilroy_Medium,
    paddingVertical: WP('5'),
    textAlign: 'center',
  },
  footercon: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
  },
  cardView: {
    backgroundColor: colors.p6,
    width: WP('80'),
    padding: 10,
    elevation: 1,
    borderRadius: 15,
  },
  cardText: {
    flex: 0.5,
    fontFamily: family.Gilroy_Regular,
    color: colors.g34,
    paddingRight: WP('1'),
  },
  cardTextTitle: {
    flex: 0.5,
    fontFamily: family.Gilroy_SemiBold,
    color: colors.g34,
  },
  cardInnerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    marginVertical: HP('0.7'),
  },
  // =============
});

export default styles;
