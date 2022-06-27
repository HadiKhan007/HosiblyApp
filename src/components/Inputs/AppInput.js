import * as React from 'react';
import {Text, View, StyleSheet, Platform, TouchableOpacity} from 'react-native';
import {Input, IconProps, Icon} from 'react-native-elements';
import {family, size, colors, WP} from '../../shared/exporter';
import CountryPicker from 'react-native-country-picker-modal';

const AppInput = ({
  placeholder,
  leftIcon,
  rightIcon,
  secureTextEntry,
  renderErrorMessage,
  errorMessage,
  onChangeText,
  disableFullscreenUI,
  autoCapitalize,
  touched,
  blurOnSubmit,
  onBlur,
  value,
  onSubmitEditing,
  editable,
  title,
  countryInput,
  countryCode,
  cca2,
  onSelect,
  onPressCountryPicker,
  countryPicker,
  keyboardType,
  isVerticalBar = false,
}) => {
  const [showPass, setShowPass] = React.useState(secureTextEntry);

  return (
    <View>
      {title && <Text style={styles.inputTextStyle}>{title}</Text>}
      <Input
        placeholder={placeholder}
        secureTextEntry={showPass}
        inputContainerStyle={styles.inputContainerStyle}
        containerStyle={{paddingHorizontal: 0}}
        inputStyle={[styles.inputStyle]}
        keyboardType={keyboardType}
        leftIcon={
          <>
            {countryInput ? (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={onPressCountryPicker}
                style={styles.countryInputContainer}>
                <View>
                  <CountryPicker
                    onSelect={onSelect}
                    translation="eng"
                    withFlag={true}
                    withEmoji={true}
                    countryCode={cca2}
                    withFilter={true}
                    withAlphaFilter={true}
                    visible={countryPicker}
                  />
                </View>
                <Text style={styles.countryInput}>+{countryCode}</Text>
                <Icon
                  name={'caretdown'}
                  type={'antdesign'}
                  size={10}
                  color={colors.g20}
                />
                <Text style={styles.divider}>|</Text>
              </TouchableOpacity>
            ) : (
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                {leftIcon}
                {isVerticalBar && <Text style={styles.lineView}>|</Text>}
              </View>
            )}
          </>
        }
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value}
        disableFullscreenUI={disableFullscreenUI}
        autoCapitalize={autoCapitalize}
        blurOnSubmit={blurOnSubmit}
        editable={editable}
        rightIcon={
          secureTextEntry ? (
            <Text
              onPress={() => {
                setShowPass(!showPass);
              }}
              style={styles.textSyle}>
              {showPass ? 'Show' : 'Hide'}
            </Text>
          ) : (
            rightIcon
          )
        }
        errorMessage={errorMessage}
        renderErrorMessage={renderErrorMessage}
        autoCompleteType={undefined}
        onSubmitEditing={onSubmitEditing}
      />
    </View>
  );
};

export {AppInput};

const styles = StyleSheet.create({
  container: {},
  inputStyle: {
    fontFamily: family.Gilroy_Medium,
    fontSize: size.large,
    color: colors.b6,
  },
  inputContainerStyle: {
    borderRadius: 15,
    backgroundColor: colors.white,
    paddingHorizontal: WP('2'),
    borderWidth: 1,
    borderColor: colors.g3,
    shadowColor: colors.input_shadow,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    height: 60,
    marginHorizontal: 0,
  },
  textSyle: {
    color: colors.p2,
    fontFamily: family.Gilroy_Bold,
    fontSize: size.xsmall,
  },
  inputTextStyle: {
    color: colors.g7,
    fontSize: size.xsmall,
    paddingBottom: 10,
    fontFamily: family.Gilroy_Bold,
  },
  countryInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  countryInput: {
    fontFamily: family.Gilroy_Medium,
    fontSize: size.normal,
    color: colors.g7,
    left: Platform.select({android: -8, ios: -5}),
  },
  divider: {
    left: 3,
    top: -2.5,
    fontSize: 28,
    paddingLeft: 3,
    paddingRight: 4,
    color: colors.g21,
  },
  lineView: {
    width: 1,
    height: 40,
    marginLeft: 7,
    marginRight: 8,
    backgroundColor: colors.g21,
  },
});
