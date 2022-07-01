import React from 'react';
import {Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {WP, size, colors, family, appIcons} from '../../shared/exporter';

const AppButton = ({
  title,
  onPress,
  bgColor = colors.p2,
  textColor = colors.white,
  style,
  icon,
  textStyle,
  borderRadius,
  borderColor,
  shadowColor,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={styles.buttonStyle(
        bgColor,
        borderRadius,
        borderColor,
        shadowColor,
      )}>
      {icon && <Image source={icon} style={[styles.imgStyle, style]} />}
      <Text style={[styles.buttonTextStyle(textColor), textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: (bgColor, borderRadius, borderColor, shadowColor) => {
    return {
      width: '100%',
      borderRadius: borderRadius || 40,
      height: WP('11.7'),
      alignSelf: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      backgroundColor: bgColor,
      shadowColor: shadowColor || colors.white,
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.34,
      shadowRadius: 6.27,
      elevation: 10,
      borderWidth: 1,
      borderColor: borderColor || colors.p1,
      marginVertical: 5,
    };
  },
  imgStyle: {
    marginRight: 10,
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
