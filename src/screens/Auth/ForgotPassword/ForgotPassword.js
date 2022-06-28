import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {
  AppButton,
  AppHeader,
  AppInput,
  AuthHeader,
  MyStatusBar,
} from '../../../components';
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
    <>
      <AppHeader />
      <AuthHeader title={'Enter Email Address'} />
      <View style={styles.rootContainer}>
        <Formik
          initialValues={forgotFormFields}
          onSubmit={values => {
            onSubmitLogin(values);
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
                />
                <Text style={styles.textStyle}>
                  Enter your email address and we’ll send an verification code
                  to reset your password.
                </Text>
                <View style={styles.btnCon}>
                  <AppButton
                    title={'Verify Account'}
                    bgColor={colors.p2}
                    shadowColor={colors.btn_shadow}
                    onPress={() => {
                      navigation?.navigate('VerifyOTP');
                    }}
                  />
                  <Text style={styles.footText}>Use phone number instead</Text>
                </View>
              </View>
            </KeyboardAwareScrollView>
          )}
        </Formik>
      </View>
    </>
  );
};

export default ForgotPassword;
