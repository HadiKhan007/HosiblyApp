import React from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import {AppButton, AppHeader, AppInput, BackHeader} from '../../../components';
import {
  appIcons,
  colors,
  forgotFormFields,
  ForgotPasswordVS,
  PhoneAuthFields,
  PhoneAuthFieldsVS,
} from '../../../shared/exporter';
import styles from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';

const VerifyPhone = ({navigation}) => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <AppHeader />
      <BackHeader title={'Enter Phone Number'} />
      <View style={styles.contentContainer}>
        <Formik
          initialValues={PhoneAuthFields}
          onSubmit={values => {
            navigation?.navigate('VerifyOTP');
          }}
          validationSchema={PhoneAuthFieldsVS}>
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
                <AppInput
                  onChangeText={handleChange('contact')}
                  renderErrorMessage={true}
                  placeholder="+123 456 789"
                  value={values.contact}
                  onBlur={() => setFieldTouched('contact')}
                  blurOnSubmit={false}
                  disableFullscreenUI={true}
                  autoCapitalize="none"
                  touched={touched.contact}
                  errorMessage={errors.contact}
                  title={'Phone Number'}
                  keyboardType={'phone-pad'}
                  rightIcon={
                    <Image source={appIcons.america} style={styles.iconStyle} />
                  }
                />
                <Text style={styles.textStyle}>
                  Enter your phone number and we’ll send an verification code to
                  your phone number to reset your password.
                </Text>
                <View style={styles.btnCon}>
                  <AppButton
                    onPress={handleSubmit}
                    title={'Verify Account'}
                    bgColor={colors.p2}
                    shadowColor={colors.btn_shadow}
                  />
                  <Text
                    onPress={() => {
                      navigation?.navigate('ForgotPassword');
                    }}
                    style={styles.footText}>
                    Use email address instead
                  </Text>
                </View>
              </View>
            </KeyboardAwareScrollView>
          )}
        </Formik>
      </View>
    </SafeAreaView>
  );
};

export default VerifyPhone;
