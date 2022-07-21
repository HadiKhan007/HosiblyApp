import {Platform, StyleSheet, Text, TextInput, View, Image} from 'react-native';
import React from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import {colors, family, size} from '../../shared/exporter';
import {Icon} from 'react-native-elements';

export const PriceInput = ({
  onSelect,
  value,
  isPickerOpen,
  onFocus,
  onBlur,
  placeholder1,
  placeholder2,
  inputs,
  text,
  title,
  list,
  defaultValue,
  dropDown,
  subtitle,
  name,
  size,
  color,
  marginRight,
  marginLeft,
  marginBottom,
  marginTop,
  source,
  width,
  height,
}) => {
  return (
    <View
      style={[styles.container, {justifyContent: !inputs && 'space-between'}]}>
      <View style={styles.aiRow}>
        <View style={[styles.headStyle]}>
          <Image
            source={source}
            style={{
              height: 30,
              width: 30,
              marginRight: marginRight,
              marginLeft: marginLeft,
              marginBottom: marginBottom,
              marginTop: marginTop,
            }}
          />
          <Text style={[styles.h1]}>{title || 'Price'}</Text>
          {subtitle && <Text style={styles.subStyle}>{subtitle}</Text>}
        </View>
        {dropDown && (
          <SelectDropdown
            defaultValue={value}
            onSelect={onSelect}
            data={list}
            dropdownOverlayColor={'transparent'}
            rowStyle={styles.rowStyle}
            onFocus={onFocus}
            onBlur={onBlur}
            renderCustomizedButtonChild={item => {
              return (
                <View>
                  <Text style={styles.rowTextStyle}>
                    ({item || defaultValue})
                  </Text>
                </View>
              );
            }}
            buttonStyle={styles.btnStyle}
            dropdownStyle={styles.dropdownStyle}
            renderCustomizedRowChild={item => {
              return (
                <View style={styles.btnCon}>
                  <Text
                    style={[styles.rowTextStyle, {textDecorationLine: 'none'}]}>
                    {item}
                  </Text>
                </View>
              );
            }}
            buttonTextAfterSelection={selectedItem => selectedItem}
            rowTextForSelection={item => item}
            renderDropdownIcon={() => {
              return (
                <Icon
                  name={isPickerOpen ? 'caretup' : 'caretdown'}
                  type={'antdesign'}
                  size={10}
                  color={colors.b3}
                />
              );
            }}
          />
        )}
      </View>
      {inputs ? (
        <View style={styles.aiRow1}>
          <TextInput
            placeholder={placeholder1 || '1,000,000'}
            placeholderTextColor={colors.g19}
            style={styles.inputStyle}
            keyboardType={'decimal-pad'}
          />
          <Text style={styles.to}>to</Text>
          <TextInput
            style={styles.inputStyle}
            placeholderTextColor={colors.g19}
            placeholder={placeholder2 || '1,500,000'}
            keyboardType={'decimal-pad'}
          />
        </View>
      ) : (
        <TextInput
          placeholder={text}
          placeholderTextColor={colors.g19}
          style={styles.simpleInputStyle}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 60,
    // backgroundColor: 'red',
  },
  subStyle: {
    fontSize: size.xsmall,
    fontFamily: family.Gilroy_Medium,
    color: colors.g19,
  },
  aiRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  h1: {
    color: colors.b1,
    fontSize: size.xsmall,
    fontFamily: family.Gilroy_Medium,
  },
  rowTextStyle: {
    fontSize: size.xsmall,
    fontFamily: family.Gilroy_Medium,
    color: colors.b1,
    textDecorationLine: 'underline',
  },
  btnCon: {
    backgroundColor: colors.white,
    shadowRadius: 12,
    borderRadius: 12,
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    alignSelf: 'flex-end',
    marginBottom: 5,
    borderWidth: 1,
    borderColor: colors.g29,
  },
  btnStyle: {
    width: '40%',
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dropdownStyle: {
    marginVertical: Platform.select({android: -25, ios: -15}),
    width: '20%',
    backgroundColor: colors.white,
  },
  rowStyle: {
    borderBottomWidth: 0,
    marginVertical: 5,
    height: 45,
  },
  inputStyle: {
    height: 20,
    width: '40%',
    borderLeftWidth: 1,
    borderLeftColor: colors.p2,
    color: colors.g19,
    padding: 0,
  },
  simpleInputStyle: {
    height: 50,
    color: colors.g19,
    padding: 0,
  },
  to: {
    paddingHorizontal: 10,
    color: colors.g19,
    fontFamily: family.Gilroy_Medium,
    fontSize: size.xsmall,
  },
  aiRow1: {
    flexDirection: 'row',
    height: '100%',
    width: '50%',
    alignItems: 'center',
  },
});
