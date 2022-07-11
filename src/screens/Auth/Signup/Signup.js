import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import styles from './styles';
import {
  colors,
  commonStyles,
  family,
  signupFormFields,
  SignupVS,
  spacing,
} from '../../../shared/exporter';
import {
  AppButton,
  AppHeader,
  AppInput,
  AuthFooter,
  BackHeader,
} from '../../../components';
import {Formik} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const SignUp = ({navigation, route}) => {
  console.log('Purpose is => ', route?.params?.item);
  console.log('Item is => ', route?.params?.regPurpose);

  const handleSignUp = values => {
    let item = route?.params?.item;
    let profileType = route?.params?.regPurpose;
    const data = new FormData();
    data.append('user[full_name]', values?.fullname);
    data.append('user[email]', values?.email);
    data.append('user[password]', values?.password);
    data.append('user[phone_number]', values?.contact);
    data.append('user[licensed_realtor]', item?.licensed === 'Yes');
    data.append('user[contacted_by_real_estate]', item?.contacted === 'Yes');
    data.append('user[user_type]', item?.userType);
    data.append('user[profile_type]', profileType);

    console.log('Params are ==> ', data);
    // navigation?.navigate('VerifyOTP', {registeration: true});
  };

  return (
    <SafeAreaView style={styles.rootContainer}>
      <AppHeader />
      <BackHeader title={'Create Account'} />
      <View style={styles.contentContainer}>
        <Formik
          initialValues={signupFormFields}
          onSubmit={values => {
            handleSignUp(values);
          }}
          validationSchema={SignupVS}>
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
              <View style={styles.inputCon}>
                <AppInput
                  onChangeText={handleChange('fullname')}
                  renderErrorMessage={true}
                  placeholder="Full Name"
                  value={values.fullname}
                  onBlur={() => setFieldTouched('fullname')}
                  blurOnSubmit={false}
                  disableFullscreenUI={true}
                  autoCapitalize="none"
                  touched={touched.fullname}
                  errorMessage={errors.fullname}
                  title={'Full Name'}
                />
                <AppInput
                  onChangeText={handleChange('email')}
                  renderErrorMessage={true}
                  placeholder="Email address"
                  value={values.email}
                  onBlur={() => setFieldTouched('email')}
                  blurOnSubmit={false}
                  disableFullscreenUI={true}
                  autoCapitalize="none"
                  touched={touched.email}
                  errorMessage={errors.email}
                  title={'Email Address'}
                  keyboardType={'email-address'}
                />
                <AppInput
                  onChangeText={handleChange('contact')}
                  renderErrorMessage={true}
                  placeholder="Add number here"
                  value={values.contact}
                  onBlur={() => setFieldTouched('contact')}
                  blurOnSubmit={false}
                  disableFullscreenUI={true}
                  autoCapitalize="none"
                  touched={touched.contact}
                  errorMessage={errors.contact}
                  title={'Phone Number'}
                  keyboardType={'phone-pad'}
                />

                <AppInput
                  onChangeText={handleChange('password')}
                  renderErrorMessage={true}
                  placeholder="Type here"
                  value={values.password}
                  onBlur={() => setFieldTouched('password')}
                  blurOnSubmit={false}
                  disableFullscreenUI={true}
                  autoCapitalize="none"
                  touched={touched.password}
                  errorMessage={errors.password}
                  onSubmitEditing={handleSubmit}
                  secureTextEntry
                  title={'Create Password'}
                />
              </View>
              <View style={[commonStyles.aiCenter, spacing.mt10]}>
                <Text style={styles.footerText}>
                  By creating account, you agree to our{' '}
                  <Text
                    onPress={() => {
                      navigation.navigate('TermsConditions');
                    }}
                    style={[
                      styles.footerText,
                      {
                        color: colors.p1,
                        fontFamily: family.Gilroy_SemiBold,
                        textDecorationLine: 'underline',
                      },
                    ]}>
                    Terms & Conditions
                  </Text>{' '}
                  &{' '}
                  <Text
                    onPress={() => {
                      navigation.navigate('PrivacyPolicy');
                    }}
                    style={[
                      styles.footerText,
                      {
                        color: colors.p1,
                        fontFamily: family.Gilroy_SemiBold,
                        textDecorationLine: 'underline',
                      },
                    ]}>
                    Privacy Policy
                  </Text>
                </Text>
                <View style={styles.btnCon}>
                  <AppButton
                    onPress={handleSubmit}
                    title={'Create Account'}
                    shadowColor={colors.btn_shadow}
                    bgColor={colors.p2}
                  />
                  <AuthFooter
                    title={'Have an account already?'}
                    subtitle={'Login'}
                    onPress={() => {
                      navigation?.navigate('Login');
                    }}
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

export default SignUp;
