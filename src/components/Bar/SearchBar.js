import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {appIcons, colors, family, size} from '../../shared/exporter';
import {Input} from 'react-native-elements';

export const SearchBar = ({onChangeText}) => {
  return (
    <View style={styles.container}>
      <Input
        placeholder={'Search'}
        onChangeText={onChangeText}
        leftIcon={<Image source={appIcons.search} style={styles.iconStyle} />}
        style={styles.inputStyle}
        inputContainerStyle={styles.inputContainerStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 34,
    width: '100%',
  },
  inputStyle: {
    paddingHorizontal: 10,
    fontSize: size.tiny,
    fontFamily: family.Gilroy_Medium,
    color: colors.b12,
  },
  inputContainerStyle: {
    borderRadius: 10,
    backgroundColor: colors.g45,
    borderBottomWidth: 0,
    paddingHorizontal: 10,
    height: 34,
  },
  iconStyle: {
    height: 14,
    width: 14,
    resizeMode: 'contain',
  },
});
