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
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    height: WP('55'),
  },
  arrowcon: {
    marginVertical: 15,
  },
  iconstyle: {
    margin: WP('5'),
    marginTop: 40,
    height: 20,
    width: 25,
  },
  midContainer: {
    flex: 1,
  },
  textStyle: {
    fontfamily: family.Gilroy_Bold,
    fontWeight: 'bold',
    fontSize: size.h6,
    lineheight: 26,
    textAlign: 'center',
    color: colors.b1,
    marginTop: WP('15'),
  },
  text: {
    color: colors.p7,
    fontSize: size.h1,
    fontWeight: 'bold',
    fontfamily: family.Gilroy_Medium,
    paddingVertical: WP('13'),
    alignSelf: 'center',
  },
  newtext: {
    paddingHorizontal: WP('10'),
    color: colors.b1,
    textAlign: 'center',
    fontSize: size.tiny,
    marginVertical: 15,
    lineHeight: 21,
  },
  bottomtext: {
    marginVertical: WP('15'),
    marginBottom: WP('3'),
    paddingHorizontal: WP('10'),
    color: colors.b1,
    textAlign: 'center',
    fontSize: size.xsmall,
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
