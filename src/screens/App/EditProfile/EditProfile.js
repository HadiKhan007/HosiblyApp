import React from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import {
  AppButton,
  AppHeader,
  AppInput,
  BackHeader,
  ProfileImageBox,
  TextBox,
} from '../../../components';
import {
  appIcons,
  colors,
  editFormFields,
  editProfileFieldsVS,
  spacing,
} from '../../../shared/exporter';
import styles from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';

const EditProfile = ({navigation}) => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <AppHeader />
      <BackHeader title={'Edit Profile'} />
      <View style={styles.contentContainer}>
        <Formik
          initialValues={editFormFields}
          onSubmit={values => {
            navigation?.navigate('VerifyOTP');
          }}
          validationSchema={editProfileFieldsVS}>
          {({
            values,
            handleChange,
            errors,
            setFieldTouched,
            touched,
            isValid,
            handleSubmit,
            handleReset,
          }) => (
            <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.inputContainer}>
                <View style={spacing.py8}>
                  <ProfileImageBox />
                </View>
                <AppInput
                  onChangeText={handleChange('email')}
                  renderErrorMessage={true}
                  placeholder="Email"
                  value={values.email}
                  onBlur={() => setFieldTouched('email')}
                  blurOnSubmit={false}
                  disableFullscreenUI={true}
                  autoCapitalize="none"
                  touched={touched.email}
                  errorMessage={errors.email}
                  title={'Email Address'}
                />

                <AppInput
                  onChangeText={handleChange('phone')}
                  renderErrorMessage={true}
                  placeholder="+123 456 789"
                  value={values.phone}
                  onBlur={() => setFieldTouched('phone')}
                  blurOnSubmit={false}
                  disableFullscreenUI={true}
                  autoCapitalize="none"
                  touched={touched.phone}
                  errorMessage={errors.phone}
                  title={'Phone Number'}
                  keyboardType={'phone-pad'}
                  rightIcon={
                    <Image source={appIcons.america} style={styles.iconStyle} />
                  }
                />
                <Text style={styles.textStyle}>Edit Bio</Text>
                <TextBox
                  conStyle={spacing.px2}
                  onChangeText={handleChange('bio')}
                  value={values.bio}
                  error={errors.bio}
                  touched={touched.bio}
                  placeholder={
                    'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'
                  }
                  height={190}
                />
                <View style={styles.btnCon}>
                  <AppButton
                    onPress={handleSubmit}
                    title={'Save'}
                    bgColor={colors.p2}
                    shadowColor={colors.btn_shadow}
                  />
                </View>
              </View>
            </KeyboardAwareScrollView>
          )}
        </Formik>
      </View>
    </SafeAreaView>
  );
};

export default EditProfile;
