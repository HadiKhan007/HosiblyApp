import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {
  WP,
  appIcons,
  colors,
  size,
  family,
  appLogos,
} from '../../shared/exporter';

export const HomeHeader = ({onFilterPress}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      <Image
        resizeMode="contain"
        source={appLogos.appLogo}
        style={styles.drawerIconStyle}
      />
      <Text>try</Text>
      <TouchableOpacity activeOpacity={0.7} onPress={() => onFilterPress()}>
        <Image
          resizeMode="contain"
          source={appIcons.filterIcon}
          style={styles.filterIconStyle}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: WP('7.5'),
    justifyContent: 'space-between',
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  drawerIconStyle: {
    width: 22,
    height: 22,
    tintColor: colors.b1,
  },
  filterIconStyle: {
    width: 17,
    height: 20,
    marginRight: 15,
    tintColor: colors.b5,
  },
  badgeContainer: {
    left: 10,
    zIndex: 9,
    width: 16,
    height: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.r1,
  },
  badgeTxtStyle: {
    color: colors.white,
    fontSize: size.xxtiny,
    fontFamily: family.Gilroy_Bold,
  },
  notifyIconStyle: {
    bottom: 8,
    width: 22,
    height: 20,
    tintColor: colors.b5,
  },
});
