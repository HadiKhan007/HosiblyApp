import {StyleSheet, View, Text} from 'react-native';
import React, {useState} from 'react';
import StarRating from 'react-native-star-rating';
import {appIcons} from '../../shared/exporter';

const AppStarRating = ({
  disabled,
  maxStars,
  rating,
  fullStarColor,
  starSize,
}) => {
  const [star, setStar] = useState();

  return (
    <View style={styles.starRating}>
      <StarRating
        disabled={disabled}
        maxStars={maxStars}
        rating={appIcons.starIcon}
        fullStarColor={fullStarColor}
        starSize={starSize}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  starRating: {
    flexDirection: 'row',
    marginLeft: 10,
  },
});
export {AppStarRating};
