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
  cardViewCon: {
    backgroundColor: colors.w2,
    padding: 20,
    marginTop: 10,
  },
  imgStyle: {
    height: '100%',
    width: '100%',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  uploadimage: {
    padding: 10,
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
  starContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imagestyle: {
    width: WP('20'),
    height: 79,
    borderRadius: 20,
    marginTop: 5,
  },
  topView: {
    flexDirection: 'row',
    paddingHorizontal: 5,
    padding: 10,
  },
  innerView: {
    marginLeft: 10,
    paddingVertical: 5,
    marginLeft: 20,
  },
  centerView: {
    flexDirection: 'row',
  },
  reviewtext: {
    color: colors.b1,
    fontSize: size.large,
    lineheight: 21,
    fontFamily: family.Gilroy_SemiBold,
  },
  cardContainer: {
    backgroundColor: colors.w1,
    flexDirection: 'row',
    margin: 15,
    borderRadius: 10,
    // paddingLeft: 20,
    padding: 15,
  },
  commitContainer: {
    marginRight: 61,
    marginLeft: 1,
  },
  commenttext: {
    paddingRight: 10,
    fontSize: size.tiny,
    color: colors.g42,
    fontFamily: family.Gilroy_Regular,
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
  pdfimg: {
    width: 28.43,
    height: 38,
    marginTop: 15,
    paddingRight: 20,
  },
  starRating: {
    flexDirection: 'row',
    width: 12,
    height: 12,
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
  text3: {
    fontSize: 14,
    fontFamily: family.Gilroy_Medium,
    color: colors.b1,
    paddingTop: WP('5'),
    paddingBottom: WP('3'),
    lineHeight: 15,
  },
  text4: {
    color: colors.b10,
    fontSize: 16,
    fontFamily: family.Gilroy_Medium,
    paddingTop: 10,
  },
  nameText: {
    fontSize: 16,
    color: colors.b8,
    fontFamily: family.Gilroy_SemiBold,
    paddingBottom: 10,
  },
});

export default styles;
