import {Platform, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {colors, family, size} from '../../shared/exporter';
import {Icon} from 'react-native-elements';

export const LivingSpaceInput = ({
  onChangeText1,
  onChangeText2,
  h1,
  h2,
  placeholder1,
  placeholder2,
  h2FontSize,
  val1,
  val2,
}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.aiRow]}>
        <Text style={[styles.h1]}> {h1 || 'Living Space'} </Text>
        <Text
          style={[
            styles.h2,
            {
              fontSize: h2FontSize || size.xxxtiny,
            },
          ]}>
          {h2 || ''}
        </Text>
      </View>
      <View style={styles.aiRow1}>
        <TextInput
          placeholder={placeholder1 || 'min'}
          placeholderTextColor={colors.g19}
          style={styles.inputStyle}
          keyboardType={'decimal-pad'}
          onChangeText={onChangeText1}
          value={val1}
        />
        <Text style={styles.to}>to</Text>
        <TextInput
          style={styles.inputStyle}
          placeholderTextColor={colors.g19}
          placeholder={placeholder2 || 'max'}
          keyboardType={'decimal-pad'}
          onChangeText={onChangeText2}
          value={val2}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 60,
    justifyContent: 'space-between',
    width: '100%',
  },
  aiRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '70%',
  },

  h1: {
    color: colors.b1,
    fontSize: size.xsmall,
    fontFamily: family.Gilroy_Medium,
  },
  h2: {
    color: colors.g19,
    fontSize: size.xxxtiny,
    fontFamily: family.Gilroy_Medium,
  },
  inputStyle: {
    height: 25,
    width: '30%',
    borderLeftWidth: 1,
    borderLeftColor: colors.p2,
    color: colors.g19,
    padding: 0,
    textAlign: 'center',
  },
  to: {
    color: colors.g19,
    fontFamily: family.Gilroy_Medium,
    fontSize: size.xsmall,
    paddingHorizontal: 10,
    top: 1,
  },
  aiRow1: {
    flexDirection: 'row',
    height: '100%',
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
