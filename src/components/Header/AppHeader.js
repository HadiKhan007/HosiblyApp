import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {WP, size, colors, family, appLogos} from '../../shared/exporter';
import {MyStatusBar} from '..';

export const AppHeader = ({rightIcon = false}) => {
  const navigation = useNavigation();

  return (
    <>
      <MyStatusBar />
      <View style={styles.mainContainer}>
        <View style={styles.rowContainer}>
          <Image
            resizeMode="contain"
            source={appLogos.appLogo}
            style={styles.logoIconStyle}
          />
          <Text style={styles.logoTxtStyle}>Housibly</Text>
        </View>
        {rightIcon && (
          <Image
            resizeMode="contain"
            source={appLogos.appLogo}
            style={styles.logoIconStyle}
          />
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: WP('1.5'),
    paddingHorizontal: WP('3.85'),
    justifyContent: 'space-between',
    backgroundColor: colors.white,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoIconStyle: {
    width: WP('6.4'),
    height: WP('6'),
  },
  logoTxtStyle: {
    left: WP('2.3'),
    color: colors.b1,
    fontSize: size.xxlarge,
    fontFamily: family.Gilroy_Bold,
  },
});
