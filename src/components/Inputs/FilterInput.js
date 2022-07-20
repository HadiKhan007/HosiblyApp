import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {colors} from '../../shared/exporter';

export const FilterInput = ({placeholder}) => {
  return (
    <View>
      <TextInput
        placeholder={placeholder || '1,000,000'}
        placeholderTextColor={colors.g19}
        style={styles.inputStyle}
        keyboardType={'decimal-pad'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    height: 50,
    width: '100%',
    borderLeftColor: colors.p2,
    color: colors.g19,
    padding: 0,
  },
});
