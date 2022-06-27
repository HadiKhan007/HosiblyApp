import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/core';
import {WP, size, colors, family, appIcons} from '../../shared/exporter';

export const AppHeader = ({
  rightText = '',
  leftIcon = false,
  rightIcon = true,
  screen = '',
  onPressText,
}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      {leftIcon && (
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.iconContainer}
          onPress={() => navigation.goBack()}>
          <Icon
            name={'arrow-back-outline'}
            type={'ionicon'}
            size={22}
            color={colors.g2}
          />
        </TouchableOpacity>
      )}
      {rightIcon && (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() =>
            screen === '' ? navigation.goBack() : navigation.navigate(screen)
          }>
          <Image
            resizeMode="contain"
            source={appIcons.crossIcon}
            style={{width: 30, height: 30}}
          />
        </TouchableOpacity>
      )}
      {rightText !== '' && (
        <TouchableOpacity onPress={onPressText}>
          <Text
            style={
              rightText === 'Skip'
                ? styles.skipTxtStyle
                : styles.continueTxtStyle
            }>
            {rightText}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: WP('5'),
    justifyContent: 'space-between',
  },
  iconContainer: {
    borderWidth: 1,
    borderRadius: 20,
    width: WP('10.3'),
    height: WP('9.2'),
    alignItems: 'center',
    borderColor: colors.g3,
    justifyContent: 'center',
  },
  skipTxtStyle: {
    color: colors.b3,
    fontSize: size.normal,
    fontFamily: family.SourceSansPro_Regular,
  },
  continueTxtStyle: {
    color: colors.p2,
    fontSize: size.normal,
    fontFamily: family.Gilroy_Bold,
  },
});
