import React, {useState, useEffect} from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import {colors, WP, family, size} from '../../shared/exporter';
import {guildLines} from '../../shared/utilities/constant';

export const GuildlinesModal = ({
  show,
  buttonClick,
  onPressHide,
  activeIndex,
  onPressDone,
}) => {
  const [item, setItem] = useState({});

  useEffect(() => {
    if (activeIndex != undefined) setItem(guildLines[activeIndex]);
  }, [activeIndex]);

  return (
    <Modal onBackdropPress={onPressHide} isVisible={show}>
      <View style={styles.modalContainer}>
        <View style={styles.imageView}>
          <Image
            resizeMode="contain"
            source={item?.img}
            style={styles.iconStyle}
          />
        </View>
        <View style={styles.contentView}>
          <Text style={styles.titleTxtStyle}>{item?.title}</Text>
          <Text style={styles.descTxtStyle}>{item?.desc}</Text>
          <View style={styles.bottomRow(activeIndex)}>
            <View style={styles.innerRow}>
              <View style={styles.dotStyle(activeIndex == 0)} />
              <View style={styles.dotStyle(activeIndex == 1)} />
            </View>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                activeIndex == 1 ? onPressDone() : buttonClick();
              }}
              style={styles.btnContainer}>
              <Text style={styles.btnTxtStyle}>
                {activeIndex == 1 ? 'Done' : 'NEXT'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    borderRadius: 8,
    alignItems: 'center',
    paddingBottom: WP('7'),
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  imageView: {
    width: '100%',
    height: WP('51'),
    alignItems: 'center',
    borderTopEndRadius: 8,
    borderTopStartRadius: 8,
    justifyContent: 'center',
    backgroundColor: colors.g5,
  },
  iconStyle: {
    width: WP('30'),
    height: WP('32'),
  },
  contentView: {
    width: '100%',
    marginTop: WP('3'),
    paddingHorizontal: WP('3.6'),
  },
  titleTxtStyle: {
    color: colors.b1,
    fontSize: size.xxlarge,
    fontFamily: family.Gilroy_SemiBold,
  },
  rowContainer: {
    marginTop: WP('4'),
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowTxtStyle: {
    top: 1,
    left: 7,
    color: colors.b1,
    fontSize: size.normal,
    fontFamily: family.Gilroy_Medium,
  },
  descTxtStyle: {
    lineHeight: 20,
    color: colors.b1,
    letterSpacing: 0.5,
    marginTop: WP('4'),
    fontSize: size.tiny,
    fontFamily: family.Gilroy_Regular,
  },
  bottomRow: activeIndex => {
    return {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: activeIndex == 0 ? WP('3') : WP('2'),
    };
  },
  innerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dotStyle: isActive => {
    return {
      width: isActive ? 23 : 12,
      height: 3,
      marginRight: 3,
      borderRadius: 23,
      backgroundColor: isActive ? colors.p2 : colors.p3,
    };
  },
  btnContainer: {
    borderRadius: 15,
    width: WP('17.5'),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.p2,
  },
  btnTxtStyle: {
    color: colors.white,
    fontSize: size.xsmall,
    paddingVertical: WP('2'),
    fontFamily: family.Gilroy_SemiBold,
  },
});
