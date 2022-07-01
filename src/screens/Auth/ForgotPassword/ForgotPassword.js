import React from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import {AppButton, AppInput, AppHeader, BackHeader} from '../../../components';
import {
  colors,
  forgotFormFields,
  ForgotPasswordVS,
} from '../../../shared/exporter';
import styles from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';

const ForgotPassword = ({navigation}) => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <AppHeader />
      <BackHeader title={'Enter Email Address'} />
      <Formik
        initialValues={forgotFormFields}
        onSubmit={values => {
          navigation?.navigate('VerifyOTP');
        }}
        validationSchema={ForgotPasswordVS}>
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
          <KeyboardAwareScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentContainer}>
            <View style={styles.inputContainer}>
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
                keyboardType={'email-address'}
              />
              <Text style={styles.textStyle}>
                Enter your email address and we’ll send an verification code to
                reset your password.
              </Text>
              <View style={styles.btnCon}>
                <AppButton
                  title={'Verify Account'}
                  bgColor={colors.p2}
                  shadowColor={colors.btn_shadow}
                  onPress={handleSubmit}
                />
                <Text
                  onPress={() => {
                    navigation?.navigate('VerifyPhone');
                  }}
                  style={styles.footText}>
                  Use phone number instead
                </Text>
              </View>
            </View>
          </KeyboardAwareScrollView>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default ForgotPassword;
