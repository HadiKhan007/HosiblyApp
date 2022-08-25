import {StyleSheet} from 'react-native';
import {WP, colors, size, family, scrWidth} from '../../../shared/exporter';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
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
  contentContainer: {
    paddingVertical: WP('5'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  newtext: {
    marginVertical: WP('3'),
    paddingHorizontal: WP('10'),
    color: colors.b1,
    textAlign: 'center',
    fontSize: size.small,
  },
  textStyle: {
    fontfamily: family.Gilroy_SemiBold,
    fontSize: size.h3,
    lineheight: 26,
    textAlign: 'center',
    color: colors.b1,
  },
  linearGradient: {
    flex: 0.9,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 8,
  },
  touchOpac: {
    width: WP('80'),
    height: 65,
    borderRadius: 6,
  },

  touch2Opac: {
    width: WP('80'),
    height: 61,
    backgroundColor: colors.g18,
    borderRadius: 7,
    marginVertical: 7,
  },
  btntext: {
    color: colors.p6,
    fontSize: size.medium,
    fontWeight: 'bold',
    fontfamily: family.Gilroy_Medium,
    paddingVertical: WP('5'),
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
    flex: 0.1,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
  },
});

export default styles;
