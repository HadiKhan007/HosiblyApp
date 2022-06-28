import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {WP, size, colors, family} from '../../shared/exporter';

const AppButton = ({
  title,
  onPress,
  bgColor = colors.p1,
  textColor = colors.white,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={styles.buttonStyle(bgColor)}>
      <Text style={styles.buttonTextStyle(textColor)}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: bgColor => {
    return {
      width: '100%',
      borderRadius: 40,
      height: WP('11.7'),
      alignSelf: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      backgroundColor: bgColor,
      shadowColor: colors.p1,
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.34,
      shadowRadius: 6.27,
      elevation: 10,
    };
  },
  buttonTextStyle: textColor => {
    return {
      color: textColor,
      fontSize: size.large,
      fontFamily: family.Gilroy_SemiBold,
    };
  },
});

export {AppButton};
