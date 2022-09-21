import React from 'react';
import {ImageBackground, StyleSheet, Text, View, Image} from 'react-native';
import {
  appIcons,
  capitalizeFirstLetter,
  colors,
  family,
  size,
  WP,
} from '../../shared/exporter';

export const PreviewImageCover = ({uri, h1, h2, match = ''}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imgCon}
        imageStyle={styles.imageStyle}
        source={{
          uri: uri,
        }}>
        <Text style={styles.imgh1}>{capitalizeFirstLetter(h1) || ''}</Text>
        <Text style={styles.imgh2}>{capitalizeFirstLetter(h2) || ''}</Text>
        {match ? (
          <View style={styles.rowContainer}>
            <Image source={appIcons.heartIcon} style={styles.heartIconStyle} />
            <Text style={styles.heartTxtStyle}>{match}% match</Text>
          </View>
        ) : null}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  imgCon: {
    height: WP('80'),
    width: '100%',
    borderRadius: 15,
    paddingLeft: WP('3'),
    justifyContent: 'flex-end',
  },
  imageStyle: {
    borderRadius: 15,
    height: '100%',
    width: '100%',
    backgroundColor: colors.g13,
  },
  imgh1: {
    width: '60%',
    color: colors.white,
    fontSize: size.h6,
    fontFamily: family.Gilroy_Bold,
    paddingVertical: 5,
  },
  imgh2: {
    color: colors.white,
    fontSize: size.xsmall,
    fontFamily: family.Gilroy_Medium,
    paddingBottom: 10,
  },
  rowContainer: {
    left: 4,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: WP('3'),
  },
  heartIconStyle: {
    width: 13,
    height: 11,
    marginRight: 5,
  },
  heartTxtStyle: {
    color: colors.r2,
    fontSize: size.tiny,
    fontFamily: family.Gilroy_Medium,
  },
});
