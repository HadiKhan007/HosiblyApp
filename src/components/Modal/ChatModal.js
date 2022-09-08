import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import {
  colors,
  WP,
  family,
  size,
  appIcons,
  appImages,
} from '../../shared/exporter';

export const ChatModal = ({type, show, onPressHide, name, source}) => {
  return (
    <Modal onBackdropPress={onPressHide} isVisible={show}>
      <View style={styles.modalContainer}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.crossIconView}
          onPress={() => onPressHide()}>
          <Image
            resizeMode="contain"
            source={appIcons.crossIcon}
            style={styles.crossIconStyle}
          />
        </TouchableOpacity>
        <Image resizeMode="contain" source={source} style={styles.imgStyle} />
        <Text style={styles.nameTxtStyle}>{name}</Text>
        <Text style={styles.descTxtStyle}>
          {type} {type == 'Delete' ? 'conversation' : 'user'}?
        </Text>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle(type)}
          onPress={() => onPressHide()}>
          <Text style={styles.btnTxtStyle}>{type}</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    borderRadius: 8,
    paddingTop: WP('3.5'),
    backgroundColor: 'white',
    marginHorizontal: WP('5'),
    paddingHorizontal: WP('3.5'),
  },
  crossIconView: {
    width: WP('5'),
    height: WP('5'),
    alignSelf: 'flex-end',
  },
  crossIconStyle: {
    width: WP('2'),
    height: WP('4'),
    alignSelf: 'flex-end',
  },
  imgStyle: {
    width: WP('25'),
    height: WP('25'),
    alignSelf: 'center',
    backgroundColor: '#ccc',
    borderRadius: WP('25'),
  },
  nameTxtStyle: {
    color: colors.b1,
    fontSize: size.h6,
    alignSelf: 'center',
    paddingTop: WP('4'),
    fontFamily: family.Gilroy_SemiBold,
  },
  descTxtStyle: {
    color: colors.b1,
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: size.tiny,
    paddingTop: WP('2'),
    paddingHorizontal: WP('2'),
    fontFamily: family.Gilroy_Medium,
  },
  buttonStyle: type => {
    return {
      width: WP('25'),
      borderRadius: 15,
      height: WP('7.7'),
      marginTop: WP('5'),
      alignSelf: 'center',
      alignItems: 'center',
      marginBottom: WP('6'),
      justifyContent: 'center',
      backgroundColor:
        type === 'Block'
          ? colors.b9
          : type === 'Delete'
          ? colors.s1
          : colors.p2,
    };
  },
  btnTxtStyle: {
    color: colors.white,
    fontSize: size.xsmall,
    fontFamily: family.Gilroy_SemiBold,
  },
});
