import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, profile_uri} from '../../shared/exporter';

export const ProfileImageBox = () => {
  return (
    <View style={styles.imgCon}>
      <Image style={styles.imgStyle} source={{uri: profile_uri}} />
    </View>
  );
};

const styles = StyleSheet.create({
  imgCon: {
    height: 122,
    width: 122,
    borderRadius: 15,
    backgroundColor: colors.g8,
    borderWidth: 1,
    alignSelf: 'center',
    borderStyle: 'dashed',
    borderColor: colors.g9,
  },
  imgStyle: {
    height: '100%',
    width: '100%',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
