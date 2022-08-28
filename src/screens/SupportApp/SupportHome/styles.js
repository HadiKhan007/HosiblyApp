import {StyleSheet} from 'react-native';
import {WP, colors, size, family} from '../../../shared/exporter';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainer: {
    paddingHorizontal: WP('3.85'),
    flex: 1,
  },
  imgCon: {
    height: 122,
    width: 122,
    borderRadius: 15,
    backgroundColor: colors.g8,
    borderWidth: 1,
    alignSelf: 'center',
    borderStyle: 'dashed',
    borderColor: colors.g9,
  },
  imgStyle: {
    height: '100%',
    width: '100%',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    paddingVertical: WP('10'),
  },
  iconCon: {
    backgroundColor: colors.s2,
    height: 43,
    width: 43,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 20,
    right: 0,
  },
  iconStyle: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
  },
  h1: {
    fontSize: size.h6,
    color: colors.b1,
    fontFamily: family.Gilroy_SemiBold,
    textAlign: 'center',
    marginTop: 10,
  },
  h2: {
    fontSize: size.tiny,
    fontFamily: family.Gilroy_SemiBold,
    color: colors.b1,
    textAlign: 'center',
  },
  starStyle: {
    height: 26,
    width: 26,
    resizeMode: 'contain',
  },
  starCon: {
    backgroundColor: colors.white,
    height: 57,
    width: 57,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.shad1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 1,
    marginVertical: 10,
    marginRight: 10,
  },
  textCon: {
    justifyContent: 'center',
  },
  desc: {
    color: colors.g22,
    fontFamily: family.Gilroy_Medium,
    fontSize: size.xsmall,
    lineHeight: 18,
  },
  aiRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  text1: {
    fontSize: size.xsmall,
    fontFamily: family.Gilroy_Medium,
    color: colors.b1,
    marginVertical: 5,
  },
  text2: {
    fontSize: size.large,
    fontFamily: family.Gilroy_SemiBold,
    color: colors.b1,
  },
});

export default styles;
