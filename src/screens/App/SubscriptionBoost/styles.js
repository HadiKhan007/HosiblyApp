import {StyleSheet} from 'react-native';
import {WP, colors, size, family} from '../../../shared/exporter';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  gradientContainer: {
    flex: 1,
  },
  lineargradient: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  arrowcon: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingVertical: WP('5'),
    color: 'white',
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
    marginTop: WP('10'),
  },
  text: {
    color: colors.p7,
    fontSize: size.h1,
    fontWeight: 'bold',
    alignSelf: 'center',
    fontfamily: family.Gilroy_Medium,
  },
  subtext: {
    color: colors.p7,
    paddingBottom: 20,
    alignSelf: 'center',
    fontSize: size.normal,
    fontFamily: family.Gilroy_SemiBold,
  },
  boosttext: {
    color: colors.b1,
    textAlign: 'center',
    fontSize: size.small,
    paddingBottom: 5,
  },
  datetext: {
    color: colors.p1,
    fontFamily: family.Gilroy_Medium,
    textAlign: 'center',
    fontSize: size.h4,
  },
  newtext: {
    marginVertical: WP('8'),
    color: colors.b1,
    textAlign: 'center',
    fontSize: size.tiny,
  },
  bottomtext: {
    marginTop: WP('2'),
    marginBottom: WP('3'),
    color: colors.b1,
    textAlign: 'center',
    fontSize: size.medium,
  },
  footercon: {
    flex: 0.01,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
  },
});

export default styles;
