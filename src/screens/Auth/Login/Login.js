import React, {useState, useEffect} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {
  AppButton,
  AppInput,
  AppLoader,
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
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import styles from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';

const Login = ({navigation}) => {
  const [show, setShow] = useState(false);
  const [showSlide, setShowSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    GoogleSignin.signOut();
  }, []);

  const handleGoogleLogin = async () => {
    try {
      setIsLoading(true);
      // Get the users ID token
      const {idToken} = await GoogleSignin.signIn();
      if (idToken) {
        handleSocialLogin('google', idToken);
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('cancel');
        setIsLoading(false);
      } else if (error.code === statusCodes.IN_PROGRESS) {
        setIsLoading(false);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    }
  };

  const handleSocialLogin = (type, token) => {
    console.log('Token is ==> ', token);
  };

  const handleNavigation = (userType, licensed, contacted) => {
    navigation.navigate('SignUpPurpose', {
      modelItem: {
        userType,
        licensed,
        contacted,
      },
    });
    setShowSlide(0);
  };

  return (
    <>
      <MyStatusBar />
      <View style={styles.rootContainer}>
        <View style={styles.contentContainer}>
          <Formik
            initialValues={loginFormFields}
            onSubmit={values => {
              navigation.navigate('App');
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
                    onPress={() => handleGoogleLogin()}
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
            valueCallBack={handleNavigation}
          />
        </View>
      </View>
    </>
  );
};

export default Login;
