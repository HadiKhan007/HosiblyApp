import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {WP, size, colors, family, appIcons} from '../../shared/exporter';

export const BackHeader = ({title, subtitle, rightIcon}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      <View style={styles.mainRowContainer}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}
          style={styles.rowContainer}>
          <Image
            resizeMode="contain"
            source={appIcons.backArrow}
            style={styles.iconStyle}
          />
          {title && <Text style={styles.titleTxtStyle}>{title}</Text>}
        </TouchableOpacity>
        <View style={styles.center}>
          {subtitle && <Text style={styles.subStyle}>{subtitle}</Text>}
        </View>
        <View>{rightIcon}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: WP('1.5'),
    paddingHorizontal: WP('3.85'),
  },
  mainRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle: {
    width: WP('5'),
    height: WP('5'),
  },
  titleTxtStyle: {
    left: WP('3.6'),
    color: colors.b1,
    fontSize: size.h6,
    fontFamily: family.Gilroy_Bold,
  },
  center: {
    paddingRight: 20,
  },
  subStyle: {
    fontSize: size.xsmall,
    fontFamily: family.Gilroy_SemiBold,
    color: colors.b1,
  },
});
