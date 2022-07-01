import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Textarea from 'react-native-textarea';
import {colors, family, size, WP} from '../../shared/exporter';

export const TextBox = ({onChangeText, value}) => {
  return (
    <View style={styles.container}>
      <Textarea
        containerStyle={styles.textareaContainer}
        style={styles.textarea}
        onChangeText={onChangeText}
        value={value}
        maxLength={500}
        placeholder={'Add here'}
        placeholderTextColor={colors.g3}
        underlineColorAndroid={'transparent'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  textareaContainer: {
    height: WP('68'),
    padding: 5,
    backgroundColor: colors.g10,
    borderRadius: 10,
    marginVertical: 20,
  },
  textarea: {
    textAlignVertical: 'top', // hack android
    height: WP('68'),
    fontSize: size.xsmall,
    color: colors.b1,
    fontFamily: family.Gilroy_Medium,
  },
});
