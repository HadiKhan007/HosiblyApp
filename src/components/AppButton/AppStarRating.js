import {StyleSheet, View, Text} from 'react-native';
import React from 'react';
import StarRating from 'react-native-star-rating';
import {appIcons} from '../../shared/exporter';

const AppStarRating = ({
  disabled,
  maxStars,
  rating,
  fullStarColor,
  starSize,
}) => {
  return (
    <View style={styles.starRating}>
      <StarRating
        disabled={disabled}
        maxStars={maxStars}
        rating={appIcons.starIcon}
        fullStarColor={fullStarColor}
        starSize={starSize}
        starStyle={{paddingHorizontal: 2}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  starRating: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export {AppStarRating};
