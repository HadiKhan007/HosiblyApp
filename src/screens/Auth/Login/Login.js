import React, {useState, useEffect} from 'react';
import {Text, View, Image, TouchableOpacity, Alert} from 'react-native';
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
  checkConnected,
  colors,
  commonStyles,
  family,
  loginFormFields,
  LoginVS,
  networkText,
} from '../../../shared/exporter';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import styles from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';
import {useDispatch} from 'react-redux';
import {loginRequest, socialLoginRequest} from '../../../redux/actions';
import {appleAuth} from '@invertase/react-native-apple-authentication';

const Login = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch(null);

  useEffect(() => {
    GoogleSignin.signOut();
  }, []);

  const handleGoogleLogin = async () => {
    try {
      // Get the users ID token
      const {idToken} = await GoogleSignin.signIn();
      if (idToken) {
        setIsLoading(true);
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

  const handleSocialLogin = (provider, token) => {
    const socialLoginSuccess = async res => {
      console.log('SOCIAL LOGIN RESPONSE==> ', res);
      setIsLoading(false);
      setTimeout(() => {
        navigation?.replace('App');
      }, 500);
    };
    const socialLoginFailure = async err => {
      console.log('Err is ==> ', err);
      Alert.alert('Error', err);
      setIsLoading(false);
    };

    const form = new FormData();
    form.append('provider', provider);
    form.append('token', token);
    dispatch(socialLoginRequest(form, socialLoginSuccess, socialLoginFailure));
  };
  const handleAppleLogin = async () => {
    // Start the sign-in request
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
    });
    // console.log('LOGIN Apple SUCCESS==>', appleAuthRequestResponse);
    handleSocialLogin('apple', appleAuthRequestResponse?.identityToken);
    // Ensure Apple returned a user identityToken
    if (!appleAuthRequestResponse.identityToken) {
      throw new Error('Apple Sign-In failed - no identify token returned');
    }
  };

  const onSubmit = async values => {
    const check = await checkConnected();
    if (check) {
      setIsLoading(true);
      const form = new FormData();
      form.append('user[email]', values.email);
      form.append('user[password]', values.password);
      const loginSuccess = async res => {
        setIsLoading(false);

        if (res?.user?.is_confirmed && res?.user?.is_otp_verified) {
          setTimeout(() => {
            if (res?.user?.profile_type === 'want_support_closer') {
              navigation?.replace('SupportApp');
            } else {
              navigation?.replace('App');
            }
          }, 500);
        } else {
          if (res?.user?.is_otp_verified) {
            if (res?.user?.profile_type == 'want_support_closer') {
              navigation?.navigate('AddSupportInfo');
            } else {
              navigation?.navigate('AddPersonalInfo');
            }
          } else {
            navigation?.navigate('VerifyOTP', {
              email: values?.email,
              registeration: true,
            });
          }
        }
      };
      const loginFailure = async res => {
        Alert.alert('Error', res);
        setIsLoading(false);
      };
      dispatch(loginRequest(form, loginSuccess, loginFailure));
    } else {
      Alert.alert('Error', networkText);
    }
  };

  return (
    <>
      <MyStatusBar />
      <View style={styles.rootContainer}>
        <View style={styles.contentContainer}>
          <Formik
            initialValues={loginFormFields}
            onSubmit={values => {
              onSubmit(values);
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
                    // onPress={() => navigation?.navigate('AddSupportInfo')}
                    onPress={() => handleAppleLogin()}
                    title={'Sign up with Apple..'}
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
                        onPress={() => {
                          navigation?.navigate('SignUpPurpose');
                        }}
                      />
                    </View>
                  </View>
                </View>
              </KeyboardAwareScrollView>
            )}
          </Formik>
        </View>
      </View>
      <AppLoader loading={isLoading} />
    </>
  );
};

export default Login;
