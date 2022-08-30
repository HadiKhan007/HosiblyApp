import {StyleSheet} from 'react-native';
import {WP, colors, size, family, scrWidth} from '../../../shared/exporter';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  gradientContainer: {
    flex: 1,
  },
  lineargradient: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    height: WP('55'),
  },
  arrowcon: {
    marginVertical: 15,
  },
  iconstyle: {
    margin: WP('5'),
    marginTop: 30,
    height: 20,
    width: 25,
  },
  midContainer: {
    flex: 1,
  },
  textStyle: {
    fontfamily: family.Gilroy_Bold,
    fontWeight: 'bold',
    fontSize: size.h3,
    lineheight: 26,
    textAlign: 'center',
    color: colors.b1,
    marginTop: WP('20'),
  },
  text: {
    color: colors.p7,
    fontSize: size.h1,
    fontWeight: 'bold',
    alignSelf: 'center',
    fontfamily: family.Gilroy_Medium,
    marginTop: WP('10'),
  },
  subtext: {
    color: colors.p7,
    paddingVertical: 15,
    alignSelf: 'center',
    fontSize: size.large,
    fontFamily: family.Gilroy_SemiBold,
  },
  newtext: {
    marginVertical: WP('10'),
    color: colors.b1,
    paddingHorizontal: WP('8'),
    textAlign: 'center',
    fontSize: size.tiny,
  },
  bottomtext: {
    marginTop: WP('10'),
    marginBottom: WP('3'),
    color: colors.b1,
    textAlign: 'center',
    fontSize: size.medium,
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
