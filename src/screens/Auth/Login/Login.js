import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {
  AppButton,
  AppInput,
  AuthFooter,
  DividerBox,
  MyStatusBar,
  SignUpModal,
} from '../../../components';
import {
  appIcons,
  appLogos,
  colors,
  commonStyles,
  family,
  loginFormFields,
  LoginVS,
  spacing,
} from '../../../shared/exporter';
import styles from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';

const Login = ({navigation}) => {
  const [show, setShow] = useState(false);
  const [showSlide, setShowSlide] = useState(0);

  return (
    <>
      <MyStatusBar />
      <View style={styles.rootContainer}>
        <View style={styles.contentContainer}>
          <Formik
            initialValues={loginFormFields}
            onSubmit={values => {
              onSubmitLogin(values);
            }}
            validationSchema={LoginVS}>
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
                <View style={styles.imageCon}>
                  <Image source={appLogos.appLogo} style={styles.imgStyle} />
                  <Text style={styles.textStyle}>Housibly</Text>
                </View>
                <View>
                  <AppButton
                    icon={appIcons.google}
                    style={styles.googleStyle}
                    title={'Sign up with Google'}
                    textStyle={styles.btnTextStyle}
                    bgColor={colors.white}
                    borderColor={colors.g3}
                    shadowColor={colors.white}
                  />
                  <AppButton
                    title={'Sign up with Apple'}
                    icon={appIcons.apple}
                    style={styles.appleStyle}
                    textStyle={styles.btnTextStyle}
                    bgColor={colors.white}
                    borderColor={colors.g3}
                    shadowColor={colors.white}
                  />
                  <DividerBox />
                </View>
                <View>
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
                    onChangeText={handleChange('password')}
                    renderErrorMessage={true}
                    placeholder="Password"
                    value={values.password}
                    onBlur={() => setFieldTouched('password')}
                    blurOnSubmit={false}
                    disableFullscreenUI={true}
                    autoCapitalize="none"
                    touched={touched.password}
                    errorMessage={errors.password}
                    onSubmitEditing={handleSubmit}
                    secureTextEntry
                    title={'Password'}
                  />
                  <TouchableOpacity
                    onPress={() => {
                      navigation?.navigate('ForgotPassword');
                    }}
                    style={commonStyles.aiEnd}>
                    <Text style={styles.forgotText}>Forgot Password?</Text>
                  </TouchableOpacity>
                  <View style={commonStyles.aiCenter}>
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
                      </Text>{' '}
                    </Text>
                    <View style={styles.btnCon}>
                      <AppButton
                        onPress={handleSubmit}
                        title={'Login'}
                        shadowColor={colors.btn_shadow}
                        bgColor={colors.p2}
                      />
                      <AuthFooter
                        title={'Don’t have an account?'}
                        subtitle={'Create One'}
                        onPress={() => setShow(true)}
                      />
                    </View>
                  </View>
                </View>
              </KeyboardAwareScrollView>
            )}
          </Formik>
          <SignUpModal
            show={show}
            activeIndex={showSlide}
            onPressHide={() => setShow(false)}
            buttonClick={() => setShowSlide(showSlide + 1)}
          />
        </View>
      </View>
    </>
  );
};

export default Login;
