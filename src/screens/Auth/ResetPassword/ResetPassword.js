import React from 'react';
import {Text, View} from 'react-native';
import {AppButton, AppHeader, AppInput, BackHeader} from '../../../components';
import {
  colors,
  resetFormFields,
  ResetPasswordVS,
} from '../../../shared/exporter';
import styles from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';

const ResetPassword = () => {
  return (
    <View style={styles.rootContainer}>
      <AppHeader />
      <BackHeader title={'Create New Password'} />
      <Formik
        initialValues={resetFormFields}
        onSubmit={values => {
          onSubmitLogin(values);
        }}
        validationSchema={ResetPasswordVS}>
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
                onChangeText={handleChange('password')}
                renderErrorMessage={true}
                placeholder="New Password"
                value={values.password}
                onBlur={() => setFieldTouched('password')}
                blurOnSubmit={false}
                disableFullscreenUI={true}
                autoCapitalize="none"
                touched={touched.password}
                errorMessage={errors.password}
                onSubmitEditing={handleSubmit}
                secureTextEntry
                title={'Type New Password'}
              />
              <AppInput
                onChangeText={handleChange('confirmPassword')}
                renderErrorMessage={true}
                placeholder="New Confirm Password"
                value={values.confirmPassword}
                onBlur={() => setFieldTouched('confirmPassword')}
                blurOnSubmit={false}
                disableFullscreenUI={true}
                autoCapitalize="none"
                touched={touched.confirmPassword}
                errorMessage={errors.confirmPassword}
                onSubmitEditing={handleSubmit}
                secureTextEntry
                title={'Re-type New Password'}
              />
              <Text style={styles.textStyle}>
                Your new password must be different from previous used password.
              </Text>
              <View style={styles.btnCon}>
                <AppButton
                  title={'Reset Password'}
                  bgColor={colors.p2}
                  shadowColor={colors.btn_shadow}
                  onPress={handleSubmit}
                />
              </View>
            </View>
          </KeyboardAwareScrollView>
        )}
      </Formik>
    </View>
  );
};

export default ResetPassword;
