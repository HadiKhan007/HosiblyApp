import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {AppButton, AppInput} from '../../../components';
import {
  colors,
  forgotFormFields,
  ForgotPasswordVS,
} from '../../../shared/exporter';
import styles from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';

const VerifyPhone = () => {
  return (
    <>
      <View style={styles.rootContainer}>
        <Formik
          initialValues={forgotFormFields}
          onSubmit={values => {}}
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
                Enter your email address and we’ll send an verification code to
                reset your password.
              </Text>
              <View style={styles.btnCon}>
                <AppButton
                  title={'Verify Account'}
                  bgColor={colors.p2}
                  shadowColor={colors.btn_shadow}
                />
                <Text style={styles.footText}>Use phone number instead</Text>
              </View>
            </KeyboardAwareScrollView>
          )}
        </Formik>
      </View>
    </>
  );
};

export default VerifyPhone;
