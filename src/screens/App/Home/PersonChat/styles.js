import {StyleSheet} from 'react-native';
import {
  WP,
  colors,
  size,
  family,
  platformOrientedCode,
  scrWidth,
} from '../../../../shared/exporter';
import DeviceInfo from 'react-native-device-info';

const isNotch = DeviceInfo.hasNotch();

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  personView: {
    alignItems: 'center',
    paddingVertical: WP('2.5'),
  },
  personImgStyle: {
    width: WP('22'),
    height: WP('22'),
    borderRadius: 15,
  },
  nameTxtStyle: {
    color: colors.b1,
    fontSize: size.h6,
    paddingVertical: WP('4'),
    fontFamily: family.Gilroy_SemiBold,
  },
  inputView: {
    padding: WP('4'),
    minHeight: WP('9'),
    alignItems: 'center',
    flexDirection: 'row',
  },
  inputWrapper: {
    flex: 1,
    width: '100%',
    marginRight: 16,
    borderRadius: 18,
    paddingVertical: 8,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.w1,
  },
  inputStyles: {
    width: '88%',
    paddingRight: 5,
    color: colors.p8,
    alignSelf: 'center',
    fontSize: size.xsmall,
    textAlignVertical: 'top',
    fontFamily: family.Gilroy_Medium,
    padding: platformOrientedCode(11, 15),
    paddingTop: platformOrientedCode(5, 5),
    paddingBottom: platformOrientedCode(3, 2),
  },
  iconStyle: {
    width: 26,
    height: 26,
    borderRadius: 7,
  },
  msgContainer: {
    marginBottom: WP('4.6'),
    marginHorizontal: WP('5'),
  },
  // Sender Bubble
  senderBubble: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  senderBubbleStyles: {
    margin: 3,
    padding: 15,
    paddingTop: 13,
    maxWidth: '75%',
    borderRadius: 25,
    borderBottomEndRadius: 3,
    backgroundColor: colors.p4,
  },
  senderMsgStyles: {
    color: colors.b1,
    fontSize: size.tiny,
    fontFamily: family.Gilroy_Medium,
  },
  // Receiver Bubble
  receiverBubble: {
    width: '100%',
    flexDirection: 'row',
  },
  receiverBubbleStyles: {
    margin: 3,
    padding: 15,
    paddingTop: 13,
    borderRadius: 25,
    maxWidth: '100%',
    borderBottomStartRadius: 3,
    backgroundColor: colors.p1,
  },
  imgStyle: {
    top: WP('5'),
    width: WP('13.5'),
    height: WP('13.5'),
    borderRadius: WP('13.5'),
  },
  receiverMsgStyles: {
    fontSize: size.tiny,
    color: colors.white,
    fontFamily: family.Gilroy_Medium,
  },
  // no records found text style
  noRecordsView: {
    flex: 0.75,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuContainer: {
    width: '100%',
    top: WP('-3'),
    paddingLeft: WP('5.2'),
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  menuStyle: {
    flex: 1,
    paddingTop: 6,
    marginLeft: -5,
    borderRadius: 8,
    width: scrWidth / 3.2,
    height: platformOrientedCode(WP('25'), WP('20')),
  },
  menuItemStyle: {
    height: WP('8'),
  },
  menuItemRow: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: platformOrientedCode(WP('2'), WP('4.5')),
  },
  modelIconStyle: {
    width: 15,
    height: 14,
    marginTop: WP('2'),
    marginRight: WP('3'),
  },
  menuTxtStyle: {
    color: colors.b1,
    fontSize: size.xsmall,
    fontFamily: family.Gilroy_Regular,
  },
  noRecords: {
    marginRight: 17,
    color: colors.p1,
    fontSize: size.large,
    fontFamily: family.Gilroy_Bold,
  },
  smileyIconStyle: {
    width: WP('6'),
    height: WP('6'),
  },
});

export default styles;
