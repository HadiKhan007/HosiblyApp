import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {WP, size, colors, family, appIcons} from '../../shared/exporter';

export const BackHeader = ({title}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.rowContainer}
        onPress={() => navigation.goBack()}>
        <Image
          resizeMode="contain"
          source={appIcons.arrowBack}
          style={styles.iconStyle}
        />
        <Text style={styles.titleTxtStyle}>{title}</Text>
      </TouchableOpacity>
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
});
