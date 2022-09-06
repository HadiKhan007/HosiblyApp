import React, {useState} from 'react';
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

export const ProfileModal = ({
  show,
  onPressHide,
  viewProfile,
  setviewProfile,
  onPressMsg,
  data,
}) => {
  const Profile = () => {
    return (
      <View>
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
        <Image
          source={{uri: data?.visitor_image || profile_uri}}
          style={styles.imgStyle}
        />
        <Text style={styles.nameTxtStyle}>{data?.visitor_name || ''}</Text>
        <Text style={styles.companyTxtStyle}>Viewed you profile</Text>

        <View style={styles.rowContainer}>
          <Text style={[styles.ratingTxtStyle, {color: colors.p1}]}>
            5 min ago
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={() => setviewProfile(true)}>
          <Text style={styles.btnTxtStyle}>View Full Profile</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const CompleteProfile = () => {
    return (
      <>
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
        <Image
          resizeMode="contain"
          source={appImages.personPh}
          style={styles.imgStyle}
        />
        <Text style={styles.nameTxtStyle}>{data?.visitor_name || ''}</Text>
        <Text style={styles.emailtextStyle}>{data?.description || ''}</Text>
        <Text style={styles.emailtext}>Email Address</Text>
        <Text color={colors.g41}>{data?.visitor_email}</Text>
        <Text style={styles.emailtext}>Phone Number</Text>
        <Text style={styles.phone}>{data?.visitor_phone_number}</Text>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={onPressMsg}>
          <Text style={styles.btnTxtStyle}>Send Message</Text>
        </TouchableOpacity>
      </>
    );
  };

  return (
    <Modal onBackdropPress={onPressHide} isVisible={show}>
      <View style={styles.modalContainer}>
        {viewProfile ? <CompleteProfile /> : <Profile />}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    borderRadius: 8,
    paddingTop: WP('3.5'),
    backgroundColor: 'white',
    paddingHorizontal: WP('3.85'),
    width: '95%',
    alignSelf: 'center',
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
  emailtext: {
    paddingVertical: 10,
    color: colors.b1,
    fontFamily: family.Gilroy_Medium,
    fontSize: size.xsmall,
  },
  phone: {
    color: colors.g41,
    fontSize: size.xsmall,
    fontFamily: family.Gilroy_Medium,
  },
  emailtextStyle: {
    color: colors.g41,
    paddingVertical: 10,
    fontSize: 12,
    paddingTop: WP('3.5'),
    fontFamily: family.Gilroy_Medium,
    lineHeight: 14,
  },
  iconContainer: {
    width: WP('25'),
    height: WP('25'),
    borderRadius: 15,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.g11,
  },
  imgStyle: {
    width: WP('25'),
    height: WP('25'),
    alignSelf: 'center',
    borderRadius: 8,
    backgroundColor: colors.g10,
  },
  nameTxtStyle: {
    color: colors.b1,
    fontSize: size.xsmall,
    alignSelf: 'center',
    paddingTop: WP('4'),
    fontFamily: family.Gilroy_SemiBold,
  },
  companyTxtStyle: {
    color: colors.g41,
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: size.xtiny,
    paddingTop: WP('1.5'),
    fontFamily: family.Gilroy_SemiBold,
  },
  rowContainer: {
    paddingTop: 7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  starIconStyle: {
    width: WP('3'),
    height: WP('3'),
  },
  ratingTxtStyle: {
    top: 1.2,
    paddingLeft: 5,
    color: colors.g17,
    fontSize: size.tiny,
    fontFamily: family.Gilroy_Medium,
  },
  skillTxtStyle: {
    color: colors.b1,
    paddingTop: WP('5'),
    alignSelf: 'center',
    fontSize: size.tiny,
    fontFamily: family.Gilroy_Regular,
  },
  buttonStyle: {
    borderRadius: 15,
    width: WP('43.7'),
    height: 30,
    alignSelf: 'center',
    alignItems: 'center',
    marginVertical: WP('6'),
    justifyContent: 'center',
    backgroundColor: colors.p2,
  },
  btnTxtStyle: {
    color: colors.white,
    fontSize: size.xsmall,
    fontFamily: family.Gilroy_SemiBold,
  },
});
