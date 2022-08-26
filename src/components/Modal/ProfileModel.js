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

export const ProfileModal = ({show, onPressHide}) => {
  const [viewProfile, setviewProfile] = useState(false);

  const Profile = () => {
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
        <Text style={styles.nameTxtStyle}>Davis Vaccaro</Text>
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
      </>
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
        <Text style={styles.nameTxtStyle}>Davis Vaccaro</Text>
        <Text style={styles.emailtextStyle}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit. Exercitation.
        </Text>
        <Text style={styles.emailtext}>Email Address</Text>
        <Text color={colors.g41}>hardenausaff@gmail.com</Text>
        <Text style={styles.emailtext}>Phone Number</Text>
        <Text style={styles.phone}>+123 456 789</Text>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={() => {}}>
          <Text style={styles.btnTxtStyle}>Send Message</Text>
        </TouchableOpacity>
      </>
    );
  };

  return (
    <Modal onBackdropPress={onPressHide} isVisible={show}>
      <View style={styles.modalContainer}>
        {viewProfile === true ? <CompleteProfile /> : <Profile />}
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
  emailtext: {
    paddingVertical: 10,
    color: colors.b1,
    fontFamily: family.Gilroy_Medium,
    fontSize: size.medium,
  },
  phone: {
    paddingLeft: 5,
    color: colors.g41,
    fontSize: 14,
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
  },
  nameTxtStyle: {
    color: colors.b1,
    fontSize: size.h6,
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
    height: WP('7.8'),
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: WP('3.3'),
    marginBottom: WP('6'),
    justifyContent: 'center',
    backgroundColor: colors.p2,
  },
  btnTxtStyle: {
    color: colors.white,
    fontSize: size.xsmall,
    fontFamily: family.Gilroy_SemiBold,
  },
});
