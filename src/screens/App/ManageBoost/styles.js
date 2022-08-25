import {StyleSheet} from 'react-native';
import {WP, colors, size, family, scrWidth} from '../../../shared/exporter';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  inputStyle: {
    flexDirection: 'row',
    backgroundColor: colors.g5,
    borderRadius: 50,
    alignItems: 'center',
    margin: 10,
    width: '95%',
  },
  inputtext: {
    color: colors.b1,
    padding: 10,
  },
  errtext: {
    color: colors.s1,
    paddingLeft: 10,
  },
  textinputstyle: {
    backgroundColor: colors.g5,
    width: '80%',
  },
  arrowcon: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginVertical: WP('5'),
    padding: 10,
  },
  imgIcon: {
    width: WP('7'),
    height: 20,
  },
  iconstyle: {
    height: 10,
    width: 5,
  },
  textContainer: {},
  textstyle: {
    fontSize: size.h6,
    color: colors.b1,
    fontWeight: 'bold',
    fontFamily: family.Gilroy_SemiBold,
    paddingLeft: WP('3'),
    padding: WP('2'),
    marginVertical: WP('5'),
  },
  inputicon: {
    // paddng: 10,
    width: 30,
    height: 35,
    resizeMode: 'contain',
  },
  linetext: {
    alignSelf: 'flex-start',

    padding: 5,
  },
  iconstyle: {
    margin: 20,
  },
  inputtitle: {
    fontSize: size.medium,
    fontWeight: 'bold',
    color: colors.b1,
    paddingLeft: WP('3'),
    padding: WP('2'),
  },
  btn: {
    // left: 0,
    // right: 0,
    // bottom: 10,
  },
});

export default styles;
