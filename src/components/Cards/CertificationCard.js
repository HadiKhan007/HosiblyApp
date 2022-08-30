import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, family, size, appIcons} from '../../shared/exporter';
import {color} from 'react-native-reanimated';

export const CetificationCard = ({style, title, subtitle}) => {
  return (
    <View style={styles.cardContainer}>
      <Image style={styles.pdfimg} source={appIcons.pdf} />
      <View style={{paddingHorizontal: 20}}>
        <Text style={[styles.text4, style]}>{title}</Text>
        <Text style={[styles.text4, style]}>{subtitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: colors.w1,
    flexDirection: 'row',
    margin: 15,
    borderRadius: 10,
    padding: 15,
    shadowColor: colors.g43,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 2,
    shadowOpacity: 0.9,
  },
  pdfimg: {
    width: 28.43,
    height: 38,
    marginTop: 15,
    paddingRight: 20,
  },
  text4: {
    color: colors.b10,
    fontSize: 16,
    fontFamily: family.Gilroy_Medium,
    paddingTop: 10,
  },
});
