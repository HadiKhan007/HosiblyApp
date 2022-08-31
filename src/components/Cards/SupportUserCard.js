import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {appIcons, appImages, colors, family, size} from '../../shared/exporter';
import StarRating from 'react-native-star-rating';

export const SupportUserCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Image source={appImages.hanna} style={styles.imgCon} />
      </View>
      <View style={styles.center}>
        <Text style={styles.h1}>Harden Eusaff</Text>
        <Text style={styles.h2}>Corporate Home X</Text>
        <Text style={styles.h3}>Carpinter</Text>
      </View>
      <View style={styles.rightContainer}>
        <StarRating
          disabled={true}
          maxStars={1}
          rating={appIcons.starIcon}
          fullStarColor={colors.y1}
          starSize={size.tiny}
          containerStyle={{paddingVertical: 1}}
        />
        <Text style={styles.textStyle}>5</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  leftContainer: {
    width: '28%',
  },
  center: {
    width: '52%',
  },
  rightContainer: {
    width: '20%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: '100%',
    paddingVertical: 10,
  },
  imgCon: {
    height: 82,
    width: 82,
    borderRadius: 10,
  },
  h1: {
    fontSize: size.normal,
    fontFamily: family.Gilroy_SemiBold,
    color: colors.b1,
  },
  h2: {
    fontSize: size.xsmall,
    fontFamily: family.Gilroy_SemiBold,
    color: colors.b1,
    marginVertical: 5,
  },
  h3: {
    fontSize: size.tiny,
    fontFamily: family.Gilroy_SemiBold,
    color: colors.g17,
    marginVertical: 5,
  },
  textStyle: {
    fontSize: size.tiny,
    fontFamily: family.Gilroy_SemiBold,
    color: colors.g17,
    marginHorizontal: 5,
  },
});
