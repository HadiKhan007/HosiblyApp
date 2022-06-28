import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {appIcons, colors, family, size, WP} from '../../shared/exporter';
import {useNavigation} from '@react-navigation/core';

export const AuthHeader = ({title}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation?.goBack();
        }}>
        <Image source={appIcons.backArrow} style={styles.imgStyle} />
      </TouchableOpacity>
      <Text style={styles.textStyle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.white,
    paddingHorizontal: WP('5'),
    paddingTop: 20,
  },
  textStyle: {
    color: colors.b1,
    fontFamily: family.Gilroy_Bold,
    fontSize: size.h6,
    marginLeft: 10,
  },
  imgStyle: {
    height: 15,
    width: 20,
    marginRight: 10,
  },
});
