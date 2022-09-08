import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {colors, WP} from '../../shared/exporter';

export const UserCard = ({image, height, width}) => {
  return (
    <View>
      <Image
        style={[styles.imagestyle, {height: height, width: width}]}
        source={image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imagestyle: {
    width: 75,
    height: 75,
    borderRadius: 15,
    backgroundColor: colors.g10,
  },
});
