import {StyleSheet} from 'react-native';
import {WP, colors, size, family, scrWidth} from '../../../shared/exporter';

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
    color: colors.p6,
    fontSize: size.medium,
    fontWeight: 'bold',
    fontfamily: family.Gilroy_Medium,
    textAlign: 'center',
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
});

export default styles;
