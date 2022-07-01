import React, {useRef, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {AppButton, AppHeader, BackHeader} from '../../../components';
import {colors, family, spacing} from '../../../shared/exporter';
import styles from './styles';
import {
  CodeField,
  Cursor,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import CountDown from 'react-native-countdown-component';

const VerifyOTP = ({navigation, route}) => {
  const [value, setValue] = useState('');
  const [codeFieldProps, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const [resendCode, setResendCode] = useState(false);
  //Reference Declraration
  const ref = useRef();

  return (
    <View style={styles.rootContainer}>
      <AppHeader />
      <BackHeader title={'Verify Verification Code'} />
      <View style={styles.contentContainer}>
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.inputContainer}>
            <CodeField
              ref={ref}
              {...codeFieldProps}
              value={value}
              onChangeText={val => {
                setValue(val);
                if (val.length == 6) {
                  // confirmOtp(val);
                }
              }}
              cellCount={6}
              onSubmitEditing={() => {
                // confirmOtp(value);
              }}
              rootStyle={styles.otpInputBox}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              renderCell={({index, symbol, isFocused}) => (
                <View
                  key={index}
                  style={[
                    styles.cell,
                    {
                      borderColor: isFocused ? colors.p2 : colors.g7,
                    },
                  ]}
                  onLayout={getCellOnLayoutHandler(index)}>
                  <Text style={styles.txtStyle}>
                    {symbol || (isFocused && <Cursor />)}
                  </Text>
                </View>
              )}
            />
            <Text style={styles.paraTextStyle}>
              Please enter your verification code sent to your email account
            </Text>
          </View>
          <View style={styles.btnCon}>
            <AppButton
              title={'Verify Code'}
              bgColor={colors.p2}
              shadowColor={colors.btn_shadow}
              onPress={() => {
                if (route?.params?.registeration) {
                  navigation?.navigate('AddPersonalInfo');
                } else {
                  navigation?.navigate('ResetPassword');
                }
              }}
            />

            <TouchableOpacity
              style={spacing.mt5}
              disabled={resendCode}
              onPress={() => {
                setResendCode(true);
              }}
              activeOpacity={0.7}>
              {resendCode ? (
                <View style={styles.aiRow}>
                  <Text style={[styles.resendText]}>
                    Resend code {resendCode && 'in'}
                  </Text>
                  <CountDown
                    size={12}
                    until={60}
                    digitStyle={styles.digitStyle}
                    digitTxtStyle={[
                      styles.timerText,
                      {
                        color: colors.p2,
                        fontFamily: family.Gilroy_SemiBold,
                      },
                    ]}
                    timeToShow={['S']}
                    onFinish={() => {
                      setResendCode(false);
                    }}
                    timeLabels={{m: null, s: null}}
                  />
                  <Text
                    style={[
                      styles.timerText,
                      {
                        color: colors.p2,
                        fontFamily: family.Gilroy_SemiBold,
                      },
                    ]}>
                    sec
                  </Text>
                </View>
              ) : (
                <Text style={styles.footText}>
                  Didn’t recived a code?{' '}
                  <Text
                    style={[
                      styles.footText,
                      {
                        color: colors.p2,
                        fontFamily: family.Gilroy_SemiBold,
                      },
                    ]}>
                    Resend
                  </Text>
                </Text>
              )}
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
};

export default VerifyOTP;
